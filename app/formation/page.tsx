// app/formation/page.tsx
'use client';

import React from 'react';
import { BookOpen, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { FORMATION_CATALOGUE, DESTINATIONS } from '@/data/catalogue';
import { Theme } from '@/types/index';

// Définition des props simplifiée
interface FormationPageProps {
    setCurrentPage: (page: string) => void;
    setSelectedTheme: (theme: Theme) => void;
}

export default function FormationPage({ setCurrentPage, setSelectedTheme }: FormationPageProps) {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Catalogue de Formations 2026</h1>
          <p className="text-xl text-gray-200">Choisissez parmi nos pôles d'expertise pour propulser votre carrière.</p>
        </div>
      </div>

      {/* Catalogue des Thèmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Thèmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FORMATION_CATALOGUE.map((theme) => (
              <button
                key={theme.slug}
                onClick={() => {
                  setSelectedTheme(theme);
                  setCurrentPage('theme');
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 transform duration-300 group"
              >
                {/* Image / Placeholder */}
                <div className="h-48 bg-cover bg-center flex items-center justify-center p-6" 
                     style={{ backgroundImage: `url(${theme.image})`, backgroundSize: 'cover' }}>
                    <div className="p-3 bg-red-600/90 rounded-full text-white shadow-xl">
                        <BookOpen className="w-8 h-8" />
                    </div>
                </div>
                {/* Contenu */}
                <div className="p-6 text-left">
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold inline-flex items-center">
                    {theme.modules.length} modules
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 group-hover:text-red-700 transition-colors">
                    {theme.title}
                  </h3>
                  <div className="flex items-center text-red-600 font-semibold mt-4">
                    Détail du programme <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Tarifs */}
          <Tarifs />
        </div>
      </section>
    </>
  );
}

function Tarifs() {
  const tarifs = [
    { 
        title: 'Standard', icon: DollarSign, color: 'text-gray-900', bg: 'bg-white', 
        destinations: [
            { name: 'Casablanca', price: '2.600 €' },
            { name: 'Abidjan', price: '2.600 €' },
            { name: 'Dakar', price: '2.600 €' },
            { name: 'Ouagadougou', price: '2.600 €' },
            { name: 'Dubaï', price: '4.700 €' }
        ]
    },
    { 
        title: 'Premium', icon: DollarSign, color: 'text-white', bg: 'bg-gradient-to-br from-red-600 to-red-700', 
        destinations: [
            { name: 'Casablanca', price: '3.200 €' },
            { name: 'Abidjan', price: '3.200 €' },
            { name: 'Dakar', price: '3.200 €' },
            { name: 'Ouagadougou', price: '3.200 €' },
            { name: 'Dubaï', price: '5.100 €' }
        ]
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarifs (Formation d'une semaine)</h2>
        <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tarifs.map((tarif) => (
            <div key={tarif.title} className={`${tarif.bg} rounded-2xl p-10 shadow-2xl border-4 ${tarif.title === 'Premium' ? 'border-red-500' : 'border-gray-100'} transform hover:scale-[1.01] transition-transform duration-300`}>
                <h3 className={`text-3xl font-bold mb-8 flex items-center ${tarif.color}`}>
                    <tarif.icon className="w-8 h-8 mr-3" /> {tarif.title}
                </h3>
                <div className="space-y-4">
                    {tarif.destinations.map((dest) => (
                        <div key={dest.name} className={`flex justify-between p-4 ${tarif.title === 'Premium' ? 'bg-white/10' : 'bg-gray-50'} rounded-xl`}>
                            <span className={`font-semibold ${tarif.title === 'Premium' ? 'text-white' : 'text-gray-800'} flex items-center`}>
                                <MapPin className={`w-4 h-4 mr-2 ${tarif.title === 'Premium' ? 'text-red-200' : 'text-red-600'}`} /> {dest.name}
                            </span>
                            <span className={`font-bold ${tarif.title === 'Premium' ? 'text-white' : 'text-red-600'}`}>{dest.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}