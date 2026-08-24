import React from 'react';
import { PageType } from '../types';

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
  currentPage?: PageType;
  onNavigate: (page: PageType, param?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  isMenuOpen,
  currentPage = 'home',
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-black/10">
      <div className="flex items-center justify-between px-6 py-5">
        {/* Brand Logo & Subtitle matching frog layout */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-baseline gap-2.5 text-left group cursor-pointer"
        >
          <span className="text-[26px] sm:text-[28px] font-black tracking-[-0.04em] text-black leading-none group-hover:opacity-80 transition-opacity">
            BlinkUp
          </span>
          <span className="hidden xs:inline-block text-[11px] font-bold text-black/60 tracking-tight leading-none">
            Part of Global Network
          </span>
        </button>

        {/* 3-line Minimal Hamburger Icon matching frog reference screenshot */}
        <button
          onClick={onOpenMenu}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          className="group flex h-9 w-9 flex-col items-end justify-center gap-[5px] p-1.5 transition-transform active:scale-95 cursor-pointer"
        >
          <span 
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span 
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span 
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
};
