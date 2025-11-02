// // app/components/Navbar.tsx
// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { Menu, X, ChevronDown, FileText, ChevronRight, BookOpen, Briefcase, Zap, Search, LayoutGrid, Award, Loader2, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react';
// import Image from "next/image";
// import { FORMATION_CATALOGUE } from '@/data/catalogue';
// import { Etude_CATALOGUE } from '@/data/catalogue'; 
// import { Conseil_CATALOGUE } from '@/data/catalogue'; 
// import { Financement_CATALOGUE } from '@/data/catalogue'; // <-- AJOUTÉ
// import MegaMenuFormation from '@/components/MegaMenuFormation';
// import MegaMenuEtude from '@/components/MegaMenuEtude';
// import MegaMenuConseil from '@/components/MegaMenuConseil'; 
// import MegaMenuFinancement from '@/components/MegaMenuFinancement'; // <-- AJOUTÉ
// import { Theme, SearchResult, ThemeForOtherPages, ModuleForOtherPages } from '@/types/index';


// // =========================================================================

// interface NavbarProps {
//     currentPage: string;
//     setCurrentPage: (page: string) => void;
//     setSelectedTheme: (theme: Theme) => void;
//     setSelectedEtudeTheme: (theme: ThemeForOtherPages) => void;
//     setSelectedEtudeModule: (module: ModuleForOtherPages) => void;
//     setSelectedConseilTheme: (theme: ThemeForOtherPages) => void; 
//     setSelectedConseilModule: (module: ModuleForOtherPages) => void;
//     setSelectedFinancementTheme: (theme: ThemeForOtherPages) => void; // <-- AJOUTÉ
//     setSelectedFinancementModule: (module: ModuleForOtherPages) => void; // <-- AJOUTÉ
// }

// // ============ Composant Principal Navbar ============

// export default function Navbar({ 
//     currentPage, 
//     setCurrentPage, 
//     setSelectedTheme, 
//     setSelectedEtudeTheme,
//     setSelectedEtudeModule,
//     setSelectedConseilTheme,
//     setSelectedConseilModule,
//     setSelectedFinancementTheme, // <-- AJOUTÉ
//     setSelectedFinancementModule // <-- AJOUTÉ
// }: NavbarProps) {
//     const [scrolled, setScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
//     const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchLoading, setSearchLoading] = useState(false);

//     // ... (Fonction de recherche, useEffects... restent inchangés) ...
//      // Fonction de recherche
//      const searchResults: SearchResult[] = useMemo(() => {
//          if (!searchTerm || searchTerm.length < 2) return [];
         
//          const lowerSearch = searchTerm.toLowerCase();
//          const results: SearchResult[] = [];

//          FORMATION_CATALOGUE.forEach(theme => {
//              if (theme.title.toLowerCase().includes(lowerSearch)) {
//                  results.push({
//                      type: 'theme',
//                      title: theme.title,
//                      detail: `${theme.modules.length} modules disponibles`,
//                      targetTheme: theme,
//                  });
//              }

//              theme.modules.forEach(module => {
//                  const matchCode = module.code.toLowerCase().includes(lowerSearch);
//                  const matchTitle = module.title.toLowerCase().includes(lowerSearch);
                 
//                  if (matchCode || matchTitle) {
//                      results.push({
//                          type: 'module',
//                          title: `${module.code} : ${module.title}`,
//                          detail: `Thème: ${theme.title}`,
//                          targetTheme: theme,
//                          moduleCode: module.code,
//                      });
//                  }
//              });
//          });

//          const uniqueResults = Array.from(new Map(results.map(item => [item.title, item])).values());
//          return uniqueResults.slice(0, 8);
//      }, [searchTerm]);

//     useEffect(() => {
//          const handleScroll = () => setScrolled(window.scrollY > 80);
//          window.addEventListener('scroll', handleScroll);
//          return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Empêcher le scroll du body quand le menu mobile est ouvert
//     useEffect(() => {
//          if (mobileMenuOpen) {
//              document.body.style.overflow = 'hidden';
//          } else {
//              document.body.style.overflow = 'unset';
//          }
//          return () => {
//              document.body.style.overflow = 'unset';
//          };
//     }, [mobileMenuOpen]);

//     const navItems = [
//          { label: 'Accueil', page: 'home', icon: LayoutGrid },
//          { label: 'Formations', page: 'formation', hasMega: true, icon: BookOpen },
//          { label: 'Conseil', page: 'conseil', hasMega: true, icon: Briefcase },
//          { label: 'Recherche de Financement', page: 'recherche', hasMega: true, icon: Zap }, // <-- MODIFIÉ
//          { label: 'Etude', page: 'etude', hasMega: true, icon: FileText },
//          { label: 'À propos', page: 'about', icon: Award },
//     ];

