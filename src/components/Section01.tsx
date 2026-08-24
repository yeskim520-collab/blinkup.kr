import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface Section01Props {
  onNavigateToInsight?: (insightId: string) => void;
}

export const Section01: React.FC<Section01Props> = ({ onNavigateToInsight }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="section-01" className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-9 pb-10 sm:py-12 lg:py-20 xl:py-24 border-b border-black/5">
      <div className="max-w-[1360px] mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
        {/* Left Column: 단계명, 큰 헤드라인, 한 줄 설명 */}
        <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
          {/* 1. 작은 단계명 */}
          <div className="flex items-baseline gap-2">
            <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-black tracking-[-0.04em] text-black">
              01
            </span>
            <span className="text-[15px] sm:text-[16px] lg:text-[18px] font-bold text-black tracking-tight">
              발견합니다
            </span>
          </div>

          {/* 2. 큰 헤드라인 - Noto Serif KR Regular (46px 유지, 줄바꿈 유지, 데스크톱 확장) */}
          <h2 className="mt-2.5 sm:mt-3 text-[46px] sm:text-[54px] md:text-[58px] lg:text-[56px] xl:text-[64px] font-normal leading-[1.18] lg:leading-[1.14] tracking-[-0.02em] text-black font-serif-display break-keep">
            당신만의 가치를<br />
            발견하세요
          </h2>

          {/* 3. 짧은 한 줄 설명 */}
          <p className="mt-3.5 sm:mt-4 lg:mt-6 text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.55] lg:leading-[1.65] text-black/85 font-normal tracking-[-0.015em] break-keep max-w-md">
            심층적인 리서치와 사용자 통찰을 바탕으로 숨겨진 비즈니스 기회를 탐구합니다.
          </p>
        </div>

        {/* Right Column: 그 아래 아코디언 2개 (데스크톱에서는 우측 2열로 배치) */}
        <div className="mt-5 sm:mt-6 lg:mt-0 lg:col-span-7 xl:col-span-7 border-t-[1.5px] sm:border-t-2 border-black">
          <AccordionItem
            id="user-market-research"
            insightId="customer-needs"
            title="사용자 및 시장 리서치"
            isOpen={!!openItems['user-market-research']}
            onToggle={() => toggleItem('user-market-research')}
            onNavigateToInsight={onNavigateToInsight}
            description="고객 심층 인터뷰와 정량 데이터 분석을 통해 시장의 숨은 니즈와 미충족 욕구를 정확하게 발견합니다."
            items={[
              "타깃 고객 심층 인터뷰(In-depth Interview) 및 행동 관찰",
              "경쟁사 벤치마킹 및 시장 기회 영역 분석",
              "핵심 고객 페르소나 및 사용자 니즈 매핑"
            ]}
          />
          <AccordionItem
            id="journey-opportunity"
            insightId="discovering-opportunities"
            title="고객 여정 및 기회 발굴"
            isOpen={!!openItems['journey-opportunity']}
            onToggle={() => toggleItem('journey-opportunity')}
            onNavigateToInsight={onNavigateToInsight}
            description="사용자의 접점별 페인 포인트를 분석하여 차별화된 브랜드 가치 제안과 핵심 해결 과제를 정의합니다."
            items={[
              "엔드투엔드 고객 경험 여정 지도(Customer Journey Map) 설계",
              "핵심 페인 포인트 도출 및 우선순위 선정",
              "비즈니스 가치 창출을 위한 핵심 가치 제안(CVP) 수립"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
