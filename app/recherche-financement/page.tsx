// app/recherche-financement/page.tsx
'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { BookOpen, MapPin, Euro, ArrowRight, Info, ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';
import { Financement_CATALOGUE } from '@/data/catalogue'; // <-- CHANGÉ
import { ThemeForOtherPages, ModuleForOtherPages } from '@/types/index';
import Tarifs from '@/components/Tarifs';

interface FinancementPageProps { // <-- CHANGÉ
  setCurrentPage: (page: string) => void;
  setSelectedTheme: (theme: ThemeForOtherPages) => void;
  setSelectedModule: (module: ModuleForOtherPages) => void;
}

// --- COMPOSANT THEMEROW ---
function ThemeRow({ 
  theme, 
  setCurrentPage, 
  setSelectedTheme, 
  setSelectedModule 
}: { 
  theme: ThemeForOtherPages;
  setCurrentPage: (page: string) => void;
  setSelectedTheme: (theme: ThemeForOtherPages) => void;
  setSelectedModule: (module: ModuleForOtherPages) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
      
      const cardWidth = 340;
      const visibleCards = Math.floor(clientWidth / cardWidth);
      const pages = Math.ceil(theme.modules.length / visibleCards);
      setTotalPages(Math.max(pages, 1));
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [theme.modules.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentPage = Math.min(Math.floor(scrollProgress * totalPages), totalPages - 1);
  const themeImage = theme.image || theme.modules[0]?.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop';

  return (
    <div className="mb-8 group/row">
      <div className="mb-4 px-4 md:px-12 flex items-center justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-700 transition-all cursor-pointer inline-flex items-center">
          <span className="w-1 h-5 bg-primary-600 mr-3 rounded-full"></span>
          <span className="relative pb-1">
            {theme.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 ease-out group-hover/row:w-1/2"></span>
          </span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 opacity-0 group-hover/row:opacity-100 transition-opacity text-primary-600" />
        </h2>
        
        {totalPages > 1 && (
          <div className="hidden md:flex gap-1 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`h-0.5 transition-all duration-300 cursor-pointer ${
                  i === currentPage
                    ? 'w-3 bg-red-600'
                    : 'w-2 bg-red-600/30 hover:bg-red-600'
                }`}
                onClick={() => {
                  if (scrollRef.current) {
                    const { scrollWidth, clientWidth } = scrollRef.current;
                    const maxScroll = scrollWidth - clientWidth;
                    const targetScrollLeft = totalPages > 1 ? (i / (totalPages - 1)) * maxScroll : 0;
                    scrollRef.current.scrollTo({
                      left: targetScrollLeft,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative group/slider px-4 md:px-12">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white shadow-xl rounded-full opacity-90 hover:opacity-100 transition-all flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white shadow-xl rounded-full opacity-90 hover:opacity-100 transition-all flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        )}

        <div 
          ref={scrollRef}
          className="flex gap-1.5 md:gap-2 overflow-x-auto overflow-y-hidden pt-8 md:pt-10 pb-8 md:pb-10 scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {theme.modules.map((module, index) => (
            <div
              key={module.code}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] cursor-pointer"
              onMouseEnter={() => setHoveredModule(module.code)}
              onMouseLeave={() => setHoveredModule(null)}
              onClick={() => {
                // ========================================
                // ============ CORRECTION ICI ============
                window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
                // ========================================
                setSelectedTheme(theme);
                setSelectedModule(module);
                setCurrentPage('financement-detail'); // <-- CHANGÉ
              }}
            >
              <div 
                className={`relative rounded-md overflow-visible bg-white shadow-lg border border-gray-100 transition-all duration-300 ${
                  hoveredModule === module.code 
                    ? 'scale-110 md:scale-125 z-50 shadow-2xl -translate-y-2 md:-translate-y-4' 
                    : 'scale-100 z-0'
                }`}
                style={{
                  transformOrigin: index === 0 ? 'left' : index === theme.modules.length - 1 ? 'right' : 'center'
                }}
              >
                <div className={`relative rounded-md overflow-hidden transition-opacity duration-300 ${
                  hoveredModule === module.code ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="relative aspect-video">
                    <Image
                      src={module.image || themeImage}
                      alt={module.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-primary-600 text-white rounded text-xs font-bold shadow-lg">
                      {module.code}
                    </div>
                    {index === 0 && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-xs font-bold shadow-lg">
                        🔥 Top
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <h3 className="text-white font-bold text-xs md:text-sm leading-tight line-clamp-2">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {hoveredModule === module.code && (
                  <div className="absolute inset-0 rounded-md overflow-hidden bg-white shadow-2xl border border-gray-200">
                    <div className="relative aspect-video">
                      <Image
                        src={module.image || themeImage}
                        alt={module.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                      <div className="absolute top-2 left-2 px-2 py-1 bg-primary-600 text-white rounded text-xs font-bold shadow-lg">
                        {module.code}
                      </div>
                    </div>

                    <div className="p-4 bg-white border-t border-gray-200">
                      <h3 className="text-gray-900 font-bold text-sm md:text-base mb-2 line-clamp-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-700 text-xs line-clamp-3 mb-3 leading-relaxed">
                        {module.themeDetail}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 flex items-center font-medium">
                          <BookOpen className="w-3 h-3 mr-1.5" />
                          Prestation
                        </span>
                        <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                          Voir détails 
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant principal
export default function FinancementPage({ // <-- CHANGÉ
  setCurrentPage, 
  setSelectedTheme, 
  setSelectedModule 
}: FinancementPageProps) { // <-- CHANGÉ
  return (
    <>
      {/* Hero */}
      <div className="pt-28 pb-16 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Recherche de Financement
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stratégies et mobilisation de fonds pour vos projets de développement.
          </p>
        </div>
      </div>

      {/* Catalogue des Thèmes */}
      <section className="pt-8 md:pt-12 pb-4 md:pb-8 bg-white">
        <div className="max-w-[1920px] mx-auto">
          {Financement_CATALOGUE.map((theme) => ( // <-- CHANGÉ
            <ThemeRow 
              key={theme.slug} 
              theme={theme}
              setCurrentPage={setCurrentPage}
              setSelectedTheme={setSelectedTheme}
              setSelectedModule={setSelectedModule}
            />
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-10 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Tarifs />
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}