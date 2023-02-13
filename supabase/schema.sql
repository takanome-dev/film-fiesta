--
-- Name: next_auth; Type: SCHEMA;
--
CREATE SCHEMA next_auth;

GRANT USAGE ON SCHEMA next_auth TO service_role;
GRANT ALL ON SCHEMA next_auth TO postgres;

--
-- Create users table
--
CREATE TABLE IF NOT EXISTS next_auth.users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name text,
    email text,
    "emailVerified" timestamp with time zone,
    image text,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Can view own user data." ON users for SELECT USING (next_auth.uid() = id);
CREATE POLICY "Can update own user data." ON users for UPDATE USING (next_auth.uid() = i);

GRANT ALL ON TABLE next_auth.users TO postgres;
GRANT ALL ON TABLE next_auth.users TO service_role;

--- uid() function to be used in RLS policies
CREATE FUNCTION next_auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  SELECT
    COALESCE(
        NULLIF(current_setting('request.jwt.claim.sub', true), ''),
        (NULLIF(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
    )::uuid
$$;

--
-- Create sessions table
--
CREATE TABLE IF NOT EXISTS  next_auth.sessions
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    expires timestamp with time zone NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" uuid,
    CONSTRAINT sessions_pkey PRIMARY KEY (id),
    CONSTRAINT sessionToken_unique UNIQUE ("sessionToken"),
    CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES  next_auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

GRANT ALL ON TABLE next_auth.sessions TO postgres;
GRANT ALL ON TABLE next_auth.sessions TO service_role;

--
-- Create accounts table
--
CREATE TABLE IF NOT EXISTS  next_auth.accounts
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    refresh_token_expires_in bigint, 
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text,
    "userId" uuid,
    CONSTRAINT accounts_pkey PRIMARY KEY (id),
    CONSTRAINT provider_unique UNIQUE (provider, "providerAccountId"),
    CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES  next_auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

GRANT ALL ON TABLE next_auth.accounts TO postgres;
GRANT ALL ON TABLE next_auth.accounts TO service_role;

--
-- Create verification_tokens table
--
CREATE TABLE IF NOT EXISTS  next_auth.verification_tokens
(
    identifier text,
    token text,
    expires timestamp with time zone NOT NULL,
    CONSTRAINT verification_tokens_pkey PRIMARY KEY (token),
    CONSTRAINT token_unique UNIQUE (token),
    CONSTRAINT token_identifier_unique UNIQUE (token, identifier)
);

GRANT ALL ON TABLE next_auth.verification_tokens TO postgres;
GRANT ALL ON TABLE next_auth.verification_tokens TO service_role;

--
-- Create feedbacks table
--
CREATE TABLE IF NOT EXISTS feedbacks (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  "userId" uuid,
  "emojiName" text,
  "emojiCode" text,
  message text,
  "createdAt" timestamp with time zone NOT NULL DEFAULT now(),
  "updatedAt" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT feedbacks_pkey PRIMARY KEY (id),
  CONSTRAINT "feedbacks_userId_fkey" FOREIGN KEY ("userId")
      REFERENCES  next_auth.users (id) MATCH SIMPLE
      ON UPDATE NO ACTION
      ON DELETE CASCADE
);

CREATE POLICY "Can view all feedbacks" ON feedbacks for SELECT USING (next_auth.uid() = 'admin_id');
CREATE POLICY "Can create feedbacks" ON feedbacks for INSERT WITH CHECK (true);
--
-- create triggers
--
/**
* This trigger automatically creates a user entry when a new user signs up via NextAuth.
*/
CREATE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, name, email, image)
  VALUES (new.id, new.name, new.email, new.image);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY definer;
CREATE trigger on_auth_user_created
  AFTER INSERT ON next_auth.users
  for each ROW EXECUTE PROCEDURE public.handle_new_user();

--
-- Create favorites table
--
CREATE TABLE IF NOT EXISTS favorites (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user" uuid,
  "movie" integer,
  "created_at" timestamp with time zone NOT NULL DEFAULT now(),
  "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT favorites_pkey PRIMARY KEY (id),
  CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("user")
      REFERENCES  public.users (id) MATCH SIMPLE
      ON UPDATE NO ACTION
      ON DELETE CASCADE,
  CONSTRAINT "favorites_movieId_fkey" FOREIGN KEY ("movie")
      REFERENCES  public.movies (id) MATCH SIMPLE
      ON UPDATE NO ACTION
      ON DELETE CASCADE
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Can do everything on favorites." ON favorites for all USING (next_auth.uid() = 'user') WITH CHECK (next_auth.uid() = 'user');

--
-- Create movies table
--
CREATE TABLE IF NOT EXISTS movies (
  id INTEGER NOT NULL
  adult boolean,
  backdrop_path text,
  genre_ids text[],
  genres text[],
  original_language text,
  original_title text,
  overview text,
  popularity double precision,
  poster_path text,
  release_date text,
  title text,
  video boolean,
  vote_average double precision,
  vote_count integer,
  CONSTRAINT movies_pkey PRIMARY KEY (id)
);

ALTER TABLE movies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Can view all movies." ON movies for SELECT USING (true);
CREATE POLICY "Can create movies." ON movies for INSERT USING (next_auth.uid() = id);
