// app/components/MegaMenuFinancement.tsx
'use client';

import React, { useState } from 'react';
import { ChevronRight, Zap, DollarSign } from 'lucide-react';
import { Financement_CATALOGUE } from '@/data/catalogue';
import { ThemeForOtherPages, ModuleForOtherPages } from '@/types/index';

// Mapper les icônes aux slugs
const iconMap: { [key: string]: React.ElementType } = {
  'recherche-et-mobilisation-de-financement': DollarSign,
};

interface MegaMenuFinancementProps {
  onThemeSelect: (theme: ThemeForOtherPages) => void;
  onModuleSelect: (module: ModuleForOtherPages, theme: ThemeForOtherPages) => void;
}

export default function MegaMenuFinancement({ onThemeSelect, onModuleSelect }: MegaMenuFinancementProps) {
  // Il n'y a qu'un seul thème, donc nous le sélectionnons par défaut
  const [activeTheme, setActiveTheme] = useState(Financement_CATALOGUE[0]);
  const ActiveIcon = iconMap[activeTheme.slug] || Zap;

  return (
    <div
      className="absolute top-24 left-0 w-full bg-white backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 flex">

        {/* Colonne de gauche : Thèmes de Financement */}
        <div className="w-1/3 pr-8 border-r border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Nos Thèmes</h3>
          <div className="space-y-1">
            {Financement_CATALOGUE.map((theme) => {
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

        {/* Colonne de droite : Modules du thème actif */}
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