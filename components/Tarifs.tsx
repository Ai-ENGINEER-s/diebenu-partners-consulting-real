// --- COMPOSANT TARIFS MODERNE ---

'use client';


import { BookOpen, MapPin, Euro, ArrowRight, Info, ChevronLeft, ChevronRight, Check, Star } from 'lucide-react';
import Link from 'next/link';

// --- COMPOSANT TARIFS MODERNE ---
function Tarifs() {
  const tarifs = [
    { 
      title: 'Option 1',
      subtitle: 'Frais pédagogique + Navette (Aéroport / lieu de formation) + Visites touristiques',
      icon: Euro,
      badge: 'Essentiel',
      popular: false,
      weeks: [
        {
          duration: '1 Semaine',
          prices: [
            { name: 'Casablanca', price: '2.600 €' },
            { name: 'Abidjan', price: '2.600 €' },
            { name: 'Dakar', price: '2.600 €' },
            { name: 'Ouagadougou', price: '2.600 €' },
            { name: 'Dubaï', price: '4.700 €' }
          ]
        },
        {
          duration: '2 Semaines',
          prices: [
            { name: 'Casablanca', price: '3.450 €' },
            { name: 'Abidjan', price: '3.450 €' },
            { name: 'Dakar', price: '3.450 €' },
            { name: 'Ouagadougou', price: '3.450 €' },
            { name: 'Dubaï', price: '5.900 €' }
          ]
        }
      ]
    },
    { 
      title: 'Option 2',
      subtitle: "Option 1 + Appui à l'hébergement (petit déjeuner inclus) + Forfait déjeuner offert + PC portable ou Tablette ou Espèce",
      icon: Euro,
      badge: 'Premium',
      popular: true,
      weeks: [
        {
          duration: '1 Semaine',
          prices: [
            { name: 'Casablanca', price: '3.200 €' },
            { name: 'Abidjan', price: '3.200 €' },
            { name: 'Dakar', price: '3.200 €' },
            { name: 'Ouagadougou', price: '3.200 €' },
            { name: 'Dubaï', price: '5.100 €' }
          ]
        },
        {
          duration: '2 Semaines',
          prices: [
            { name: 'Casablanca', price: '4.000 €' },
            { name: 'Abidjan', price: '4.000 €' },
            { name: 'Dakar', price: '4.000 €' },
            { name: 'Ouagadougou', price: '4.000 €' },
            { name: 'Dubaï', price: '6.400 €' }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-600/10 rounded-full mb-2">
          <Euro className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold text-sm">Tarification</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
          Investissez dans votre avenir
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Formules flexibles adaptées à vos besoins
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {tarifs.map((tarif, idx) => (
          <div 
            key={tarif.title} 
            className={`relative rounded-3xl overflow-hidden ${
              tarif.popular 
                ? 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 shadow-2xl shadow-primary-600/20 border-2 border-primary-500 lg:scale-105 z-10' 
                : 'bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 border border-gray-700'
            } transform hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Badge "Plus Populaire" */}
            {tarif.popular && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-2 rounded-bl-2xl font-bold text-sm flex items-center shadow-lg">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Plus Populaire
              </div>
            )}

            <div className="p-5">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className={`p-3 rounded-xl ${
                    tarif.popular ? 'bg-white/20' : 'bg-gray-700'
                  } mr-4`}>
                    <tarif.icon className={`w-7 h-7 ${
                      tarif.popular ? 'text-white' : 'text-gray-300'
                    }`} />
                  </div>
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                      tarif.popular ? 'bg-white/20 text-white' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {tarif.badge}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {tarif.title}
                    </h3>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${ 
                  tarif.popular ? 'text-white/80' : 'text-gray-300'
                }`}>
                  {tarif.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {tarif.weeks.map((week) => (
                  <div key={week.duration} className={`p-3 rounded-2xl ${
                    tarif.popular ? 'bg-white/10 backdrop-blur-sm' : 'bg-gray-750/50'
                  }`}>
                    <div className="flex items-center mb-2">
                      <div className={`px-4 py-2 rounded-full font-bold text-sm ${
                        tarif.popular ? 'bg-white text-primary-600' : 'bg-gray-700 text-white'
                      }`}>
                        {week.duration}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {week.prices.map((dest) => (
                        <div 
                          key={dest.name} 
                          className={`flex justify-between items-center p-2 rounded-xl transition-all hover:scale-[1.02] ${
                            tarif.popular ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-700/40 hover:bg-gray-700/60'
                          }`}
                        >
                          <span className="font-semibold text-white flex items-center text-sm">
                            <MapPin className={`w-4 h-4 mr-2 ${
                              tarif.popular ? 'text-yellow-400' : 'text-gray-400'
                            }`} />
                            {dest.name}
                          </span>
                          <span className={`font-bold text-lg ${
                            tarif.popular ? 'text-white' : 'text-gray-200'
                          }`}>
                            {dest.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* === MODIFICATION : Bouton CTA changé en Link === */}
              <Link 
                href="/contact"
                className={`block w-full mt-4 py-2.5 px-6 rounded-xl font-bold text-base text-center transition-all transform hover:scale-[1.02] hover:shadow-xl ${
                  tarif.popular 
                    ? 'bg-white text-primary-600 hover:bg-gray-100 shadow-lg' 
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}>
                Réserver maintenant
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* === MODIFICATION : Note informative changée en HT === */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm">
          <Info className="w-5 h-5 text-primary-400 mr-3" />
          <span className="text-gray-300 text-sm">
            Tous les prix sont en euros (€) et sont HT (Hors Taxes)
          </span>
        </div>
      </div>
    </div>
  );
}


export default Tarifs;