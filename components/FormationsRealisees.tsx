import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface FormationRealisee {
  id: number;
  title: string;
  location: string;
  date: string;
  participants: number;
  image: string;
  category: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

const FORMATIONS_REALISEES: FormationRealisee[] = [
  {
    id: 1,
    title: "Leadership & Management Stratégique",
    location: "Casablanca, Maroc",
    date: "Janvier 2025",
    participants: 45,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Management",
    testimonial: {
      text: "Une formation exceptionnelle qui a transformé notre approche du leadership.",
      author: "Sophie Martin",
      position: "Directrice RH"
    }
  },
  {
    id: 2,
    title: "Transformation Digitale & Innovation",
    location: "Dubaï, EAU",
    date: "Décembre 2024",
    participants: 38,
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    category: "Digital",
    testimonial: {
      text: "Des outils concrets pour accélérer notre digitalisation.",
      author: "Ahmed Al-Rashid",
      position: "CTO"
    }
  },
  {
    id: 3,
    title: "Finance d'Entreprise Avancée",
    location: "Abidjan, Côte d'Ivoire",
    date: "Novembre 2024",
    participants: 32,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "Finance"
  },
  {
    id: 4,
    title: "Marketing Digital & Growth Hacking",
    location: "Dakar, Sénégal",
    date: "Octobre 2024",
    participants: 50,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Gestion de Projet Agile & Scrum",
    location: "Ouagadougou, Burkina Faso",
    date: "Septembre 2024",
    participants: 28,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    category: "Management"
  },
  {
    id: 6,
    title: "Excellence Opérationnelle & Lean Management",
    location: "Casablanca, Maroc",
    date: "Août 2024",
    participants: 42,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    category: "Opérations"
  }
];

export default function FormationsRealisees() {
  const [selectedFormation, setSelectedFormation] = useState<FormationRealisee | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, FORMATIONS_REALISEES.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleSelectFormation = (formation: FormationRealisee) => {
    if (selectedFormation && selectedFormation.id === formation.id) {
      setSelectedFormation(null);
    } else {
      setSelectedFormation(formation);
    }
  };

  const stats = [
    { value: "500+", label: "Professionnels formés", icon: Users },
    { value: "50+", label: "Formations réalisées", icon: Award },
    { value: "5", label: "Pays d'intervention", icon: MapPin },
    { value: "98%", label: "Taux de satisfaction", icon: Award }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
              Notre Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Formations <span className="text-red-600">Réalisées</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières formations qui ont transformé des centaines de professionnels à travers l'Afrique et le Moyen-Orient
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? 'bg-gray-300 opacity-70 cursor-not-allowed' 
                : 'bg-red-600 text-white hover:bg-red-700 hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex 
                ? 'bg-gray-300 opacity-70 cursor-not-allowed' 
                : 'bg-red-600 text-white hover:bg-red-700 hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-2">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.7)}%)` }}
            >
              {FORMATIONS_REALISEES.map((formation) => (
                <div
                  key={formation.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] group cursor-pointer"
                  onClick={() => handleSelectFormation(formation)}
                >
                  <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl 
                                  perspective-1000 group-hover:shadow-red-300/50 group-hover:shadow-3xl
                                  transition-all duration-500 transform 
                                  group-hover:rotate-y-3 group-hover:rotate-x-1 group-hover:scale-105
                                  ${selectedFormation?.id === formation.id ? 'ring-4 ring-red-500 ring-offset-2' : 'ring-0'}`}
                  >
                    {/* Image Container - AUGMENTÉ À H-96 */}
                    <div className="relative h-96 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                        style={{ backgroundImage: `url(${formation.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white rounded-lg text-xs font-bold shadow-lg z-10">
                        {formation.category}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="text-white font-bold text-2xl mb-3 leading-tight">
                          {formation.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-base">
                          <div className="flex items-center text-gray-200"><MapPin className="w-5 h-5 mr-1" /><span>{formation.location}</span></div>
                          <div className="flex items-center text-gray-200"><Calendar className="w-5 h-5 mr-1" /><span>{formation.date}</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-700">
                          <Users className="w-6 h-6 mr-2 text-red-600" />
                          <span className="font-semibold text-lg">{formation.participants} participants</span>
                        </div>
                        <div className="text-red-600 font-bold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Voir détails →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-red-600' 
                    : 'w-2 bg-gray-300 hover:bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Panneau de Détail Intégré */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            selectedFormation ? 'max-h-[1000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          {selectedFormation && (
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative">
              <button
                onClick={() => setSelectedFormation(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all duration-300"
                aria-label="Fermer le détail"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="grid md:grid-cols-2">
                {/* Partie Image */}
                <div className="relative md:h-full h-80 min-h-[400px] md:rounded-l-3xl md:rounded-r-none rounded-t-3xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedFormation.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {selectedFormation.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-200">
                      <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /><span>{selectedFormation.location}</span></div>
                      <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /><span>{selectedFormation.date}</span></div>
                      <div className="flex items-center"><Users className="w-5 h-5 mr-2" /><span>{selectedFormation.participants}</span></div>
                    </div>
                  </div>
                </div>

                {/* Partie Contenu & Témoignage */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-red-600 uppercase mb-3">Témoignage Client</h4>
                  {selectedFormation.testimonial ? (
                    <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-800 text-lg italic mb-4">
                            "{selectedFormation.testimonial.text}"
                          </p>
                          <div>
                            <p className="font-bold text-gray-900">{selectedFormation.testimonial.author}</p>
                            <p className="text-sm text-gray-600">{selectedFormation.testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600 italic">Aucun témoignage disponible pour cette formation.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}