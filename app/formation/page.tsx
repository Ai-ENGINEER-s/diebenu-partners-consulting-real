// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link'; // Importation de Link
// import { BookOpen, MapPin, Euro, ArrowRight, Info, ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';
// import { FORMATION_CATALOGUE } from '@/data/catalogue';
// import { Theme, Module } from '@/types/index';
// import Tarifs from '@/components/Tarifs';

// interface FormationPageProps {
//   setCurrentPage: (page: string) => void;
//   setSelectedTheme: (theme: Theme) => void;
//   setSelectedModule: (module: Module) => void;
// }

// // --- COMPOSANT THEMEROW ---
// function ThemeRow({ 
//   theme, 
//   setCurrentPage, 
//   setSelectedTheme, 
//   setSelectedModule 
// }: { 
//   theme: Theme;
//   setCurrentPage: (page: string) => void;
//   setSelectedTheme: (theme: Theme) => void;
//   setSelectedModule: (module: Module) => void;
// }) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [hoveredModule, setHoveredModule] = useState<string | null>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);

//   const checkScrollButtons = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 10);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
//       const maxScroll = scrollWidth - clientWidth;
//       const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
//       setScrollProgress(progress);
      
//       const cardWidth = 340;
//       const visibleCards = Math.floor(clientWidth / cardWidth);
//       const pages = Math.ceil(theme.modules.length / visibleCards);
//       setTotalPages(Math.max(pages, 1));
//     }
//   };

//   useEffect(() => {
//     checkScrollButtons();
//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener('scroll', checkScrollButtons);
//       window.addEventListener('resize', checkScrollButtons);
//       return () => {
//         scrollElement.removeEventListener('scroll', checkScrollButtons);
//         window.removeEventListener('resize', checkScrollButtons);
//       };
//     }
//   }, [theme.modules.length]);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.clientWidth * 0.85;
//       scrollRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const currentPage = Math.min(Math.floor(scrollProgress * totalPages), totalPages - 1);
//   const themeImage = theme.image || theme.modules[0]?.image || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop';

//   return (
//     <div className="mb-8 group/row">
//       <div className="mb-4 px-4 md:px-12 flex items-center justify-between">
//         <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-700 transition-all cursor-pointer inline-flex items-center">
//           <span className="w-1 h-5 bg-primary-600 mr-3 rounded-full"></span>
//           <span className="relative pb-1">
//             {theme.title}
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 ease-out group-hover/row:w-1/2"></span>
//           </span>
//           <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 opacity-0 group-hover/row:opacity-100 transition-opacity text-primary-600" />
//         </h2>
        
//         {totalPages > 1 && (
//           <div className="hidden md:flex gap-1 items-center">
//             {Array.from({ length: totalPages }).map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-0.5 transition-all duration-300 cursor-pointer ${
//                   i === currentPage
//                     ? 'w-3 bg-red-600'
//                     : 'w-2 bg-red-600/30 hover:bg-red-600'
//                 }`}
//                 onClick={() => {
//                   if (scrollRef.current) {
//                     const { scrollWidth, clientWidth } = scrollRef.current;
//                     const maxScroll = scrollWidth - clientWidth;
//                     const targetScrollLeft = totalPages > 1 ? (i / (totalPages - 1)) * maxScroll : 0;
//                     scrollRef.current.scrollTo({
//                       left: targetScrollLeft,
//                       behavior: 'smooth'
//                     });
//                   }
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="relative group/slider px-4 md:px-12">
//         {canScrollLeft && (
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white shadow-xl rounded-full opacity-90 hover:opacity-100 transition-all flex items-center justify-center"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
//           </button>
//         )}

//         {canScrollRight && (
//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white shadow-xl rounded-full opacity-90 hover:opacity-100 transition-all flex items-center justify-center"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
//           </button>
//         )}

