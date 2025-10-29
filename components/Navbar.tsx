// app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Briefcase, Zap, Search, LayoutGrid, Award, Loader2, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react'; 
import Image from "next/image";
import { FORMATION_CATALOGUE } from '@/data/catalogue';
import MegaMenuConseil from '@/components/MegaMenuConseil';
import {Theme, SearchResult} from '@/types/index';
// =========================================================================

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    setSelectedTheme: (theme: Theme) => void;
}

// ============ Composant Principal Navbar ============

export default function Navbar({ currentPage, setCurrentPage, setSelectedTheme }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    // Fonction de recherche
    const searchResults: SearchResult[] = useMemo(() => {
        if (!searchTerm || searchTerm.length < 2) return [];
        
        const lowerSearch = searchTerm.toLowerCase();
        const results: SearchResult[] = [];

        FORMATION_CATALOGUE.forEach(theme => {
            if (theme.title.toLowerCase().includes(lowerSearch)) {
                results.push({
                    type: 'theme',
                    title: theme.title,
                    detail: `${theme.modules.length} modules disponibles`,
                    targetTheme: theme,
                });
            }

            theme.modules.forEach(module => {
                const matchCode = module.code.toLowerCase().includes(lowerSearch);
                const matchTitle = module.title.toLowerCase().includes(lowerSearch);
                
                if (matchCode || matchTitle) {
                    results.push({
                        type: 'module',
                        title: `${module.code} : ${module.title}`,
                        detail: `Thème: ${theme.title}`,
                        targetTheme: theme,
                        moduleCode: module.code,
                    });
                }
            });
        });

        const uniqueResults = Array.from(new Map(results.map(item => [item.title, item])).values());
        return uniqueResults.slice(0, 8);
    }, [searchTerm]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Empêcher le scroll du body quand le menu mobile est ouvert
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { label: 'Accueil', page: 'home', icon: LayoutGrid },
        { label: 'Formations', page: 'formation', hasMega: true, icon: BookOpen },
        { label: 'Conseil', page: 'conseil', hasMega: true, icon: Briefcase },
        { label: 'Financement', page: 'recherche', icon: Zap },
        { label: 'À propos', page: 'about', icon: Award },
    ];

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
        setMobileSubMenuOpen(null);
        setIsSearchOpen(false);
    };

    const handleThemeSelect = (theme: Theme) => {
        setSelectedTheme(theme);
        setCurrentPage('theme');
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

    const handleSearchSelect = (result: SearchResult) => {
        handleThemeSelect(result.targetTheme);
        setIsSearchOpen(false);
        setSearchTerm('');
    };

    const toggleMobileSubMenu = (page: string) => {
        setMobileSubMenuOpen(mobileSubMenuOpen === page ? null : page);
    };

    return (
        <>
            <nav 
                className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
                    scrolled 
                        ? 'bg-white/70 backdrop-blur-3xl shadow-xl border-b border-white/50' 
                        : 'bg-white/90 backdrop-blur-md'
                }`}
                onMouseLeave={() => setActiveMegaMenu(null)}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <button onClick={() => handlePageChange('home')} className="flex items-center group transition-transform hover:scale-[1.02] duration-300 relative z-50">
                            <Image
                                src="/images/logo/logotrans.png"
                                alt="Diebenu & Partners Logo"
                                width={180} 
                                height={45} 
                                priority
                            />
                        </button>

                        {/* Menu Desktop */}
                        <div className="hidden lg:flex items-center space-x-2">
                            {navItems.map(item => (
                                <div
                                    key={item.page}
                                    onMouseEnter={() => item.hasMega ? setActiveMegaMenu(item.page) : setActiveMegaMenu(null)}
                                    className="relative group"
                                >
                                    <button
                                        onClick={() => handlePageChange(item.page)}
                                        className={`px-5 py-2.5 text-base font-semibold rounded-full transition-all duration-300 flex items-center ${
                                            currentPage === item.page || activeMegaMenu === item.page
                                                ? 'text-white bg-red-600 shadow-md shadow-red-300'
                                                : 'text-gray-700 hover:text-red-700 hover:bg-red-50'
                                        }`}
                                    >
                                        {item.label}
                                        {item.hasMega && <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeMegaMenu === item.page ? 'rotate-180' : 'rotate-0'}`} />}
                                    </button>
                                    {activeMegaMenu === item.page && item.hasMega && (
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Actions additionnelles (Recherche et CTA) */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button 
                                onClick={handleSearchClick}
                                className={`p-3 rounded-full transition-all text-gray-500 hover:text-red-600 hover:bg-gray-100`}
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => handlePageChange('contact')}
                                className="px-6 py-2.5 bg-gray-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Bouton Menu Mobile */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all relative z-50"
                        >
                            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
                
                {/* Mega Menus Desktop (Pleine largeur) */}
                <div className="hidden lg:block">
                    {activeMegaMenu === 'formation' && (
                        <MegaMenuFormation onThemeSelect={handleThemeSelect} />
                    )}
                    {activeMegaMenu === 'conseil' && (
                        <MegaMenuConseil onSelect={() => handlePageChange('conseil')} />
                    )}
                </div>
            </nav>

            {/* Menu Mobile - En dehors de la nav principale */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white">
                    {/* Espace pour la navbar */}
                    <div className="h-24"></div>
                    
                    {/* Contenu du menu */}
                    <div className="h-[calc(100vh-6rem)] overflow-y-auto">
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map(item => (
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
                                        <span className='flex items-center'>
                                            {item.icon && <item.icon className='w-5 h-5 mr-3' />}
                                            {item.label}
                                        </span>
                                        {item.hasMega && (
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                                                mobileSubMenuOpen === item.page ? 'rotate-180' : 'rotate-0'
                                            }`} />
                                        )}
                                    </button>

                                    {/* Sous-menu mobile pour Formations */}
                                    {item.page === 'formation' && mobileSubMenuOpen === 'formation' && (
                                        <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                                            {FORMATION_CATALOGUE.slice(0, 8).map(theme => (
                                                <button
                                                    key={theme.slug}
                                                    onClick={() => handleThemeSelect(theme)}
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

                                    {/* Sous-menu mobile pour Conseil */}
                                    {item.page === 'conseil' && mobileSubMenuOpen === 'conseil' && (
                                        <div className="mt-2 ml-4 space-y-1 bg-gray-50 rounded-xl p-3">
                                            <button
                                                onClick={() => handlePageChange('conseil')}
                                                className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all"
                                            >
                                                <div className="font-medium">Conseil Stratégique</div>
                                                <div className="text-xs text-gray-500 mt-1">Élaboration de stratégies</div>
                                            </button>
                                            <button
                                                onClick={() => handlePageChange('conseil')}
                                                className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all"
                                            >
                                                <div className="font-medium">Études & Diagnostics</div>
                                                <div className="text-xs text-gray-500 mt-1">Analyses sectorielles</div>
                                            </button>
                                            <button
                                                onClick={() => handlePageChange('conseil')}
                                                className="w-full text-left px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:text-red-700 transition-all"
                                            >
                                                <div className="font-medium">Accompagnement Projets</div>
                                                <div className="text-xs text-gray-500 mt-1">Mise en œuvre</div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Boutons d'action mobile */}
                            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
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

            {/* Overlay de Recherche (Palette de Commande) */}
            <SearchOverlay 
                isOpen={isSearchOpen}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                searchResults={searchResults}
                onSelect={handleSearchSelect}
                onClose={handleCloseSearch}
                isLoading={searchLoading}
            />
        </>
    );
}

// =========================================================================
// COMPOSANT : SEARCH OVERLAY (Design Moderne & Épuré)
// =========================================================================

interface SearchOverlayProps {
    isOpen: boolean;
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchResults: SearchResult[];
    onSelect: (result: SearchResult) => void;
    onClose: () => void;
    isLoading: boolean;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, searchTerm, onSearchChange, searchResults, onSelect, onClose, isLoading }) => {
    // Fermeture avec touche Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-[60] flex items-start justify-center animate-in fade-in duration-200"
        >
            {/* Backdrop avec blur */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Conteneur de recherche */}
            <div 
                className="relative w-full max-w-3xl mx-4 mt-[12vh] animate-in slide-in-from-top-4 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Carte principale */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    
                    {/* Header avec barre de recherche */}
                    <div className="relative">
                        {/* Bande décorative */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>
                        
                        <div className="flex items-center gap-4 p-6 pb-5">
                            {/* Icône de recherche animée */}
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

                            {/* Input de recherche */}
                            <input
                                type="text"
                                placeholder="Rechercher une formation, un module..."
                                value={searchTerm}
                                onChange={onSearchChange}
                                className="flex-1 bg-transparent text-gray-900 text-lg font-medium placeholder-gray-400 focus:outline-none"
                                autoFocus
                            />

                            {/* Bouton clear */}
                            {searchTerm && (
                                <button 
                                    onClick={() => onSearchChange({ target: { value: '' } } as any)}
                                    className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                                    title="Effacer"
                                >
                                    <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                                </button>
                            )}

                            {/* Bouton fermer */}
                            <button 
                                onClick={onClose}
                                className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors group"
                                title="Fermer (Esc)"
                            >
                                <X className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
                            </button>
                        </div>

                        {/* Ligne de séparation subtile */}
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </div>

                    {/* Contenu des résultats */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {searchTerm.length < 2 ? (
                            // État initial
                            <div className="px-6 py-16 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                    <Search className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Recherchez dans notre catalogue
                                </h3>
                                <p className="text-sm text-gray-500 max-w-md mx-auto">
                                    Tapez au moins 2 caractères pour commencer la recherche
                                </p>
                                
                                {/* Suggestions rapides */}
                                <div className="mt-8 flex flex-wrap justify-center gap-2">
                                    <span className="text-xs text-gray-400 font-medium">Essayez :</span>
                                    {['Leadership', 'Finance', 'Management', 'Digital'].map(term => (
                                        <button
                                            key={term}
                                            onClick={() => onSearchChange({ target: { value: term } } as any)}
                                            className="px-4 py-2 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-medium rounded-full transition-colors"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : !isLoading && searchResults.length === 0 ? (
                            // Aucun résultat
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
                            // Résultats de recherche
                            <div className="p-3">
                                <div className="mb-3 px-3">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                                    </p>
                                </div>
                                
                                <div className="space-y-1">
                                    {searchResults.map((result, index) => (
                                        <button
                                            key={`${result.type}-${result.moduleCode || result.targetTheme.slug}-${index}`}
                                            onClick={() => onSelect(result)}
                                            className="w-full text-left p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50/50 transition-all duration-200 flex items-center gap-4 group border-2 border-transparent hover:border-red-100"
                                        >
                                            {/* Icône */}
                                            <div className="flex-shrink-0">
                                                {result.type === 'module' ? (
                                                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <BookOpen className="w-6 h-6 text-red-600" />
                                                    </div>
                                                ) : (
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <LayoutGrid className="w-6 h-6 text-blue-600" />
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Contenu */}
                                            <div className="flex-grow min-w-0">
                                                <h4 className="font-semibold text-gray-900 group-hover:text-red-700 text-base leading-snug mb-1 truncate">
                                                    {result.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 truncate flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full ${result.type === 'module' ? 'bg-red-400' : 'bg-blue-400'}`}></span>
                                                    {result.detail}
                                                </p>
                                            </div>
                                            
                                            {/* Flèche */}
                                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer avec raccourci clavier */}
                    <div className="border-t border-gray-100 px-6 py-3 bg-gray-50/50">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">ESC</kbd>
                                pour fermer
                            </span>
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono">↵</kbd>
                                pour sélectionner
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// =========================================================================
// COMPOSANT : MEGA MENU FORMATION (Design Premium 2 Colonnes)
// =========================================================================

interface MegaMenuFormationProps {
    onThemeSelect: (theme: Theme) => void;
}

const groupedThemesData = [
    {
        name: "Stratégie & Management",
        icon: Target,
        themes: FORMATION_CATALOGUE.slice(0, 5)
    },
    {
        name: "Finance & Performance",
        icon: BarChart2,
        themes: FORMATION_CATALOGUE.slice(5, 10)
    },
    {
        name: "Métiers & Opérations",
        icon: BriefcaseBusiness,
        themes: FORMATION_CATALOGUE.slice(10, 15)
    },
    {
        name: "Technique & SI",
        icon: Settings,
        themes: FORMATION_CATALOGUE.slice(15, 20)
    }
];

function MegaMenuFormation({ onThemeSelect }: MegaMenuFormationProps) {
    const [activeGroup, setActiveGroup] = useState(groupedThemesData[0]);

    return (
        <div 
            className="absolute top-24 left-0 w-full bg-white backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 py-10 flex">
                
                <div className="w-1/3 pr-8 border-r border-gray-200">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Nos Pôles de Formation</h3>
                    <div className="space-y-1">
                        {groupedThemesData.map((group) => (
                            <button
                                key={group.name}
                                onMouseEnter={() => setActiveGroup(group)}
                                onClick={() => setActiveGroup(group)}
                                className={`w-full flex items-center text-left px-3 py-3 rounded-lg transition-all duration-200 group ${
                                    activeGroup.name === group.name 
                                        ? 'bg-gradient-to-r from-red-50 to-pink-50 text-red-700' 
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <group.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${
                                    activeGroup.name === group.name ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'
                                }`} />
                                <span className="font-semibold text-sm">{group.name}</span>
                                <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 ${
                                    activeGroup.name === group.name ? 'text-red-500' : 'text-gray-300'
                                }`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-2/3 pl-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-5">{activeGroup.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {activeGroup.themes.map(theme => (
                            <button
                                key={theme.slug}
                                onClick={() => onThemeSelect(theme)}
                                className="text-left p-3 rounded-lg transition-all duration-200 group flex items-center justify-between w-full hover:bg-gray-50"
                            >
                                <h4 className="font-semibold text-gray-800 group-hover:text-red-700 text-sm leading-tight line-clamp-2 flex-grow pr-4">
                                    {theme.title}
                                </h4>
                                
                                <div className="flex items-center flex-shrink-0 space-x-3">
                                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 group-hover:bg-red-100 group-hover:text-red-700 transition-all duration-200 px-3 py-1 rounded-full">
                                        {theme.modules.length} {theme.modules.length > 1 ? 'modules' : 'module'}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-transform transform group-hover:translate-x-0.5" />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-5">
                         <button
                            onClick={() => onThemeSelect(FORMATION_CATALOGUE[0])}
                            className="w-full text-left p-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-bold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-between transform hover:scale-[1.01] duration-200 shadow-lg hover:shadow-red-300"
                        >
                            <span>Voir tout le catalogue</span>
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// =========================================================================
// MEGA MENU CONSEIL
// =========================================================================

