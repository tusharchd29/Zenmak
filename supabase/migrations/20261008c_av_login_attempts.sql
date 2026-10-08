-- PIN login attempts, for rate limiting (lib/login-limit.ts): too many
-- wrong PINs from one IP in 15 minutes locks that IP out for a while.
-- Additive only.
create table if not exists av_login_attempts (
  id uuid primary key default gen_random_uuid(),
  ip text not null,
  success boolean not null,
  created_at timestamptz not null default now()
);
create index if not exists idx_av_login_attempts_ip_time on av_login_attempts(ip, created_at desc);

alter table av_login_attempts enable row level security;
do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'av_login_attempts' and policyname = 'av_anon_all'
  ) then
    create policy av_anon_all on av_login_attempts for all to anon using (true) with check (true);
  end if;
end $$;
