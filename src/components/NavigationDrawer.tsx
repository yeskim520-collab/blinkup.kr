import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PageType } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType, param?: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const menuItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'insights', label: 'Insights' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between p-6 sm:p-8 animate-menu-enter overflow-y-auto">
      {/* Top Bar inside Fullscreen Black Menu */}
      <div>
        <div className="flex items-center justify-between border-b border-white pb-5">
          <button
            onClick={() => {
              onNavigate('home');
              onClose();
            }}
            className="text-[28px] sm:text-[30px] font-black tracking-[-0.04em] text-white cursor-pointer hover:opacity-80 transition-opacity leading-none"
          >
            BlinkUp
          </button>
          
          <button
            onClick={onClose}
            className="p-2 text-white hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-7 h-7 stroke-[2]" />
          </button>
        </div>

        {/* Large Typography Menu List matching frog reference visual rhythm */}
        <nav className="mt-10 sm:mt-12 space-y-4 sm:space-y-6">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <div key={item.id} className="group">
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full text-left text-[34px] sm:text-[42px] font-black tracking-[-0.035em] leading-[1.1] transition-all cursor-pointer flex items-center justify-between ${
                    isActive ? 'text-white pl-2 border-l-4 border-white' : 'text-white hover:text-white/70'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
                </button>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer inside Fullscreen Black Menu */}
      <div className="mt-12 pt-8 border-t border-white space-y-6">
        <div>
          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-none bg-white text-black font-extrabold text-[16px] tracking-tight transition-all hover:bg-neutral-200 active:scale-[0.99] cursor-pointer"
          >
            <span>대화를 시작하세요</span>
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/60 space-y-2 sm:space-y-0">
          <span className="font-medium">Frog · Part of Capgemini Invent</span>
          <span>© {new Date().getFullYear()} BlinkUp. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};
