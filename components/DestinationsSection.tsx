import React from 'react';
import { MapPin } from 'lucide-react';
import { DESTINATIONS } from '@/data/catalogue';

/**
 * Fonction pour normaliser une chaîne de caractères :
 * 1. Convertit les accents (é, è, û, î, ï) en leur équivalent non accentué (e, u, i).
 * 2. Retire tous les caractères qui ne sont pas a-z ou 0-9.
 */
const normalizeString = (str: string) => {
    // Normalise les caractères accentués (ex: ï -> i)
    // Et retire ensuite tous les caractères qui ne sont pas alpha-numériques
    return str.normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .replace(/[^a-z0-9]/g, '');
};

export default function DestinationsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Destinations de Formation</h2>
                    <p className="text-lg text-gray-600">Choisissez le cadre idéal pour votre perfectionnement.</p>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {DESTINATIONS.map((dest, i) => (
                        <div 
                            key={i} 
                            className="relative h-64 bg-gray-300 rounded-2xl overflow-hidden shadow-xl group cursor-pointer hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Remplacement d'image : /images/destinations/*.jpg */}
                            <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                                style={{ 
                                    backgroundImage: `url(/images/destinations/${normalizeString(dest.name)}.jpg)` 
                                }}>
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                                <div className="text-white">
                                    <MapPin className="w-6 h-6 mb-2 text-red-400" />
                                    <h3 className="text-xl font-bold">{dest.name}</h3>
                                    <p className="text-sm font-light">{dest.country}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
