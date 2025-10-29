// // app/components/Navbar.tsx
// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { Menu, X, ChevronDown, ChevronRight, BookOpen, Briefcase, Zap, Search, LayoutGrid, Award, Loader2, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react'; 
// import Image from "next/image";
// import { FORMATION_CATALOGUE } from '@/data/catalogue';

// interface MegaMenuProps {
//     onSelect: (page: string) => void;
// }

// function MegaMenuConseil({ onSelect }: MegaMenuProps) {
//     const services = [
//         { key: 'strat', title: 'Conseil Stratégique', description: "Élaboration de stratégies d'entreprise et institutionnelles." },
//         { key: 'etudes', title: 'Études & Diagnostics', description: 'Analyses sectorielles approfondies et études de faisabilité.' },
//         { key: 'projets', title: 'Accompagnement Projets', description: 'Mise en œuvre et évaluation de projets complexes.' },
//     ];
    
//     return (
//         <div 
//             className="absolute top-24 left-0 w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 backdrop-blur-xl shadow-3xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
//         >
//             <div className="max-w-7xl mx-auto px-8 py-12">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-red-600/20 flex items-center">
//                     <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
//                         <Briefcase className="w-5 h-5 text-white" />
//                     </div>
//                     Services de Conseil
//                 </h3>
//                 <div className="grid grid-cols-3 gap-6">
//                     {services.map(service => (
//                         <button 
//                             key={service.key} 
//                             onClick={() => onSelect('conseil')} 
//                             className="text-left p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-white border-2 border-gray-100 hover:border-red-300 transition-all duration-300 group shadow-sm hover:shadow-xl transform hover:-translate-y-1"
//                         >
//                             <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-700 text-base">{service.title}</h4>
//                             <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
//                         </button>
//                     ))}
//                 </div>
//                 <div className="mt-10 text-center">
//                     <button onClick={() => onSelect('conseil')} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold hover:from-gray-900 hover:to-gray-800 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-2xl">
//                         Découvrir nos services de Conseil <ChevronRight className="w-5 h-5 ml-2" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }



// export default MegaMenuConseil;


// app/components/MegaMenuConseil.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, Target, BriefcaseBusiness, Settings, BarChart2, Zap } from 'lucide-react';
import { Conseil_CATALOGUE } from '@/data/catalogue';
import { ThemeForOtherPages, ModuleForOtherPages } from '@/types/index';

// Mapper les icônes aux slugs (ou titres)
const iconMap: { [key: string]: React.ElementType } = {
  'elaboration-de-plans-strategiques-sectoriels-ou-institutionnels': Target,
  'le-repositionnement-organisationnel-et-la-redefinition-des-missions': BriefcaseBusiness,
  'amelioration-de-la-gouvernance-du-pilotage-de-la-performance-et-de-la-redevabilite': Settings,
  'alignement-des-strategies-avec-les-objectifs-de-developpement-durable-odd': BarChart2,
};

interface MegaMenuConseilProps {
  onThemeSelect: (theme: ThemeForOtherPages) => void;
  onModuleSelect: (module: ModuleForOtherPages, theme: ThemeForOtherPages) => void;
}

export default function MegaMenuConseil({ onThemeSelect, onModuleSelect }: MegaMenuConseilProps) {
  const [activeTheme, setActiveTheme] = useState(Conseil_CATALOGUE[0]);
  const ActiveIcon = iconMap[activeTheme.slug] || Zap;

  return (
    <div
      className="absolute top-24 left-0 w-full bg-white backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 flex">

        {/* Colonne de gauche : Pôles de Conseil */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Nos Pôles de Conseil</h3>
          <div className="space-y-1">
            {Conseil_CATALOGUE.map((theme) => {
              const Icon = iconMap[theme.slug] || Zap;
              return (
                <button
                  key={theme.slug}
                  onMouseEnter={() => setActiveTheme(theme)}
                  onClick={() => setActiveTheme(theme)}
                  className={`w-full flex items-center text-left px-3 py-3 rounded-lg transition-all duration-200 group ${
                    activeTheme.slug === theme.slug
                      ? 'bg-gradient-to-r from-red-50 to-pink-50 text-red-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 flex-shrink-0 ${
                    activeTheme.slug === theme.slug ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'
                  }`} />
                  <span className="font-semibold text-sm line-clamp-2">{theme.title}</span>
                  <ChevronRight className={`w-4 h-4 ml-auto flex-shrink-0 ${
                    activeTheme.slug === theme.slug ? 'text-red-500' : 'text-gray-300'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Colonne de droite : Modules du pôle actif */}
        <div className="w-2/3 pl-10">
          <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-start">
            <ActiveIcon className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
            {activeTheme.title}
          </h3>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {activeTheme.modules.map(module => (
              <button
                key={module.code}
                onClick={() => onModuleSelect(module, activeTheme)}
                className="text-left p-3 rounded-lg transition-all duration-200 group flex items-center justify-between w-full hover:bg-gray-50"
              >
                <h4 className="font-semibold text-gray-800 group-hover:text-red-700 text-sm leading-tight line-clamp-2 flex-grow pr-4">
                  {module.title}
                </h4>
                <div className="flex items-center flex-shrink-0 space-x-3">
                  <span className="text-xs font-semibold text-gray-600 bg-gray-100 group-hover:bg-red-100 group-hover:text-red-700 transition-all duration-200 px-3 py-1 rounded-full">
                    {module.code}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-transform transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))}
          </div>

          {/* Bouton "Voir tout" pour ce pôle */}
          <div className="mt-6 border-t border-gray-200 pt-5">
            <button
              onClick={() => onThemeSelect(activeTheme)}
              className="w-full text-left p-4 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-bold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-between transform hover:scale-[1.01] duration-200 shadow-lg hover:shadow-red-300"
            >
              <span>Voir tout sur "{activeTheme.title}"</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}