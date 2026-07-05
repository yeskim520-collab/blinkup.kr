import Nav from '../components/Nav';
import FadeIn from '../components/FadeIn';

export const metadata = { title: '회사소개 · 대표인사말 — BlinkUp' };

export default function About() {
  return (
    <>
      <Nav active="about" />

      <div className="wrap-narrow" style={{ paddingTop: 160, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
        <div className="eyebrow">ABOUT · 대표인사말</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 600 }}>
          업무를 먼저 이해하는 것에서<br />모든 것이 시작됩니다.
        </h1>
      </div>

      <FadeIn className="wrap-narrow">
        <div className="letter">
          <p className="lead">대부분의 AI 프로젝트가 실패하는 이유는, AI가 아니라 업무를 이해하지 못했기 때문입니다.</p>
          <p>안녕하세요, BlinkUp 대표 김준우입니다.</p>
          <p>저는 기능을 먼저 만들지 않습니다. 그 업무가 실제로 어떻게 돌아가는지부터 이해하려 합니다. 기술은 시간이 지나면 복제되지만, 한 조직의 업무를 깊이 이해하는 일은 쉽게 복제되지 않는다고 믿기 때문입니다.</p>
          <p>이 믿음은 어느 날 갑자기 생긴 것이 아닙니다. 2003년 ERP 시스템을 구축하던 현장에서 시작됐습니다. 기업의 업무는 시스템보다 프로세스가 먼저라는 것을, 코드를 짜기 전에 늘 확인해야 한다는 것을 그때 배웠습니다. 이후 IT 인프라 기술영업을 하며, 개발자의 언어와 현장의 언어가 다르다는 것을 매일 확인했고, 그 사이를 번역하는 역할을 자연스럽게 맡게 되었습니다.</p>
          <p>시간이 흘러 AI가 등장했지만, 제가 보는 문제는 그대로였습니다. 기업들은 여전히 &ldquo;어떤 기술을 도입할까&rdquo;를 먼저 고민하고, &ldquo;우리 업무가 실제로 어떻게 돌아가는가&rdquo;는 나중에 묻습니다. 순서가 바뀌면 결과도 바뀝니다.</p>
          <p>그래서 지금 국민대학교 글로벌창업벤처대학원에서 AI 비즈니스와 창업을 다시 연구하며, 20년 전 ERP 현장에서 배운 접근 방식 — 업무를 먼저 이해하고, 그 다음에 시스템(지금은 AI)을 연결하는 방식 — 을 AI 시대에 맞게 다시 만들고 있습니다.</p>
          <p>BlinkUp은 이 방식을 컨설팅과 교육으로 제공합니다. 대기업처럼 모든 것을 구축해드릴 수는 없지만, 업무를 진단하고 워크플로우를 재설계하고 AI를 연결하는 지점까지는 분명하게 책임지겠습니다. 필요한 구축은 신뢰할 수 있는 협력사와 함께합니다.</p>
          <div className="signature">
            <span className="name">김준우</span>
            BlinkUp 대표 · AI 창업지도사 · 국민대학교 캠퍼스타운
          </div>
        </div>
      </FadeIn>

      <hr className="divider" />

      <FadeIn className="wrap-narrow">
        <div className="section-num">경력 · CAREER</div>
        <div className="section-title" style={{ marginBottom: 40 }}>기술과 비즈니스를 연결해온 시간</div>
        <div className="timeline">
          {[
            ['2001', 'Microsoft 공인 시스템 엔지니어(MCSE)', '시스템 아키텍처를 설계하는 일의 출발점'],
            ['2003–07', '기업용 ERP 시스템 구축 및 개발', '업무 프로세스를 이해하고 시스템으로 옮기는 일을 수행'],
            ['2008–11', 'IT 인프라 기술영업 · 기술-비즈니스 브릿지', '개발과 현장 사이에서 요구사항을 번역하는 역할 수행'],
            ['2025–', '국민대학교 글로벌창업벤처대학원 재학', 'AI 비즈니스 융합 및 창업 멘토링·현장실습'],
            ['2026.03–', '서울시 캠퍼스타운 창업경진대회 입상 · 국민대 캠퍼스타운 입주', 'AI 창업지도사 자격 취득, AX 스타트업(BlinkUp) 준비 중'],
          ].map(([year, title, desc]) => (
            <div className="tl-item" key={year}>
              <div className="tl-year">{year}</div>
              <div className="tl-content">
                <div className="tl-title">{title}</div>
                <div className="tl-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <a href="/#service" className="btn btn-ghost">사업분야 보기</a>
          <a href="/#contact" className="btn btn-primary">문의하기 →</a>
        </div>
      </FadeIn>

      <footer>© 2026 BlinkUp. Workflow Design, then AI.</footer>
    </>
  );
}