//         <div 
//           ref={scrollRef}
//           className="flex gap-1.5 md:gap-2 overflow-x-auto overflow-y-hidden pt-8 md:pt-10 pb-8 md:pb-10 scroll-smooth hide-scrollbar"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {theme.modules.map((module, index) => (
//             <div
//               key={module.code}
//               className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] cursor-pointer"
//               onMouseEnter={() => setHoveredModule(module.code)}
//               onMouseLeave={() => setHoveredModule(null)}
//               onClick={() => {
//                 // ========================================
//                 // ============ CORRECTION ICI ============
//                 window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//                 // ========================================
//                 setSelectedTheme(theme);
//                 setSelectedModule(module);
//                 setCurrentPage('theme');
//               }}
//             >
//               <div 
//                 className={`relative rounded-md overflow-visible bg-white shadow-lg border border-gray-100 transition-all duration-300 ${
//                   hoveredModule === module.code 
//                     ? 'scale-110 md:scale-125 z-50 shadow-2xl -translate-y-2 md:-translate-y-4' 
//                     : 'scale-100 z-0'
//                 }`}
//                 style={{
//                   transformOrigin: index === 0 ? 'left' : index === theme.modules.length - 1 ? 'right' : 'center'
//                 }}
//               >
//                 <div className={`relative rounded-md overflow-hidden transition-opacity duration-300 ${
//                   hoveredModule === module.code ? 'opacity-0' : 'opacity-100'
//                 }`}>
//                   <div className="relative aspect-video">
//                     <Image
//                       src={module.image || themeImage}
//                       alt={module.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
//                     <div className="absolute top-2 left-2 px-2 py-1 bg-primary-600 text-white rounded text-xs font-bold shadow-lg">
//                       {module.code}
//                     </div>
//                     {index === 0 && (
//                       <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-xs font-bold shadow-lg">
//                         🔥 Top
//                       </div>
//                     )}
//                     <div className="absolute bottom-0 left-0 right-0 p-2">
//                       <h3 className="text-white font-bold text-xs md:text-sm leading-tight line-clamp-2">
//                         {module.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 {hoveredModule === module.code && (
//                   <div className="absolute inset-0 rounded-md overflow-hidden bg-white shadow-2xl border border-gray-200">
//                     <div className="relative aspect-video">
//                       <Image
//                         src={module.image || themeImage}
//                         alt={module.title}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
//                         priority
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
//                       <div className="absolute top-2 left-2 px-2 py-1 bg-primary-600 text-white rounded text-xs font-bold shadow-lg">
//                         {module.code}
//                       </div>
//                     </div>

//                     <div className="p-4 bg-white border-t border-gray-200">
//                       <h3 className="text-gray-900 font-bold text-sm md:text-base mb-2 line-clamp-2">
//                         {module.title}
//                       </h3>
//                       <p className="text-gray-700 text-xs line-clamp-3 mb-3 leading-relaxed">
//                         {module.themeDetail}
//                       </p>
//                       <div className="flex items-center justify-between text-xs">
//                         <span className="text-gray-600 flex items-center font-medium">
//                           <BookOpen className="w-3 h-3 mr-1.5" />
//                           {module.sessions.length} sessions
//                         </span>
//                         <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
//                           Voir détails 
//                           <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// // Composant principal
// export default function FormationPage({ 
//   setCurrentPage, 
//   setSelectedTheme, 
//   setSelectedModule 
// }: FormationPageProps) {
//   return (
//     <>
//       {/* Hero */}
//       <div className="pt-28 pb-16 bg-gray-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.05),transparent)]"></div>
//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
//             Catalogue de Formations 2026
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//             Choisissez parmi nos pôles d'expertise pour propulser votre carrière
//           </p>
//         </div>
//       </div>

//       {/* Catalogue des Thèmes */}
//       <section className="pt-8 md:pt-12 pb-4 md:pb-8 bg-white">
//         <div className="max-w-[1920px] mx-auto">
//           {FORMATION_CATALOGUE.map((theme) => (
//             <ThemeRow 
//               key={theme.slug} 
//               theme={theme}
//               setCurrentPage={setCurrentPage}
//               setSelectedTheme={setSelectedTheme}
//               setSelectedModule={setSelectedModule}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Tarifs */}
//       <section className="py-10 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
//         {/* Effets de fond */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>
        
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <Tarifs />
//         </div>
//       </section>

//       <style jsx>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </>
//   );
// }




'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  MapPin,
  Euro,
  ArrowRight,
  Info,
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  Sparkles,
} from 'lucide-react';
import { FORMATION_CATALOGUE } from '@/data/catalogue';
import { Theme, Module } from '@/types/index';
import Tarifs from '@/components/Tarifs';

interface FormationPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedTheme: (theme: Theme) => void;
  setSelectedModule: (module: Module) => void;
}

