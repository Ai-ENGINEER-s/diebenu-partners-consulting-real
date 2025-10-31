import React from 'react';

interface HeroSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const stats = [
    { number: '15+', label: 'Domaines de compétence' },
    { number: '150+', label: 'Thèmes' },
    { number: '5+', label: 'Destinations' },
    { number: '1000+', label: 'Formés' }
  ];

  // Couleur identité (Rouge) : #dc2626 (red-600)
  const primaryColor = 'bg-red-600 hover:bg-red-700';

  return (
    // Utilisation de h-screen et items-center pour centrer verticalement le contenu principal
    <div className="relative h-screen flex items-center overflow-hidden bg-gray-900">
      
      {/* 1. Vidéo de fond - Claire et bien visible, mais avec un gradient ciblé */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-85" // Opacité réduite pour mieux voir la vidéo
        >
          {/* Maintenons votre chemin d'origine */}
          <source src="/images/hero/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* 2. Gradient CIBLÉ et Asymétrique pour la lisibilité */}
        {/* Gradient noir couvrant la zone de texte (gauche) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        {/* Gradient léger du bas pour la transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* 3. Contenu principal - Aligné à gauche et structuré */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 w-full max-w-7xl mx-auto py-24">
        
        {/* Conteneur de contenu principal - Limité à la zone d'impact à gauche */}
        <div className="max-w-xl md:max-w-2xl">
            
            {/* Titre Ultra Professionnel et Audacieux */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-snug">
              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                VOTRE MARQUE
              </span> */}
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 pt-1">
                Le Sommet de l'Expertise
              </span>
            </h1>
            
            {/* Description raffinée */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Cabinet international d'études, de conseil , de formation professionnelle et de recherche de financement. Nous sculptons l'avenir de votre organisation.
            </p>
            
            {/* 4. Boutons CTA avec interaction pro */}
            <div className="flex flex-row gap-4 mb-16">
              <button 
                onClick={() => setCurrentPage('formation')}
                className={`group px-8 py-4 ${primaryColor} text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl shadow-red-600/30 transform hover:scale-[1.02]`}
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                Découvrir nos formations
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                // Bouton Glassmorphism subtil
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 border border-white/20 transform hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Contacter un expert
              </button>
            </div>
        </div>

        {/* 5. Statistiques - Positionnées sous les CTA, bien définies */}
        <div className="flex gap-8 mt-4 pt-4 border-t border-white/10 max-w-xl">
          {stats.map((stat, i) => (
            <div key={i} className="group min-w-[100px]">
              <div className="text-3xl font-extrabold text-white mb-0.5 group-hover:text-red-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Courbe SVG - Transition ultra fluide vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg className="w-full h-24 sm:h-32" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Courbe douce (Cubic Bezier Curve) */}
          <path d="M0,40 C480,0 960,80 1440,40 L1440,100 L0,100 Z" 
                fill="rgb(249, 250, 251)" // Couleur de la section suivante (par exemple, un gris très clair)
                fillOpacity="1"
          />
        </svg>
      </div>
      
      {/* Icône scroll - Discrète */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-70 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  );
}