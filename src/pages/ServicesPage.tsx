import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageType, param?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const serviceSteps = [
    {
      num: '01',
      title: '발견합니다 (Discovery)',
      desc: '철저한 시장 조사와 고객 인터뷰를 통해 잠재된 비즈니스 기회와 핵심 가치를 발굴합니다.',
      items: ['사용자 경험 리서치 & 인터뷰', '경쟁 환경 및 시장 기회 분석', '핵심 타깃 페르소나 정의'],
      linkId: 'brand-strategy'
    },
    {
      num: '02',
      title: '드러냅니다 (Branding & Expression)',
      desc: '브랜드의 정체성을 시각적·언어적으로 구체화하고 일관된 고객 커뮤니케이션을 구축합니다.',
      items: ['브랜드 전략 및 BI/CI 디자인', '스토리텔링 및 보이스앤톤 가이드', '멀티채널 콘텐츠 설계'],
      linkId: 'brand-strategy'
    },
    {
      num: '03',
      title: '만듭니다 (AI One-Team Product)',
      desc: '전략과 기술이 결합된 AI One-Team을 통해 혁신적인 디지털 제품과 인터랙션을 구현합니다.',
      items: ['UI/UX 디자인 시스템 구축', '웹/앱 프로덕트 엔지니어링', '인터랙티브 프로토타이핑'],
      linkId: 'content-communication'
    },
    {
      num: '04',
      title: '연결합니다 (Growth & Connect)',
      desc: '데이터 기반 마케팅과 자산 관리를 통해 고객과의 지속적이고 긴밀한 관계를 형성합니다.',
      items: ['퍼포먼스 마케팅 & 성과 측정', '실시간 마케팅 활성화', '디지털 콘텐츠 및 자산 관리(DAM)'],
      linkId: 'marketing-strategy'
    },
    {
      num: '05',
      title: '실현시킵니다 (Scale & Success)',
      desc: '지속적인 최적화와 파트너십을 통해 비즈니스 목표를 실질적인 성공으로 완수합니다.',
      items: ['데이터 기반 지속적 최적화', '글로벌 시장 확장 지원', '장기 성장 파트너십'],
      linkId: 'content-assets'
    }
  ];

  return (
    <div className="px-6 pt-10 pb-16 bg-white animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-[13px] font-bold tracking-tight text-black uppercase">
          Our Services
        </span>
        <h1 className="text-[34px] sm:text-[38px] font-normal tracking-[-0.025em] text-black leading-[1.3] font-serif-display">
          5단계 가치 창출<br />
          엔드투엔드 서비스
        </h1>
        <p className="mt-4 text-[15px] leading-[1.75] text-black font-normal tracking-[-0.015em]">
          발견부터 실현까지 체계적인 5단계 프로세스를 통해 브랜드의 성공을 견인합니다.
        </p>
      </div>

      {/* Services List with crisp borders */}
      <div className="mt-10 border-t border-black">
        {serviceSteps.map((step) => (
          <div 
            key={step.num}
            className="py-6 border-b border-black space-y-3"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="text-[22px] font-black text-black">
                {step.num}
              </span>
              <h3 className="text-[18px] font-black text-black tracking-tight">
                {step.title}
              </h3>
            </div>

            <p className="text-[15px] leading-[1.72] text-black">
              {step.desc}
            </p>

            <ul className="space-y-1.5 pl-3.5 border-l-2 border-black text-[13px] text-black/80 font-medium">
              {step.items.map((it, idx) => (
                <li key={idx}>• {it}</li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('insight-detail', step.linkId)}
                className="text-xs font-black text-black hover:opacity-75 flex items-center gap-1 cursor-pointer transition-opacity"
              >
                <span>관련 인사이트 칼럼 보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 pt-6 border-t border-black">
        <button
          onClick={() => onNavigate('contact')}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-black text-white font-extrabold text-[15px] hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <span>맞춤 서비스 상담 시작하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
