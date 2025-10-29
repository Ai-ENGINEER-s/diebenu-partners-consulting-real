// app/conseil/page.tsx
'use client';

import React from 'react';
import { FileText, Target, Users, ArrowRight, Briefcase } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Définition des props simplifiée (nécessaire pour le CTA)
interface ConseilPageProps {
    setCurrentPage: (page: string) => void;
}

export default function ConseilPage({ setCurrentPage }: ConseilPageProps) {
    const services = [
        {
            icon: Target,
            title: "Conseil Stratégique",
            description: "Aidez-nous à définir votre cap : de la formulation de votre vision à l'élaboration de feuilles de route claires et mesurables."
        },
        {
            icon: FileText,
            title: "Études et Diagnostics",
            description: "Analyses de performance, études sectorielles, diagnostics organisationnels pour identifier les leviers de croissance et d'efficience."
        },
        {
            icon: Users,
            title: "Gestion du Changement",
            description: "Accompagnement humain et organisationnel lors de réformes ou de transformation digitale."
        },
        {
            icon: Briefcase,
            title: "Appui Institutionnel",
            description: "Renforcement des capacités de gouvernance, modernisation des systèmes de gestion publique et alignement aux normes internationales."
        },
    ];

    return (
        <>
            <div className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-purple-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl font-bold text-white mb-6">Conseil & Études</h1>
                    <p className="text-xl text-gray-200">Notre expertise au service de vos défis stratégiques.</p>
                </div>
            </div>
            
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto">
                        Notre pôle **Conseil** fournit des solutions sur mesure en **gouvernance, management et stratégie**. Nous vous aidons à optimiser vos performances et à réaliser un impact durable.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div key={i} className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                                    <Icon className="w-10 h-10 text-red-600 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="text-center mt-16">
                        <button 
                            onClick={() => setCurrentPage('contact')}
                            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition duration-300 shadow-md"
                        >
                            Démarrer votre projet <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
            
            <CTASection setCurrentPage={setCurrentPage} />
        </>
    );
}