// app/components/Footer.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, BookOpen, TrendingUp, Briefcase, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Globe, ExternalLink } from 'lucide-react';
import { DESTINATIONS } from '@/data/catalogue';

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <footer className="relative bg-[#f5f3f0] text-gray-900 overflow-hidden">
            {/* Background moderne minimaliste */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e6e3_1px,transparent_1px),linear-gradient(to_bottom,#e8e6e3_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full filter blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/3 rounded-full filter blur-[150px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Top Section - Logo & Réseaux sociaux */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-gray-300">
                    <div className="space-y-4">
                        <div className="group cursor-pointer">
                            <Image
                                src="/images/logo/logo-transparent.png"
                                alt="DIEBENU & PARTNERS"
                                width={320}
                                height={60}
                                className="transition-all duration-300 drop-shadow-[0_0_20px_rgba(239,68,68,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(239,68,68,0.25)]"
                            />
                        </div>
                        <p className="text-xl text-gray-600 font-light max-w-md">
                            Building a better world, together.
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <div className="flex items-center gap-3">
                            {[
                                { icon: Linkedin, href: '#', gradient: 'hover:from-[#0077B5] hover:to-[#00A0DC]' },
                                { icon: Twitter, href: '#', gradient: 'hover:from-[#1DA1F2] hover:to-[#0C85D0]' },
                                { icon: Facebook, href: '#', gradient: 'hover:from-[#1877F2] hover:to-[#0C63D4]' },
                                { icon: Instagram, href: '#', gradient: 'hover:from-[#E4405F] hover:via-[#C13584] hover:to-[#833AB4]' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className={`w-11 h-11 rounded-xl bg-white border border-gray-300 flex items-center justify-center bg-gradient-to-br from-transparent to-transparent ${social.gradient} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-700 hover:text-white`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Globe className="w-4 h-4" />
                            <select className="bg-transparent border-none text-gray-700 cursor-pointer hover:text-gray-900 transition-colors focus:outline-none font-medium">
                                <option>Français</option>
                                <option>English</option>
                                <option>العربية</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid - Agencement optimisé */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
                    {/* Services - 4 colonnes */}
                    <div className="lg:col-span-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Nos Services</h4>
                        <div className="space-y-2">
                            {[
                                { icon: BookOpen, text: 'Formation', page: 'formation', color: 'red' },
                                { icon: Briefcase, text: 'Conseil', page: 'conseil', color: 'blue' },
                                { icon: TrendingUp, text: 'Financement', page: 'recherche', color: 'purple' },
                                { icon: Mail, text: 'Contact', page: 'contact', color: 'green' }
                            ].map((item) => (
                                <button
                                    key={item.text}
                                    onClick={() => setCurrentPage(item.page)}
                                    onMouseEnter={() => setHoveredService(item.text)}
                                    onMouseLeave={() => setHoveredService(null)}
                                    className="group w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 ${hoveredService === item.text ? 'scale-110' : ''} text-gray-700 group-hover:text-white`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <span className="text-lg font-semibold text-gray-900 block group-hover:text-red-600 transition-colors">
                                            {item.text}
                                        </span>
                                    </div>
                                    <ArrowRight className={`w-5 h-5 text-gray-400 group-hover:text-red-600 transition-all duration-300 ${hoveredService === item.text ? 'translate-x-2' : ''}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Destinations - 3 colonnes */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Destinations</h4>
                        <div className="space-y-3">
                            {DESTINATIONS.map((dest) => (
                                <div
                                    key={dest.name}
                                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer"
                                >
                                    <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 transition-transform duration-300"></div>
                                    <div>
                                        <p className="text-gray-900 font-medium group-hover:text-red-600 transition-colors">{dest.name}</p>
                                        <p className="text-xs text-gray-500">{dest.country}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact - 5 colonnes */}
                    <div className="lg:col-span-5">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contactez-nous</h4>
                        <div className="space-y-4">
                            {/* Adresse */}
                            <div className="group relative p-5 rounded-2xl bg-white border border-gray-300 hover:border-red-600/30 hover:shadow-lg transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                                <div className="relative flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-all duration-300">
                                        <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 mb-1">Bureau Principal</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            59, Bd Zerktouni, Étage 11, N°32<br />
                                            Casablanca, Maroc
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Téléphone & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="tel:+212606698210"
                                    className="group relative p-5 rounded-2xl bg-white border border-gray-300 hover:border-red-600/30 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                                        <Phone className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Appelez</p>
                                        <p className="text-sm font-semibold text-gray-900">+212 606 698 210</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:contact@diebenu.com"
                                    className="group relative p-5 rounded-2xl bg-white border border-gray-300 hover:border-red-600/30 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                                        <Mail className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <p className="text-sm font-semibold text-gray-900">contact@diebenu.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Compact */}
                <div className="pt-8 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-gray-600">
                            © 2026 <span className="font-bold text-gray-900">DIEBENU & PARTNERS</span>. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-6 text-gray-600">
                            <a href="#" className="hover:text-red-600 transition-colors">Confidentialité</a>
                            <span>•</span>
                            <a href="#" className="hover:text-red-600 transition-colors">Conditions</a>
                            <span>•</span>
                            <a href="#" className="hover:text-red-600 transition-colors">Mentions légales</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}