//     const handlePageChange = (page: string) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setCurrentPage(page);
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };

//     // Handler pour FORMATION
//     const handleThemeSelect = (theme: Theme) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedTheme(theme);
//         setCurrentPage('theme'); 
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };

//     // Handlers pour ETUDE
//     const handleEtudeThemeSelect = (theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedEtudeTheme(theme);
//         setCurrentPage('etude'); 
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };
    
//     const handleEtudeModuleSelect = (module: ModuleForOtherPages, theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedEtudeTheme(theme);
//         setSelectedEtudeModule(module);
//         setCurrentPage('etude-detail'); 
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };

//     // Handlers pour CONSEIL
//     const handleConseilThemeSelect = (theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedConseilTheme(theme);
//         setCurrentPage('conseil'); 
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };
    
//     const handleConseilModuleSelect = (module: ModuleForOtherPages, theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedConseilTheme(theme);
//         setSelectedConseilModule(module);
//         setCurrentPage('conseil-detail');
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };

//     // =======================================================
//     // <-- AJOUTÉ : Nouveaux handlers pour FINANCEMENT
//     // =======================================================
//     const handleFinancementThemeSelect = (theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedFinancementTheme(theme);
//         setCurrentPage('recherche'); // Navigue vers la page catalogue 'recherche'
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };
    
//     const handleFinancementModuleSelect = (module: ModuleForOtherPages, theme: ThemeForOtherPages) => {
//         window.scrollTo(0, 0); // <-- CORRECTION AJOUTÉE
//         setSelectedFinancementTheme(theme); // Définit le thème parent
//         setSelectedFinancementModule(module); // Définit le module spécifique
//         setCurrentPage('financement-detail'); // Navigue vers la page de détail
//         setActiveMegaMenu(null);
//         setMobileMenuOpen(false);
//         setMobileSubMenuOpen(null);
//         setIsSearchOpen(false);
//     };
//     // =======================================================

//     // ... (handlers de recherche... restent inchangés) ...
//     const handleSearchClick = () => {
//          setIsSearchOpen(true);
//          setSearchTerm('');
//          setMobileMenuOpen(false);
//     };
    
//     const handleCloseSearch = () => {
//          setIsSearchOpen(false);
//     };

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//          const value = e.target.value;
//          setSearchTerm(value);
//          if (value.length >= 2) {
//              setSearchLoading(true);
//              setTimeout(() => {
//                  setSearchLoading(false);
//              }, 300);
//          } else {
//              setSearchLoading(false);
//          }
//     };

//     const handleSearchSelect = (result: SearchResult) => {
//          // Pas besoin d'ajouter window.scrollTo(0,0) ici
//          // car il est DÉJÀ dans handleThemeSelect()
//          handleThemeSelect(result.targetTheme);
//          setIsSearchOpen(false);
//          setSearchTerm('');
//     };

//     const toggleMobileSubMenu = (page: string) => {
//          setMobileSubMenuOpen(mobileSubMenuOpen === page ? null : page);
//     };


//     return (
//          <>
//              <nav 
//                  className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
//                      scrolled 
//                          ? 'bg-white/70 backdrop-blur-3xl shadow-xl border-b border-white/50' 
//                          : 'bg-white/90 backdrop-blur-md'
//                  }`}
//                  onMouseLeave={() => setActiveMegaMenu(null)}
//              >
//                  <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                      <div className="flex justify-between items-center h-24">
//                          {/* Logo */}
//                          <button onClick={() => handlePageChange('home')} className="flex items-center group transition-transform hover:scale-[1.02] duration-300 relative z-50">
//                              <Image
//                                  src="/images/logo/logotrans.png"
//                                  alt="Diebenu & Partners Logo"
//                                  width={180} 
//                                  height={45} 
//                                  priority
//                              />
//                          </button>

//                          {/* Menu Desktop */}
//                          <div className="hidden lg:flex items-center space-x-2">
//                              {navItems.map(item => (
//                                  <div
//                                      key={item.page}
//                                      onMouseEnter={() => item.hasMega ? setActiveMegaMenu(item.page) : setActiveMegaMenu(null)}
//                                      className="relative group"
//                                  >
//                                      {/* Bouton stylisé (corrigé dans la réponse précédente) */}
//                                      <button
//                                          onClick={() => handlePageChange(item.page)}
//                                          className={`text-base font-semibold transition-all duration-300 flex items-center
//                                              ${
//                                              currentPage === item.page
//                                                  ? 'px-5 py-2.5 rounded-full text-white bg-red-600 shadow-md shadow-red-300'
//                                                  : `px-3 py-2 rounded-lg text-gray-700 ${
//                                                      activeMegaMenu === item.page 
//                                                      ? 'bg-red-50 text-red-700'
//                                                      : 'hover:bg-red-50'
//                                                      }`
//                                              }
//                                          `}
//                                      >
//                                          {item.label}
//                                          {item.hasMega && <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeMegaMenu === item.page ? 'rotate-180' : 'rotate-0'}`} />}
//                                      </button>
//                                      {activeMegaMenu === item.page && item.hasMega && (
//                                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
//                                      )}
//                                  </div>
//                              ))}
//                          </div>

