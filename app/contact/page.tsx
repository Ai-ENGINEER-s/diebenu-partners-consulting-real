// app/contact/page.tsx
'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm'; // Utilisation du composant réutilisable

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-200">Nous sommes prêts à échanger sur vos besoins.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}