import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Section01 } from './components/Section01';
import { Section02 } from './components/Section02';
import { Section03 } from './components/Section03';
import { Section04 } from './components/Section04';
import { Section05 } from './components/Section05';
import { FooterCTA } from './components/FooterCTA';
import { NavigationDrawer } from './components/NavigationDrawer';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { WorkPage } from './pages/WorkPage';
import { ContactPage } from './pages/ContactPage';
import { PageType } from './types';
import { Smartphone, Monitor, ChevronUp } from 'lucide-react';
import { INSIGHTS_DATA } from './data/insightsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedInsightId, setSelectedInsightId] = useState<string>('customer-needs');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'fluid'>('mobile');

  // Sync hash routing if present
  useEffect(() => {
    const syncRouteFromHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash.startsWith('insights/')) {
        const id = hash.replace('insights/', '');
        if (INSIGHTS_DATA[id]) {
          setCurrentPage('insight-detail');
          setSelectedInsightId(id);
        }
      } else if (hash === 'insights') {
        setCurrentPage('insights');
      } else if (['home', 'about', 'services', 'work', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageType);
      }
    };

    syncRouteFromHash();
    window.addEventListener('popstate', syncRouteFromHash);
    return () => window.removeEventListener('popstate', syncRouteFromHash);
  }, []);

  const handleNavigate = (page: PageType, param?: string) => {
    setCurrentPage(page);
    if (param) {
      setSelectedInsightId(param);
      window.location.hash = `#/${page}/${param}`;
    } else {
      window.location.hash = page === 'home' ? '' : `#/${page}`;
    }
    
    // Scroll container/window to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainEl = document.getElementById('main-content-scroll');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainEl = document.getElementById('main-content-scroll');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-black font-sans antialiased flex flex-col items-center selection:bg-black selection:text-white">
      {/* Top Desktop Control Bar */}
      <aside aria-label="상단 컨트롤 바" className="w-full hidden md:flex items-center justify-between px-6 py-2.5 bg-black text-white text-xs border-b border-neutral-800 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 text-white font-black tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span>BlinkUp</span>
          </button>
          <span className="text-neutral-500">/</span>
          {/* Quick Page Links for Testability */}
          <nav className="flex items-center gap-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'insights', label: 'Insights' },
              { id: 'work', label: 'Work' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNavigate(tab.id as PageType)}
                className={`px-2.5 py-1 transition-colors cursor-pointer font-bold ${
                  currentPage === tab.id
                    ? 'bg-white text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1.5 bg-neutral-900 p-1 border border-neutral-800">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 transition-all duration-150 cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-white text-black font-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>모바일 뷰 (390px)</span>
          </button>
          <button
            onClick={() => setViewMode('fluid')}
            className={`flex items-center gap-1.5 px-3 py-1 transition-all duration-150 cursor-pointer ${
              viewMode === 'fluid'
                ? 'bg-white text-black font-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>와이드 뷰</span>
          </button>
        </div>
      </aside>

      {/* Main Page Container */}
      <main
        id="main-content-scroll"
        className={`w-full bg-white transition-all duration-200 relative flex flex-col justify-between ${
          viewMode === 'mobile'
            ? 'max-w-[400px] my-0 sm:my-6 shadow-xl border-x border-black/10'
            : 'max-w-3xl my-0 sm:my-6 shadow-xl border border-black/10'
        }`}
      >
        <div>
          {/* Sticky Header with Hamburger & Logo */}
          <Header 
            onOpenMenu={() => setIsMenuOpen(true)}
            isMenuOpen={isMenuOpen}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />

          {/* Dynamic Page Views */}
          {currentPage === 'home' && (
            <div>
              {/* 01번 상단 비주얼 이미지 */}
              <HeroSection />

              {/* 01 발견합니다 */}
              <Section01 
                onNavigateToInsight={(id) => handleNavigate('insight-detail', id)}
              />

              {/* 02 드러냅니다 */}
              <Section02 
                onNavigateToInsight={(id) => handleNavigate('insight-detail', id)}
              />

              {/* 03 만듭니다 */}
              <Section03 
                onNavigateToInsight={(id) => handleNavigate('insight-detail', id)}
              />

              {/* 04 연결합니다 */}
              <Section04 
                onNavigateToInsight={(id) => handleNavigate('insight-detail', id)}
              />

              {/* 05 실현시킵니다 */}
              <Section05 
                onNavigateToInsight={(id) => handleNavigate('insight-detail', id)}
              />
            </div>
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'services' && (
            <ServicesPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'insights' && (
            <InsightsPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'insight-detail' && (
            <InsightDetailPage
              insightId={selectedInsightId}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'work' && (
            <WorkPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}
        </div>

        {/* Common Bottom Black CTA & Footer across all pages */}
        <FooterCTA
          onNavigate={handleNavigate}
        />
      </main>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3.5 bg-black hover:bg-neutral-800 text-white shadow-xl transition-transform active:scale-95 z-30 flex items-center justify-center cursor-pointer border border-white/20"
        aria-label="맨 위로 이동"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Fullscreen Pure Black Navigation Menu */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
