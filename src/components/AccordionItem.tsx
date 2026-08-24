import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  insightId?: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  description: string;
  items?: string[];
  onNavigateToInsight?: (insightId: string) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  insightId,
  title,
  isOpen,
  onToggle,
  description,
  items,
  onNavigateToInsight,
}) => {
  const handleArrowClick = (e: React.MouseEvent) => {
    if (insightId && onNavigateToInsight) {
      e.stopPropagation();
      onNavigateToInsight(insightId);
    }
  };

  return (
    <div className="border-b-[1.5px] sm:border-b-2 border-black transition-colors">
      {/* Accordion Row Header: py-[11px] sm:py-[13px] for compact, dense editorial rhythm */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-[11px] sm:py-[13px] text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 pr-2">
          {/* Accordion Title: Noto Sans KR Regular (400), mobile 21px~23px */}
          <span 
            className={`text-[21px] sm:text-[23px] font-normal text-black tracking-[-0.02em] leading-tight transition-colors ${
              isOpen ? "text-black font-medium" : "group-hover:opacity-80"
            }`}
          >
            {title}
          </span>
          
          {/* Arrow button directly navigates to insight column if clicked */}
          <span
            onClick={handleArrowClick}
            title="Insights 칼럼으로 이동"
            className="p-1 text-black shrink-0 hover:scale-110 active:scale-95 transition-transform"
          >
            <ArrowRight 
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-black group-hover:translate-x-1 transition-transform" 
              strokeWidth={2.2} 
            />
          </span>
        </div>

        {/* Plus / Minus toggle icon */}
        <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center text-black">
          <Plus 
            className={`h-5 w-5 sm:h-[22px] sm:w-[22px] transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            strokeWidth={2.2} 
          />
        </span>
      </button>

      {/* Accordion Content: Compact, clean, 1.55~1.65 line-height, text 18px~19px */}
      <div
        className={`grid transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden space-y-2.5 pt-1">
          {/* Accordion Description: Noto Sans KR Regular (400), mobile 17px~19px, line-height 1.58 */}
          <p className="text-[17px] sm:text-[19px] font-normal leading-[1.58] text-black/90 tracking-[-0.015em] break-keep">
            {description}
          </p>
          {items && items.length > 0 && (
            <ul className="space-y-1.5 pl-3 border-l-[1.5px] border-black text-[14px] sm:text-[15px] text-black/75 font-normal">
              {items.map((item, idx) => (
                <li key={idx} className="leading-snug">
                  • {item}
                </li>
              ))}
            </ul>
          )}

          {/* Link to Insights column detail if insightId & handler exist */}
          {insightId && onNavigateToInsight && (
            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToInsight(insightId);
                }}
                className="group inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-bold text-black hover:opacity-75 transition-opacity cursor-pointer py-1 border-b border-black"
              >
                <span>관련 Insights 칼럼 읽기</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