//                          {/* Actions additionnelles (Recherche et CTA) */}
//                          <div className="hidden lg:flex items-center space-x-4">
//                              <button 
//                                  onClick={handleSearchClick}
//                                  className={`p-3 rounded-full transition-all text-gray-500 hover:text-red-600 hover:bg-gray-100`}
//                              >
//                                  <Search className="w-5 h-5" />
//                              </button>
//                              <button 
//                                  onClick={() => handlePageChange('contact')}
//                                  className="px-6 py-2.5 bg-gray-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
//                              >
//                                  Contact
//                              </button>
//                          </div>

//                          {/* Bouton Menu Mobile */}
//                          <button
//                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                              className="lg:hidden p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all relative z-50"
//                          >
//                              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//                          </button>
//                      </div>
//                  </div>
                 
//                  {/* Mega Menus Desktop (Pleine largeur) */}
//                  <div className="hidden lg:block">
//                      {activeMegaMenu === 'formation' && (
//                          <MegaMenuFormation onThemeSelect={handleThemeSelect} />
//                      )}
                     
//                      {activeMegaMenu === 'conseil' && (
//                          <MegaMenuConseil 
//                              onThemeSelect={handleConseilThemeSelect}
//                              onModuleSelect={handleConseilModuleSelect}
//                          />
//                      )}

//                      {activeMegaMenu === 'recherche' && (
//                          <MegaMenuFinancement 
//                              onThemeSelect={handleFinancementThemeSelect}
//                              onModuleSelect={handleFinancementModuleSelect}
//                          />
//                      )}
                     
//                      {activeMegaMenu === 'etude' && (
//                          <MegaMenuEtude 
//                              onThemeSelect={handleEtudeThemeSelect} 
//                              onModuleSelect={handleEtudeModuleSelect} 
//                          />
//                      )}
//                  </div>
//              </nav>

//              {/* Menu Mobile - En dehors de la nav principale */}
//              {mobileMenuOpen && (
//                  <div className="lg:hidden fixed inset-0 z-40 bg-white">
//                      {/* Espace pour la navbar */}
//                      <div className="h-24"></div>
                     
//                      {/* Contenu du menu */}
//                      <div className="h-[calc(100vh-6rem)] overflow-y-auto">
//                          <div className="px-6 py-4 space-y-2">
//                              {navItems.map(item => (
//                                  <div key={item.page}>
//                                      <button
//                                          onClick={() => {
//                                              if (item.hasMega) {
//                                                  toggleMobileSubMenu(item.page);
//                                              } else {
//                                                  handlePageChange(item.page);
//                                              }
//                                          }}
//                                          className={`block w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all duration-200 flex items-center justify-between ${
//                                              currentPage === item.page && !item.hasMega
//                                                  ? 'bg-red-600 text-white shadow-md shadow-red-300'
//                                                  : 'text-gray-800 hover:bg-red-50'
//                                          }`}
//                                      >
//                                          <span className='flex items-center'>
//                                              {item.icon && <item.icon className='w-5 h-5 mr-3' />}
//                                              {item.label}
//                                          </span>
//                                          {item.hasMega && (
//                                              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
//                                                  mobileSubMenuOpen === item.page ? 'rotate-180' : 'rotate-0'
//                                              }`} />
//                                          )}
//                                      </button>

//                                      {/* Sous-menu mobile pour Formations */}
//                                      {item.page === 'formation' && mobileSubMenuOpen === 'formation' && (
//                                          <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
//                                              {FORMATION_CATALOGUE.slice(0, 8).map(theme => (
//                                                  <button
//                                                      key={theme.slug}
//                                                      onClick={() => handleThemeSelect(theme)}
//                                                      className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
//                                                  >
//                                                      <span className="font-medium">{theme.title}</span>
//                                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
//                                                  </button>
//                                              ))}
//                                              <button
//                                                  onClick={() => handlePageChange('formation')}
//                                                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
//                                              >
//                                                  Voir tout le catalogue →
//                                              </button>
//                                          </div>
//                                      )}