// --- COMPOSANT THEMEROW ---
function ThemeRow({
  theme,
  setCurrentPage,
  setSelectedTheme,
  setSelectedModule,
}: {
  theme: Theme;
  setCurrentPage: (page: string) => void;
  setSelectedTheme: (theme: Theme) => void;
  setSelectedModule: (module: Module) => void;
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
        behavior: 'smooth',
      });
    }
  };

  const currentPage = Math.min(
    Math.floor(scrollProgress * totalPages),
    totalPages - 1
  );
  const themeImage =
    theme.image ||
    theme.modules[0]?.image ||
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop';

  return (
    <div className="mb-10 group/row">
      {/* Theme Header - Modern Style */}
      <div className="mb-6 px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Modern Icon Badge */}
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 transition-all cursor-pointer group-hover/row:text-red-600">
              {theme.title}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">{theme.modules.length} formations disponibles</p>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="hidden md:flex gap-2 items-center bg-white px-3 py-2 rounded-full shadow-sm border border-gray-200">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'w-8 bg-red-600'
                    : 'w-2 bg-gray-300 hover:bg-red-400'
                }`}
                onClick={() => {
                  if (scrollRef.current) {
                    const { scrollWidth, clientWidth } = scrollRef.current;
                    const maxScroll = scrollWidth - clientWidth;
                    const targetScrollLeft =
                      totalPages > 1 ? (i / (totalPages - 1)) * maxScroll : 0;
                    scrollRef.current.scrollTo({
                      left: targetScrollLeft,
                      behavior: 'smooth',
                    });
                  }
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative group/slider px-4 md:px-12">
        {/* Modern Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-red-600 text-red-600 hover:text-white shadow-xl hover:shadow-2xl rounded-full transition-all duration-300 flex items-center justify-center border-2 border-red-100 hover:border-red-600 group/btn"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover/btn:scale-110 transition-transform" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-red-600 text-red-600 hover:text-white shadow-xl hover:shadow-2xl rounded-full transition-all duration-300 flex items-center justify-center border-2 border-red-100 hover:border-red-600 group/btn"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover/btn:scale-110 transition-transform" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto overflow-y-hidden pt-10 md:pt-12 pb-10 md:pb-12 scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {theme.modules.map((module, index) => (
            <div
              key={module.code}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] cursor-pointer"
              onMouseEnter={() => setHoveredModule(module.code)}
              onMouseLeave={() => setHoveredModule(null)}
              onClick={() => {
                window.scrollTo(0, 0);
                setSelectedTheme(theme);
                setSelectedModule(module);
                setCurrentPage('formation-detail');
              }}
            >
              <div
                className={`relative rounded-2xl overflow-visible bg-white transition-all duration-500 ${
                  hoveredModule === module.code
                    ? 'scale-105 md:scale-110 z-50 shadow-2xl -translate-y-3 md:-translate-y-6'
                    : 'scale-100 z-0 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  transformOrigin:
                    index === 0
                      ? 'left'
                      : index === theme.modules.length - 1
                      ? 'right'
                      : 'center',
                }}
              >
                {/* Card Normal State */}
                <div
                  className={`relative rounded-2xl overflow-hidden transition-opacity duration-300 border border-gray-100 ${
                    hoveredModule === module.code
                      ? 'opacity-0'
                      : 'opacity-100'
                  }`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={module.image || themeImage}
                      alt={module.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Modern Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-red-600 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      {module.code}
                    </div>
                    
                    {index === 0 && (
                      <div className="absolute top-3 right-3 px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Top
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2 mb-2">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{module.sessions.length} sessions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Hover State - Modern Design */}
                {hoveredModule === module.code && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-red-600/20">
                    <div className="relative aspect-video">
                      <Image
                        src={module.image || themeImage}
                        alt={module.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 340px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                      
                      {/* Animated Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        {module.code}
                      </div>
                    </div>

                    <div className="p-5 bg-white">
                      <h3 className="text-gray-900 font-bold text-base md:text-lg mb-3 line-clamp-2 leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm line-clamp-3 mb-4 leading-relaxed">
                        {module.themeDetail}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="text-xs font-semibold text-gray-700">
                            {module.sessions.length} sessions
                          </span>
                        </div>
                        
                        <div className="flex items-center text-red-600 font-bold text-sm hover:text-red-700 transition-colors group/link">
                          <span>Voir détails</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
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
export default function FormationPage({
  setCurrentPage,
  setSelectedTheme,
  setSelectedModule,
}: FormationPageProps) {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash, false);

    return () => {
      window.removeEventListener('hashchange', scrollToHash, false);
    };
  }, []);

  return (
    <>
      {/* Hero - Modern Design */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-gray-50 via-red-50/30 to-white relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-semibold mb-6 shadow-sm">
            <Star className="w-4 h-4 fill-red-600 text-red-600" />
            <span>Nouveau Catalogue 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          Pôle Formation 
            <span className="block text-red-600 mt-2">2026</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choisissez parmi nos pôles d'expertise pour propulser votre carrière
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center gap-3 mt-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">+50 Formations</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
              <Check className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-gray-700">Certifiées</span>
            </div>
          </div>
        </div>
      </div>

      {/* Catalogue des Thèmes */}
      <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1920px] mx-auto">
          {FORMATION_CATALOGUE.map((theme) => (
            <div
              id={`theme-${theme.slug}`}
              key={theme.slug}
              style={{ scrollMarginTop: '120px' }}
            >
              <ThemeRow
                theme={theme}
                setCurrentPage={setCurrentPage}
                setSelectedTheme={setSelectedTheme}
                setSelectedModule={setSelectedModule}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Tarifs setCurrentPage={setCurrentPage} />
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