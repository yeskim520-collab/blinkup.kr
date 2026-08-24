import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, User } from 'lucide-react';
import { INSIGHTS_DATA, INSIGHTS_LIST } from '../data/insightsData';
import { PageType } from '../types';

interface InsightDetailPageProps {
  insightId?: string;
  onNavigate: (page: PageType, param?: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({
  insightId = 'customer-needs',
  onNavigate,
}) => {
  const article = INSIGHTS_DATA[insightId] || INSIGHTS_LIST[0];

  // Find index for Prev / Next navigation
  const currentIndex = INSIGHTS_LIST.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? INSIGHTS_LIST[currentIndex - 1] : null;
  const nextArticle = currentIndex < INSIGHTS_LIST.length - 1 ? INSIGHTS_LIST[currentIndex + 1] : null;

  return (
    <div className="px-6 pt-7 pb-16 bg-white animate-fade-in">
      {/* 1. Insights 목록으로 돌아가기 상단 네비게이션 */}
      <div className="pb-4 mb-6 border-b border-black">
        <button
          onClick={() => onNavigate('insights')}
          className="group inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-bold text-black hover:opacity-75 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.2} />
          <span>Insights 목록으로 돌아가기</span>
        </button>
      </div>

      {/* 2. Category */}
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-black text-black tracking-tight uppercase">
          {article.category}
        </span>
      </div>

      {/* 3. 큰 제목: Noto Serif KR Regular (400), 38px~46px */}
      <h1 className="mt-3 text-[36px] sm:text-[44px] md:text-[48px] font-normal leading-[1.2] tracking-[-0.02em] text-black font-serif-display break-keep">
        {article.title}
      </h1>

      {/* 4. Date & Metadata */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] text-black/75 font-normal border-b border-black pb-5">
        <div className="flex items-center gap-1.5 font-medium text-black">
          <User className="w-3.5 h-3.5" />
          <span>{article.author || 'BlinkUp Team'}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* 5. Summary Callout Box: frog editorial quote/summary style */}
      <div className="mt-7 p-5 sm:p-6 border-l-[3px] border-black bg-neutral-50 text-black text-[17px] sm:text-[18px] leading-[1.65] font-normal tracking-[-0.015em] break-keep">
        {article.summary}
      </div>

      {/* 6. 본문 (긴 글을 읽기 편한 editorial article 형식) */}
      <div className="mt-8 space-y-6 text-[16px] sm:text-[17px] leading-[1.78] text-black/90 font-normal tracking-[-0.015em] break-keep font-sans">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="first-letter:text-[1.15em] first-letter:font-bold">
            {paragraph}
          </p>
        ))}
      </div>

      {/* 7. Key Takeaways 핵심 요약 */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="mt-10 p-6 border-[1.5px] border-black bg-white space-y-3.5">
          <span className="text-[13px] font-bold uppercase tracking-wider text-black block">
            핵심 요약 (Key Takeaways)
          </span>
          <ul className="space-y-2.5 text-[15px] sm:text-[16px] text-black">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-1" strokeWidth={2.2} />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 8. 이전 글 / 다음 글 네비게이션 */}
      <div className="mt-12 pt-8 border-t-[1.5px] border-black grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevArticle ? (
          <div
            onClick={() => onNavigate('insight-detail', prevArticle.id)}
            className="p-4 border border-black hover:bg-neutral-50 cursor-pointer group transition-colors space-y-1"
          >
            <span className="text-[12px] font-bold text-black/60 block flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              이전 글
            </span>
            <p className="text-[15px] sm:text-[16px] font-bold text-black leading-snug line-clamp-2">
              {prevArticle.title}
            </p>
          </div>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextArticle && (
          <div
            onClick={() => onNavigate('insight-detail', nextArticle.id)}
            className="p-4 border border-black hover:bg-neutral-50 cursor-pointer group transition-colors space-y-1 sm:text-right"
          >
            <span className="text-[12px] font-bold text-black/60 block flex items-center sm:justify-end gap-1">
              다음 글
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <p className="text-[15px] sm:text-[16px] font-bold text-black leading-snug line-clamp-2">
              {nextArticle.title}
            </p>
          </div>
        )}
      </div>

      {/* 9. 하단 목록으로 돌아가기 버튼 */}
      <div className="mt-8 pt-4 text-center">
        <button
          onClick={() => onNavigate('insights')}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-[1.5px] border-black text-black font-bold text-[14px] hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>전체 Insights 칼럼 목록 보기</span>
        </button>
      </div>
    </div>
  );
};
