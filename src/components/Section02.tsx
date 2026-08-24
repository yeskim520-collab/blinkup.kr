import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface Section02Props {
  onNavigateToInsight?: (insightId: string) => void;
}

export const Section02: React.FC<Section02Props> = ({ onNavigateToInsight }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="section-02" className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-9 pb-10 sm:py-12 lg:py-20 xl:py-24 border-b border-black/5">
      <div className="max-w-[1360px] mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
        {/* Left Column: 단계명, 큰 헤드라인, 한 줄 설명 */}
        <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
          {/* 1. 작은 단계명 */}
          <div className="flex items-baseline gap-2">
            <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-black tracking-[-0.04em] text-black">
              02
            </span>
            <span className="text-[15px] sm:text-[16px] lg:text-[18px] font-bold text-black tracking-tight">
              드러냅니다
            </span>
          </div>

          {/* 2. 큰 헤드라인 - Noto Serif KR Regular (46px 유지, 줄바꿈 유지, 데스크톱 확장) */}
          <h2 className="mt-2.5 sm:mt-3 text-[46px] sm:text-[54px] md:text-[58px] lg:text-[56px] xl:text-[64px] font-normal leading-[1.18] lg:leading-[1.14] tracking-[-0.02em] text-black font-serif-display break-keep">
            당신만의 이야기를<br />
            드러내세요
          </h2>

          {/* 3. 짧은 한 줄 설명 */}
          <p className="mt-3.5 sm:mt-4 lg:mt-6 text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.55] lg:leading-[1.65] text-black/85 font-normal tracking-[-0.015em] break-keep max-w-md">
            독창적인 브랜드 아이덴티티와 고유한 스토리를 정립하여 시장에서의 존재감을 각인합니다.
          </p>
        </div>

        {/* Right Column: 그 아래 아코디언 2개 */}
        <div className="mt-5 sm:mt-6 lg:mt-0 lg:col-span-7 xl:col-span-7 border-t-[1.5px] sm:border-t-2 border-black">
          <AccordionItem
            id="brand"
            insightId="brand-value"
            title="브랜드 전략"
            isOpen={!!openItems['brand']}
            onToggle={() => toggleItem('brand')}
            onNavigateToInsight={onNavigateToInsight}
            description="차별화된 브랜드 철학과 핵심 가치를 발굴하여 시각적, 언어적 아이덴티티를 정립합니다. 일관된 브랜드 경험을 통해 고객의 뇌리에 각인되는 독창적인 존재감을 완성합니다."
            items={[
              "브랜드 포지셔닝 및 핵심 메시지 도출",
              "비주얼 아이덴티티 시스템 (VI) 및 디자인 가이드라인 수립",
              "타깃 오디언스 페르소나 및 브랜드 보이스 확립"
            ]}
          />
          <AccordionItem
            id="content"
            insightId="memorable-story"
            title="콘텐츠 커뮤니케이션"
            isOpen={!!openItems['content']}
            onToggle={() => toggleItem('content')}
            onNavigateToInsight={onNavigateToInsight}
            description="고객과의 지속적인 공감을 형성하는 고감도 스토리텔링 콘텐츠를 기획하고 제작합니다. 멀티채널 접점에서 브랜드 메시지를 유기적으로 전달합니다."
            items={[
              "옴니채널 스토리텔링 및 콘텐츠 캘린더 구성",
              "고객 인게이지먼트 증대를 위한 맞춤형 캠페인 기획",
              "브랜드 커뮤니케이션 효과성 분석 및 최적화"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
