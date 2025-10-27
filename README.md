# 🏢 DIEBENU & PARTNERS - Site Web Premium

> Cabinet international d'études, de conseil stratégique, de formation professionnelle et de recherche de financement

![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Configuration](#-configuration)
- [Scripts disponibles](#-scripts-disponibles)
- [Déploiement](#-déploiement)
- [Maintenance](#-maintenance)
- [Contact](#-contact)

---

## 🎯 À propos

**DIEBENU & PARTNERS** est un site web ultra moderne et premium conçu pour présenter les services d'un cabinet international de conseil et de formation. Le site offre une expérience utilisateur exceptionnelle avec un design inspiré des grands cabinets de consulting internationaux (McKinsey, Deloitte, BCG).

### Caractéristiques principales

- ✨ Design ultra moderne et premium
- 📱 100% responsive (mobile, tablette, desktop)
- 🎨 Animations fluides et transitions élégantes
- 🚀 Performance optimisée
- 🔍 SEO optimisé
- ♿ Accessible (WCAG 2.1)
- 🌐 Multilingue (prêt)

---

## ✨ Fonctionnalités

### Pages principales

1. **🏠 Accueil**
   - Hero section avec vidéo d'arrière-plan
   - Statistiques en temps réel
   - Message du Directeur Général
   - 4 pôles d'expertise
   - Section Vision/Mission/Valeurs
   - Call-to-action dynamique

2. **📚 Formations**
   - Catalogue de 15 thèmes de formation
   - 150+ modules de formation
   - Interface style Netflix pour la navigation
   - Filtrage et recherche
   - Grilles tarifaires détaillées

3. **📖 Détail des thèmes**
   - Modules expandables/accordéons
   - Sessions disponibles avec dates et lieux
   - Boutons d'inscription
   - Navigation intuitive

4. **💼 Conseil & Études**
   - Présentation des 3 offres principales
   - Services de conseil stratégique
   - Études et diagnostics
   - Accompagnement opérationnel

5. **💰 Recherche de financement**
   - Méthodologie de mobilisation de ressources
   - Services de montage de dossiers
   - Accompagnement personnalisé

6. **ℹ️ À propos**
   - Histoire du cabinet
   - Vision, Mission, Valeurs
   - Équipe de direction
   - Partenaires

7. **📧 Contact**
   - Formulaire de contact complet
   - Coordonnées détaillées
   - Carte Google Maps intégrée
   - Réseaux sociaux

### Fonctionnalités avancées

- 🎯 **Mega Menu intelligent** : Navigation contextuelle au survol
- 🔄 **Navigation fluide** : Transitions entre pages sans rechargement
- 📊 **Statistiques animées** : Compteurs et graphiques interactifs
- 🎭 **Animations Framer Motion** : Micro-interactions élégantes
- 🌙 **Mode sombre** : (optionnel, préparé)
- 🔔 **Notifications** : Système d'alertes (optionnel)

---

## 🛠 Technologies

### Frontend

- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[React 18](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animations (optionnel)
- **[Lucide React](https://lucide.dev/)** - Icônes modernes

### Outils de développement

- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **PostCSS** - Transformation CSS
- **Autoprefixer** - Préfixes CSS automatiques

### Performance & SEO

- **Next/Image** - Optimisation des images
- **Next/Font** - Optimisation des polices
- **Metadata API** - SEO optimisé
- **Lazy Loading** - Chargement différé des composants

---

## 📦 Installation

### Prérequis

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0
- **Git**

### Installation locale
```bash
# 1. Cloner le repository
git clone https://github.com/votre-username/diebenu-partners.git
cd diebenu-partners

# 2. Installer les dépendances
npm install
# ou
yarn install

# 3. Créer le fichier .env.local
cp .env.example .env.local

# 4. Ajouter les images dans public/images/
# Suivre la structure indiquée ci-dessous

# 5. Lancer le serveur de développement
npm run dev
# ou
yarn dev

# 6. Ouvrir le navigateur
# http://localhost:3000
```

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :
```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="DIEBENU & PARTNERS"

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@diebenu.com
NEXT_PUBLIC_CONTACT_PHONE="+212 606 698 210"
NEXT_PUBLIC_CONTACT_ADDRESS="59, Bd Zerktouni Étage 11, N°32, Casablanca"

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# APIs externes (si nécessaire)
# API_KEY=votre_clé_api
```

---

## 📁 Structure du projet
```
diebenu-partners/
│
├── 📁 app/                          # Application Next.js (App Router)
│   ├── 📄 layout.tsx                # Layout principal
│   ├── 📄 page.tsx                  # Page d'accueil
│   ├── 📄 globals.css               # Styles globaux
│   │
│   ├── 📁 components/               # Composants réutilisables
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 MegaMenu.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 HeroSection.tsx
│   │   ├── 📄 MotDuDG.tsx
│   │   ├── 📄 PolesExpertise.tsx
│   │   ├── 📄 DestinationsSection.tsx
│   │   ├── 📄 VisionMissionValues.tsx
│   │   ├── 📄 CTASection.tsx
│   │   ├── 📄 ThemeCard.tsx
│   │   ├── 📄 ModuleCard.tsx
│   │   └── 📄 ContactForm.tsx
│   │
│   ├── 📁 formation/                # Pages formations
│   │   ├── 📄 page.tsx
│   │   └── 📁 [slug]/
│   │       └── 📄 page.tsx
│   │
│   ├── 📁 conseil/
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 recherche-financement/
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 a-propos/
│   │   └── 📄 page.tsx
│   │
│   └── 📁 contact/
│       └── 📄 page.tsx
│
├── 📁 public/                       # Fichiers statiques
│   └── 📁 images/
│       ├── 📁 logo/
│       ├── 📁 themes/               # 15 images de thèmes
│       ├── 📁 destinations/         # 5 images de villes
│       ├── 📁 hero/
│       └── 📁 partners/
│
├── 📁 data/                         # Données du site
│   └── 📄 catalogue.ts              # Catalogue formations
│
├── 📁 types/                        # Types TypeScript
│   └── 📄 index.ts
│
├── 📁 lib/                          # Utilitaires
│   └── 📄 utils.ts
│
├── 📄 package.json                  # Dépendances
├── 📄 tsconfig.json                 # Config TypeScript
├── 📄 tailwind.config.ts            # Config Tailwind
├── 📄 next.config.js                # Config Next.js
├── 📄 postcss.config.js             # Config PostCSS
├── 📄 .env.local                    # Variables d'environnement
├── 📄 .eslintrc.json                # Config ESLint
├── 📄 .gitignore
└── 📄 README.md                     # Ce fichier
```

---

## 🖼️ Images requises

### Structure des images

Placez vos images dans `public/images/` selon cette structure :
```
public/images/
├── logo/
│   ├── logo-white-bg.png           (500x500px, PNG)
│   └── logo-transparent.png        (500x500px, PNG)
│
├── themes/                         (1200x800px, JPG, optimisé)
│   ├── glms.jpg
│   ├── fccg.jpg
│   ├── ccmp.jpg
│   ├── gpid.jpg
│   ├── fdfp.jpg
│   ├── rhdc.jpg
│   ├── saar.jpg
│   ├── pdri.jpg
│   ├── siia.jpg
│   ├── ssca.jpg
│   ├── ddrs.jpg
│   ├── rnss.jpg
│   ├── gigp.jpg
│   ├── egmp.jpg
│   ├── hsae.jpg
│   └── gati.jpg
│
├── destinations/                   (1920x1080px, JPG)
│   ├── casablanca.jpg
│   ├── abidjan.jpg
│   ├── dakar.jpg
│   ├── ouagadougou.jpg
│   └── dubai.jpg
│
├── hero/
│   └── hero-video.mp4              (1920x1080px, MP4, max 10MB)
│
└── partners/                       (300x150px, PNG)
    ├── partner-1.png
    ├── partner-2.png
    ├── partner-3.png
    ├── partner-4.png
    └── partner-5.png
```

### Recommandations d'optimisation

- **Format** : Utilisez WebP pour les images (Next/Image convertit automatiquement)
- **Taille** : Compressez les images avec [TinyPNG](https://tinypng.com/)
- **Vidéo** : Compressez avec [HandBrake](https://handbrake.fr/)
- **Lazy Loading** : Activé automatiquement par Next/Image

---

## ⚙️ Configuration

### Personnalisation des couleurs

Modifiez `tailwind.config.ts` :
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#fef2f2',
        600: '#dc2626',  // Couleur principale (rouge)
        700: '#b91c1c',
      },
      // Ajoutez vos couleurs personnalisées
    },
  },
}
```

### Ajout de polices personnalisées

Dans `app/layout.tsx` :
```typescript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })
```

### Configuration SEO

Dans `app/layout.tsx`, modifiez les metadata :
```typescript
export const metadata: Metadata = {
  title: 'DIEBENU & PARTNERS - Cabinet International',
  description: 'Cabinet d\'études, conseil et formation professionnelle',
  keywords: ['conseil', 'formation', 'études', 'Afrique'],
  authors: [{ name: 'DIEBENU & PARTNERS' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.diebenu.com',
    siteName: 'DIEBENU & PARTNERS',
  },
}
```

---

## 🚀 Scripts disponibles
```bash
# Développement
npm run dev              # Démarre le serveur de dev (port 3000)

# Production
npm run build            # Build de production
npm run start            # Démarre le serveur de production
npm run lint             # Lint du code

# Utilitaires
npm run format           # Formate le code avec Prettier
npm run type-check       # Vérification TypeScript
npm run analyze          # Analyse du bundle (si configuré)
```

---

## 📤 Déploiement

### Déploiement sur Vercel (Recommandé)
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter à Vercel
vercel login

# 3. Déployer
vercel

# Production
vercel --prod
```

### Déploiement sur Netlify
```bash
# 1. Build du projet
npm run build

# 2. Configuration dans netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

# 3. Déployer via Netlify CLI ou interface web
```

### Déploiement sur VPS (Ubuntu/Debian)
```bash
# 1. Sur le serveur, installer Node.js et PM2
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

# 2. Cloner le projet
git clone https://github.com/votre-repo/diebenu-partners.git
cd diebenu-partners

# 3. Installer et build
npm install
npm run build

# 4. Lancer avec PM2
pm2 start npm --name "diebenu" -- start
pm2 save
pm2 startup

# 5. Configurer Nginx (reverse proxy)
sudo nano /etc/nginx/sites-available/diebenu

# Contenu Nginx :
server {
    listen 80;
    server_name diebenu.com www.diebenu.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Activer le site
sudo ln -s /etc/nginx/sites-available/diebenu /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 6. SSL avec Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d diebenu.com -d www.diebenu.com
```

---

## 🔧 Maintenance

### Mise à jour des dépendances
```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour (avec précaution)
npm update

# Mise à jour majeure de Next.js
npm install next@latest react@latest react-dom@latest
```

### Monitoring

- **Vercel Analytics** : Inclus si déployé sur Vercel
- **Google Analytics** : Configurer dans `.env.local`
- **Sentry** : Pour le monitoring d'erreurs (optionnel)

### Backup
```bash
# Sauvegarder la base de données (si applicable)
# Sauvegarder les images dans public/

# Automatiser avec cron
0 2 * * * /path/to/backup-script.sh
```

---

## 📊 Performance

### Objectifs de performance

- ✅ **Lighthouse Score** : 95+ (Performance, Accessibility, Best Practices, SEO)
- ✅ **First Contentful Paint (FCP)** : < 1.8s
- ✅ **Largest Contentful Paint (LCP)** : < 2.5s
- ✅ **Time to Interactive (TTI)** : < 3.8s
- ✅ **Cumulative Layout Shift (CLS)** : < 0.1

### Optimisations appliquées

- Image optimization avec Next/Image
- Code splitting automatique
- Lazy loading des composants
- Minification CSS/JS
- Compression Gzip/Brotli
- Caching intelligent

---

## 🤝 Contribution

Ce projet est propriétaire. Pour toute contribution :

1. Contactez l'équipe de développement
2. Suivez les guidelines de code
3. Testez localement avant de proposer des changements
4. Documentez vos modifications

---

## 📄 Licence

Copyright © 2026 **DIEBENU & PARTNERS**. Tous droits réservés.

Ce projet est la propriété exclusive de DIEBENU & PARTNERS. Toute reproduction, distribution ou utilisation sans autorisation écrite est strictement interdite.

---

## 📞 Contact

**DIEBENU & PARTNERS**

- 📍 **Adresse** : 59, Bd Zerktouni Étage 11, N°32, Casablanca, Maroc
- 📱 **Téléphone** : +212 606 698 210
- 📧 **Email** : contact@diebenu.com
- 🌐 **Web** : www.diebenu.com

### Équipe technique

- **Direction Générale** : KIENOU Frank Alain
- **Développement** : [Votre nom]
- **Design** : [Designer]

---

## 🙏 Remerciements

- Next.js Team pour le framework extraordinaire
- Tailwind CSS pour le framework CSS
- Vercel pour l'hébergement
- La communauté open-source

---

## 📝 Changelog

### Version 1.0.0 (Janvier 2026)
- ✨ Lancement initial du site
- 📚 15 thèmes de formation
- 🎨 Design premium
- 📱 100% responsive
- 🚀 Performance optimisée

---

**Made with ❤️ by DIEBENU & PARTNERS Team**

*Building a better world, together*