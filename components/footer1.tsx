// app/components/Footer.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, BookOpen, TrendingUp, Briefcase, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Send, Sparkles, Globe } from 'lucide-react';
import { DESTINATIONS } from '@/data/catalogue';

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
    const [email, setEmail] = useState('');
    const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Background ultra moderne avec grille animée */}
            <div className="absolute inset-0">
                {/* Grille futuriste */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                
                {/* Effets de lumière dynamiques */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full filter blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[128px] animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[128px] animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Section Hero du Footer */}
                <div className="border-b border-white/10 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Logo & Mission Statement */}
                        <div className="space-y-8">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative">
                                    <Image
                                        src="/images/logo/logo-transparent.png"
                                        alt="DIEBENU & PARTNERS"
                                        width={380}
                                        height={71}
                                        className="mb-4 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                                    Building a better world, together.
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    Votre partenaire stratégique pour transformer vos ambitions en réalité. Excellence, innovation et impact durable.
                                </p>
                            </div>

                            {/* Social Media avec effet premium */}
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-500 font-medium">Suivez-nous</span>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Linkedin, color: 'from-[#0077B5] to-[#00A0DC]' },
                                        { icon: Twitter, color: 'from-[#1DA1F2] to-[#0C85D0]' },
                                        { icon: Facebook, color: 'from-[#1877F2] to-[#0C63D4]' },
                                        { icon: Instagram, color: 'from-[#E4405F] via-[#C13584] to-[#833AB4]' }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/20 transition-all duration-300"
                                        >
                                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                            <social.icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Premium */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-3xl blur-2xl"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold">Restez informé</h4>
                                        <p className="text-sm text-gray-400">Insights exclusifs & actualités</p>
                                    </div>
                                </div>
                                
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="votre@email.com"
                                            className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all duration-300 text-white placeholder-gray-500"
                                        />
                                        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 font-medium flex items-center gap-2 group">
                                            <span>S'abonner</span>
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500">En vous inscrivant, vous acceptez notre politique de confidentialité.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Services avec design card premium */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
                                <span className="text-gray-400">Services</span>
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { icon: BookOpen, text: 'Formation', page: 'formation', desc: 'Programmes d\'excellence' },
                                    { icon: Briefcase, text: 'Conseil', page: 'conseil', desc: 'Stratégie & expertise' },
                                    { icon: TrendingUp, text: 'Financement', page: 'recherche', desc: 'Solutions sur-mesure' },
                                    { icon: Mail, text: 'Contact', page: 'contact', desc: 'Discutons de votre projet' }
                                ].map((item) => (
                                    <li key={item.text}>
                                        <button
                                            onClick={() => setCurrentPage(item.page)}
                                            className="group w-full text-left p-4 rounded-2xl bg-white/0 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-600/30">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{item.text}</span>
                                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-red-400" />
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Destinations avec effet interactif */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
                                <span className="text-gray-400">Destinations</span>
                            </h4>
                            <ul className="space-y-3">
                                {DESTINATIONS.map((dest) => (
                                    <li key={dest.name}>
                                        <div
                                            onMouseEnter={() => setHoveredDestination(dest.name)}
                                            onMouseLeave={() => setHoveredDestination(null)}
                                            className="group cursor-pointer p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-all duration-300 ${hoveredDestination === dest.name ? 'bg-red-600 scale-110' : ''}`}>
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white group-hover:text-red-400 transition-colors duration-300">{dest.name}</div>
                                                    <div className="text-xs text-gray-500">{dest.country}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Liens rapides */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
                                <span className="text-gray-400">Entreprise</span>
                            </h4>
                            <ul className="space-y-4">
                                {['À propos', 'Carrières', 'Blog', 'Presse', 'Partenaires'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-red-600 group-hover:scale-150 transition-all duration-300"></div>
                                            <span>{link}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Cards */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent"></div>
                                <span className="text-gray-400">Contact</span>
                            </h4>
                            <div className="space-y-4">
                                <div className="group p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-red-600/10 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                            <MapPin className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-semibold text-white mb-1">Casablanca</p>
                                            <p className="text-gray-400 leading-relaxed">59, Bd Zerktouni<br />Étage 11, N°32<br />Maroc</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="tel:+212606698210" className="group block p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-red-600/10 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                            <Phone className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-0.5">Appelez-nous</p>
                                            <p className="font-semibold text-white">+212 606 698 210</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="mailto:contact@diebenu.com" className="group block p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-red-600/10 group-hover:bg-red-600 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                            <Mail className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-0.5">Écrivez-nous</p>
                                            <p className="font-semibold text-white">contact@diebenu.com</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Premium */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6 text-sm">
                            <p className="text-gray-400">
                                © 2026 <span className="font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">DIEBENU & PARTNERS</span>
                            </p>
                            <div className="hidden lg:flex items-center gap-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Confidentialité</a>
                                <span className="text-gray-700">•</span>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Conditions</a>
                                <span className="text-gray-700">•</span>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 text-sm">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <select className="bg-transparent border border-white/10 rounded-lg px-3 py-1.5 text-gray-400 focus:outline-none focus:border-red-600/50 cursor-pointer">
                                <option>Français</option>
                                <option>English</option>
                                <option>العربية</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}