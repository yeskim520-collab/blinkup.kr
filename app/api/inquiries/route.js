import { getSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service_type, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: '이름, 이메일, 문의내용은 필수입니다.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from('inquiries')
      .insert([{ name, email, company, service_type, message }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return Response.json({ error: '저장 중 오류가 발생했습니다.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: '요청 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
