// app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Briefcase, Zap, Search, LayoutGrid, Award, Loader2, Target, BarChart2, BriefcaseBusiness, Settings } from 'lucide-react'; 
import Image from "next/image";
import { FORMATION_CATALOGUE } from '@/data/catalogue';

interface MegaMenuProps {
    onSelect: (page: string) => void;
}

function MegaMenuConseil({ onSelect }: MegaMenuProps) {
    const services = [
        { key: 'strat', title: 'Conseil Stratégique', description: "Élaboration de stratégies d'entreprise et institutionnelles." },
        { key: 'etudes', title: 'Études & Diagnostics', description: 'Analyses sectorielles approfondies et études de faisabilité.' },
        { key: 'projets', title: 'Accompagnement Projets', description: 'Mise en œuvre et évaluation de projets complexes.' },
    ];
    
    return (
        <div 
            className="absolute top-24 left-0 w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 backdrop-blur-xl shadow-3xl border-t border-gray-200 animate-in fade-in slide-in-from-top-4 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-red-600/20 flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                        <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    Services de Conseil
                </h3>
                <div className="grid grid-cols-3 gap-6">
                    {services.map(service => (
                        <button 
                            key={service.key} 
                            onClick={() => onSelect('conseil')} 
                            className="text-left p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-white border-2 border-gray-100 hover:border-red-300 transition-all duration-300 group shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-700 text-base">{service.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                        </button>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <button onClick={() => onSelect('conseil')} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold hover:from-gray-900 hover:to-gray-800 transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-2xl">
                        Découvrir nos services de Conseil <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}



export default MegaMenuConseil;