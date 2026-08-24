import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';

interface Section05Props {
  onNavigateToInsight?: (insightId: string) => void;
}

export const Section05: React.FC<Section05Props> = ({ onNavigateToInsight }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="section-05" className="px-6 pt-9 pb-12 bg-white">
      {/* 1. 작은 단계명 */}
      <div className="flex items-baseline gap-2">
        <span className="text-[26px] sm:text-[28px] font-black tracking-[-0.04em] text-black">
          05
        </span>
        <span className="text-[15px] sm:text-[16px] font-bold text-black tracking-tight">
          실현시킵니다
        </span>
      </div>

      {/* 2. 큰 헤드라인 - Noto Serif KR Regular (46px 유지, 줄바꿈 유지, 밀도 line-height 1.18) */}
      <h2 className="mt-2.5 sm:mt-3 text-[46px] sm:text-[54px] md:text-[62px] font-normal leading-[1.18] tracking-[-0.02em] text-black font-serif-display break-keep">
        함께 성공을<br />
        만들어가세요
      </h2>

      {/* 3. 짧은 한 줄 설명 */}
      <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.55] text-black/85 font-normal tracking-[-0.015em] break-keep">
        전략과 디자인, 기술을 결합하여 시장에서 지속 가능한 비즈니스 가치를 완성합니다.
      </p>

      {/* 4. 그 아래 아코디언 2개 (밀도 높은 구분선) */}
      <div className="mt-5 sm:mt-6 border-t-[1.5px] sm:border-t-2 border-black">
        <AccordionItem
          id="scaleup-launch"
          insightId="direction-and-method"
          title="비즈니스 스케일업 & 론칭"
          isOpen={!!openItems['scaleup-launch']}
          onToggle={() => toggleItem('scaleup-launch')}
          onNavigateToInsight={onNavigateToInsight}
          description="완성도 높은 론칭 전략과 시장 진입 로드맵을 통해 브랜드의 성공적인 킥오프와 초기 점유율 확대를 이끕니다."
          items={[
            "시장 진입 전략(Go-to-Market) 및 론칭 타임라인 수립",
            "초기 고객 획득 전략 및 파트너십 연계",
            "안정적 서비스 인프라 배포 및 운영 가이드"
          ]}
        />
        <AccordionItem
          id="continuous-growth"
          insightId="from-idea-to-result"
          title="지속적 최적화 & 성장 관리"
          isOpen={!!openItems['continuous-growth']}
          onToggle={() => toggleItem('continuous-growth')}
          onNavigateToInsight={onNavigateToInsight}
          description="론칭 이후에도 데이터 기반의 지속적인 모니터링과 피드백 루프를 통해 제품과 서비스를 지속적으로 성장시킵니다."
          items={[
            "핵심 지표(KPI & OKR) 대시보드 구축 및 성과 추적",
            "사용자 행동 분석 기반의 정기 기능 업데이트 및 개선",
            "장기적 브랜드 에쿼티 관리 및 비즈니스 확장 지원"
          ]}
        />
      </div>
    </section>
  );
};
