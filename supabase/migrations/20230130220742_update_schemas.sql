alter table "next_auth"."feedbacks" drop constraint "feedbacks_user_fkey";

alter table "next_auth"."feedbacks" drop column "emoji_code";

alter table "next_auth"."feedbacks" drop column "emoji_name";

alter table "next_auth"."feedbacks" drop column "user";

alter table "next_auth"."feedbacks" add column "emojiCode" text;

alter table "next_auth"."feedbacks" add column "emojiName" text;

alter table "next_auth"."feedbacks" add column "userId" uuid;

alter table "next_auth"."sessions" enable row level security;

alter table "next_auth"."users" add column "isAdmin" boolean default false;

alter table "next_auth"."users" enable row level security;

alter table "next_auth"."verification_tokens" enable row level security;

alter table "next_auth"."feedbacks" add constraint "feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES auth.users(id) not valid;

alter table "next_auth"."feedbacks" validate constraint "feedbacks_userId_fkey";


