-- Every quiz attempt (including retakes), for the Learning report: who took
-- which lesson's test, when, and what they scored. av_learning_progress
-- keeps the best score per lesson; this table keeps the full history.
-- Additive only.
create table if not exists av_learning_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references av_users(id) on delete cascade,
  product_slug text not null,
  score integer not null,
  total integer not null,
  passed boolean not null,
  created_at timestamptz not null default now()
);
create index if not exists idx_av_learning_attempts_user on av_learning_attempts(user_id, created_at desc);

alter table av_learning_attempts enable row level security;
do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'av_learning_attempts' and policyname = 'av_anon_all'
  ) then
    create policy av_anon_all on av_learning_attempts for all to anon using (true) with check (true);
  end if;
end $$;
