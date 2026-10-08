-- Learning (LMS) progress for the Product Master / Learning pages.
-- Additive only: creates one new table, touches nothing existing.
create table if not exists av_learning_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references av_users(id) on delete cascade,
  product_slug text not null,
  best_score integer not null default 0,
  total integer not null,
  passed boolean not null default false,
  attempts integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, product_slug)
);

-- Same access pattern as every other av_* table (see the RLS note in
-- supabase/schema.sql): RLS on, with the permissive anon policy, since
-- authorization happens in the app's server actions.
alter table av_learning_progress enable row level security;
do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'av_learning_progress' and policyname = 'av_anon_all'
  ) then
    create policy av_anon_all on av_learning_progress for all to anon using (true) with check (true);
  end if;
end $$;
