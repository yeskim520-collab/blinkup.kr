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
import { ChevronUp } from 'lucide-react';
import { INSIGHTS_DATA } from './data/insightsData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedInsightId, setSelectedInsightId] = useState<string>('customer-needs');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    
    // Scroll window to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col w-full selection:bg-black selection:text-white">
      {/* Sticky Header with Logo, Desktop Nav & Mobile Hamburger */}
      <Header 
        onOpenMenu={() => setIsMenuOpen(true)}
        isMenuOpen={isMenuOpen}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Full-Page Content Area */}
      <main id="main-content-scroll" className="w-full flex-1 flex flex-col bg-white">
        {/* Dynamic Page Views */}
        {currentPage === 'home' && (
          <div className="w-full">
            {/* 01번 상단 비주얼 이미지 (Full bleed / Edge-to-Edge) */}
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
