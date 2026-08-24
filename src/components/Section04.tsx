import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface Section04Props {
  onNavigateToInsight?: (insightId: string) => void;
}

export const Section04: React.FC<Section04Props> = ({ onNavigateToInsight }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="section-04" className="px-6 pt-9 pb-10 bg-white">
      {/* 1. 작은 단계명 */}
      <div className="flex items-baseline gap-2">
        <span className="text-[26px] sm:text-[28px] font-black tracking-[-0.04em] text-black">
          04
        </span>
        <span className="text-[15px] sm:text-[16px] font-bold text-black tracking-tight">
          연결합니다
        </span>
      </div>

      {/* 2. 큰 헤드라인 - Noto Serif KR Regular (46px 유지, 줄바꿈 유지, 밀도 line-height 1.18) */}
      <h2 className="mt-2.5 sm:mt-3 text-[46px] sm:text-[54px] md:text-[62px] font-normal leading-[1.18] tracking-[-0.02em] text-black font-serif-display break-keep">
        지속적인 관계를<br />
        만들어가세요
      </h2>

      {/* 3. 짧은 한 줄 설명 */}
      <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.55] text-black/85 font-normal tracking-[-0.015em] break-keep">
        데이터 기반의 마케팅 전략과 실시간 커뮤니케이션으로 고객과의 유대감을 확장합니다.
      </p>

      {/* 4. 그 아래 아코디언 2개 (밀도 높은 구분선) */}
      <div className="mt-5 sm:mt-6 border-t-[1.5px] sm:border-t-2 border-black">
        <AccordionItem
          id="marketing-strategy"
          insightId="customer-relationship"
          title="마케팅 전략"
          isOpen={!!openItems['marketing-strategy']}
          onToggle={() => toggleItem('marketing-strategy')}
          onNavigateToInsight={onNavigateToInsight}
          description="데이터 기반의 퍼포먼스 마케팅과 그로스 전략을 설계합니다. 잠재 고객 유입부터 충성 고객 전환까지 측정 가능한 비즈니스 성장을 이끌어냅니다."
          items={[
            "타깃 퍼널 최적화 및 유입 경로 다각화",
            "KPI 수립 및 ROI 중심의 광고 캠페인 집행",
            "CRM 데이터 분석을 통한 고객 유지(Retention) 전략"
          ]}
        />
        <AccordionItem
          id="realtime-marketing"
          insightId="sustainable-connection"
          title="실시간 마케팅"
          isOpen={!!openItems['realtime-marketing']}
          onToggle={() => toggleItem('realtime-marketing')}
          onNavigateToInsight={onNavigateToInsight}
          description="트렌드와 실시간 사용자 피드백에 기민하게 반응하는 민첩한 마케팅 체계를 구축합니다. 적시 적소에 타깃 메시지를 전달하여 전환율을 극대화합니다."
          items={[
            "소셜 트렌드 모니터링 및 즉각형 마이크로 캠페인",
            "동적 개인화 메시징 및 오토메이션 시스템 구축",
            "A/B 테스트 기반의 실시간 전환율(CRO) 개선"
          ]}
        />
      </div>
    </section>
  );
};
