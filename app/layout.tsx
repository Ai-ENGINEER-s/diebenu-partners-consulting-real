// app/layout.tsx
// Ceci simule le layout principal, en incluant le composant App principal
// pour gérer la navigation et l'état.

import './globals.css';
import DiebenUPartners from './page';

export const metadata = {
  title: 'DIEBENU & PARTNERS - Conseil, Formation & Études Internationales',
  description: 'Cabinet international d\'études, de conseil et de formation professionnelle. Building a better world, together.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* Le composant DiebenUPartners gère l'état de la page */}
        <DiebenUPartners />
      </body>
    </html>
  );
}