// app/components/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, BookOpen, TrendingUp, Briefcase } from 'lucide-react';
import { DESTINATIONS } from '@/data/catalogue';

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
    return (
        <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white overflow-hidden">
            {/* Effets de fond ultra moderne */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[80px]"></div>
            </div>

            {/* Grille de fond subtile */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Grid principal - Logo + 3 colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    
                    {/* Colonne Logo & Branding - VERSION AMÉLIORÉE */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                        <div className="relative group mb-6">
                            {/* Effet glow premium animé */}
                            <div className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* Container logo avec fond subtil SANS bordure */}
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-white/8 via-gray-800/30 to-gray-900/40 rounded-2xl p-6 shadow-2xl overflow-hidden">
                                {/* Effet de brillance animé */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                
                                {/* Logo avec filtre pour inverser les couleurs sombres */}
                                <div className="relative z-10" style={{
                                    filter: 'brightness(1.2) contrast(1.1)',
                                    mixBlendMode: 'normal'
                                }}>
                                    <Image
                                        src="/images/logo/logotrans.png"
                                        alt="DIEBENU & PARTNERS"
                                        width={240}
                                        height={45}
                                        priority
                                        className="w-full h-auto drop-shadow-[0_2px_20px_rgba(239,68,68,0.4)]"
                                        style={{
                                            filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.3)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))'
                                        }}
                                    />
                                </div>

                                {/* Particules décoratives */}
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-2 left-2 w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-center lg:text-left text-sm leading-relaxed mb-6 font-light">
                            Building a better world, together.
                        </p>

                        {/* Indicateur décoratif moderne */}
                        <div className="flex items-center gap-3">
                            <div className="h-[2px] w-16 bg-gradient-to-r from-red-600 via-orange-500 to-transparent rounded-full"></div>
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Services */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-orange-500 rounded-full"></span>
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('formation')} 
                                    className="group/item w-full flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                        <BookOpen className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm font-medium">Formation</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('conseil')} 
                                    className="group/item w-full flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                        <Briefcase className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm font-medium">Conseil</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('recherche')} 
                                    className="group/item w-full flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                        <TrendingUp className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm font-medium">Financement</span>
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setCurrentPage('contact')} 
                                    className="group/item w-full flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm font-medium">Contact</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne Destinations */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-orange-500 rounded-full"></span>
                            Destinations
                        </h4>
                        <ul className="space-y-3">
                            {DESTINATIONS.map((dest) => (
                                <li key={dest.name} className="group/item flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer">
                                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg flex-shrink-0">
                                        <MapPin className="w-4 h-4" />
                                    </span>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-sm font-medium truncate">{dest.name}</span>
                                        <span className="text-xs text-gray-600">{dest.country}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne Contact */}
                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-orange-500 rounded-full"></span>
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="group/item flex items-start gap-3 hover:translate-x-1 transition-all duration-300">
                                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg flex-shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                <span className="text-xs text-gray-400 group-hover/item:text-white transition-colors leading-relaxed">
                                    59, Bd Zerktouni<br />Étage 11, N°32<br />Casablanca, Maroc
                                </span>
                            </li>
                            <li className="group/item flex items-center gap-3 hover:translate-x-1 transition-all duration-300">
                                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                    <Phone className="w-4 h-4" />
                                </span>
                                <a href="tel:+212606698210" className="text-xs text-gray-400 group-hover/item:text-white transition-colors font-medium">
                                    +212 606 698 210 / +212 665 288 522
                                </a>
                            </li>
                            <li className="group/item flex items-center gap-3 hover:translate-x-1 transition-all duration-300">
                                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 group-hover/item:from-red-600 group-hover/item:to-orange-600 transition-all duration-300 shadow-lg">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <a href="mailto:contact@diebenu.com" className="text-xs text-gray-400 group-hover/item:text-white transition-colors font-medium">
                                    contact@diebenu.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom - Copyright */}
                <div className="relative pt-8 mt-8">
                    {/* Ligne de séparation ultra moderne */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                        <p className="text-gray-500 text-center sm:text-left">
                            © 2026 <span className="text-gray-400 font-semibold">DIEBENU & PARTNERS</span>. Tous droits réservés.
                        </p>
                        
                        {/* Badge Premium */}
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800/60 to-gray-900/60 border border-gray-700/40 backdrop-blur-xl shadow-lg">
                            <div className="relative">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-gray-400 font-semibold tracking-wide">Powered by Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}