//                                      {/* Sous-menu mobile pour CONSEIL */}
//                                      {item.page === 'conseil' && mobileSubMenuOpen === 'conseil' && (
//                                          <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
//                                              {Conseil_CATALOGUE.map(theme => (
//                                                  <button
//                                                      key={theme.slug}
//                                                      onClick={() => handleConseilThemeSelect(theme)}
//                                                      className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
//                                                  >
//                                                      <span className="font-medium line-clamp-2">{theme.title}</span>
//                                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
//                                                  </button>
//                                              ))}
//                                              <button
//                                                  onClick={() => handlePageChange('conseil')}
//                                                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
//                                              >
//                                                  Voir tous les pôles de conseil →
//                                              </button>
//                                          </div>
//                                      )}

//                                      {/* Sous-menu mobile pour FINANCEMENT */}
//                                      {item.page === 'recherche' && mobileSubMenuOpen === 'recherche' && (
//                                          <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
//                                              {Financement_CATALOGUE.map(theme => (
//                                                  <button
//                                                      key={theme.slug}
//                                                      onClick={() => handleFinancementThemeSelect(theme)}
//                                                      className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
//                                                  >
//                                                      <span className="font-medium line-clamp-2">{theme.title}</span>
//                                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
//                                                  </button>
//                                              ))}
//                                              <button
//                                                  onClick={() => handlePageChange('recherche')}
//                                                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
//                                              >
//                                                  Voir toutes les prestations →
//                                              </button>
//                                          </div>
//                                      )}

//                                      {/* Sous-menu mobile pour ETUDE */}
//                                      {item.page === 'etude' && mobileSubMenuOpen === 'etude' && (
//                                          <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
//                                              {Etude_CATALOGUE.map(theme => (
//                                                  <button
//                                                      key={theme.slug}
//                                                      onClick={() => handleEtudeThemeSelect(theme)}
//                                                      className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
//                                                  >
//                                                      <span className="font-medium line-clamp-2">{theme.title}</span>
//                                                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
//                                                  </button>
//                                              ))}
//                                              <button
//                                                  onClick={() => handlePageChange('etude')}
//                                                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
//                                              >
//                                                  Voir tous les pôles d'étude →
//                                              </button>
//                                          </div>
//                                      )}

//                                  </div>
//                              ))}

//                              {/* Boutons d'action mobile */}
//                              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
//                                  <button 
//                                      onClick={handleSearchClick}
//                                      className="w-full flex items-center justify-center px-5 py-4 rounded-xl text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
//                                  >
//                                      <Search className="w-5 h-5 mr-3" />
//                                      Rechercher
//                                  </button>
//                                  <button 
//                                      onClick={() => handlePageChange('contact')}
//                                      className="w-full px-5 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all"
//                                  >
//                                      Contact
//                                  </button>
//                              </div>
//                          </div>
//                      </div>
//                  </div>
//              )}

//              {/* Overlay de Recherche (Reste inchangé) */}
//              <SearchOverlay 
//                  isOpen={isSearchOpen}
//                  searchTerm={searchTerm}
//                  onSearchChange={handleSearchChange}
//                  searchResults={searchResults}
//                  onSelect={handleSearchSelect}
//                  onClose={handleCloseSearch}
//                  isLoading={searchLoading}
//              />
//          </>
//     );
// }

// // =========================================================================
// // COMPOSANT : SEARCH OVERLAY (Reste inchangé)
// // =========================================================================
// interface SearchOverlayProps {
//     isOpen: boolean;
//     searchTerm: string;
//     onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     searchResults: SearchResult[];
//     onSelect: (result: SearchResult) => void;
//     onClose: () => void;
//     isLoading: boolean;
// }

// const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, searchTerm, onSearchChange, searchResults, onSelect, onClose, isLoading }) => {
//     // ... (code de l'overlay de recherche inchangé) ...
//      // Fermeture avec touche Escape
//      useEffect(() => {
//          const handleEscape = (e: KeyboardEvent) => {
//              if (e.key === 'Escape' && isOpen) {
//                  onClose();
//              }
//          };
         
//          if (isOpen) {
//              document.addEventListener('keydown', handleEscape);
//              document.body.style.overflow = 'hidden';
//          }
         
//          return () => {
//              document.removeEventListener('keydown', handleEscape);
//              document.body.style.overflow = 'unset';
//          };
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//          <div 
//              className="fixed inset-0 z-[60] flex items-start justify-center animate-in fade-in duration-200"
//          >
//              {/* Backdrop avec blur */}
//              <div 
//                  className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
//                  onClick={onClose}
//              ></div>

