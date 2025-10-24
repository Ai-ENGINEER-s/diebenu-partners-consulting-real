// app/components/MotDuDG.tsx
import React from 'react';

export default function MotDuDG() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mot du Directeur Général</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-red-50/30 rounded-3xl shadow-xl p-12 border-l-4 border-red-600 transform hover:shadow-2xl transition duration-500">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
            "Face aux profondes mutations économiques, sociales et technologiques, DIEBENU & PARTNERS s'engage aux côtés des institutions pour accompagner cette dynamique de transformation et œuvrer pour un impact durable."
          </p>
          <div className="mt-8 pt-8 border-t-2 border-gray-200 flex items-center space-x-6">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg border-2 border-white">
                KF
            </div>
            <div>
              <p className="font-bold text-gray-900 text-xl">KIENOU Frank Alain</p>
              <p className="text-red-600 font-semibold">Directeur Général</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}