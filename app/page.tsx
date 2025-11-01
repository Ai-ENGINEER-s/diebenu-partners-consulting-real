'use client';

// Ajout de 'useEffect' pour le scroll au chargement
import React, { useState, ComponentType, useEffect } from 'react';
// === CORRECTION DES CHEMINS D'IMPORTATION ===
import { Theme, Module, ThemeForOtherPages, ModuleForOtherPages } from '../types/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FormationsRealisees from '../components/FormationsRealisees';
import HeroSection from '../components/HeroSection';
import MotDuDG from '../components/MotDuDG';
import PolesExpertise from '../components/PolesExpertise';
import VisionMissionValues from '../components/VisionMissionValues';
import CTASection from '../components/CTASection';
import DestinationsSection from '../components/DestinationsSection';
import Tarifs from '../components/Tarifs';

// Importation pages (chemins relatifs)
import FormationPage from './formation/page';
import ThemePage from './formation/[slug]/page';
import EtudePage from './etude/page';
import EtudeDetailPage from './etude/[slug]/page';
import ConseilPage from './conseil/page';
import ConseilDetailPage from './conseil/[slug]/page';
import RecherchePage from './recherche-financement/page';
import FinancementDetailPage from './recherche-financement/[slug]/page';
import AboutPage from './a-propos/page';
import ContactPage from './contact/page';
// ============================================

// Interfaces navigation interne
interface CommonPageProps {
  setCurrentPage: (page: string) => void;
}

interface FormationPageProps extends CommonPageProps {
  setSelectedTheme: (theme: Theme) => void;
  setSelectedModule: (module: Module) => void;
}

interface EtudePageProps extends CommonPageProps {
  setSelectedTheme: (theme: ThemeForOtherPages) => void;
  setSelectedModule: (module: ModuleForOtherPages) => void;
}

interface ConseilPageProps extends CommonPageProps {
  setSelectedTheme: (theme: ThemeForOtherPages) => void;
  setSelectedModule: (module: ModuleForOtherPages) => void;
}

interface FinancementPageProps extends CommonPageProps {
  setSelectedTheme: (theme: ThemeForOtherPages) => void;
  setSelectedModule: (module: ModuleForOtherPages) => void;
}

interface ThemePageProps extends CommonPageProps {
  theme: Theme;
  module: Module;
}

interface EtudeDetailPageProps extends CommonPageProps {
  theme: ThemeForOtherPages;
  module: ModuleForOtherPages;
}

interface ConseilDetailPageProps extends CommonPageProps {
  theme: ThemeForOtherPages;
  module: ModuleForOtherPages;
}

interface FinancementDetailPageProps extends CommonPageProps {
  theme: ThemeForOtherPages;
  module: ModuleForOtherPages;
}

// Typages forcés
const TypedEtudePage = EtudePage as ComponentType<EtudePageProps>;
const TypedConseilPage = ConseilPage as ComponentType<ConseilPageProps>;
const TypedRecherchePage = RecherchePage as ComponentType<FinancementPageProps>;
const TypedAboutPage = AboutPage as ComponentType<CommonPageProps>;
const TypedContactPage = ContactPage as ComponentType<CommonPageProps>;
const TypedFormationPage = FormationPage as ComponentType<FormationPageProps>;
const TypedThemePage = ThemePage as ComponentType<ThemePageProps>;
const TypedEtudeDetailPage = EtudeDetailPage as ComponentType<EtudeDetailPageProps>;
const TypedConseilDetailPage = ConseilDetailPage as ComponentType<ConseilDetailPageProps>;
const TypedFinancementDetailPage = FinancementDetailPage as ComponentType<FinancementDetailPageProps>;

