import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { INSIGHTS_LIST } from '../data/insightsData';
import { PageType } from '../types';

interface InsightsPageProps {
  onNavigate: (page: PageType, param?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 보기' },
    { id: '01 발견합니다', label: '01 발견' },
    { id: '02 드러냅니다', label: '02 브랜딩' },
    { id: '03 만듭니다', label: '03 제품·AI' },
    { id: '04 연결합니다', label: '04 관계·성장' },
    { id: '05 실현시킵니다', label: '05 실행·성과' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? INSIGHTS_LIST
    : INSIGHTS_LIST.filter(a => a.category === selectedCategory || a.relatedSection === selectedCategory);

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-16 xl:px-20 pt-9 pb-16 lg:py-20 animate-fade-in">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* 1. 작은 라벨: Insights */}
        <div className="flex items-center gap-2">
          <span className="text-[14px] sm:text-[15px] font-black tracking-tight text-black uppercase">
            Insights
          </span>
        </div>

        {/* 2. 큰 제목: 생각을 나누고, 가능성을 발견합니다 (Noto Serif KR Regular 400) */}
        <h1 className="mt-2.5 sm:mt-3 text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] font-normal leading-[1.18] tracking-[-0.02em] text-black font-serif-display break-keep">
          생각을 나누고,<br />
          가능성을 발견합니다
        </h1>

        {/* 3. 설명: 사람과 사업, 브랜드와 AI, 새로운 일하는 방식에 대한 BlinkUp의 생각과 경험을 기록합니다. */}
        <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-black/85 font-normal tracking-[-0.015em] break-keep max-w-3xl">
          사람과 사업, 브랜드와 AI, 새로운 일하는 방식에 대한 BlinkUp의 생각과 경험을 기록합니다.
        </p>

        {/* 4. 카테고리 필터 (frog editorial style 미니멀 탭) */}
        <div className="mt-7 sm:mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-black">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-[12px] sm:text-[13px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-black/80 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 5. 칼럼 목록: 선, 여백, 큰 제목 중심의 단정한 에디토리얼 리스트 (데스크톱 2열 그리드) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 divide-y lg:divide-y-0 divide-black border-b border-black">
          {filteredArticles.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => onNavigate('insight-detail', art.id)}
              className={`py-6 sm:py-7 group cursor-pointer transition-colors ${
                idx % 2 === 0 ? 'lg:border-b lg:border-black' : 'lg:border-b lg:border-black'
              }`}
            >
              {/* Category & Date / ReadTime */}
              <div className="flex items-center justify-between text-xs text-black font-bold">
                <span className="text-[12px] font-bold text-black tracking-tight uppercase">
                  {art.category}
                </span>
                <div className="flex items-center gap-2 text-black/60 text-[12px] font-normal">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>
              </div>

              {/* Title: Noto Sans KR Bold, 20~22px */}
              <h2 className="mt-2.5 text-[21px] sm:text-[23px] font-bold text-black tracking-[-0.02em] leading-snug group-hover:opacity-75 transition-opacity break-keep">
                {art.title}
              </h2>

              {/* Summary: Noto Sans KR Regular, 15~16px */}
              <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-black/80 font-normal tracking-[-0.015em] break-keep line-clamp-2">
                {art.summary}
              </p>

              {/* Arrow & Read More Button */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[13px] font-bold text-black group-hover:underline underline-offset-4">
                  칼럼 읽기
                </span>
                <div className="flex items-center justify-center w-7 h-7 border border-black group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
