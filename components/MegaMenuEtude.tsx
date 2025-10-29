// app/components/MegaMenuEtude.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, BarChart2, BriefcaseBusiness, FileText as IconFileText, Target as IconTarget } from 'lucide-react';
import { Etude_CATALOGUE } from '@/data/catalogue'; 
import { ThemeForOtherPages, ModuleForOtherPages } from '@/types/index';

// Mapper les icônes aux titres (ou slugs) pour plus de robustesse
const iconMap: { [key: string]: React.ElementType } = {
  'les-etudes-sectorielles-et-socio-economiques': BarChart2,
  'les-diagnostics-organisationnels-et-institutionnels': BriefcaseBusiness,
  'analyse-des-politiques-publiques': IconFileText,
  'les-etudes-dimpact-et-evaluations-de-projetsprogrammes': IconTarget,
};

interface MegaMenuEtudeProps {
  onThemeSelect: (theme: ThemeForOtherPages) => void;
  onModuleSelect: (module: ModuleForOtherPages, theme: ThemeForOtherPages) => void;
}

export default function MegaMenuEtude({ onThemeSelect, onModuleSelect }: MegaMenuEtudeProps) {
  const [activeTheme, setActiveTheme] = useState(Etude_CATALOGUE[0]);
  const ActiveIcon = iconMap[activeTheme.slug] || IconFileText;

  return (
    <div
      className="absolute top-24 left-0 w-full bg-white backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 flex">

        {/* Colonne de gauche : Pôles d'étude */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Nos Pôles d'Étude</h3>
          <div className="space-y-1">
            {Etude_CATALOGUE.map((theme) => {
              const Icon = iconMap[theme.slug] || IconFileText;
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
                  <span className="font-semibold text-sm">{theme.title}</span>
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
          <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center">
            <ActiveIcon className="w-6 h-6 mr-3 text-red-600" />
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