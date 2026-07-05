import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 클라이언트 컴포넌트(브라우저)에서 사용 — anon key만 사용, RLS로 보호
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
