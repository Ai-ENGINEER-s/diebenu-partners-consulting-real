// app/components/CTASection.tsx
'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // Importer Image de next/image

// ⚠️ Utiliser le chemin direct vers l'image dans le dossier public
const BACKGROUND_IMAGE_PATH = '/images/themes/DDERS/photo_9_2025-10-27_12-33-03.jpg'; 

// Définition des props simplifiée
interface CTASectionProps {
    setCurrentPage: (page: string) => void;
}

export default function CTASection({ setCurrentPage }: CTASectionProps) {

  // =======================================================
  // ============== CORRECTION AJOUTÉE ICI =================
  // =======================================================
  /**
   * Gère le clic sur un bouton CTA.
   * Remonte en haut de la page AVANT de changer la vue.
   */
  const handleClick = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };
  // =======================================================
  // ================= FIN DE LA CORRECTION ================
  // =======================================================

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden shadow-2xl">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src={BACKGROUND_IMAGE_PATH} // Utilisation du chemin direct
          alt="Arrière-plan premium et moderne pour CTA"
          fill 
          style={{ objectFit: 'cover' }}
          quality={80} 
          sizes="(max-width: 1200px) 100vw, 1200px" 
          priority 
        />
      </div>

      {/* Overlay sombre pour améliorer la lisibilité (au-dessus de l'image) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div> 

      {/* Contenu (au-dessus de l'overlay) */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Transformez votre organisation
        </h2>
        <p className="text-xl text-white/90 mb-12">
          Découvrez nos solutions sur mesure en conseil et formation pour un impact maximal.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => handleClick('formation')} // <-- CORRIGÉ
            className="px-10 py-5 bg-white text-red-600 rounded-xl font-bold hover:bg-gray-100 transition duration-300 shadow-xl flex items-center justify-center group"
          >
            Nos formations
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={() => handleClick('contact')} // <-- CORRIGÉ
            className="px-10 py-5 bg-white/10 text-white rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 transition duration-300"
          >
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  );
}