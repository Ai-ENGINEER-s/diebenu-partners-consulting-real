// // app/components/Navbar.tsx
// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { Menu, X, ChevronDown, FileText, ChevronRight, BookOpen, Briefcase, Zap, Search, LayoutGrid, Award, Loader2, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react';
// import Image from "next/image";
// import { FORMATION_CATALOGUE } from '@/data/catalogue';
// import { Etude_CATALOGUE } from '@/data/catalogue'; // <-- AJOUTÉ
// import MegaMenuConseil from '@/components/MegaMenuConseil';

// import MegaMenuEtude from '@/components/MegaMenuEtude'; // <-- AJOUTÉ
// import { Theme, SearchResult, ThemeForOtherPages, ModuleForOtherPages } from '@/types/index'; // <-- AJOUTÉ ThemeForOtherPages, ModuleForOtherPages




// // =========================================================================
// // COMPOSANT : MEGA MENU FORMATION (Reste inchangé)
// // =========================================================================
// // ... (Code de MegaMenuFormation) ...
// interface MegaMenuFormationProps {
//     onThemeSelect: (theme: Theme) => void;
// }

// const groupedThemesData = [
//     {
//         name: "Stratégie & Management",
//         icon: Target,
//         themes: FORMATION_CATALOGUE.slice(0, 5)
//     },
//     {
//         name: "Finance & Performance",
//         icon: BarChart2,
//         themes: FORMATION_CATALOGUE.slice(5, 10)
//     },
//     {
//         name: "Métiers & Opérations",
//         icon: BriefcaseBusiness,
//         themes: FORMATION_CATALOGUE.slice(10, 15)
//     },
//     {
//         name: "Technique & SI",
//         icon: Settings,
//         themes: FORMATION_CATALOGUE.slice(15, 20)
//     }
// ];

// function MegaMenuFormation({ onThemeSelect }: MegaMenuFormationProps) {
//     const [activeGroup, setActiveGroup] = useState(groupedThemesData[0]);

//     return (
//         <div 
//             className="absolute top-24 left-0 w-full bg-white backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
//         >
//             <div className="max-w-7xl mx-auto px-8 py-10 flex">
                
//                 <div className="w-1/3 pr-8 border-r border-gray-200">
//                     <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Nos Pôles de Formation</h3>
//                     <div className="space-y-1">
//                         {groupedThemesData.map((group) => (
//                             <button
//                                 key={group.name}
//                                 onMouseEnter={() => setActiveGroup(group)}
//                                 onClick={() => setActiveGroup(group)}
//                                 className={`w-full flex items-center text-left px-3 py-3 rounded-lg transition-all duration-200 group ${
//                                     activeGroup.name === group.name 
//                                         ? 'bg-gradient-to-r from-red-50 to-pink-50 text-red-700' 
//                                         : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
//                                 }`}
//                             >
//                                 <group.icon className={`w-5 h-5 mr-3 flex-shrink-0 ${
//                                     activeGroup.name === group.name ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'
//                                 }`} />
//                                 <span className="font-semibold text-sm">{group.name}</span>
//                                 <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 ${
//                                     activeGroup.name === group.name ? 'text-red-500' : 'text-gray-300'
//                                 }`} />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="w-2/3 pl-10">
//                     <h3 className="text-lg font-bold text-gray-900 mb-5">{activeGroup.name}</h3>
                    
//                     <div className="grid grid-cols-2 gap-x-6 gap-y-2">
//                         {activeGroup.themes.map(theme => (
//                             <button
//                                 key={theme.slug}
//                                 onClick={() => onThemeSelect(theme)}
//                                 className="text-left p-3 rounded-lg transition-all duration-200 group flex items-center justify-between w-full hover:bg-gray-50"
//                             >
//                                 <h4 className="font-semibold text-gray-800 group-hover:text-red-700 text-sm leading-tight line-clamp-2 flex-grow pr-4">
//                                     {theme.title}
//                                 </h4>
                                
//                                 <div className="flex items-center flex-shrink-0 space-x-3">
//                                     <span className="text-xs font-semibold text-gray-600 bg-gray-100 group-hover:bg-red-100 group-hover:text-red-700 transition-all duration-200 px-3 py-1 rounded-full">
//                                         {theme.modules.length} {theme.modules.length > 1 ? 'modules' : 'module'}
//                                     </span>
//                                     <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-transform transform group-hover:translate-x-0.5" />
//                                 </div>
//                             </button>
//                         ))}
//                     </div>

//                     <div className="mt-6 border-t border-gray-200 pt-5">
//                          <button
//                             onClick={() => onThemeSelect(FORMATION_CATALOGUE[0])} // Ceci doit naviguer vers la page catalogue
//                             className="w-full text-left p-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-bold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-between transform hover:scale-[1.01] duration-200 shadow-lg hover:shadow-red-300"
//                         >
//                             <span>Voir tout le catalogue</span>
//                             <ChevronRight className="w-5 h-5 ml-2" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MegaMenuFormation;

// app/components/MegaMenuFormation.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react';
import { FORMATION_CATALOGUE } from '@/data/catalogue';
import { Theme } from '@/types/index';

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
                            // Cet onClick doit maintenant naviguer vers la page catalogue
                            // et non un thème spécifique
                            onClick={() => onThemeSelect(FORMATION_CATALOGUE[0])} // Ceci est un placeholder, mais la fonction passée (handleMegaMenuFormationSelect)
                                                                                  // va ignorer le 'theme' et juste changer la page.
                                                                                  // Pour être plus propre, on pourrait avoir un `onViewCatalogueClick`
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

export default MegaMenuFormation;