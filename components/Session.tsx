'use client';

import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Session {
  location: string;
  date: string;
}

interface SessionsSectionProps {
  sessions: Session[];
  villes?: string[];
}

export default function SessionsSection({
  sessions,
  villes = ["Casablanca", "Abidjan", "Dakar", "Ouagadougou", "Dubaï"],
}: SessionsSectionProps) {
  return (
    <section className="mb-12">
      {/* Titre principal */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-red-50 rounded-xl">
          <Calendar className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            AU PROGRAMME SIMULTANÉMENT À :
          </h3>

          {/* Liste des villes */}
          <div className="flex flex-wrap gap-3">
            {villes.map((ville) => (
              <span
                key={ville}
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
              >
                {ville}
              </span>
            ))}
          </div>

          <p className="text-gray-600 mt-3 text-lg">
            {sessions.length} sessions programmées
          </p>
        </div>
      </div>

      {/* Grid des sessions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session, idx) => (
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
    </section>
  );
}