//              {/* Conteneur de recherche */}
//              <div 
//                  className="relative w-full max-w-3xl mx-4 mt-[12vh] animate-in slide-in-from-top-4 duration-300"
//                  onClick={(e) => e.stopPropagation()}
//              >
//                  {/* Carte principale */}
//                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                     
//                      {/* Header avec barre de recherche */}
//                      <div className="relative">
//                          {/* Bande décorative */}
//                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>
                         
//                          <div className="flex items-center gap-4 p-6 pb-5">
//                              {/* Icône de recherche animée */}
//                              <div className="flex-shrink-0">
//                                  {isLoading ? (
//                                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
//                                          <Loader2 className="w-6 h-6 text-red-600 animate-spin" />
//                                      </div>
//                                  ) : (
//                                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
//                                          <Search className="w-6 h-6 text-red-600" />
//                                      </div>
//                                  )}
//                              </div>

//                              {/* Input de recherche */}
//                              <input
//                                  type="text"
//                                  placeholder="Rechercher une formation, un module..."
//                                  value={searchTerm}
//                                  onChange={onSearchChange}
//                                  className="flex-1 bg-transparent text-gray-900 text-lg font-medium placeholder-gray-400 focus:outline-none"
//                                  autoFocus
//                              />

//                              {/* Bouton clear */}
//                              {searchTerm && (
//                                  <button 
//                                      onClick={() => onSearchChange({ target: { value: '' } } as any)}
//                                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
//                                      title="Effacer"
//                                  >
//                                      <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
//                                  </button>
//                              )}

//                              {/* Bouton fermer */}
//                              <button 
//                                  onClick={onClose}
//                                  className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors group"
//                                  title="Fermer (Esc)"
//                              >
//                                  <X className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
//                              </button>
//                          </div>

//                          {/* Ligne de séparation subtile */}
//                          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
//                      </div>

//                      {/* Contenu des résultats */}
//                      <div className="max-h-[60vh] overflow-y-auto">
//                          {searchTerm.length < 2 ? (
//                              // État initial
//                              <div className="px-6 py-16 text-center">
//                                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//                                      <Search className="w-10 h-10 text-gray-300" />
//                                  </div>
//                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                                      Recherchez dans notre catalogue
//                                  </h3>
//                                  <p className="text-sm text-gray-500 max-w-md mx-auto">
//                                      Tapez au moins 2 caractères pour commencer la recherche
//                                  </p>
                                 
//                                  {/* Suggestions rapides */}
//                                  <div className="mt-8 flex flex-wrap justify-center gap-2">
//                                      <span className="text-xs text-gray-400 font-medium">Essayez :</span>
//                                      {['Leadership', 'Finance', 'Management', 'Digital'].map(term => (
//                                          <button
//                                              key={term}
//                                              onClick={() => onSearchChange({ target: { value: term } } as any)}
//                                              className="px-4 py-2 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-medium rounded-full transition-colors"
//                                          >
//                                              {term}
//                                          </button>
//                                      ))}
//                                  </div>
//                              </div>
//                          ) : !isLoading && searchResults.length === 0 ? (
//                              // Aucun résultat
//                              <div className="px-6 py-16 text-center">
//                                  <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
//                                      <Search className="w-10 h-10 text-red-400" />
//                                  </div>
//                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                                      Aucun résultat trouvé
//                                  </h3>
//                                  <p className="text-sm text-gray-50V0">
//                                      Essayez avec d'autres mots-clés
//                                  </p>
//                              </div>
//                          ) : (
//                              // Résultats de recherche
//                              <div className="p-3">
//                                  <div className="mb-3 px-3">
//                                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                                          {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
//                                      </p>
//                                  </div>
                                 
//                                  <div className="space-y-1">
//                                      {searchResults.map((result, index) => (
//                                          <button
//                                              key={`${result.type}-${result.moduleCode || result.targetTheme.slug}-${index}`}
//                                              onClick={() => onSelect(result)}
//                                              className="w-full text-left p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50/50 transition-all duration-200 flex items-center gap-4 group border-2 border-transparent hover:border-red-100"
//                                          >
//                                              {/* Icône */}
//                                              <div className="flex-shrink-0">
//                                                  {result.type === 'module' ? (
//                                                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                                                          <BookOpen className="w-6 h-6 text-red-600" />
//                                                      </div>
//                                                  ) : (
//                                                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                                                          <LayoutGrid className="w-6 h-6 text-blue-600" />
//                                                      </div>
//                                                  )}
//                                              </div>
                                             
