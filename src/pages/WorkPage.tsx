import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface WorkPageProps {
  onNavigate: (page: PageType, param?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const projects = [
    {
      id: 'fintech-brand',
      client: '핀테크 솔루션 A사',
      category: 'Brand Strategy & Identity',
      title: '디지털 자산 관리 플랫폼의 리브랜딩 및 UI 시스템',
      result: '브랜드 인지도 180% 상승, 전환율 35% 개선',
      tags: ['브랜드 전략', '디자인 시스템', 'UX/UI 리뉴얼']
    },
    {
      id: 'ai-saas',
      client: 'B2B AI 플랫폼 B사',
      category: 'AI One-Team Product',
      title: '생성형 AI 워크스페이스 인터페이스 및 인터랙션 구축',
      result: '초기 사용자 온보딩 이탈률 42% 감소',
      tags: ['AI One-Team', '인터랙션 디자인', '엔지니어링']
    },
    {
      id: 'commerce-growth',
      client: '글로벌 라이프스타일 C사',
      category: 'Growth & Realtime Marketing',
      title: '실시간 마케팅 액티베이션 및 멀티채널 자산 파이프라인',
      result: '글로벌 캠페인 ROAS 320% 달성',
      tags: ['실시간 마케팅', 'DAM 시스템', '글로벌 캠페인']
    }
  ];

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-10 pb-16 lg:py-20 animate-fade-in">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Desktop 2-column layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-20 items-start">
          {/* Left Column: Header & Callout */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-3">
              <span className="text-[13px] font-bold tracking-tight text-black uppercase">
                Selected Works
              </span>
              <h1 className="text-[34px] sm:text-[42px] md:text-[48px] font-normal tracking-[-0.025em] text-black leading-[1.25] font-serif-display">
                실질적인 변화를 만든<br />
                주요 프로젝트
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.75] text-black font-normal tracking-[-0.015em]">
                BlinkUp이 다양한 파트너들과 함께 만들어낸 전략적 성공 사례와 디지털 제품들을 소개합니다.
              </p>
            </div>

            {/* Bottom Callout in Left Column on desktop */}
            <div className="p-6 lg:p-8 bg-black text-white space-y-3">
              <h3 className="text-[20px] lg:text-[22px] font-black tracking-tight text-white">
                다음 성공 사례의 주인공이 되어보세요
              </h3>
              <p className="text-[14px] text-white/80 leading-relaxed">
                귀사의 비즈니스에 최적화된 맞춤 프로젝트 제안서를 준비해드립니다.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-2 w-full py-4 px-4 bg-white text-black font-black text-[15px] hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>프로젝트 문의하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Projects List */}
          <div className="mt-10 lg:mt-0 lg:col-span-7 xl:col-span-7 border-t border-black">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="py-6 sm:py-8 border-b border-black space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] sm:text-[13px] font-black text-black uppercase">
                    {proj.client}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-black bg-black text-white px-2 py-0.5">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-[20px] sm:text-[22px] font-black text-black tracking-tight leading-snug">
                  {proj.title}
                </h3>

                <div className="p-3.5 sm:p-4 bg-neutral-100 text-[14px] sm:text-[15px] text-black font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-black shrink-0" />
                  <span>성과: {proj.result}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[12px] sm:text-[13px] px-2.5 py-1 bg-white border border-black text-black font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
