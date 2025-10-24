


// data/catalogue.ts


import { Theme } from '@/types/index';

// Fonctions utilitaires basées sur l'interprétation des données fournies
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const generateSessions = (date1: string, date2: string, date3: string) => [
  { date: date1, location: 'Casablanca' },
  { date: date2, location: 'Abidjan' },
  { date: date3, location: 'Dakar' },
];

const FORMATION_CATALOGUE: Theme[] = [
  // Thème 1 : Gouvernance, Leadership et Management stratégique
  {
    slug: 'gouvernance-leadership-strategique',
    title: 'Gouvernance, Leadership et Management stratégique',
    image: '/images/themes/glms.jpg',
    modules: [
      {
        code: 'GLMS 01',
        title: 'Gouvernance stratégique 5.0',
        themeDetail: 'Gouvernance stratégique 5.0 : nouvelles méthodes et outils pour repenser la direction des organisations',
        // Mise à jour des sessions GLMS 01 pour correspondre à la liste complète (si l'on utilise generateSessions)
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'GLMS 02',
        title: 'Les outils innovants du leadership moderne',
        themeDetail: 'Les outils innovants du leadership moderne : technologie, neurosciences et management de l\'influence',
        // Mise à jour des sessions GLMS 02 pour correspondre à la liste complète (si l'on utilise generateSessions)
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'GLMS 03',
        title: 'Leadership d\'avenir: maîtriser les nouveaux processus de décision en environnement complexe',
        themeDetail: 'Leadership d\'avenir: maîtriser les nouveaux processus de décision en environnement complexe',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'GLMS 04',
        title: 'Diriger avec les nouveaux leviers de performance stratégique: du Design Thinking à l\'intelligence décisionnelle',
        themeDetail: 'Diriger avec les nouveaux leviers de performance stratégique: du Design Thinking à l\'intelligence décisionnelle',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'GLMS 05',
        title: 'Gouvernance des projets complexes: piloter des programmes multisectoriels avec méthode',
        themeDetail: 'Gouvernance des projets complexes: piloter des programmes multisectoriels avec méthode',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'GLMS 06',
        title: 'Leadership stratégique basé sur les données (Data-Driven Leadership)',
        themeDetail: 'Leadership stratégique basé sur les données (Data-Driven Leadership)',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'GLMS 07',
        title: 'Gouvernance de la performance: créer une culture des résultats et de la responsabilité collective',
        themeDetail: 'Gouvernance de la performance: créer une culture des résultats et de la responsabilité collective',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'GLMS 08',
        title: 'Construire une gouvernance fondée sur l\'impact de la performance financière à la valeur sociétale',
        themeDetail: 'Construire une gouvernance fondée sur l\'impact de la performance financière à la valeur sociétale',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'GLMS 09',
        title: 'Diriger en réseau nouvelles formes de leadership collaboratif et interinstitutionnel',
        themeDetail: 'Diriger en réseau nouvelles formes de leadership collaboratif et interinstitutionnel',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'GLMS 10',
        title: 'Leadership d\'influence et storytelling stratégique: Techniques avancées de résolution stratégique des conflits dans les organisations complexes',
        themeDetail: 'Leadership d\'influence et storytelling stratégique: Techniques avancées de résolution stratégique des conflits dans les organisations complexes',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },
  
  <hr>

  // Thème 2 : Finance, Comptabilité, audit, contrôle de gestion
  {
    slug: 'finance-comptabilite-audit',
    title: 'Finance, Comptabilité, audit, contrôle de gestion',
    image: '/images/themes/fccg.jpg',
    modules: [
      {
        code: 'FCCG 01',
        title: 'Audit de performance et audit opérationnel',
        themeDetail: 'Audit de performance et audit opérationnel: nouvelles grilles d\'analyse pour améliorer la rentabilité publique',
        // Mise à jour des sessions FCCG 01 pour correspondre à la liste complète
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'FCCG 02',
        title: 'Gestion budgétaire et suivi de l\'exécution des budgets publics et privés',
        themeDetail: 'Gestion budgétaire et suivi de l\'exécution des budgets publics et privés',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'FCCG 03',
        title: 'Planification et conduite d\'un audit financier selon les normes internationales techniques récentes et outils de planification avancés',
        themeDetail: 'Planification et conduite d\'un audit financier selon les normes internationales techniques récentes et outils de planification avancés',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'FCCG 04',
        title: 'Contrôle interne conception, mise en œuvre et évaluation des dispositifs',
        themeDetail: 'Contrôle interne conception, mise en œuvre et évaluation des dispositifs',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'FCCG 05',
        title: 'Contrôle de gestion dans le secteur public méthodes actualisées et outils adaptés à la culture de résultats',
        themeDetail: 'Contrôle de gestion dans le secteur public méthodes actualisées et outils adaptés à la culture de résultats',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'FCCG 06',
        title: 'Mise en place d\'un contrôle de gestion intégré nouvelles méthodes et indicateurs dynamiques de pilotage',
        themeDetail: 'Mise en place d\'un contrôle de gestion intégré nouvelles méthodes et indicateurs dynamiques de pilotage',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'FCCG 07',
        title: 'Prévision budgétaire et analyse des écarts intégrer les techniques modernes de modélisation financière',
        themeDetail: 'Prévision budgétaire et analyse des écarts intégrer les techniques modernes de modélisation financière',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'FCCG 08',
        title: 'Clôture des comptes et états financiers: techniques actualisées et outils de fiabilisation avancés',
        themeDetail: 'Clôture des comptes et états financiers: techniques actualisées et outils de fiabilisation avancés',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 au Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'FCCG 09',
        title: 'Auditer les projets des bailleurs de fonds normes, outils numériques et exigences actualisées',
        themeDetail: 'Auditer les projets des bailleurs de fonds normes, outils numériques et exigences actualisées',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'FCCG 10',
        title: 'Digitalisation des fonctions comptables et financières nouveaux processus et outils d\'optimisation',
        themeDetail: 'Digitalisation des fonctions comptables et financières nouveaux processus et outils d\'optimisation',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 3 : Contrats, commande, marchés publics
  {
    slug: 'contrats-marches-publics',
    title: 'Contrats, commande, marchés publics',
    image: '/images/themes/ccmp.jpg',
    modules: [
      {
        code: 'CCMP 01',
        title: 'Maîtriser les nouvelles approches de gouvernance des marchés publics conformité, transparence et performance contractuelle',
        themeDetail: 'Maîtriser les nouvelles approches de gouvernance des marchés publics conformité, transparence et performance contractuelle',
        // Mise à jour des sessions CCMP 01 pour correspondre à la liste complète
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'CCMP 02',
        title: 'Commande publique et gestion stratégique des achats outils modernes pour optimiser la dépense publique',
        themeDetail: 'Commande publique et gestion stratégique des achats outils modernes pour optimiser la dépense publique',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'CCMP 03',
        title: 'Passation des marchés publics selon les nouvelles procédures nationales et bailleurs internationaux (BM, BAD, UE)',
        themeDetail: 'Passation des marchés publics selon les nouvelles procédures nationales et bailleurs internationaux (BM, BAD, UE)',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'CCMP 04',
        title: 'Planification et préparation des marchés nouvelles méthodes pour sécuriser la chaîne de la commande publique',
        themeDetail: 'Planification et préparation des marchés nouvelles méthodes pour sécuriser la chaîne de la commande publique',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'CCMP 05',
        title: 'Techniques avancées de rédaction des DAO et DCE: exigences actuelles et pièges à éviter',
        themeDetail: 'Techniques avancées de rédaction des DAO et DCE: exigences actuelles et pièges à éviter',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'CCMP 06',
        title: 'Digitalisation de la commande publique plateformes, e-procurement et traçabilité numérique des procédures',
        themeDetail: 'Digitalisation de la commande publique plateformes, e-procurement et traçabilité numérique des procédures',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'CCMP 07',
        title: 'Contrôle citoyen et open data dans les marchés publics: vers une transparence intelligente et participative',
        themeDetail: 'Contrôle citoyen et open data dans les marchés publics: vers une transparence intelligente et participative',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'CCMP 08',
        title: 'Autorités de régulation et gouvernance des achats publics bonnes pratiques et mécanismes d\'arbitrage innovants',
        themeDetail: 'Autorités de régulation et gouvernance des achats publics bonnes pratiques et mécanismes d\'arbitrage innovants',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'CCMP 09',
        title: 'Audit des marchés publics: nouvelles méthodes et pratiques de contrôle adaptées aux autorités de régulation',
        themeDetail: 'Audit des marchés publics: nouvelles méthodes et pratiques de contrôle adaptées aux autorités de régulation',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'CCMP 10',
        title: 'Renforcer la transparence dans la commande publique innovations institutionnelles et outils participatifs',
        themeDetail: 'Renforcer la transparence dans la commande publique innovations institutionnelles et outils participatifs',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 4 : Gestion de Projets/Programmes et Ingénierie de Développement
  {
    title: 'Gestion de Projets/Programmes et Ingénierie de Développement',
    slug: slugify('Gestion de Projets/Programmes et Ingénierie de Développement'),
    image: '/images/themes/gpid.jpg', // Image supposée
    modules: [
      {
        code: 'GPID 01',
        title: 'Gouvernance stratégique des projets de développement: vision, coordination et performance',
        themeDetail: 'Gouvernance stratégique des projets de développement: vision, coordination et performance',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'GPID 02',
        title: 'Gestion axée sur les résultats (GAR): méthodes avancées pour les décideurs',
        themeDetail: 'Gestion axée sur les résultats (GAR): méthodes avancées pour les décideurs',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'GPID 03',
        title: 'Leadership stratégique et opérationnel des équipes projets outils modernes de pilotage humain et technique',
        themeDetail: 'Leadership stratégique et opérationnel des équipes projets outils modernes de pilotage humain et technique',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'GPID 04',
        title: 'Mobilisation des financements complémentaires pour renforcer les projets en cours',
        themeDetail: 'Mobilisation des financements complémentaires pour renforcer les projets en cours',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'GPID 05',
        title: 'Planification, reporting et tableaux de bord pour les projets multisectoriels',
        themeDetail: 'Planification, reporting et tableaux de bord pour les projets multisectoriels',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'GPID 06',
        title: 'Gestion financière des projets financés par les bailleurs: règles et bonnes pratiques',
        themeDetail: 'Gestion financière des projets financés par les bailleurs: règles et bonnes pratiques',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'GPID 07',
        title: 'Organisation administrative et gestion documentaire dans les projets',
        themeDetail: 'Organisation administrative et gestion documentaire dans les projets',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'GPID 08',
        title: 'Communication professionnelle et rédaction administrative dans un contexte de projet',
        themeDetail: 'Communication professionnelle et rédaction administrative dans un contexte de projet',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'GPID 09',
        title: 'Études d\'impact environnemental et social: normes nationales et standards des bailleurs (SFI, Banque mondiale, BAD, etc.)',
        themeDetail: 'Études d\'impact environnemental et social: normes nationales et standards des bailleurs (SFI, Banque mondiale, BAD, etc.)',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'GPID 10',
        title: 'Notions de sécurité, protocole et confidentialité dans les missions de projet: gestion des déplacements et bonnes pratiques logistiques sur le terrain',
        themeDetail: 'Notions de sécurité, protocole et confidentialité dans les missions de projet: gestion des déplacements et bonnes pratiques logistiques sur le terrain',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 5 : Financement du développement, ingénierie financière et partenariats
  {
    title: 'Financement du développement, ingénierie financière et partenariats',
    slug: slugify('Financement du développement, ingénierie financière et partenariats'),
    image: '/images/themes/fdfp.jpg', // Image supposée
    modules: [
      {
        code: 'FDFP 01',
        title: 'Stratégies de mobilisation des ressources pour le financement des projets de développement',
        themeDetail: 'Stratégies de mobilisation des ressources pour le financement des projets de développement',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'FDFP 02',
        title: 'Mécanismes de financement multilatéraux et bilatéraux: modes d\'accès, exigences et conditions',
        themeDetail: 'Mécanismes de financement multilatéraux et bilatéraux: modes d\'accès, exigences et conditions',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'FDFP 03',
        title: 'Financement des collectivités locales: fiscalité locale, emprunts, partenariats public-privé (PPP)',
        themeDetail: 'Financement des collectivités locales: fiscalité locale, emprunts, partenariats public-privé (PPP)',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'FDFP 04',
        title: 'Planification budgétaire et mobilisation de fonds dans les projets cofinancés par des bailleurs',
        themeDetail: 'Planification budgétaire et mobilisation de fonds dans les projets cofinancés par des bailleurs',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'FDFP 05',
        title: 'Montage financier de projets de développement: structuration, levée de fonds et viabilité',
        themeDetail: 'Montage financier de projets de développement: structuration, levée de fonds et viabilité',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'FDFP 06',
        title: 'Élaboration de plans de financement pluriannuels pour les projets/programmes',
        themeDetail: 'Élaboration de plans de financement pluriannuels pour les projets/programmes',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'FDFP 07',
        title: 'Cartographie des opportunités de financement disponibles en Afrique',
        themeDetail: 'Cartographie des opportunités de financement disponibles en Afrique',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'FDFP 08',
        title: 'Intégration des objectifs de développement durable (ODD) dans les stratégies de recherche de financement',
        themeDetail: 'Intégration des objectifs de développement durable (ODD) dans les stratégies de recherche de financement',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'FDFP 09',
        title: 'Négociation, contractualisation et suivi des partenariats avec les bailleurs et investisseurs',
        themeDetail: 'Négociation, contractualisation et suivi des partenariats avec les bailleurs et investisseurs',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'FDFP 10',
        title: 'Coordination interinstitutionnelle pour la gestion intégrée des financements',
        themeDetail: 'Coordination interinstitutionnelle pour la gestion intégrée des financements',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 6 : Ressources Humaines, Organisation et Développement des Compétences
  {
    title: 'Ressources Humaines, Organisation et Développement des Compétences',
    slug: slugify('Ressources Humaines, Organisation et Développement des Compétences'),
    image: '/images/themes/rhdc.jpg', // Image supposée
    modules: [
      {
        code: 'RHDC 01',
        title: 'Élaborer une politique de gestion des ressources humaines alignée sur la stratégie de l\'organisation',
        themeDetail: 'Élaborer une politique de gestion des ressources humaines alignée sur la stratégie de l\'organisation',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'RHDC 02',
        title: 'Modernisation de la gestion des RH dans le secteur public: pratiques et leviers',
        themeDetail: 'Modernisation de la gestion des RH dans le secteur public: pratiques et leviers',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'RHDC 03',
        title: 'Mise en place et pilotage d\'un système intégré de gestion des ressources humaines (SIRH)',
        themeDetail: 'Mise en place et pilotage d\'un système intégré de gestion des ressources humaines (SIRH)',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'RHDC 04',
        title: 'Tableaux de bord sociaux: outils de pilotage et d\'aide à la décision RH',
        themeDetail: 'Tableaux de bord sociaux: outils de pilotage et d\'aide à la décision RH',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'RHDC 05',
        title: 'les nouvelles tendance de la GPEC (Gestion Prévisionnelle des Emplois et des Compétences): diagnostic, planification et mise en oeuvre',
        themeDetail: 'les nouvelles tendance de la GPEC (Gestion Prévisionnelle des Emplois et des Compétences): diagnostic, planification et mise en oeuvre',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'RHDC 06',
        title: 'Élaboration et pilotage du plan de formation de l\'analyse des besoins à l\'évaluation de l\'impact',
        themeDetail: 'Élaboration et pilotage du plan de formation de l\'analyse des besoins à l\'évaluation de l\'impact',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'RHDC 07',
        title: 'Structuration et pilotage des Directions des Ressources Humaines (DRH)',
        themeDetail: 'Structuration et pilotage des Directions des Ressources Humaines (DRH)',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'RHDC 08',
        title: 'Dispositifs d\'écoute, de motivation et d\'engagement des agents pour l\'amélioration du climat de travail et fidélisation des talents',
        themeDetail: 'Dispositifs d\'écoute, de motivation et d\'engagement des agents pour l\'amélioration du climat de travail et fidélisation des talents',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'RHDC 09',
        title: 'Ingénierie de formation méthodes, dispositifs et outils',
        themeDetail: 'Ingénierie de formation méthodes, dispositifs et outils',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'RHDC 10',
        title: 'Diagnostic organisationnel et amélioration de la performance collective',
        themeDetail: 'Diagnostic organisationnel et amélioration de la performance collective',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 7 : Secrétariat, assistanat, archivage
  {
    title: 'Secrétariat, assistanat, archivage',
    slug: slugify('Secrétariat, assistanat, archivage'),
    image: '/images/themes/saar.jpg', // Image supposée
    modules: [
      {
        code: 'SAAR 01',
        title: 'Collaboration efficace avec les managers et les équipes: posture, discrétion, proactivité',
        themeDetail: 'Collaboration efficace avec les managers et les équipes: posture, discrétion, proactivité',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'SAAR 02',
        title: 'Les nouveaux outils liés à la gestion électronique des documents (GED)',
        themeDetail: 'Les nouveaux outils liés à la gestion électronique des documents (GED)',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'SAAR 03',
        title: 'Gestion des priorités et planification du travail administratif',
        themeDetail: 'Gestion des priorités et planification du travail administratif',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'SAAR 04',
        title: 'Techniques de secrétariat administratif: organisation, rédaction et suivi des dossiers',
        themeDetail: 'Techniques de secrétariat administratif: organisation, rédaction et suivi des dossiers',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'SAAR 05',
        title: 'Gestion de l\'agenda, des réunions et des déplacements: optimiser le temps du manager',
        themeDetail: 'Gestion de l\'agenda, des réunions et des déplacements: optimiser le temps du manager',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'SAAR 06',
        title: 'Gestion du stress et des situations difficiles dans le métier de secrétaire/assistant (e)',
        themeDetail: 'Gestion du stress et des situations difficiles dans le métier de secrétaire/assistant (e)',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'SAAR 07',
        title: 'Politique de gestion des archives dans l\'administration publique et les projets',
        themeDetail: 'Politique de gestion des archives dans l\'administration publique et les projets',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'SAAR 08',
        title: 'Maîtrise des outils bureautiques (Word, Excel, Outlook, PowerPoint) pour l\'assistanat moderne',
        themeDetail: 'Maîtrise des outils bureautiques (Word, Excel, Outlook, PowerPoint) pour l\'assistanat moderne',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'SAAR 09',
        title: 'Digitalisation des documents et Dématérialisation des archives',
        themeDetail: 'Digitalisation des documents et Dématérialisation des archives',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'SAAR 10',
        title: 'Utilisation d\'un logiciel de gestion des archives et des dossiers administratifs',
        themeDetail: 'Utilisation d\'un logiciel de gestion des archives et des dossiers administratifs',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 8 : Protocole, diplomatie et relations internationales
  {
    title: 'Protocole, diplomatie et relations internationales',
    slug: slugify('Protocole, diplomatie et relations internationales'),
    image: '/images/themes/pdri.jpg', // Image supposée
    modules: [
      {
        code: 'PDRI 01',
        title: 'Protocole et diplomatie des États non reconnus ou en transition politique gestion sensible des relations informelles',
        themeDetail: 'Protocole et diplomatie des États non reconnus ou en transition politique gestion sensible des relations informelles',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'PDRI 02',
        title: 'Cyberdiplomatie et diplomatie climatique nouveaux espaces d\'influence internationale',
        themeDetail: 'Cyberdiplomatie et diplomatie climatique nouveaux espaces d\'influence internationale',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'PDRI 03',
        title: 'Relations diplomatiques à l\'ère des réseaux sociaux diplomatie numérique, cybersécurité et e-réputation',
        themeDetail: 'Relations diplomatiques à l\'ère des réseaux sociaux diplomatie numérique, cybersécurité et e-réputation',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'PDRI 04',
        title: 'Gestion du protocole dans les rencontres internationales: outils pratiques et scénarios complexes',
        themeDetail: 'Gestion du protocole dans les rencontres internationales: outils pratiques et scénarios complexes',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'PDRI 05',
        title: 'Organisation de cérémonies officielles à haute visibilité: nouvelles méthodes et coordination inter-institutions',
        themeDetail: 'Organisation de cérémonies officielles à haute visibilité: nouvelles méthodes et coordination inter-institutions',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'PDRI 06',
        title: 'Institutions et missions diplomatiques: management des juridictions et nouvelles approches du management protocolaire',
        themeDetail: 'Institutions et missions diplomatiques: management des juridictions et nouvelles approches du management protocolaire',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'PDRI 07',
        title: 'Diplomatie économique et attractivité des territoires outils modernes pour attirer les IDE et les bailleurs',
        themeDetail: 'Diplomatie économique et attractivité des territoires outils modernes pour attirer les IDE et les bailleurs',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'PDRI 08',
        title: 'Diplomatie bilatérale et multilatérale nouveaux défis, négociations et stratégies d\'influence',
        themeDetail: 'Diplomatie bilatérale et multilatérale nouveaux défis, négociations et stratégies d\'influence',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'PDRI 09',
        title: 'Communication protocolaire, image de marque institutionnelle et gestion de crise',
        themeDetail: 'Communication protocolaire, image de marque institutionnelle et gestion de crise',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'PDRI 10',
        title: 'Géopolitique contemporaine lecture stratégique des alliances, conflits et recompositions régionales',
        themeDetail: 'Géopolitique contemporaine lecture stratégique des alliances, conflits et recompositions régionales',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 9 : Systèmes d\'Information, Digitalisation et Intelligence Artificielle
  {
    title: 'Systèmes d\'Information, Digitalisation et Intelligence Artificielle',
    slug: slugify('Systèmes d\'Information, Digitalisation et Intelligence Artificielle'),
    image: '/images/themes/siia.jpg', // Image supposée
    modules: [
      {
        code: 'SIIA 01',
        title: 'Gestion des systèmes d\'information dans les organisations publiques et privées',
        themeDetail: 'Gestion des systèmes d\'information dans les organisations publiques et privées',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'SIIA 02',
        title: 'Planification stratégique et gouvernance des systèmes d\'information',
        themeDetail: 'Planification stratégique et gouvernance des systèmes d\'information',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'SIIA 03',
        title: 'Nouvelles méthodes de dématérialisation des procédures administratives méthodes, outils et cadre juridique vers une administration sans papier',
        themeDetail: 'Nouvelles méthodes de dématérialisation des procédures administratives méthodes, outils et cadre juridique vers une administration sans papier',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'SIIA 04',
        title: 'Pilotage de projets de digitalisation dans le secteur public',
        themeDetail: 'Pilotage de projets de digitalisation dans le secteur public',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'SIIA 05',
        title: 'Applications de l\'IA dans les administrations publiques et les projets de développement',
        themeDetail: 'Applications de l\'IA dans les administrations publiques et les projets de développement',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'SIIA 06',
        title: 'Intelligence Artificielle pour les décideurs et managers: Éthique, gouvernance et réglementation',
        themeDetail: 'Intelligence Artificielle pour les décideurs et managers: Éthique, gouvernance et réglementation',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'SIIA 07',
        title: 'Automatiser les tâches administratives avec l\'IA: outils récents et cas d\'usage',
        themeDetail: 'Automatiser les tâches administratives avec l\'IA: outils récents et cas d\'usage',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'SIIA 08',
        title: 'Formation aux nouvelles plateformes de travail collaboratif: Microsoft Teams, Google Workspace',
        themeDetail: 'Formation aux nouvelles plateformes de travail collaboratif: Microsoft Teams, Google Workspace',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'SIIA 09',
        title: 'Utiliser des outils innovants pour le suivi évaluation digital des projets (KoboToolbox, Power BI)',
        themeDetail: 'Utiliser des outils innovants pour le suivi évaluation digital des projets (KoboToolbox, Power BI)',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'SIIA 10',
        title: 'Nouvelles approches de cybersécurité gouvernance, prévention et gestion des incidents',
        themeDetail: 'Nouvelles approches de cybersécurité gouvernance, prévention et gestion des incidents',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 10 : Sécurité, Sûreté, Gestion des Risques et Continuité d\'Activité
  {
    title: 'Sécurité, Sûreté, Gestion des Risques et Continuité d\'Activité',
    slug: slugify('Sécurité, Sûreté, Gestion des Risques et Continuité d\'Activité'),
    image: '/images/themes/ssca.jpg', // Image supposée
    modules: [
      {
        code: 'SSCA 01',
        title: 'Outils innovants pour la cartographie dynamique des risques opérationnels et stratégiques',
        themeDetail: 'Outils innovants pour la cartographie dynamique des risques opérationnels et stratégiques',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'SSCA 02',
        title: 'Les méthodes d\'identification et d\'analyse des risques dans les organisations modernes',
        themeDetail: 'Les méthodes d\'identification et d\'analyse des risques dans les organisations modernes',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'SSCA 03',
        title: 'Outils digitaux pour la surveillance, le contrôle d\'accès et la sécurité des sites',
        themeDetail: 'Outils digitaux pour la surveillance, le contrôle d\'accès et la sécurité des sites',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'SSCA 04',
        title: 'Techniques avancées de gestion des incidents et de réponse rapide',
        themeDetail: 'Techniques avancées de gestion des incidents et de réponse rapide',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'SSCA 05',
        title: 'Pratiques émergentes de sûreté physique et protection des infrastructures sensibles',
        themeDetail: 'Pratiques émergentes de sûreté physique et protection des infrastructures sensibles',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'SSCA 06',
        title: 'Conception et mise en œuvre des plans de continuité d\'activité (PCA) avec méthodes innovantes',
        themeDetail: 'Conception et mise en œuvre des plans de continuité d\'activité (PCA) avec méthodes innovantes',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'SSCA 07',
        title: 'Techniques de prévention des incidents et gestion des situations d\'urgence',
        themeDetail: 'Techniques de prévention des incidents et gestion des situations d\'urgence',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'SSCA 08',
        title: 'Gestion des crises sécuritaires organisation et intervention',
        themeDetail: 'Gestion des crises sécuritaires organisation et intervention',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'SSCA 09',
        title: 'Gestion des comportements à risque et prévention des accidents',
        themeDetail: 'Gestion des comportements à risque et prévention des accidents',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'SSCA 10',
        title: 'Coordination multisectorielle et partenariats pour renforcer la sécurité et la résilience',
        themeDetail: 'Coordination multisectorielle et partenariats pour renforcer la sécurité et la résilience',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 11 : Développement Durable, Environnement et Responsabilité Sociétale
  {
    title: 'Développement Durable, Environnement et Responsabilité Sociétale',
    slug: slugify('Développement Durable, Environnement et Responsabilité Sociétale'),
    image: '/images/themes/ddrs.jpg', // Image supposée
    modules: [
      {
        code: 'DDRS 01',
        title: 'Gouvernance multi-acteurs et partenariats stratégiques pour accélérer la transition écologique',
        themeDetail: 'Gouvernance multi-acteurs et partenariats stratégiques pour accélérer la transition écologique',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'DDRS 02',
        title: 'Nouvelles approches stratégiques pour intégrer les ODD dans les plans d\'affaires et politiques publiques',
        themeDetail: 'Nouvelles approches stratégiques pour intégrer les ODD dans les plans d\'affaires et politiques publiques',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'DDRS 03',
        title: 'Finance verte et investissement à impact outils pour mobiliser des ressources durables',
        themeDetail: 'Finance verte et investissement à impact outils pour mobiliser des ressources durables',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'DDRS 04',
        title: 'Éco-innovation et technologies vertes catalyseurs de la transformation durable en entreprise',
        themeDetail: 'Éco-innovation et technologies vertes catalyseurs de la transformation durable en entreprise',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'DDRS 05',
        title: 'Intégration du changement climatique dans la gestion des risques organisationnels et territoriaux',
        themeDetail: 'Intégration du changement climatique dans la gestion des risques organisationnels et territoriaux',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'DDRS 06',
        title: 'Planification territoriale durable et outils SIG pour la gestion intégrée des ressources naturelles',
        themeDetail: 'Planification territoriale durable et outils SIG pour la gestion intégrée des ressources naturelles',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'DDRS 07',
        title: 'Communication responsable et storytelling environnemental: valoriser les actions RSE',
        themeDetail: 'Communication responsable et storytelling environnemental: valoriser les actions RSE',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'DDRS 08',
        title: 'Plateformes collaboratives et solutions cloud pour le suivi des actions durables',
        themeDetail: 'Plateformes collaboratives et solutions cloud pour le suivi des actions durables',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'DDRS 09',
        title: 'Applications mobiles et capteurs IoT pour la gestion intelligente des ressources naturelles',
        themeDetail: 'Applications mobiles et capteurs IoT pour la gestion intelligente des ressources naturelles',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'DDRS 10',
        title: 'Utilisation des données massives (Big Data) et de l\'IA pour le suivi et la gestion durable des ressources',
        themeDetail: 'Utilisation des données massives (Big Data) et de l\'IA pour le suivi et la gestion durable des ressources',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 12 : Régulation, normes et contrôle de la qualité dans les secteurs stratégiques
  {
    title: 'Régulation, normes et contrôle de la qualité dans les secteurs stratégiques',
    slug: slugify('Régulation, normes et contrôle de la qualité dans les secteurs stratégiques'),
    image: '/images/themes/rnss.jpg', // Image supposée
    modules: [
      {
        code: 'RNSS 01',
        title: 'Leadership dans les autorités de régulation: innovation, éthique. et transparence',
        themeDetail: 'Leadership dans les autorités de régulation: innovation, éthique. et transparence',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'RNSS 02',
        title: 'Coordination intersectorielle pour une régulation efficace des infrastructures critiques',
        themeDetail: 'Coordination intersectorielle pour une régulation efficace des infrastructures critiques',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'RNSS 03',
        title: 'Intelligence artificielle: moyen de détection des anomalies et fraudes',
        themeDetail: 'Intelligence artificielle: moyen de détection des anomalies et fraudes',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'RNSS 04',
        title: 'Gestion des risques normatifs : anticiper les évolutions réglementaires',
        themeDetail: 'Gestion des risques normatifs : anticiper les évolutions réglementaires',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'RNSS 05',
        title: 'Normes liées à la durabilité et responsabilité sociétale dans les secteurs stratégiques',
        themeDetail: 'Normes liées à la durabilité et responsabilité sociétale dans les secteurs stratégiques',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'RNSS 06',
        title: 'Harmonisation internationale des normes impact sur les secteurs stratégiques',
        themeDetail: 'Harmonisation internationale des normes impact sur les secteurs stratégiques',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'RNSS 07',
        title: 'Nouvelles tendances de la régulation sectorielle régulation agile et adaptive',
        themeDetail: 'Nouvelles tendances de la régulation sectorielle régulation agile et adaptive',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'RNSS 08',
        title: 'Régulation basée sur les données: usage de la data analytics pour un contrôle efficace',
        themeDetail: 'Régulation basée sur les données: usage de la data analytics pour un contrôle efficace',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'RNSS 09',
        title: 'Nouveaux outils de pilotage de la régulation sectorielle tableaux de bord intelligents et datadriven',
        themeDetail: 'Nouveaux outils de pilotage de la régulation sectorielle tableaux de bord intelligents et datadriven',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'RNSS 10',
        title: 'Régulation collaborative mécanismes de co-régulation avec les parties prenantes et le secteur privé',
        themeDetail: 'Régulation collaborative mécanismes de co-régulation avec les parties prenantes et le secteur privé',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 13 : Genre, Inclusion et Gouvernance Participative
  {
    title: 'Genre, Inclusion et Gouvernance Participative',
    slug: slugify('Genre, Inclusion et Gouvernance Participative'),
    image: '/images/themes/gigp.jpg', // Image supposée
    modules: [
      {
        code: 'GIGP 01',
        title: 'Gouvernance inclusive et égalité de genre nouveaux outils pour repenser les politiques publiques',
        themeDetail: 'Gouvernance inclusive et égalité de genre nouveaux outils pour repenser les politiques publiques',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'GIGP 02',
        title: 'Nouvelles méthodes d\'intégration du genre dans les cycles de projets et programmes de développement',
        themeDetail: 'Nouvelles méthodes d\'intégration du genre dans les cycles de projets et programmes de développement',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'GIGP 03',
        title: 'Leadership féminin dans les organisations publiques: dynamiques, barrières et leviers d\'action',
        themeDetail: 'Leadership féminin dans les organisations publiques: dynamiques, barrières et leviers d\'action',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'GIGP 04',
        title: 'Technologies civiques et outils numériques pour promouvoir la gouvernance participative',
        themeDetail: 'Technologies civiques et outils numériques pour promouvoir la gouvernance participative',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'GIGP 05',
        title: 'Inclusion des groupes marginalisés dans la gouvernance méthodes d\'identification et d\'action ciblée',
        themeDetail: 'Inclusion des groupes marginalisés dans la gouvernance méthodes d\'identification et d\'action ciblée',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'GIGP 06',
        title: 'Concevoir des plans d\'action genre selon les nouvelles normes de redevabilité institutionnelle',
        themeDetail: 'Concevoir des plans d\'action genre selon les nouvelles normes de redevabilité institutionnelle',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'GIGP 07',
        title: 'Approches émergentes pour intégrer le genre dans les politiques climatiques et environnementales',
        themeDetail: 'Approches émergentes pour intégrer le genre dans les politiques climatiques et environnementales',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'GIGP 08',
        title: 'Genre, digitalisation et accès aux services publics innovations pour une inclusion équitable',
        themeDetail: 'Genre, digitalisation et accès aux services publics innovations pour une inclusion équitable',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'GIGP 09',
        title: 'Approches innovantes pour l\'inclusion des personnes en situation de handicap dans les politiques nationales',
        themeDetail: 'Approches innovantes pour l\'inclusion des personnes en situation de handicap dans les politiques nationales',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'GIGP 10',
        title: 'Outils numériques et inclusion sociale vers une gouvernance accessible et participative',
        themeDetail: 'Outils numériques et inclusion sociale vers une gouvernance accessible et participative',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 01 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 14 : Énergie, Géologie, mines, pétrole
  {
    title: 'Énergie, Géologie, mines, pétrole',
    slug: slugify('Énergie, Géologie, mines, pétrole'),
    image: '/images/themes/egmp.jpg', // Image supposée
    modules: [
      {
        code: 'EGMP 01',
        title: 'Transition énergétique en Afrique: nouveaux modèles, outils innovants et opportunités d\'investissement',
        themeDetail: 'Transition énergétique en Afrique: nouveaux modèles, outils innovants et opportunités d\'investissement',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'EGMP 02',
        title: 'Planification énergétique intégrée: nouvelles approches pour une production durable et inclusive',
        themeDetail: 'Planification énergétique intégrée: nouvelles approches pour une production durable et inclusive',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'EGMP 03',
        title: 'Nouvelles technologies de cartographie géologique pour l\'exploration minière et pétrolière',
        themeDetail: 'Nouvelles technologies de cartographie géologique pour l\'exploration minière et pétrolière',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'EGMP 04',
        title: 'Économie et Management de l\'Aval pétrolier',
        themeDetail: 'Économie et Management de l\'Aval pétrolier',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'EGMP 05',
        title: 'Chaîne logistique des produits pétroliers',
        themeDetail: 'Chaîne logistique des produits pétroliers',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'EGMP 06',
        title: 'Technologies émergentes dans l\'extraction minière: Utilisation de l\'intelligence artificielle et de l\'analyse de données pour optimiser les opérations.',
        themeDetail: 'Technologies émergentes dans l\'extraction minière: Utilisation de l\'intelligence artificielle et de l\'analyse de données pour optimiser les opérations.',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'EGMP 07',
        title: 'Gestion des déchets dans le secteur extractif Stratégies pour minimiser l\'impact environnemental des activités minières et pétrolières.',
        themeDetail: 'Gestion des déchets dans le secteur extractif Stratégies pour minimiser l\'impact environnemental des activités minières et pétrolières.',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'EGMP 08',
        title: 'Gestion contractuelle dans le secteur pétrolier: nouveaux modèles de partage de production et fiscalité',
        themeDetail: 'Gestion contractuelle dans le secteur pétrolier: nouveaux modèles de partage de production et fiscalité',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'EGMP 09',
        title: 'Optimisation de l\'exploitation pétrolière à l\'ère post carbone innovations et perspectives',
        themeDetail: 'Optimisation de l\'exploitation pétrolière à l\'ère post carbone innovations et perspectives',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'EGMP 10',
        title: 'Gouvernance et régulation du secteur minier cadre juridique, contrôle et mécanismes d\'autorisation',
        themeDetail: 'Gouvernance et régulation du secteur minier cadre juridique, contrôle et mécanismes d\'autorisation',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 15 : Hydraulique, sécurité alimentaire, agriculture et élevage
  {
    title: 'Hydraulique, sécurité alimentaire, agriculture et élevage',
    slug: slugify('Hydraulique, sécurité alimentaire, agriculture et élevage'),
    image: '/images/themes/hsae.jpg', // Image supposée
    modules: [
      {
        code: 'HSAE 01',
        title: 'Systèmes intelligents de surveillance et de contrôle de la qualité de l\'eau (capteurs, IA, télédétection)',
        themeDetail: 'Systèmes intelligents de surveillance et de contrôle de la qualité de l\'eau (capteurs, IA, télédétection)',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 27 Avril au 08 Mai 2026', 'Du 31 Août au 11 Septembre 2026'),
      },
      {
        code: 'HSAE 02',
        title: 'Partenariats publics-privés dans la gestion de l\'eau nouveaux modèles et mécanismes de financement',
        themeDetail: 'Partenariats publics-privés dans la gestion de l\'eau nouveaux modèles et mécanismes de financement',
        sessions: generateSessions('Du 19 au 30 Janvier 2026', 'Du 11 au 22 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'HSAE 03',
        title: 'Agroécologie et transition verte: vers une nouvelle stratégie de développement rural durable',
        themeDetail: 'Agroécologie et transition verte: vers une nouvelle stratégie de développement rural durable',
        sessions: generateSessions('Du 02 au 13 Février 2026', 'Du 25 Mai au 05 Juin 2026', 'Du 28 Septembre au 09 Octobre 2026'),
      },
      {
        code: 'HSAE 04',
        title: 'Cartographie et télédétection pour la planification agricole et la gestion des cultures',
        themeDetail: 'Cartographie et télédétection pour la planification agricole et la gestion des cultures',
        sessions: generateSessions('Du 16 au 27 Février 2026', 'Du 08 au 19 Juin 2026', 'Du 12 au 23 Octobre 2026'),
      },
      {
        code: 'HSAE 05',
        title: 'Gestion durable des terres agricoles: outils de diagnostic, de restauration et de suivi',
        themeDetail: 'Gestion durable des terres agricoles: outils de diagnostic, de restauration et de suivi',
        sessions: generateSessions('Du 02 au 13 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 26 Octobre au 06 Novembre 2026'),
      },
      {
        code: 'HSAE 06',
        title: 'Systèmes alimentaires résilients: nouvelles stratégies pour sécuriser les chaînes de valeur locales',
        themeDetail: 'Systèmes alimentaires résilients: nouvelles stratégies pour sécuriser les chaînes de valeur locales',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'HSAE 07',
        title: 'Banques alimentaires et logistique humanitaire: innovations pour lutter contre les crises nutritionnelles',
        themeDetail: 'Banques alimentaires et logistique humanitaire: innovations pour lutter contre les crises nutritionnelles',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 09 au 20 Novembre 2026'),
      },
      {
        code: 'HSAE 08',
        title: 'Politiques agricoles et sécurité alimentaire alignement sur les standards internationaux et régimes régionaux (UA, CEDEAO)',
        themeDetail: 'Politiques agricoles et sécurité alimentaire alignement sur les standards internationaux et régimes régionaux (UA, CEDEAO)',
        sessions: generateSessions('Du 30 Mars au 10 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 23 Novembre au 04 Décembre 2026'),
      },
      {
        code: 'HSAE 09',
        title: 'Élevage, environnement et changement climatique vers des pratiques plus résilientes et écoresponsables',
        themeDetail: 'Élevage, environnement et changement climatique vers des pratiques plus résilientes et écoresponsables',
        sessions: generateSessions('Du 13 Avril au 24 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 07 au 18 Décembre 2026'),
      },
      {
        code: 'HSAE 10',
        title: 'Modernisation des systèmes d\'élevage: outils innovants pour la productivité et la gestion sanitaire',
        themeDetail: 'Modernisation des systèmes d\'élevage: outils innovants pour la productivité et la gestion sanitaire',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 17 au 28 Août 2026', 'Du 21 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },

  <hr>

  // Thème 16 (Désigné Thème 15 page 24 dans l'énoncé) : Géomatique, Aménagement du Territoire et Infrastructures
  {
    title: 'Géomatique, Aménagement du Territoire et Infrastructures',
    slug: slugify('Géomatique, Aménagement du Territoire et Infrastructures'),
    image: '/images/themes/gati.jpg', // Image supposée
    modules: [
      {
        code: 'GATI 01',
        title: 'Smart cities en Afrique: vers une nouvelle génération d\'aménagements urbains intelligents et inclusifs',
        themeDetail: 'Smart cities en Afrique: vers une nouvelle génération d\'aménagements urbains intelligents et inclusifs',
        sessions: generateSessions('Du 05 au 16 Janvier 2026', 'Du 04 au 15 Mai 2026', 'Du 07 au 18 Septembre 2026'),
      },
      {
        code: 'GATI 02',
        title: 'Systèmes d\'Information Géographique (SIG): nouvelles pratiques pour la planification territoriale intégrée',
        themeDetail: 'Systèmes d\'Information Géographique (SIG): nouvelles pratiques pour la planification territoriale intégrée',
        sessions: generateSessions('Du 12 au 23 Janvier 2026', 'Du 18 au 29 Mai 2026', 'Du 14 au 25 Septembre 2026'),
      },
      {
        code: 'GATI 03',
        title: 'Télédétection et imagerie satellitaire: applications innovantes en environnement, agriculture et gestion foncière',
        themeDetail: 'Télédétection et imagerie satellitaire: applications innovantes en environnement, agriculture et gestion foncière',
        sessions: generateSessions('Du 26 Janvier au 06 Février 2026', 'Du 01 au 12 Juin 2026', 'Du 21 Septembre au 02 Octobre 2026'),
      },
      {
        code: 'GATI 04',
        title: 'Géomatique participative et gouvernance territoriale impliquer les communautés dans la planification',
        themeDetail: 'Géomatique participative et gouvernance territoriale impliquer les communautés dans la planification',
        sessions: generateSessions('Du 09 au 20 Février 2026', 'Du 15 au 26 Juin 2026', 'Du 05 au 16 Octobre 2026'),
      },
      {
        code: 'GATI 05',
        title: 'Réforme foncière et gestion du domaine public: pratiques modernes et sécurisation des titres',
        themeDetail: 'Réforme foncière et gestion du domaine public: pratiques modernes et sécurisation des titres',
        sessions: generateSessions('Du 23 Février au 06 Mars 2026', 'Du 22 Juin au 03 Juillet 2026', 'Du 19 au 30 Octobre 2026'),
      },
      {
        code: 'GATI 06',
        title: 'Élaboration et mise en œuvre des schémas d\'aménagement du territoire: nouvelles méthodes et exigences réglementaires',
        themeDetail: 'Élaboration et mise en œuvre des schémas d\'aménagement du territoire: nouvelles méthodes et exigences réglementaires',
        sessions: generateSessions('Du 09 au 20 Mars 2026', 'Du 29 Juin au 10 Juillet 2026', 'Du 02 au 13 Novembre 2026'),
      },
      {
        code: 'GATI 07',
        title: 'Développement des infrastructures territoriales: planification, suivi et évaluation stratégique des investissements publics',
        themeDetail: 'Développement des infrastructures territoriales: planification, suivi et évaluation stratégique des investissements publics',
        sessions: generateSessions('Du 16 au 27 Mars 2026', 'Du 13 au 24 Juillet 2026', 'Du 16 au 27 Novembre 2026'),
      },
      {
        code: 'GATI 08',
        title: 'Contrôle de qualité des ouvrages publics: normes actuelles et exigences environnementales',
        themeDetail: 'Contrôle de qualité des ouvrages publics: normes actuelles et exigences environnementales',
        sessions: generateSessions('Du 23 Mars au 03 Avril 2026', 'Du 27 Juillet au 07 Août 2026', 'Du 30 Novembre au 11 Décembre 2026'),
      },
      {
        code: 'GATI 09',
        title: 'Gestion intégrée des bassins versants et planification multi-acteurs à l\'échelle régionale',
        themeDetail: 'Gestion intégrée des bassins versants et planification multi-acteurs à l\'échelle régionale',
        sessions: generateSessions('Du 06 au 17 Avril 2026', 'Du 10 au 21 Août 2026', 'Du 14 au 25 Décembre 2026'),
      },
      {
        code: 'GATI 10',
        title: 'Intelligence artificielle et Big Data pour la gestion des données géospatiales: concepts et cas pratiques',
        themeDetail: 'Intelligence artificielle et Big Data pour la gestion des données géospatiales: concepts et cas pratiques',
        sessions: generateSessions('Du 20 Avril au 01 Mai 2026', 'Du 24 Août au 04 Septembre 2026', 'Du 28 Décembre 2026 au 08 Janvier 2027'),
      },
    ]
  },
];
export const DESTINATIONS = [
  { name: 'Casablanca', country: 'Maroc' },
  { name: 'Abidjan', country: 'Côte d\'Ivoire' },
  { name: 'Dakar', country: 'Sénégal' },
  { name: 'Ouagadougou', country: 'Burkina Faso' },
  { name: 'Dubaï', country: 'Émirats Arabes Unis' }
];

export { FORMATION_CATALOGUE };