//                                              {/* Contenu */}
//                                              <div className="flex-grow min-w-0">
//                                                  <h4 className="font-semibold text-gray-900 group-hover:text-red-700 text-base leading-snug mb-1 truncate">
//                                                      {result.title}
//                                                  </h4>
//                                                  <p className="text-sm text-gray-500 truncate flex items-center gap-2">
//                                                      <span className={`w-2 h-2 rounded-full ${result.type === 'module' ? 'bg-red-400' : 'bg-blue-400'}`}></span>
//                                                      {result.detail}
//                                                  </p>
//                                              </div>
                                             
//                                              {/* Flèche */}
//                                              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
//                                          </button>
//                                      ))}
//                                  </div>
//                              </div>
//                          )}
//                      </div>

//                      {/* Footer avec raccourci clavier */}
//                      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50/50">
//                          <div className="flex items-center justify-between text-xs text-gray-500">
//                              <span className="flex items-center gap-2">
//                                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">ESC</kbd>
//                                  pour fermer
//                              </span>
//                              <span className="flex items-center gap-2">
//                                  <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">↵</kbd>
//                                  pour sélectionner
//                              </span>
//                          </div>
//                      </div>
//                  </div>
//              </div>
//          </div>
//     );
// };






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

// =========================================================================
// NOUVEAU TYPE DE RECHERCHE GÉNÉRIQUE
// =========================================================================
type GenericSearchResult =
  | {
      page: 'formation';
      type: 'theme';
      title: string;
      detail: string;
      theme: Theme;
      icon: 'layout';
    }
  | {
      page: 'formation';
      type: 'module';
      title: string;
      detail: string;
      theme: Theme;
      module: Module;
      icon: 'book';
    }
  | {
      page: 'etude';
      type: 'module';
      title: string;
      detail: string;
      theme: ThemeForOtherPages;
      module: ModuleForOtherPages;
      icon: 'file';
    }
  | {
      page: 'conseil';
      type: 'module';
      title: string;
      detail: string;
      theme: ThemeForOtherPages;
      module: ModuleForOtherPages;
      icon: 'briefcase';
    }
  | {
      page: 'financement';
      type: 'module';
      title: string;
      detail: string;
      theme: ThemeForOtherPages;
      module: ModuleForOtherPages;
      icon: 'zap';
    };
