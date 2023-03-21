alter table "next_auth"."feedbacks" drop column "email";

alter table "next_auth"."feedbacks" drop column "name";

alter table "next_auth"."feedbacks" add column "user" uuid;

alter table "next_auth"."feedbacks" add constraint "feedbacks_user_fkey" FOREIGN KEY ("user") REFERENCES auth.users(id) not valid;

alter table "next_auth"."feedbacks" validate constraint "feedbacks_user_fkey";


