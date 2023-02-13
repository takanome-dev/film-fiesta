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

alter table users enable row level security;
create policy "Can view own user data." on users for select using (next_auth.uid() = id);
create policy "Can update own user data." on users for update using (next_auth.uid() = i);

GRANT ALL ON TABLE next_auth.users TO postgres;
GRANT ALL ON TABLE next_auth.users TO service_role;

--- uid() function to be used in RLS policies
CREATE FUNCTION next_auth.uid() RETURNS uuid
    LANGUAGE sql STABLE
    AS $$
  select
    coalesce(
        nullif(current_setting('request.jwt.claim.sub', true), ''),
        (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
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

-- create a table feedbacks with columns:
--  id: uuid
--   userId: reference to users table
--   emojiName: text
--   emojiCode: text
--   message: text
--   createdAt: timestamp
--   updatedAt: timestamp

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

create policy "Can view all feedbacks" on feedbacks for select using (next_auth.uid() = 'admin_id');
create policy "Can create feedbacks" on feedbacks for insert with check (true);
--
-- create triggers
--
/**
* This trigger automatically creates a user entry when a new user signs up via NextAuth.
*/
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, name, email, image)
  values (new.id, new.name, new.email, new.image);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on next_auth.users
  for each row execute procedure public.handle_new_user();

/**
* create a trigger to automatically create a feedback entry when a new feedback is created
*/
create function public.handle_new_feedback()
returns trigger as $$
begin
  insert into public.feedbacks ("userId", "emojiName", "emojiCode", message)
  values (new."userId", new."emojiName", new."emojiCode", new.message);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_feedback_created
  after insert on public.feedbacks
  for each row execute procedure public.handle_new_feedback();