// =========================================================================

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedTheme: (theme: Theme) => void;
  setSelectedModule: (module: Module) => void;
  setSelectedEtudeTheme: (theme: ThemeForOtherPages) => void;
  setSelectedEtudeModule: (module: ModuleForOtherPages) => void;
  setSelectedConseilTheme: (theme: ThemeForOtherPages) => void;
  setSelectedConseilModule: (module: ModuleForOtherPages) => void;
  setSelectedFinancementTheme: (theme: ThemeForOtherPages) => void;
  setSelectedFinancementModule: (module: ModuleForOtherPages) => void;
}

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
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(
    null
  );
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  
  // États pour le téléchargement du PDF
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfDownloadAuthorized, setPdfDownloadAuthorized] = useState(false);

  // =========================================================================
  // FONCTION DE RECHERCHE
  // =========================================================================
  const searchResults: GenericSearchResult[] = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const lowerSearch = searchTerm.toLowerCase();
    const results: GenericSearchResult[] = [];

    // 1. Recherche FORMATIONS (Modules SEULEMENT)
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

    // 2. Recherche CONSEIL (Modules)
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

    // 3. Recherche ETUDES (Modules)
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

    // 4. Recherche FINANCEMENT (Modules)
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
  // =========================================================================

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

  // =========================================================================
  // HANDLERS POUR LE TÉLÉCHARGEMENT DU PDF
  // =========================================================================
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
  // =========================================================================

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <button
              onClick={() => handlePageChange('home')}
              className="flex items-center group transition-transform hover:scale-[1.02] duration-300 relative z-50"
            >
              <Image
                src="/images/logo/logotrans.png"
                alt="Diebenu & Partners Logo"
                width={180}
                height={45}
                priority
              />
            </button>

            {/* Menu Desktop - ESPACEMENT AMÉLIORÉ */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.page}
                  onMouseEnter={() =>
                    item.hasMega
                      ? setActiveMegaMenu(item.page)
                      : setActiveMegaMenu(null)
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
                      }
                    `}
                  >
                    {item.label}
                    {item.hasMega && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
                          activeMegaMenu === item.page
                            ? 'rotate-180'
                            : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>
                  {activeMegaMenu === item.page && item.hasMega && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions additionnelles - ESPACEMENT AMÉLIORÉ */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Bouton PDF - Couleur différente */}
            <button
  onClick={handlePdfDownloadClick}
  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-blue-500/50 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
>
  <Download className="w-4 h-4" />
  <span className="whitespace-nowrap">Catalogue 2025</span>
</button>





              <button
                onClick={handleSearchClick}
                className="p-3 rounded-full transition-all text-gray-500 hover:text-red-600 hover:bg-gray-100"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handlePageChange('contact')}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact
              </button>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all relative z-50"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menus Desktop */}
        <div className="hidden lg:block">
          {activeMegaMenu === 'formation' && (
            <MegaMenuFormation
              onThemeSelect={handleMegaMenuFormationSelect}
            />
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

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          <div className="h-24"></div>
          <div className="h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="px-6 py-4 space-y-2">
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
                    className={`block w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all duration-200 flex items-center justify-between ${
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
                          mobileSubMenuOpen === item.page
                            ? 'rotate-180'
                            : 'rotate-0'
                        }`}
                      />
                    )}
                  </button>

                  {/* Sous-menus mobiles */}
                  {item.page === 'formation' &&
                    mobileSubMenuOpen === 'formation' && (
                      <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                        {FORMATION_CATALOGUE.slice(0, 8).map((theme) => (
                          <button
                            key={theme.slug}
                            onClick={() => handleMegaMenuFormationSelect(theme)}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium">{theme.title}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange('formation')}
                          className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
                        >
                          Voir tout le catalogue →
                        </button>
                      </div>
                    )}

                  {item.page === 'conseil' &&
                    mobileSubMenuOpen === 'conseil' && (
                      <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                        {Conseil_CATALOGUE.map((theme) => (
                          <button
                            key={theme.slug}
                            onClick={() => handleConseilThemeSelect(theme)}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium line-clamp-2">
                              {theme.title}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange('conseil')}
                          className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
                        >
                          Voir tous les pôles de conseil →
                        </button>
                      </div>
                    )}

                  {item.page === 'recherche' &&
                    mobileSubMenuOpen === 'recherche' && (
                      <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                        {Financement_CATALOGUE.map((theme) => (
                          <button
                            key={theme.slug}
                            onClick={() => handleFinancementThemeSelect(theme)}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium line-clamp-2">
                              {theme.title}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange('recherche')}
                          className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
                        >
                          Voir toutes les prestations →
                        </button>
                      </div>
                    )}

                  {item.page === 'etude' &&
                    mobileSubMenuOpen === 'etude' && (
                      <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                        {Etude_CATALOGUE.map((theme) => (
                          <button
                            key={theme.slug}
                            onClick={() => handleEtudeThemeSelect(theme)}
                            className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium line-clamp-2">
                              {theme.title}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 flex-shrink-0 ml-2" />
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange('etude')}
                          className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-white transition-all mt-2 border-t border-gray-200 pt-4"
                        >
                          Voir tous les pôles d'étude →
                        </button>
                      </div>
                    )}
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                <button
                  onClick={handlePdfDownloadClick}
                  className="w-full flex items-center justify-center px-5 py-4 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Télécharger le catalogue PDF
                </button>
                
                <button
                  onClick={handleSearchClick}
                  className="w-full flex items-center justify-center px-5 py-4 rounded-xl text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Rechercher
                </button>
                
                <button
                  onClick={() => handlePageChange('contact')}
                  className="w-full px-5 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all"
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

// =========================================================================
// COMPOSANT : PDF DOWNLOAD MODAL
// =========================================================================
interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSuccess: () => void;
  isAuthorized: boolean;
  onDownload: () => void;
}

const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  isOpen,
  onClose,
  onFormSuccess,
  isAuthorized,
  onDownload,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Demande de téléchargement du catalogue de formations',
    message: 'Je souhaite télécharger le catalogue de formations Diebenu & Partners.',
    honeypot: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        subject: 'Demande de téléchargement du catalogue de formations',
        message: 'Je souhaite télécharger le catalogue de formations Diebenu & Partners.',
        honeypot: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Nom requis (minimum 2 caractères)';
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email valide requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (formData.honeypot) {
      console.warn('Spam detected');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/telecharger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message,
          honeypot: formData.honeypot,
          submissionTime: Date.now(),
          sendThankYouEmail: true, // Flag pour déclencher l'email de remerciement
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur serveur');
      }

      onFormSuccess();
      
    } catch (error: any) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors group"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Download className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Télécharger le catalogue
              </h2>
              <p className="text-white/90 text-sm">
                Remplissez le formulaire pour accéder au PDF
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {!isAuthorized ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="pdf-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="pdf-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="Votre nom et prénom"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="pdf-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="pdf-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="votre.email@entreprise.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">Catalogue complet inclus :</p>
                  <ul className="text-blue-800 space-y-1 text-xs">
                    <li>• Plus de 200 formations professionnelles</li>
                    <li>• Descriptions détaillées et objectifs pédagogiques</li>
                    <li>• Tarifs et durées de chaque formation</li>
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Valider et accéder au PDF
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Vos données sont sécurisées et ne seront jamais partagées
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Merci pour votre demande !
              </h3>
              
              <p className="text-gray-600 mb-2">
                Vous pouvez maintenant télécharger le catalogue de formations
              </p>

              <p className="text-sm text-gray-500 mb-8">
                📧 Un email de confirmation a été envoyé à votre adresse
              </p>

              <button
                onClick={onDownload}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6" />
                Télécharger le catalogue PDF
              </button>

              <p className="mt-6 text-sm text-gray-500">
                Le téléchargement devrait commencer automatiquement
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPOSANT : SEARCH OVERLAY
// =========================================================================
interface SearchOverlayProps {
  isOpen: boolean;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: GenericSearchResult[];
  onSelect: (result: GenericSearchResult) => void;
  onClose: () => void;
  isLoading: boolean;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  searchTerm,
  onSearchChange,
  searchResults,
  onSelect,
  onClose,
  isLoading,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const getIcon = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout':
        return <LayoutGrid className="w-6 h-6 text-blue-600" />;
      case 'book':
        return <BookOpen className="w-6 h-6 text-red-600" />;
      case 'file':
        return <FileText className="w-6 h-6 text-green-600" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-600" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-yellow-600" />;
      default:
        return <Search className="w-6 h-6 text-gray-600" />;
    }
  };

  const getIconBg = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout':
        return 'bg-gradient-to-br from-blue-100 to-blue-200';
      case 'book':
        return 'bg-gradient-to-br from-red-100 to-red-200';
      case 'file':
        return 'bg-gradient-to-br from-green-100 to-green-200';
      case 'briefcase':
        return 'bg-gradient-to-br from-indigo-100 to-indigo-200';
      case 'zap':
        return 'bg-gradient-to-br from-yellow-100 to-yellow-200';
      default:
        return 'bg-gradient-to-br from-gray-100 to-gray-200';
    }
  };

  const getDotColor = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout': return 'bg-blue-400';
      case 'book': return 'bg-red-400';
      case 'file': return 'bg-green-400';
      case 'briefcase': return 'bg-indigo-400';
      case 'zap': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div
        className="relative w-full max-w-3xl mx-4 mt-[12vh] animate-in slide-in-from-top-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>

            <div className="flex items-center gap-4 p-6 pb-5">
              <div className="flex-shrink-0">
                {isLoading ? (
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 text-red-600 animate-spin" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Rechercher une formation, un pôle, un module..."
                value={searchTerm}
                onChange={onSearchChange}
                className="flex-1 bg-transparent text-gray-900 text-lg font-medium placeholder-gray-400 focus:outline-none"
                autoFocus
              />

              {searchTerm && (
                <button
                  onClick={() =>
                    onSearchChange({ target: { value: '' } } as any)
                  }
                  className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                  title="Effacer"
                >
                  <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                </button>
              )}

              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors group"
                title="Fermer (Esc)"
              >
                <X className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
              </button>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {searchTerm.length < 2 ? (
              <div className="px-6 py-16 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Recherchez dans tous nos pôles
                </h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  Tapez au moins 2 caractères pour commencer la recherche
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  <span className="text-xs text-gray-400 font-medium">
                    Essayez :
                  </span>
                  {[
                    'Leadership',
                    'Finance',
                    'Audit',
                    'Digitalisation',
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() =>
                        onSearchChange({ target: { value: term } } as any)
                      }
                      className="px-4 py-2 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-medium rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : !isLoading && searchResults.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                  <Search className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-sm text-gray-500">
                  Essayez avec d'autres mots-clés
                </p>
              </div>
            ) : (
              <div className="p-3">
                <div className="mb-3 px-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {searchResults.length} résultat
                    {searchResults.length > 1 ? 's' : ''} trouvé
                    {searchResults.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-1">
                  {searchResults.map((result, index) => (
                    <button
                      key={`${result.page}-${result.type}-${result.title}-${index}`}
                      onClick={() => onSelect(result)}
                      className="w-full text-left p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50/50 transition-all duration-200 flex items-center gap-4 group border-2 border-transparent hover:border-red-100"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 ${getIconBg(
                            result.icon
                          )} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          {getIcon(result.icon)}
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-700 text-base leading-snug mb-1 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-500 truncate flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${getDotColor(
                              result.icon
                            )}`}
                          ></span>
                          {result.detail}
                        </p>
                      </div>

                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 px-6 py-3 bg-gray-50/50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">
                  ESC
                </kbd>
                pour fermer
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">
                  ↵
                </kbd>
                pour sélectionner
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};