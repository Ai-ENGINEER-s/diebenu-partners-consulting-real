// app/formation/[slug]/page.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Theme, Module } from '@/types/index';

// Définition des props simplifiée
interface ThemePageProps {
    theme: Theme; // Reçu de la page principale (simule la récupération de données)
    setCurrentPage: (page: string) => void;
}

export default function ThemePage({ theme, setCurrentPage }: ThemePageProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (code: string) => {
    setExpandedModule(expandedModule === code ? null : code);
  };

  return (
    <>
      {/* Hero du Thème */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => setCurrentPage('formation')}
            className="text-white mb-8 flex items-center hover:text-red-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
            Retour au catalogue
          </button>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{theme.title}</h1>
          <p className="text-xl text-gray-200">{theme.modules.length} modules détaillés</p>
        </div>
      </div>

      {/* Modules (Accordéon) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Détail du Programme</h2>
          <div className="space-y-6">
            {theme.modules.map((module: Module) => (
              <div key={module.code} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Header du module (Bouton pour ouvrir/fermer) */}
                <button
                  onClick={() => toggleModule(module.code)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <span className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-sm shadow-md flex-shrink-0">
                      {module.code}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <ChevronDown className={`w-7 h-7 text-red-600 transition-transform duration-300 ${expandedModule === module.code ? 'rotate-180' : ''}`} />
                </button>

                {/* Contenu du module (Affiché/Caché) */}
                {expandedModule === module.code && (
                  <div className="px-8 pb-8 border-t bg-gray-50 animate-slide-up">
                    <div className="pt-8">
                      <p className="text-gray-700 mb-8 text-lg border-l-4 border-red-300 pl-4">{module.themeDetail}</p>
                      
                      <h4 className="font-bold mb-6 text-gray-900 flex items-center text-xl">
                        <Calendar className="w-5 h-5 mr-2 text-red-600" />
                        Sessions Disponibles
                      </h4>
                      
                      {/* Liste des sessions */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {module.sessions.map((session, idx) => (
                          <div key={idx} className="bg-white rounded-xl p-6 border-2 border-red-100 shadow-sm">
                            <MapPin className="w-5 h-5 text-red-600 mb-2" />
                            <p className="font-bold mb-2 text-gray-900">{session.location}</p>
                            <p className="text-sm text-gray-600 font-medium">{session.date}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bouton d'inscription */}
                      <button 
                        onClick={() => setCurrentPage('contact')} 
                        className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-[1.005]"
                      >
                        S'inscrire à ce module
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}