// app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Briefcase, Zap, Search, Globe, LayoutGrid, Award, Loader2 } from 'lucide-react'; 
import Image from "next/image";

// =========================================================================
// TYPES ET DONNÉES (Adaptées à votre structure pour simuler 11 Thèmes)
// =========================================================================
interface Session {
    date: string;
}

interface Module {
    code: string;
    title: string; 
    themeDetail: string;
    sessions: Session[];
}

interface Theme {
    slug: string;
    title: string; 
    image: string;
    modules: Module[]; // Chaque thème a supposément 10 modules dans votre système réel
}

const generateSessions = (date1: string, date2: string, date3: string): Session[] => [
    { date: date1 }, { date: date2 }, { date: date3 }
];

// SIMULATION : Création d'un catalogue avec 11 thèmes et 10 modules simulés chacun
const createDummyModules = (prefix: string): Module[] => {
    const modules: Module[] = [];
    for (let i = 1; i <= 10; i++) {
        modules.push({ code: `${prefix} ${i}`, title: `Module ${i} - ${prefix}`, themeDetail: `Détail du module ${i}`, sessions: [] });
    }
    return modules;
};

const FORMATION_CATALOGUE: Theme[] = [
    // 11 Thèmes pour remplir la grille du Mega Menu
    {
        slug: 'gouvernance-leadership-strategique',
        title: 'Gouvernance, Leadership et Management stratégique',
        image: '/images/themes/glms.jpg',
        modules: createDummyModules('GLMS'),
    },
    { 
        slug: 'finance-optimisation', 
        title: 'Optimisation Financière et Audit', 
        image: '/images/themes/finance.jpg', 
        modules: createDummyModules('FO'),
    },
    { 
        slug: 'digital-transfo', 
        title: 'Transformation Digitale & Cloud', 
        image: '/images/themes/digital.jpg', 
        modules: createDummyModules('TD'),
    },
    { 
        slug: 'ressources-humaines', 
        title: 'Gestion des Ressources Humaines & Talents', 
        image: '/images/themes/rh.jpg', 
        modules: createDummyModules('RH'),
    },
    { 
        slug: 'marketing-vente', 
        title: 'Marketing, Communication & Ventes', 
        image: '/images/themes/mktg.jpg', 
        modules: createDummyModules('MKTG'),
    },
    { 
        slug: 'logistique', 
        title: 'Supply Chain et Logistique', 
        image: '/images/themes/supply.jpg', 
        modules: createDummyModules('LOG'),
    },
    { 
        slug: 'qualite-hqe', 
        title: 'Qualité, Hygiène, Sécurité & Environnement', 
        image: '/images/themes/qhse.jpg', 
        modules: createDummyModules('QHSE'),
    },
    { 
        slug: 'projet-pmo', 
        title: 'Management de Projets (PMO)', 
        image: '/images/themes/pmo.jpg', 
        modules: createDummyModules('PMO'),
    },
    { 
        slug: 'developpement-personnel', 
        title: 'Développement Personnel & Efficacité', 
        image: '/images/themes/perso.jpg', 
        modules: createDummyModules('DP'),
    },
    { 
        slug: 'droit-reglementaire', 
        title: 'Droit, Réglementation et Conformité', 
        image: '/images/themes/droit.jpg', 
        modules: createDummyModules('DR'),
    },
    { 
        slug: 'controle-gestion', 
        title: 'Contrôle de Gestion et Performance', 
        image: '/images/themes/controle.jpg', 
        modules: createDummyModules('CG'),
    },
];

interface SearchResult {
    type: 'theme' | 'module';
    title: string;
    detail: string;
    targetTheme: Theme;
    moduleCode?: string;
}
// =========================================================================


// Définition des props
interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    setSelectedTheme: (theme: Theme) => void;
}

// ============ Composant Principal Navbar (Ultra Premium) ============

