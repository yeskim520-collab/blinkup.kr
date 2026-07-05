-- BlinkUp 문의(inquiries) 테이블
-- Supabase 대시보드 > SQL Editor에서 실행하세요.

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service_type text,        -- 'enterprise' | 'startup' | 'etc'
  message text not null,
  created_at timestamptz default now()
);

-- RLS 활성화 (anon key로는 직접 접근 불가, API 라우트의 service role만 insert 가능)
alter table inquiries enable row level security;

-- 나중에 확장할 것들을 위한 여지:
-- create table if not exists newsletter_subscribers (...);
-- create table if not exists case_studies (...);
