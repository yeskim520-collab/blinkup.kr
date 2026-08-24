import React from 'react';
import { PageType } from '../types';
import { ArrowRight } from 'lucide-react';

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
  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'insights', label: 'Insights' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-black/10 transition-all">
      <div className="max-w-[1360px] mx-auto w-full flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-5 lg:py-6">
        {/* Brand Logo & Subtitle matching frog layout */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-baseline gap-2.5 sm:gap-3 text-left group cursor-pointer"
        >
          <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-black tracking-[-0.04em] text-black leading-none group-hover:opacity-80 transition-opacity">
            BlinkUp
          </span>
          <span className="hidden xs:inline-block text-[11px] sm:text-[12px] font-bold text-black/60 tracking-tight leading-none">
            Part of Global Network
          </span>
        </button>

        {/* Desktop Direct Navigation (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-[15px] font-bold tracking-tight transition-colors cursor-pointer relative py-1 ${
                currentPage === link.id
                  ? 'text-black'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action: Desktop Contact Button + Hamburger (Both available on desktop, clean hamburger on mobile) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-[13px] font-bold tracking-tight hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <span>대화 시작하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* 3-line Minimal Hamburger Icon */}
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
      </div>
    </header>
  );
};