export default function Navbar({ currentPage, setCurrentPage, setSelectedTheme }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    // Fonction de recherche centralisée et optimisée
    const searchResults: SearchResult[] = useMemo(() => {
        if (!searchTerm || searchTerm.length < 3) return [];
        const lowerSearch = searchTerm.toLowerCase();
        const results: SearchResult[] = [];

        FORMATION_CATALOGUE.forEach(theme => {
            // 1. Recherche par titre de Thème
            if (theme.title.toLowerCase().includes(lowerSearch)) {
                results.push({
                    type: 'theme',
                    title: `Thème : ${theme.title}`,
                    detail: `${theme.modules.length} modules disponibles`,
                    targetTheme: theme,
                });
            }

            // 2. Recherche par titre de Module
            theme.modules.forEach(module => {
                if (module.title.toLowerCase().includes(lowerSearch)) {
                    results.push({
                        type: 'module',
                        title: `Module ${module.code} : ${module.title}`,
                        detail: `Fait partie du thème: ${theme.title}`,
                        targetTheme: theme,
                        moduleCode: module.code,
                    });
                }
            });
        });

        const uniqueResults = Array.from(new Map(results.map(item => [item.title, item])).values());
        return uniqueResults.slice(0, 5); 
    }, [searchTerm]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        setIsSearchOpen(false);
    };

    const handleThemeSelect = (theme: Theme) => {
        setSelectedTheme(theme);
        setCurrentPage('theme');
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
        setIsSearchOpen(false);
    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchTerm('');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length >= 3) {
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


    return (
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
                    <button onClick={() => handlePageChange('home')} className="flex items-center group transition-transform hover:scale-[1.02] duration-300">
                        <Image
                            src="/images/logo/logo-transparent.png"
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
                            className={`p-3 rounded-full transition-all ${isSearchOpen ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-red-600 hover:bg-gray-100'}`}
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => handlePageChange('contact')}
                            className="px-6 py-2.5 bg-gray-900 text-white text-base font-semibold rounded-full shadow-lg hover:bg-red-600 hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Démarrer un projet
                        </button>
                    </div>

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all"
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>
            
            {/* Overlay de Recherche WAOUH */}
            <SearchOverlay 
                isOpen={isSearchOpen}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                searchResults={searchResults}
                onSelect={handleSearchSelect}
                onClose={() => setIsSearchOpen(false)}
                isLoading={searchLoading}
            />

            {/* Mega Menus (Pleine largeur) */}
            {activeMegaMenu === 'formation' && (
                <MegaMenuFormation onThemeSelect={handleThemeSelect} />
            )}
            {activeMegaMenu === 'conseil' && (
                <MegaMenuConseil onSelect={() => handlePageChange('conseil')} />
            )}

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-24 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl overflow-y-auto">
                    <div className="px-6 py-4 space-y-2">
                        {navItems.map(item => (
                            <button
                                key={item.page}
                                onClick={() => handlePageChange(item.page)}
                                className={`block w-full text-left px-5 py-4 rounded-xl text-lg font-medium transition-all duration-200 flex items-center justify-between ${
                                    currentPage === item.page
                                        ? 'bg-red-600 text-white shadow-md shadow-red-300'
                                        : 'text-gray-800 hover:bg-red-50'
                                }`}
                            >
                                <span className='flex items-center'>
                                    {item.icon && <item.icon className='w-5 h-5 mr-3' />}
                                    {item.label}
                                </span>
                                {item.hasMega && <ChevronRight className='w-5 h-5' />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

// ============ COMPOSANT : SEARCH OVERLAY ============

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
    if (!isOpen) return null;

    return (
        <div 
            className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-2xl bg-white/95 backdrop-blur-3xl rounded-3xl shadow-3xl border border-white/80 animate-in fade-in slide-in-from-top-4 duration-300 p-6"
        >
            <div className="flex items-center border border-gray-300 rounded-full p-2 bg-gray-50 focus-within:border-red-600 transition-all">
                <Search className="w-5 h-5 text-gray-500 ml-2" />
                <input
                    type="text"
                    placeholder="Chercher par Thème ou Module (ex: Leadership, Audit...)"
                    value={searchTerm}
                    onChange={onSearchChange}
                    className="flex-grow bg-transparent p-2 text-gray-800 focus:outline-none placeholder-gray-500 text-base"
                    autoFocus
                />
                <button onClick={onClose} className="p-2 rounded-full hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {searchTerm.length >= 3 && (
                <div className="mt-4 max-h-80 overflow-y-auto">
                    {isLoading ? (
                        <div className="flex justify-center items-center py-4 text-red-600">
                            <Loader2 className="w-6 h-6 animate-spin mr-2" /> Recherche en cours...
                        </div>
                    ) : searchResults.length > 0 ? (
                        <div className="space-y-1">
                            {searchResults.map((result, index) => (
                                <button
                                    key={`${result.type}-${result.moduleCode || result.targetTheme.slug}-${index}`}
                                    onClick={() => onSelect(result)}
                                    className="w-full text-left p-3 rounded-xl hover:bg-red-50 transition-all flex items-center group"
                                >
                                    {result.type === 'module' ? <Briefcase className="w-5 h-5 mr-3 text-red-600" /> : <BookOpen className="w-5 h-5 mr-3 text-red-600" />}
                                    <div>
                                        <p className="font-semibold text-gray-900 group-hover:text-red-700">{result.title}</p>
                                        <p className="text-sm text-gray-500">{result.detail}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-4 text-gray-500">
                            Aucune formation ou module trouvé pour "{searchTerm}".
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


// ============ MEGA MENU COMPONENTS (PLEINE LARGEUR, STYLE SIMPLE, AFFICHAGE 11 THÈMES) ============

interface MegaMenuProps {
    onSelect: (page: string) => void;
}

interface MegaMenuFormationProps {
    onThemeSelect: (theme: Theme) => void;
}

/**
 * Mega Menu Formation (Affiche 11 thèmes + CTA)
 */
function MegaMenuFormation({ onThemeSelect }: MegaMenuFormationProps) {
    // Le Mega Menu de formation doit afficher la liste des thèmes.
    // Nous affichons 11 thèmes (pour remplir la grille 4x3) + le bouton "Voir tout".
    
    // Si vous souhaitez afficher TOUS les thèmes (même plus que 11), 
    // retirez .slice(0, 11) et ajustez la grille si nécessaire.

    const themesToDisplay = FORMATION_CATALOGUE.slice(0, 11);

    return (
        <div 
            className="absolute top-24 left-0 w-full bg-white/95 backdrop-blur-xl shadow-3xl border-t border-white/80 animate-in fade-in slide-in-from-top-4 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-red-600" /> Nos Thèmes de Formation</h3>
                
                {/* Grille 4x3 pour afficher 11 thèmes + 1 CTA (Total 12) */}
                <div className="grid grid-cols-4 gap-6">
                    {themesToDisplay.map(theme => (
                        <button
                            key={theme.slug}
                            onClick={() => onThemeSelect(theme)}
                            className="text-left p-4 rounded-lg hover:bg-red-50 transition-colors duration-150 group"
                        >
                            <h4 className="font-semibold text-gray-800 mb-0.5 group-hover:text-red-700">{theme.title}</h4>
                            {/* Utilisation de theme.modules.length qui devrait être 10 dans votre système réel */}
                            <p className="text-xs text-gray-500">{theme.modules.length} modules</p>
                        </button>
                    ))}
                    {/* Bouton CTA */}
                    <button
                        onClick={() => onThemeSelect(FORMATION_CATALOGUE[0])} 
                        className="col-span-1 text-left p-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all flex items-center justify-center transform hover:scale-[1.02] duration-200"
                    >
                        Voir tout le catalogue <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}


/**
 * Mega Menu Conseil (Pleine largeur et style d'éléments simplifié)
 */
function MegaMenuConseil({ onSelect }: MegaMenuProps) {
    const services = [
        { key: 'strat', title: 'Conseil Stratégique', description: 'Élaboration de stratégies d\'entreprise et institutionnelles.' },
        { key: 'etudes', title: 'Études & Diagnostics', description: 'Analyses sectorielles approfondies et études de faisabilité.' },
        { key: 'projets', title: 'Accompagnement Projets', description: 'Mise en œuvre et évaluation de projets complexes.' },
    ];
    
    return (
        <div 
            className="absolute top-24 left-0 w-full bg-white/95 backdrop-blur-xl shadow-3xl border-t border-white/80 animate-in fade-in slide-in-from-top-4 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4 flex items-center"><Briefcase className="w-5 h-5 mr-2 text-red-600" /> Services de Conseil</h3>
                <div className="grid grid-cols-3 gap-6">
                    {services.map(service => (
                        <button 
                            key={service.key} 
                            onClick={() => onSelect('conseil')} 
                            className="text-left p-5 rounded-lg hover:bg-red-50 transition-colors duration-150 group border border-gray-200"
                        >
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-red-700">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                        </button>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button onClick={() => onSelect('conseil')} className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-gray-900 transition-all transform hover:scale-[1.05] duration-200">
                        Découvrir nos services de Conseil <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}