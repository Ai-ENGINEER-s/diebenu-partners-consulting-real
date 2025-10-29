// app/recherche-financement/page.tsx
'use client';

import React from 'react';
import { DollarSign, TrendingUp, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Définition des props simplifiée (nécessaire pour le CTA)
interface RecherchePageProps {
    setCurrentPage: (page: string) => void;
}

export default function RecherchePage({ setCurrentPage }: RecherchePageProps) {
    const etapes = [
        { icon: DollarSign, title: "Identification", description: "Recherche proactive de sources de financement (partenaires techniques, fonds d'investissement, bailleurs)." },
        { icon: FileText, title: "Montage de Dossier", description: "Conception et rédaction de propositions techniques et financières conformes aux exigences des bailleurs." },
        { icon: CheckCircle, title: "Négociation & Suivi", description: "Accompagnement dans les négociations et support tout au long du cycle de vie du projet financé." },
    ];

    return (
        <>
            <div className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-green-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-bold text-white mb-6">Mobilisation de Ressources</h1>
                    <p className="text-xl text-gray-200">De l'idée au financement, votre partenaire de croissance.</p>
                </div>
            </div>
            
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto">
                        Nous mobilisons des ressources financières et techniques pour vos projets de développement, grâce à notre réseau étendu auprès des **bailleurs internationaux** et des **fonds d'investissement**.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 mr-3 text-red-600" /> Notre Processus
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {etapes.map((etape, i) => {
                            const Icon = etape.icon;
                            return (
                                <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl shadow-md border-t-4 border-red-600 transform hover:shadow-lg transition-shadow duration-300">
                                    <Icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{etape.title}</h3>
                                    <p className="text-gray-700 text-sm">{etape.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="text-center mt-16">
                        <button 
                            onClick={() => setCurrentPage('contact')}
                            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition duration-300 shadow-md"
                        >
                            Soumettre votre projet <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
            
            <CTASection setCurrentPage={setCurrentPage} />
        </>
    );
}