export default function DiebenUPartners() {
  const [currentPage, setCurrentPage] = useState('home');

  // États séparés pour Formation
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  // États séparés pour Etude
  const [selectedEtudeTheme, setSelectedEtudeTheme] = useState<ThemeForOtherPages | null>(null);
  const [selectedEtudeModule, setSelectedEtudeModule] = useState<ModuleForOtherPages | null>(null);

  // États séparés pour Conseil
  const [selectedConseilTheme, setSelectedConseilTheme] = useState<ThemeForOtherPages | null>(null);
  const [selectedConseilModule, setSelectedConseilModule] = useState<ModuleForOtherPages | null>(null);

  // États séparés pour Financement
  const [selectedFinancementTheme, setSelectedFinancementTheme] = useState<ThemeForOtherPages | null>(null);
  const [selectedFinancementModule, setSelectedFinancementModule] = useState<ModuleForOtherPages | null>(null);

  // Setters pour Formation
  const setSelectedThemeSafe = (theme: Theme) => { setSelectedTheme(theme); };
  const setSelectedModuleSafe = (module: Module) => { setSelectedModule(module); };

  // Setters pour Etude
  const setSelectedEtudeThemeSafe = (theme: ThemeForOtherPages) => { setSelectedEtudeTheme(theme); };
  const setSelectedEtudeModuleSafe = (module: ModuleForOtherPages) => { setSelectedEtudeModule(module); };

  // Setters pour Conseil
  const setSelectedConseilThemeSafe = (theme: ThemeForOtherPages) => { setSelectedConseilTheme(theme); };
  const setSelectedConseilModuleSafe = (module: ModuleForOtherPages) => { setSelectedConseilModule(module); };

  // Setters pour Financement
  const setSelectedFinancementThemeSafe = (theme: ThemeForOtherPages) => {
    setSelectedFinancementTheme(theme);
  };
  const setSelectedFinancementModuleSafe = (module: ModuleForOtherPages) => {
    setSelectedFinancementModule(module);
  };

  // === CORRECTION SCROLL : Fonction pour gérer le changement de page avec reset et scroll ===
  const handlePageChange = (page: string) => {
    setCurrentPage(page);

    // Force le navigateur à remonter en haut de la page à chaque changement
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Reset des sélections appropriées selon la page
    if (page === 'formation') {
      setSelectedTheme(null);
      setSelectedModule(null);
    } else if (page === 'etude') {
      setSelectedEtudeTheme(null);
      setSelectedEtudeModule(null);
    } else if (page === 'conseil') {
      setSelectedConseilTheme(null);
      setSelectedConseilModule(null);
    } else if (page === 'recherche') {
      setSelectedFinancementTheme(null);
      setSelectedFinancementModule(null);
    }
  };

  // Effet pour remonter en haut lors du chargement initial
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
  // =================================================================================

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

      case 'etude':
        return (
          <TypedEtudePage
            {...commonProps}
            setSelectedTheme={setSelectedEtudeThemeSafe}
            setSelectedModule={setSelectedEtudeModuleSafe}
          />
        );

      case 'etude-detail':
        return selectedEtudeTheme && selectedEtudeModule ? (
          <TypedEtudeDetailPage
            theme={selectedEtudeTheme}
            module={selectedEtudeModule}
            {...commonProps}
          />
        ) : (
          <TypedEtudePage
            {...commonProps}
            setSelectedTheme={setSelectedEtudeThemeSafe}
            setSelectedModule={setSelectedEtudeModuleSafe}
          />
        );

      // =================================================================
      // CORRECTION : Renommage de 'theme' en 'formation-detail'
      // =================================================================
      case 'formation-detail':
        return selectedTheme && selectedModule ? (
          <TypedThemePage // C'est votre page de détail de module
            theme={selectedTheme}
            module={selectedModule}
            {...commonProps}
          />
        ) : (
          <TypedFormationPage
            {...commonProps}
            setSelectedTheme={setSelectedThemeSafe}
            setSelectedModule={setSelectedModuleSafe}
          />
        );

      case 'conseil':
        return (
          <TypedConseilPage
            {...commonProps}
            setSelectedTheme={setSelectedConseilThemeSafe}
            setSelectedModule={setSelectedConseilModuleSafe}
          />
        );

      case 'conseil-detail':
        return selectedConseilTheme && selectedConseilModule ? (
          <TypedConseilDetailPage
            theme={selectedConseilTheme}
            module={selectedConseilModule}
            {...commonProps}
          />
        ) : (
          <TypedConseilPage
            {...commonProps}
            setSelectedTheme={setSelectedConseilThemeSafe}
            setSelectedModule={setSelectedConseilModuleSafe}
          />
        );

      case 'recherche':
        return (
          <TypedRecherchePage
            {...commonProps}
            setSelectedTheme={setSelectedFinancementThemeSafe}
            setSelectedModule={setSelectedFinancementModuleSafe}
          />
        );

      case 'financement-detail':
        return selectedFinancementTheme && selectedFinancementModule ? (
          <TypedFinancementDetailPage
            theme={selectedFinancementTheme}
            module={selectedFinancementModule}
            {...commonProps}
          />
        ) : (
          <TypedRecherchePage
            {...commonProps}
            setSelectedTheme={setSelectedFinancementThemeSafe}
            setSelectedModule={setSelectedFinancementModuleSafe}
          />
        );

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
      {/* ================================================================= */}
      {/* CORRECTION : Ajout de setSelectedModule à la Navbar               */}
      {/* ================================================================= */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        setSelectedTheme={setSelectedThemeSafe}
        setSelectedModule={setSelectedModuleSafe} 
        setSelectedEtudeTheme={setSelectedEtudeThemeSafe}
        setSelectedEtudeModule={setSelectedEtudeModuleSafe}
        setSelectedConseilTheme={setSelectedConseilThemeSafe}
        setSelectedConseilModule={setSelectedConseilModuleSafe}
        setSelectedFinancementTheme={setSelectedFinancementThemeSafe}
        setSelectedFinancementModule={setSelectedFinancementModuleSafe}
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
          <Tarifs setCurrentPage={setCurrentPage} />
        </div>
      </section>

      <CTASection setCurrentPage={setCurrentPage} />
    </>
  );
}