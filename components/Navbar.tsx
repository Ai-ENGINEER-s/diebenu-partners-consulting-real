// app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  ChevronRight,
  BookOpen,
  Briefcase,
  Zap,
  Search,
  LayoutGrid,
  Award,
  Loader2,
  Download,
  Send,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import { FORMATION_CATALOGUE } from '@/data/catalogue';
import { Etude_CATALOGUE } from '@/data/catalogue';
import { Conseil_CATALOGUE } from '@/data/catalogue';
import { Financement_CATALOGUE } from '@/data/catalogue';
import MegaMenuFormation from '@/components/MegaMenuFormation';
import MegaMenuEtude from '@/components/MegaMenuEtude';
import MegaMenuConseil from '@/components/MegaMenuConseil';
import MegaMenuFinancement from '@/components/MegaMenuFinancement';
import {
  Theme,
  Module,
  ThemeForOtherPages,
  ModuleForOtherPages,
} from '@/types/index';
import SearchOverlay from '@/components/SearchOverlay';
import PdfDownloadModal from '@/components/PdfDownloadModal';
import { GenericSearchResult } from '@/types/index';
import { NavbarProps } from '@/types/index';




// ============ Composant Principal Navbar ============

export default function Navbar({
  currentPage,
  setCurrentPage,
  setSelectedTheme,
  setSelectedModule,
  setSelectedEtudeTheme,
  setSelectedEtudeModule,
  setSelectedConseilTheme,
  setSelectedConseilModule,
  setSelectedFinancementTheme,
  setSelectedFinancementModule,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfDownloadAuthorized, setPdfDownloadAuthorized] = useState(false);

  // =========================================================================
  // FONCTION DE RECHERCHE
  // =========================================================================
  const searchResults: GenericSearchResult[] = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const lowerSearch = searchTerm.toLowerCase();
    const results: GenericSearchResult[] = [];

    // Recherche FORMATIONS
    FORMATION_CATALOGUE.forEach((theme) => {
      theme.modules.forEach((module) => {
        const matchCode = module.code.toLowerCase().includes(lowerSearch);
        const matchTitle = module.title.toLowerCase().includes(lowerSearch);

        if (matchCode || matchTitle) {
          results.push({
            page: 'formation',
            type: 'module',
            title: `${module.code} : ${module.title}`,
            detail: `Thème: ${theme.title}`,
            theme: theme,
            module: module,
            icon: 'book',
          });
        }
      });
    });

    // Recherche CONSEIL
    Conseil_CATALOGUE.forEach((theme) => {
      theme.modules.forEach((module) => {
        if (module.title.toLowerCase().includes(lowerSearch)) {
          results.push({
            page: 'conseil',
            type: 'module',
            title: module.title,
            detail: `Pôle: ${theme.title}`,
            theme: theme,
            module: module,
            icon: 'briefcase',
          });
        }
      });
    });

    // Recherche ETUDES
    Etude_CATALOGUE.forEach((theme) => {
      theme.modules.forEach((module) => {
        if (module.title.toLowerCase().includes(lowerSearch)) {
          results.push({
            page: 'etude',
            type: 'module',
            title: module.title,
            detail: `Pôle: ${theme.title}`,
            theme: theme,
            module: module,
            icon: 'file',
          });
        }
      });
    });

    // Recherche FINANCEMENT
    Financement_CATALOGUE.forEach((theme) => {
      theme.modules.forEach((module) => {
        if (module.title.toLowerCase().includes(lowerSearch)) {
          results.push({
            page: 'financement',
            type: 'module',
            title: module.title,
            detail: `Pôle: ${theme.title}`,
            theme: theme,
            module: module,
            icon: 'zap',
          });
        }
      });
    });

    const uniqueResults = Array.from(
      new Map(results.map((item) => [item.title, item])).values()
    );
    return uniqueResults.slice(0, 8);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || isSearchOpen || showPdfModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, isSearchOpen, showPdfModal]);

  const navItems = [
    { label: 'Accueil', page: 'home', icon: LayoutGrid },
    { label: 'Formations', page: 'formation', hasMega: true, icon: BookOpen },
    { label: 'Conseil', page: 'conseil', hasMega: true, icon: Briefcase },
    {
      label: 'Recherche de Financement',
      page: 'recherche',
      hasMega: true,
      icon: Zap,
    },
    { label: 'Etudes', page: 'etude', hasMega: true, icon: FileText },
    { label: 'À propos', page: 'about', icon: Award },
  ];

  const handlePageChange = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleThemeSelect = (theme: Theme) => {
    window.scrollTo(0, 0);
    setSelectedTheme(theme);
    setCurrentPage('theme');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleMegaMenuFormationSelect = (theme: Theme) => {
    window.location.hash = `theme-${theme.slug}`;

    if (currentPage === 'formation') {
      const element = document.getElementById(`theme-${theme.slug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
      setCurrentPage('formation');
    }

    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleEtudeThemeSelect = (theme: ThemeForOtherPages) => {
    window.scrollTo(0, 0);
    setSelectedEtudeTheme(theme);
    setCurrentPage('etude');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleEtudeModuleSelect = (
    module: ModuleForOtherPages,
    theme: ThemeForOtherPages
  ) => {
    window.scrollTo(0, 0);
    setSelectedEtudeTheme(theme);
    setSelectedEtudeModule(module);
    setCurrentPage('etude-detail');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleConseilThemeSelect = (theme: ThemeForOtherPages) => {
    window.scrollTo(0, 0);
    setSelectedConseilTheme(theme);
    setCurrentPage('conseil');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleConseilModuleSelect = (
    module: ModuleForOtherPages,
    theme: ThemeForOtherPages
  ) => {
    window.scrollTo(0, 0);
    setSelectedConseilTheme(theme);
    setSelectedConseilModule(module);
    setCurrentPage('conseil-detail');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleFinancementThemeSelect = (theme: ThemeForOtherPages) => {
    window.scrollTo(0, 0);
    setSelectedFinancementTheme(theme);
    setCurrentPage('recherche');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleFinancementModuleSelect = (
    module: ModuleForOtherPages,
    theme: ThemeForOtherPages
  ) => {
    window.scrollTo(0, 0);
    setSelectedFinancementTheme(theme);
    setSelectedFinancementModule(module);
    setCurrentPage('financement-detail');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
    setIsSearchOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    setSearchTerm('');
    setMobileMenuOpen(false);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length >= 2) {
      setSearchLoading(true);
      setTimeout(() => {
        setSearchLoading(false);
      }, 300);
    } else {
      setSearchLoading(false);
    }
  };

  const handleSearchSelect = (result: GenericSearchResult) => {
    switch (result.page) {
      case 'formation':
        if (result.type === 'theme') {
          handleMegaMenuFormationSelect(result.theme);
        } else if (result.type === 'module') {
          window.scrollTo(0, 0);
          setSelectedTheme(result.theme);
          setSelectedModule(result.module);
          setCurrentPage('formation-detail');
          setActiveMegaMenu(null);
          setMobileMenuOpen(false);
          setMobileSubMenuOpen(null);
        }
        break;
      case 'conseil':
        handleConseilModuleSelect(result.module, result.theme);
        break;
      case 'etude':
        handleEtudeModuleSelect(result.module, result.theme);
        break;
      case 'financement':
        handleFinancementModuleSelect(result.module, result.theme);
        break;
    }

    setIsSearchOpen(false);
    setSearchTerm('');
  };

  const toggleMobileSubMenu = (page: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === page ? null : page);
  };

  const handlePdfDownloadClick = () => {
    setShowPdfModal(true);
    setMobileMenuOpen(false);
  };

  const handleClosePdfModal = () => {
    setShowPdfModal(false);
    setPdfDownloadAuthorized(false);
  };

  const handleFormSuccess = () => {
    setPdfDownloadAuthorized(true);
  };

  const handleDownloadPdf = () => {
    const pdfPath = '/documents/catalogue-formations.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Catalogue_Formations_Diebenu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      handleClosePdfModal();
    }, 500);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled
            ? 'bg-white/70 backdrop-blur-3xl shadow-xl'
            : 'bg-white/90 backdrop-blur-md'
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* ========== NOUVEAU LAYOUT RESPONSIVE (lg+) ========== */}
          {/* Changement: 'xl:gap-8' enlevé, 'lg:flex' utilisé comme breakpoint principal */}
          <div className="flex items-center justify-between h-20 sm:h-24 gap-4 lg:gap-6">
            
            {/* 1. Logo (Extrémité Gauche) */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handlePageChange('home')}
                className="flex items-center group transition-transform hover:scale-[1.02] duration-300"
              >
                <Image
                  src="/images/logo/logotrans.png"
                  alt="Diebenu & Partners Logo"
                  width={160}
                  height={40}
                  priority
                  className="object-contain w-32 h-8 sm:w-44 sm:h-11 lg:w-52 lg:h-13 xl:w-56 xl:h-14"
                />
              </button>
            </div>

            {/* 2. Menu Central (Navigation + Actions) - Visible en lg+ */}
            {/* Changement: 'hidden xl:flex' -> 'hidden lg:flex', 'flex-1' supprimé, gap ajusté */}
            <div className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 xl:gap-3">
              {/* Items de navigation */}
              {navItems.map((item) => (
                <div
                  key={item.page}
                  onMouseEnter={() =>
                    item.hasMega ? setActiveMegaMenu(item.page) : setActiveMegaMenu(null)
                  }
                  className="relative group"
                >
                  <button
                    onClick={() => handlePageChange(item.page)}
                    className={`text-sm font-semibold transition-all duration-300 flex items-center whitespace-nowrap
                      ${
                        currentPage === item.page
                          ? 'px-4 py-2.5 rounded-full text-white bg-red-600 shadow-md shadow-red-300'
                          : `px-3 py-2 rounded-lg text-gray-700 ${
                              activeMegaMenu === item.page
                                ? 'bg-red-50 text-red-700'
                                : 'hover:bg-red-50'
                            }`
                      }`}
                  >
                    {item.label}
                    {item.hasMega && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
                          activeMegaMenu === item.page ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>
                  {activeMegaMenu === item.page && item.hasMega && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}

              {/* Séparateur visuel */}
              <div className="w-2 xl:w-4" aria-hidden="true" />

              {/* Bouton PDF Desktop (DÉPLACÉ ICI) */}
              <button
                onClick={handlePdfDownloadClick}
                className="px-3 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs xl:text-sm font-semibold rounded-full shadow-lg hover:shadow-blue-500/50 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 xl:gap-2"
              >
                <Download className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span className="hidden xl:inline whitespace-nowrap">Catalogue 2026</span>
                <span className="xl:hidden">PDF</span>
              </button>

              {/* Bouton Recherche (DÉPLACÉ ICI) */}
              <button
                onClick={handleSearchClick}
                className="p-2.5 xl:p-3 rounded-full transition-all text-gray-500 hover:text-red-600 hover:bg-gray-100"
              >
                <Search className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>
            </div>

            {/* 3. Extrémité Droite (Contact & Toggles) */}
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
              
              {/* Bouton Contact (lg+) (DÉPLACÉ ICI) */}
              <button
                onClick={() => handlePageChange('contact')}
                className="hidden lg:flex px-4 xl:px-6 py-2 xl:py-2.5 bg-gray-900 text-white text-xs xl:text-sm font-semibold rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact
              </button>
            
              {/* Actions Tablet (md-lg) (INCHANGÉ, MAIS MAINTENANT DANS CE GROUPE) */}
              <div className="hidden md:flex lg:hidden items-center gap-2">
                <button
                  onClick={handlePdfDownloadClick}
                  className="p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all"
                  title="Télécharger PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleSearchClick}
                  className="p-2.5 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-all"
                >
                  <Search className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-full text-gray-800 hover:bg-gray-100 transition-all"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Bouton Menu Mobile (<md) (INCHANGÉ, MAIS MAINTENANT DANS CE GROUPE) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-all flex-shrink-0"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div> {/* Fin du groupe de droite */}
          </div> {/* Fin du flex justify-between */}
        </div>

        {/* Mega Menus Desktop */}
        {/* Changement: 'xl:block' -> 'lg:block' */}
        <div className="hidden lg:block">
          {activeMegaMenu === 'formation' && (
            <MegaMenuFormation onThemeSelect={handleMegaMenuFormationSelect} />
          )}
          {activeMegaMenu === 'conseil' && (
            <MegaMenuConseil
              onThemeSelect={handleConseilThemeSelect}
              onModuleSelect={handleConseilModuleSelect}
            />
          )}
          {activeMegaMenu === 'recherche' && (
            <MegaMenuFinancement
              onThemeSelect={handleFinancementThemeSelect}
              onModuleSelect={handleFinancementModuleSelect}
            />
          )}
          {activeMegaMenu === 'etude' && (
            <MegaMenuEtude
              onThemeSelect={handleEtudeThemeSelect}
              onModuleSelect={handleEtudeModuleSelect}
            />
          )}
        </div>
      </nav>

      {/* Menu Mobile/Tablet */}
      {/* Changement: 'xl:hidden' -> 'lg:hidden' */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="h-20 sm:h-24"></div>
          <div className="h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.page}>
                  <button
                    onClick={() => {
                      if (item.hasMega) {
                        toggleMobileSubMenu(item.page);
                      } else {
                        handlePageChange(item.page);
                      }
                    }}
                    className={`block w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-200 flex items-center justify-between ${
                      currentPage === item.page && !item.hasMega
                        ? 'bg-red-600 text-white shadow-md shadow-red-300'
                        : 'text-gray-800 hover:bg-red-50'
                    }`}
                  >
                    <span className="flex items-center">
                      {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                      {item.label}
                    </span>
                    {item.hasMega && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileSubMenuOpen === item.page ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>

                  {/* Sous-menus */}
                  {item.page === 'formation' && mobileSubMenuOpen === 'formation' && (
                    <div className="mt-2 ml-2 sm:ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                      {FORMATION_CATALOGUE.slice(0, 8).map((theme) => (
                        <button
                          key={theme.slug}
                          onClick={() => handleMegaMenuFormationSelect(theme)}
                          className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                        >
                          <span className="font-medium">{theme.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange('formation')}
                        className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
                      >
                        Voir tout le catalogue →
                      </button>
                    </div>
                  )}

                  {item.page === 'conseil' && mobileSubMenuOpen === 'conseil' && (
                    <div className="mt-2 ml-2 sm:ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                      {Conseil_CATALOGUE.map((theme) => (
                        <button
                          key={theme.slug}
                          onClick={() => handleConseilThemeSelect(theme)}
                          className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                        >
                          <span className="font-medium line-clamp-2">{theme.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  )}

                  {item.page === 'recherche' && mobileSubMenuOpen === 'recherche' && (
                    <div className="mt-2 ml-2 sm:ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                      {Financement_CATALOGUE.map((theme) => (
                        <button
                          key={theme.slug}
                          onClick={() => handleFinancementThemeSelect(theme)}
                          className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                        >
                          <span className="font-medium line-clamp-2">{theme.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  )}

                  {item.page === 'etude' && mobileSubMenuOpen === 'etude' && (
                    <div className="mt-2 ml-2 sm:ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                      {Etude_CATALOGUE.map((theme) => (
                        <button
                          key={theme.slug}
                          onClick={() => handleEtudeThemeSelect(theme)}
                          className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                        >
                          <span className="font-medium line-clamp-2">{theme.title}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                <button
                  onClick={handlePdfDownloadClick}
                  className="w-full flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-7A00 transition-all shadow-lg"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Télécharger le catalogue PDF
                </button>

                <button
                  onClick={handleSearchClick}
                  className="w-full flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all md:hidden"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Rechercher
                </button>

                <button
                  onClick={() => handlePageChange('contact')}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay de Recherche */}
      <SearchOverlay
        isOpen={isSearchOpen}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        searchResults={searchResults}
        onSelect={handleSearchSelect}
        onClose={handleCloseSearch}
        isLoading={searchLoading}
      />

      {/* Modal de téléchargement PDF */}
      <PdfDownloadModal
        isOpen={showPdfModal}
        onClose={handleClosePdfModal}
        onFormSuccess={handleFormSuccess}
        isAuthorized={pdfDownloadAuthorized}
        onDownload={handleDownloadPdf}
      />
    </>
  );
}


