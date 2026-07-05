import Nav from './components/Nav';
import FadeIn from './components/FadeIn';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <>
      <Nav active="home" />

      <section className="hero wrap">
        <div className="eyebrow">BLINKUP · AX 컨설팅·교육</div>
        <h1>AI보다 먼저,<br /><em>워크플로우</em>를 봅니다.</h1>
        <p className="sub">AI를 도입하고 싶은데 어디서부터 시작할지 모르는 중소기업·제조업의 업무 프로세스를 분석해, 전략부터 현장 교육까지 함께합니다.</p>
        <div className="cta-row">
          <a href="#contact" className="btn btn-primary">문의하기 →</a>
          <a href="#service" className="btn btn-ghost">서비스 보기</a>
        </div>
        <div className="version-badge"><span className="pulse"></span>v0.1 · 현장에서 계속 검증 중</div>
      </section>

      <FadeIn className="wrap">
        <div className="why-block">
          <div className="why-tag">WHY BLINKUP</div>
          <p>대부분의 AI 프로젝트가 실패하는 이유는, AI가 아니라 업무를 이해하지 못했기 때문입니다.</p>
          <p className="small">그래서 BlinkUp은 기능을 만들기 전에 워크플로우를 먼저 봅니다. 기술은 복제되지만, 업무에 대한 이해는 복제되지 않습니다.</p>
          <a href="/about" className="why-link">대표 인사말에서 자세히 보기 →</a>
        </div>
      </FadeIn>

      <hr className="divider" />

      <FadeIn className="wrap" id="service">
        <div className="section-head">
          <div className="section-num">01 — SERVICE</div>
          <div className="section-title">두 가지 서비스</div>
          <p className="section-desc">고객은 다르지만 방식은 같습니다 — 업무를 이해하고 재설계한 뒤 AI를 연결합니다.</p>
        </div>
        <div className="tracks">
          <div className="track">
            <div className="track-label">기업 AX 컨설팅</div>
            <h3>제조업·중소기업</h3>
            <div className="for">FOR — 제조업 · 중소기업 · 푸드테크</div>
            <ul className="checklist">
              <li>업무 프로세스 진단</li>
              <li>AI 도입 전략 수립</li>
              <li>워크플로우 재설계</li>
              <li>구축 지원(협력사 연계)</li>
              <li>현장 정착 교육</li>
            </ul>
          </div>
          <div className="track">
            <div className="track-label">AI 창업 파트너</div>
            <h3>1인 전문가·창업자</h3>
            <div className="for">FOR — 컨설턴트 · 강사 · 코치 · 멘토 · 프리랜서</div>
            <ul className="checklist">
              <li>AI 브랜딩·콘텐츠 자동화</li>
              <li>업무·고객관리 자동화 설계</li>
              <li>창업 아이템 AI 검증</li>
              <li>사업계획서·시장조사 지원</li>
              <li>1:1 창업 멘토링·코칭</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <hr className="divider" />

      <FadeIn className="wrap" id="method">
        <div className="section-head">
          <div className="section-num">02 — METHOD</div>
          <div className="section-title">BlinkUp Method</div>
          <p className="section-desc">ERP 컨설팅에서 가져온 접근 방식을 AI 시대에 맞게 재구성했습니다.</p>
        </div>
        <div className="method-wrap" style={{ position: 'relative' }}>
          <div className="method-line"></div>
          <div className="method-steps">
            {[
              ['Understand', '업무 이해'],
              ['Diagnose', '병목 진단'],
              ['Redesign', '워크플로우 재설계'],
              ['Apply', 'AI 연결'],
              ['Operate', '교육·정착'],
            ].map(([en, kr]) => (
              <div className="method-step" key={en}>
                <div className="node"></div>
                <div className="label-en">{en}</div>
                <div className="label-kr">{kr}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="method-note">BlinkUp Method는 실제 프로젝트를 통해 계속 발전합니다.</div>
      </FadeIn>

      <hr className="divider" />

      <FadeIn className="wrap" id="contact">
        <div className="section-head">
          <div className="section-num">03 — CONTACT</div>
          <div className="section-title">함께 시작할 수 있는 지점을 찾습니다</div>
        </div>
        <div className="contact-cta">
          <div className="contact-info">
            김준우 · BlinkUp<br />
            국민대학교 캠퍼스타운<br />
            <a href="mailto:hello@blinkup.kr">hello@blinkup.kr</a>
          </div>
        </div>
        <ContactForm />
      </FadeIn>

      <footer>© 2026 BlinkUp. Workflow Design, then AI.</footer>
    </>
  );
}
