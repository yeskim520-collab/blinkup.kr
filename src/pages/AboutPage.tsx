import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageType, param?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="px-6 pt-10 pb-16 bg-white animate-fade-in">
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-[13px] font-bold tracking-tight text-black uppercase">
          About BlinkUp
        </span>
        <h1 className="text-[34px] sm:text-[38px] font-normal tracking-[-0.025em] text-black leading-[1.3] font-serif-display">
          가치를 발견하고<br />
          미래를 설계합니다
        </h1>
        <p className="mt-4 text-[15px] leading-[1.75] text-black font-normal tracking-[-0.015em]">
          BlinkUp은 브랜드와 비즈니스의 고유한 가치를 탐구하고, 사람과 기술을 연결하여 실질적인 비즈니스 결과를 실현하는 통합 파트너입니다.
        </p>
      </div>

      {/* Core Values */}
      <div className="mt-10 space-y-4">
        <h2 className="text-[20px] font-black text-black tracking-tight">핵심 비전 & 가치</h2>
        
        <div className="py-4 border-t border-black space-y-1.5">
          <div className="text-black font-black text-[16px] tracking-tight">
            01. 사람 중심의 통찰
          </div>
          <p className="text-[14px] text-black leading-relaxed">
            단순한 데이터 수집을 넘어 사용자 경험과 고객의 진짜 니즈를 파악하여 본질적인 기회를 찾아냅니다.
          </p>
        </div>

        <div className="py-4 border-t border-black space-y-1.5">
          <div className="text-black font-black text-[16px] tracking-tight">
            02. AI One-Team 협업
          </div>
          <p className="text-[14px] text-black leading-relaxed">
            전략, 크리에이티브, 기술 전문가가 유기적으로 결합하여 가장 빠른 속도로 검증된 솔루션을 만듭니다.
          </p>
        </div>

        <div className="py-4 border-t border-b border-black space-y-1.5">
          <div className="text-black font-black text-[16px] tracking-tight">
            03. 지속 가능한 파트너십
          </div>
          <p className="text-[14px] text-black leading-relaxed">
            일회성 산출물이 아닌 시장의 변화에 함께 기민하게 대응하며 지속적인 성장을 지원합니다.
          </p>
        </div>
      </div>

      {/* Global Partnership with Frog */}
      <div className="mt-10 p-6 bg-black text-white space-y-3">
        <span className="text-[12px] font-bold text-white/70 uppercase tracking-wider">
          Global Alliance
        </span>
        <h3 className="text-[24px] font-black tracking-tight text-white leading-tight">
          Frog · Part of Capgemini Invent
        </h3>
        <p className="text-[14px] text-white/90 leading-relaxed">
          세계적인 디자인 및 전략 컨설팅 펌 Frog와의 협업 네트워크를 통해 글로벌 스탠다드의 인사이트와 크리에이티브를 제공합니다.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 pt-6 border-t border-black space-y-3">
        <button
          onClick={() => onNavigate('services')}
          className="w-full flex items-center justify-between py-4 px-5 bg-white text-black font-extrabold text-[15px] border border-black transition-colors hover:bg-neutral-100 cursor-pointer"
        >
          <span>BlinkUp 서비스 둘러보기</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-black text-white font-extrabold text-[15px] hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <span>프로젝트 대화 시작하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
