'use client';

import React, { useState, ComponentType } from 'react';
import { Theme } from '@/types/index';
// Utilisation des imports directs (convention Next.js)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importation des composants pour la page d'accueil
import HeroSection from '../components/HeroSection';
import MotDuDG from '../components/MotDuDG';
import PolesExpertise from '../components/PolesExpertise';
import VisionMissionValues from '../components/VisionMissionValues';
import CTASection from '../components/CTASection';
import DestinationsSection from '../components/DestinationsSection';

// Importation des pages (Les chemins de page sont relatifs à ce fichier)
import FormationPage from './formation/page';
import ThemePage from './formation/[slug]/page';
import ConseilPage from './conseil/page';
import RecherchePage from './recherche-financement/page';
import AboutPage from './a-propos/page';
import ContactPage from './contact/page';

// Interface commune pour toutes les pages qui reçoivent la fonction de navigation
interface CommonPageProps {
    setCurrentPage: (page: string) => void;
}

// Interface pour la page de Formation
interface FormationPageProps extends CommonPageProps {
    setSelectedTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
}

// Interface pour la page de Thème
interface ThemePageProps extends CommonPageProps {
    theme: Theme;
}

// =========================================================
// HACK TEMPORAIRE: Cast les composants importés pour forcer l'acceptation des props
// C'est nécessaire car TypeScript ne peut pas voir les props des fichiers
// externes (./conseil/page, etc.) sans un typage clair à l'importation.
// La solution idéale serait d'exporter les interfaces depuis chaque page.
const TypedConseilPage = ConseilPage as ComponentType<CommonPageProps>;
const TypedRecherchePage = RecherchePage as ComponentType<CommonPageProps>;
const TypedAboutPage = AboutPage as ComponentType<CommonPageProps>;
const TypedContactPage = ContactPage as ComponentType<CommonPageProps>;
const TypedFormationPage = FormationPage as ComponentType<FormationPageProps>;
const TypedThemePage = ThemePage as ComponentType<ThemePageProps>;
// =========================================================


/**
 * Composant principal de l'application qui gère la navigation (simulée ici par l'état)
 * et affiche la page correspondante.
 */
export default function DiebenUPartners() {
  // L'état simule la navigation dans un environnement Next.js App Router
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const renderPage = () => {
    // Définir la prop à passer
    const commonProps: CommonPageProps = { setCurrentPage };

    switch (currentPage) {
      case 'home':
        return <HomePage {...commonProps} />;
      case 'formation':
        // Utilisation du composant typé
        return <TypedFormationPage {...commonProps} setSelectedTheme={setSelectedTheme} />;
      case 'theme':
        return selectedTheme 
          ? <TypedThemePage theme={selectedTheme} {...commonProps} /> 
          : <TypedFormationPage {...commonProps} setSelectedTheme={setSelectedTheme} />;
      case 'conseil':
        // Utilisation du composant typé
        return <TypedConseilPage {...commonProps} />;
      case 'recherche':
        // Utilisation du composant typé
        return <TypedRecherchePage {...commonProps} />;
      case 'about':
        // Utilisation du composant typé
        return <TypedAboutPage {...commonProps} />;
      case 'contact':
        // Utilisation du composant typé
        return <TypedContactPage {...commonProps} />;
      default:
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar est toujours présente */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setSelectedTheme={setSelectedTheme} 
      />
      
      <main className="pt-20"> {/* Ajout d'un padding pour éviter le chevauchement avec la navbar fixe */}
        {renderPage()}
      </main>

      {/* Footer est toujours présent */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// ============ HOME PAGE COMPONENTS ============

interface HomePageProps {
    setCurrentPage: (page: string) => void;
}

function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <MotDuDG />
      <PolesExpertise setCurrentPage={setCurrentPage} />
      <DestinationsSection /> {/* Ajout selon la structure fournie */}
      <VisionMissionValues />
      <CTASection setCurrentPage={setCurrentPage} />
    </>
  );
}
