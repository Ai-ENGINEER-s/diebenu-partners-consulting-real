// app/components/PolesExpertise.tsx
'use client';

import React from 'react';
import { FileText, Target, Users, TrendingUp } from 'lucide-react';

// Définition des props simplifiée
interface PolesExpertiseProps {
    setCurrentPage: (page: string) => void;
}

export default function PolesExpertise({ setCurrentPage }: PolesExpertiseProps) {
  const poles = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Études & Diagnostics",
      description: "Analyses approfondies pour des décisions éclairées.",
      page: "conseil"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Conseil Stratégique",
      description: "Accompagnement dans l'élaboration et la mise en œuvre de stratégies.",
      page: "conseil"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Formation",
      description: "Renforcement des capacités par un catalogue de modules innovants.",
      page: "formation"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Recherche de Financement",
      description: "Mobilisation de ressources et montage de dossiers complexes.",
      page: "recherche"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Pôles d'Excellence</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {poles.map((pole, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(pole.page)}
              className="bg-white rounded-2xl p-8 text-left shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 transform duration-300 border border-gray-100"
            >
              <div className="text-red-600 mb-6">{pole.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pole.title}</h3>
              <p className="text-gray-600 text-sm">{pole.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}