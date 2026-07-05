import { createClient } from '@supabase/supabase-js';

// API 라우트(서버)에서만 사용 — service role key는 절대 브라우저에 노출하지 않음
export function getSupabaseServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
