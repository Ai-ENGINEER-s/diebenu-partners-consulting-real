// components/ProgrammeVilles.tsx
"use client";

import { CalendarDays } from "lucide-react";

export default function ProgrammeVilles() {
  const villes = ["Casablanca", "Abidjan", "Dakar", "Ouagadougou", "Dubaï"];

  return (
    <div className="flex flex-col items-start md:items-center gap-3 text-center">
      {/* Titre principal */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
        <span className="p-2 rounded-xl bg-red-50 text-red-600">
          <CalendarDays size={28} />
        </span>
        <span>AU PROGRAMME SIMULTANÉMENT À :</span>
      </h2>

      {/* Liste des villes */}
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {villes.map((ville) => (
          <span
            key={ville}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
          >
            {ville}
          </span>
        ))}
      </div>

      
    </div>
  );
}
