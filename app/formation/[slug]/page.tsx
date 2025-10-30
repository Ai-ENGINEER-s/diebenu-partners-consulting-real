// app/formation/[slug]/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, MapPin, Calendar, Clock, BookOpen, Users } from 'lucide-react';
import { Theme, Module } from '@/types/index';

interface ThemePageProps {
    theme: Theme;
    module: Module;
    setCurrentPage: (page: string) => void;
}

export default function ThemePage({ theme, module, setCurrentPage }: ThemePageProps) {
  // Utiliser l'image du module en priorité, sinon celle du thème
  const heroImage = module.image || theme.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop';

  return (
    <>
      {/* Hero Section avec image du module */}
      <div className="relative pt-32 pb-64 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={module.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <button 
            onClick={() => setCurrentPage('formation')}
            className="text-white mb-8 flex items-center hover:text-red-400 transition-colors group"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour au catalogue
          </button>

          {/* Badge du code */}
          <div className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg font-bold text-sm shadow-xl mb-6">
            {module.code}
          </div>

          {/* Titre du module */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
            {module.title}
          </h1>

          {/* Catégorie */}
          <div className="flex items-center text-gray-200 text-lg">
            <BookOpen className="w-5 h-5 mr-2" />
            <span className="font-semibold">{theme.title}</span>
          </div>
        </div>
      </div>

      {/* Section Description - Chevauche le hero */}
      <div className="relative -mt-48 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Card principale de description */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-50 rounded-xl">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">À propos de ce module</h2>
                <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              </div>
            </div>
            
           <div 
  className="text-lg text-gray-700 leading-relaxed border-l-4 border-red-300 pl-6 py-2 prose"
  dangerouslySetInnerHTML={{ __html: module.themeDetail }}
/>
          </div>

          {/* Section Sessions Disponibles */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-50 rounded-xl">
                <Calendar className="w-6 h-6 text-red-600" />
              </div>
              <div>
             <h3 className="text-3xl font-bold text-gray-900 mb-3">
  AU PROGRAMME SIMULTANÉMENT À :
</h3>

<div className="flex flex-wrap gap-3">
  {["Casablanca", "Abidjan", "Dakar", "Ouagadougou", "Dubaï"].map((ville) => (
    <span
      key={ville}
      className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
    >
      {ville}
    </span>
  ))}
</div>

<p className="text-gray-600 mt-3 text-lg">
  {module.sessions.length} sessions programmées
</p>

              </div>
            </div>

            {/* Grid des sessions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {module.sessions.map((session, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Localisation */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{session.location}</p>
                      <p className="text-sm text-gray-500">Lieu de formation</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 rounded-lg p-3 group-hover:bg-red-50 transition-colors">
                    <Clock className="w-4 h-4 text-gray-500 group-hover:text-red-600 transition-colors" />
                    <p className="font-medium text-sm">{session.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Prêt à vous inscrire ?</h3>
                <p className="text-red-100">Rejoignez-nous et développez vos compétences</p>
              </div>
              <button 
                onClick={() => {
                  window.scrollTo(0, 0); // <-- Ajouté pour remonter en haut
                  setCurrentPage('contact');
                }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                S'inscrire maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}