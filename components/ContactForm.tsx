// app/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission (API, email, etc.)
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès ! Nous vous recontacterons bientôt. 😊');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Envoyez un message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ Nom */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl focus:border-red-600 focus:outline-none transition duration-200"
              required
            />
          </div>
          {/* Champ Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl focus:border-red-600 focus:outline-none transition duration-200"
              required
            />
          </div>
          {/* Champ Sujet */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-xl focus:border-red-600 focus:outline-none transition duration-200"
              required
            />
          </div>
          {/* Champ Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border-2 rounded-xl focus:border-red-600 focus:outline-none resize-none transition duration-200"
              required
            />
          </div>
          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Coordonnées */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Coordonnées</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
            <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Adresse</h3>
              <p className="text-gray-600">59, Bd Zerktouni Étage 11, N°32<br />Casablanca, Maroc</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
            <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Téléphone</h3>
              <p className="text-gray-600">+212 606 698 210</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
            <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">contact@diebenu.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}