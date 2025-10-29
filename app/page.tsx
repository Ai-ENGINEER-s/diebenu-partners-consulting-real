'use client';

import React, { useState, ComponentType } from 'react';
// La correction principale est d'assurer que CET import est utilisé PARTOUT
// J'ajoute 'Session' car l'erreur le mentionne comme point de défaillance.
import { Theme, Module, Session } from '@/types/index';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormationsRealisees from '../components/FormationsRealisees';
import HeroSection from '@/components/HeroSection';
import MotDuDG from '@/components/MotDuDG';
import PolesExpertise from '@/components/PolesExpertise';
import VisionMissionValues from '@/components/VisionMissionValues';
import CTASection from '@/components/CTASection';
import DestinationsSection from '../components/DestinationsSection';
import Tarifs from '@/components/Tarifs';
// Importation pages
import FormationPage from '@/app/formation/page';
import ThemePage from '@/app/formation/[slug]/page';
import ConseilPage from '@/app/conseil/page';
import RecherchePage from '@/app/recherche-financement/page';
import AboutPage from '@/app/a-propos/page';
import ContactPage from '@/app/contact/page';

// Interfaces navigation interne
interface CommonPageProps {
  setCurrentPage: (page: string) => void;
}

interface FormationPageProps extends CommonPageProps {
  setSelectedTheme: (theme: Theme) => void;
  setSelectedModule: (module: Module) => void;
}

interface ThemePageProps extends CommonPageProps {
  theme: Theme;
  module: Module;
}

// Typages forcés (Assertion de type)
// Note: Ces 'as' forcent TypeScript à accepter les types.
// Le problème vient de la définition de 'Theme' en amont.
const TypedConseilPage = ConseilPage as ComponentType<CommonPageProps>;
const TypedRecherchePage = RecherchePage as ComponentType<CommonPageProps>;
const TypedAboutPage = AboutPage as ComponentType<CommonPageProps>;
const TypedContactPage = ContactPage as ComponentType<CommonPageProps>;
const TypedFormationPage = FormationPage as ComponentType<FormationPageProps>;
const TypedThemePage = ThemePage as ComponentType<ThemePageProps>;

export default function DiebenUPartners() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const setSelectedThemeSafe = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const setSelectedModuleSafe = (module: Module) => {
    setSelectedModule(module);
  };

  // Fonction pour gérer le changement de page avec reset
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Reset des sélections si on retourne à la page formation
    if (page === 'formation') {
      setSelectedTheme(null);
      setSelectedModule(null);
    }
  };

  const commonProps: CommonPageProps = { setCurrentPage: handlePageChange };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage {...commonProps} />;
      case 'formation':
        return (
          <TypedFormationPage
            {...commonProps}
            setSelectedTheme={setSelectedThemeSafe}
            setSelectedModule={setSelectedModuleSafe}
          />
        );
      case 'theme': // Cette page affiche un module spécifique d'un thème
        return selectedTheme && selectedModule ? (
          <TypedThemePage
            theme={selectedTheme}
            module={selectedModule}
            {...commonProps}
          />
        ) : (
          // Fallback : si l'état est incomplet, retourne à la page de formation
          <TypedFormationPage
            {...commonProps}
            setSelectedTheme={setSelectedThemeSafe}
            setSelectedModule={setSelectedModuleSafe}
          />
        );
      case 'conseil':
        return <TypedConseilPage {...commonProps} />;
      case 'recherche':
        return <TypedRecherchePage {...commonProps} />;
        
      case 'about':
        return <TypedAboutPage {...commonProps} />;
      case 'contact':
        return <TypedContactPage {...commonProps} />;
      default:
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        
        setSelectedTheme={setSelectedThemeSafe}
      />

      <main className="pt-20">{renderPage()}</main>

      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}

// HOME PAGE COMPONENT
interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      {/* <MotDuDG /> */}
      <PolesExpertise setCurrentPage={setCurrentPage} />
      {/* <FormationsRealisees/> */}
      <DestinationsSection />
      <VisionMissionValues />
      <section className="py-10 md:py-14 lg:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
  {/* Effets de fond */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <Tarifs />
  </div>
</section>

      <CTASection setCurrentPage={setCurrentPage} />
    </>
  );
}