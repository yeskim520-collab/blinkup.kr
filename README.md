# BlinkUp — Next.js + Supabase + Vercel

blinky.kr과 동일한 스택으로 재구축한 BlinkUp 공식 사이트입니다.

## 구조
```
app/
  page.js              홈
  about/page.js        회사소개·대표인사말
  api/inquiries/route.js  문의 폼 API (Supabase insert)
  components/          Nav, FadeIn, ContactForm
lib/
  supabaseClient.js    브라우저용 (anon key)
  supabaseServer.js    서버용 (service role key, API 라우트 전용)
supabase/
  schema.sql           inquiries 테이블 스키마
```

## 1. 로컬 실행
```bash
npm install
cp .env.local.example .env.local   # 값 채우기
npm run dev
```

## 2. Supabase 설정
1. supabase.com에서 새 프로젝트 생성 (blinky.kr 것과 별도 프로젝트 권장 — 데이터 섞이지 않게)
2. SQL Editor에서 `supabase/schema.sql` 실행 → `inquiries` 테이블 생성
3. Project Settings > API에서 URL, anon key, service_role key 확인
4. `.env.local`에 값 채우기 (service role key는 절대 GitHub에 올리지 않기)

## 3. GitHub
```bash
git init
git add -A
git commit -m "Initial BlinkUp Next.js + Supabase site"
git remote add origin <새로 만든 GitHub 리포 URL>
git push -u origin main
```

## 4. Vercel 배포
1. vercel.com → New Project → 방금 만든 GitHub 리포 선택
2. Framework Preset: Next.js (자동 인식됨)
3. Environment Variables에 `.env.local`과 동일한 3개 값 등록
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy

## 5. 도메인 연결 (blinkup.kr, 이미 보유 중)
1. Vercel 프로젝트 > Settings > Domains > `blinkup.kr` 입력
2. Vercel이 안내하는 값을 도메인 등록업체(가비아/후이즈 등, 카페24 아님) DNS 설정에 입력
   - A 레코드: `76.76.21.21`
   - 또는 CNAME: `cname.vercel-dns.com`
3. 예전 카페24 가상서버는 더 이상 쓰지 않는다면 그대로 해지해도 됩니다 — 도메인 자체는 등록업체에서 그대로 유지, 네임서버/DNS만 Vercel로 바꾸는 것입니다.

## 확장 여지
- `supabase/schema.sql`에 뉴스레터 구독자, 사례(case studies) 테이블 등을 추가하며 점진적으로 키울 수 있습니다.
- 관리자용 문의 조회 페이지가 필요해지면 `/app/admin` 라우트 + Supabase Auth로 보호하는 방식을 추천합니다.
