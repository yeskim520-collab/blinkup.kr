import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface Section03Props {
  onNavigateToInsight?: (insightId: string) => void;
}

export const Section03: React.FC<Section03Props> = ({ onNavigateToInsight }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="section-03" className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-9 pb-10 sm:py-12 lg:py-20 xl:py-24 border-b border-black/5">
      <div className="max-w-[1360px] mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
        {/* Left Column: 단계명, 큰 헤드라인, 한 줄 설명 */}
        <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
          {/* 1. 작은 단계명 */}
          <div className="flex items-baseline gap-2">
            <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-black tracking-[-0.04em] text-black">
              03
            </span>
            <span className="text-[15px] sm:text-[16px] lg:text-[18px] font-bold text-black tracking-tight">
              만듭니다
            </span>
          </div>

          {/* 2. 큰 헤드라인 - Noto Serif KR Regular (46px 유지, 줄바꿈 유지, 데스크톱 확장) */}
          <h2 className="mt-2.5 sm:mt-3 text-[46px] sm:text-[54px] md:text-[58px] lg:text-[56px] xl:text-[64px] font-normal leading-[1.18] lg:leading-[1.14] tracking-[-0.02em] text-black font-serif-display break-keep">
            더 강력한 팀을<br />
            구성하세요
          </h2>

          {/* 3. 짧은 한 줄 설명 */}
          <p className="mt-3.5 sm:mt-4 lg:mt-6 text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.55] lg:leading-[1.65] text-black/85 font-normal tracking-[-0.015em] break-keep max-w-md">
            아이디어를 현실의 유형물로 구현하고 몰입감 높은 사용자 경험과 디지털 프로덕트를 완성합니다.
          </p>
        </div>

        {/* Right Column: 그 아래 아코디언 2개 */}
        <div className="mt-5 sm:mt-6 lg:mt-0 lg:col-span-7 xl:col-span-7 border-t-[1.5px] sm:border-t-2 border-black">
          <AccordionItem
            id="product-design"
            insightId="ai-one-team"
            title="프로덕트 디자인 & UX/UI"
            isOpen={!!openItems['product-design']}
            onToggle={() => toggleItem('product-design')}
            onNavigateToInsight={onNavigateToInsight}
            description="사용자 경험을 최우선으로 고려한 직관적이고 감각적인 디지털 인터페이스와 인터랙션 디자인을 설계합니다."
            items={[
              "사용자 친화적 정보 구조(IA) 및 와이어프레임 설계",
              "모던 디자인 시스템 및 컴포넌트 라이브러리 구축",
              "크로스 플랫폼(웹/앱) 반응형 UI 고도화"
            ]}
          />
          <AccordionItem
            id="prototyping"
            insightId="stronger-teams"
            title="프로토타이핑 & 인터랙션"
            isOpen={!!openItems['prototyping']}
            onToggle={() => toggleItem('prototyping')}
            onNavigateToInsight={onNavigateToInsight}
            description="실제 작동 가능한 고충실도 프로토타입을 통해 아이디어를 신속하게 검증하고 인터랙션 품질을 극대화합니다."
            items={[
              "고충실도 인터랙티브 프로토타입 제작 및 사용성 테스트",
              "모션 디자인 및 마이크로 인터랙션 구현",
              "엔지니어링 핸드오프 및 디자인 QA 프로세스"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
