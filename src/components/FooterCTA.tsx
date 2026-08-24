import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface FooterCTAProps {
  onOpenContact?: () => void;
  onNavigate: (page: PageType, param?: string) => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const handleContact = () => {
    onNavigate('contact');
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <footer className="bg-black text-white px-6 pt-12 sm:pt-16 pb-16 w-full">
      {/* 1. 메인 제목: Noto Serif KR Regular (400), 46px, line-height 1.18, letter-spacing -0.02em */}
      <h2 className="text-[46px] sm:text-[54px] md:text-[62px] font-normal leading-[1.18] tracking-[-0.02em] text-white font-serif-display break-keep">
        이제 존재감을<br />
        드러낼 시간입니다.
      </h2>

      {/* 2. 설명문: Noto Sans KR Regular (400), 18px, line-height 1.6 */}
      <p className="mt-4 sm:mt-5 text-[18px] sm:text-[19px] font-normal leading-[1.6] text-white/90 tracking-[-0.015em] break-keep max-w-2xl">
        사업의 가치를 발견하고, 사람과 기술을 연결해 실제 결과가 만들어질 때까지 함께합니다.
      </p>

      {/* 3. CTA 버튼: 사각형 아웃라인 버튼 (Border 1.5px, Noto Sans KR Bold 21px, Hover 반전) */}
      <div className="mt-7 sm:mt-9">
        <button
          onClick={handleContact}
          className="group inline-flex items-center justify-between sm:justify-center gap-3.5 px-6 sm:px-7 py-4 sm:py-[17px] border-[1.5px] border-white rounded-[2px] bg-transparent text-white text-[21px] sm:text-[22px] font-bold tracking-[-0.015em] hover:bg-white hover:text-black transition-all duration-200 cursor-pointer w-full sm:w-auto"
        >
          <span>함께 시작해볼까요?</span>
          <ArrowRight className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white group-hover:text-black group-hover:translate-x-1 transition-all" strokeWidth={2.5} />
        </button>
      </div>

      {/* Brand & Affiliation */}
      <div className="mt-14 sm:mt-16 space-y-1">
        <button
          onClick={() => onNavigate('about')}
          className="text-[28px] font-black tracking-[-0.04em] text-white leading-none hover:opacity-80 transition-opacity cursor-pointer text-left"
        >
          Frog
        </button>
        <p className="text-[13px] font-normal text-white/70 tracking-tight">
          Part of Capgemini Invent
        </p>
      </div>

      {/* Secondary Links -> Navigates to Insights column detail */}
      <div className="mt-6 flex items-center gap-6 text-[14px] font-bold text-white">
        <button 
          onClick={() => onNavigate('insight-detail', 'podcast')} 
          className="hover:opacity-70 transition-opacity underline-offset-4 hover:underline cursor-pointer"
        >
          팟캐스트
        </button>
        <button 
          onClick={() => onNavigate('insight-detail', 'article')} 
          className="hover:opacity-70 transition-opacity underline-offset-4 hover:underline cursor-pointer"
        >
          기사
        </button>
      </div>

      {/* Careers / Community Description */}
      <p className="mt-5 text-[14px] leading-[1.65] text-white/80 tracking-tight">
        다양한 재능을 가진 배려심 넘치는 공동체 속에서 최고의 역량을 발휘하세요.
      </p>

      {/* Join Team Link -> Navigates to Careers Insight */}
      <div className="mt-4">
        <button
          onClick={() => onNavigate('insight-detail', 'careers')}
          className="group inline-flex items-center gap-1.5 text-[15px] font-black text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span>저희 팀에 합류하세요</span>
          <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </button>
      </div>

      {/* Bottom Divider line */}
      <div className="mt-12 pt-6 border-t border-white/20 text-[12px] text-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} BlinkUp & Frog. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>·</span>
          <button 
            onClick={() => onNavigate('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};
