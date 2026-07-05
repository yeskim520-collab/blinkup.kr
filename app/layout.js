import './globals.css';

export const metadata = {
  title: 'BlinkUp — AI보다 먼저, 워크플로우를 봅니다',
  description: '중소기업·제조업의 업무 프로세스를 분석해 AI 활용 전략부터 현장 교육까지 함께하는 AX 컨설팅·교육 파트너',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="grid-bg"></div>
        {children}
      </body>
    </html>
  );
}
