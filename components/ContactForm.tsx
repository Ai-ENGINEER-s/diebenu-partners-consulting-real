// 'use client';

// import React, { useState } from 'react';
// // Importer les types nécessaires depuis React
// import type { ChangeEvent, FormEvent, FC } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

// // Définir une interface pour l'état du formulaire
// interface FormDataState {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// // Spécifier que c'est un Functional Component avec React.FC
// const ContactForm: FC = () => {
//   // Typer le useState pour l'état du formulaire
//   const [formData, setFormData] = useState<FormDataState>({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   // Typer les autres états
//   const [focusedField, setFocusedField] = useState<string>('');
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);

//   // Typer l'événement 'e' pour les inputs et textarea
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   // Typer l'événement 'e' pour la soumission du formulaire
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // Empêche le rechargement de la page
//     setIsSubmitting(true);
    
//     // Simulation d'envoi
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     console.log('Formulaire soumis:', formData);
//     setIsSubmitting(false);
//     setIsSuccess(true);
    
//     // Reset après 3 secondes
//     setTimeout(() => {
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSuccess(false);
//     }, 3000);
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//       {/* Formulaire */}
//       <div className="relative">
//         {/* Effet de fond animé */}
//         <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-3xl transform rotate-1 opacity-50"></div>
        
//         <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 overflow-hidden">
//           {/* Effet de lumière */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          
//           <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent">
//             Envoyez un message
//           </h2>
//           <p className="text-gray-500 mb-8">Remplissez le formulaire et nous vous répondrons rapidement</p>
          
//           {/* Utiliser une balise <form> avec l'événement onSubmit */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Champ Nom */}
//             <div className="relative group">
//               <label 
//                 htmlFor="name" 
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                   focusedField === 'name' || formData.name 
//                     ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
//                     : 'top-4 text-gray-500'
//                 }`}
//               >
//                 Nom complet
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('name')}
//                 onBlur={() => setFocusedField('')}
//                 className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white"
//                 required
//               />
//             </div>

//             {/* Champ Email */}
//             <div className="relative group">
//               <label 
//                 htmlFor="email" 
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                   focusedField === 'email' || formData.email 
//                     ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
//                     : 'top-4 text-gray-500'
//                 }`}
//               >
//                 Adresse email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('email')}
//                 onBlur={() => setFocusedField('')}
//                 className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white"
//                 required
//               />
//             </div>

//             {/* Champ Sujet */}
//             <div className="relative group">
//               <label 
//                 htmlFor="subject" 
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                   focusedField === 'subject' || formData.subject 
//                     ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
//                     : 'top-4 text-gray-500'
//                 }`}
//               >
//                 Objet
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('subject')}
//                 onBlur={() => setFocusedField('')}
//                 className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white"
//                 required
//               />
//             </div>

//             {/* Champ Message */}
//             <div className="relative group">
//               <label 
//                 htmlFor="message" 
//                 className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                   focusedField === 'message' || formData.message 
//                     ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
//                     : 'top-4 text-gray-500'
//                 }`}
//               >
//                 Votre message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('message')}
//                 onBlur={() => setFocusedField('')}
//                 rows={5}
//                 className="w-full px-4 py-4 pt-6 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none resize-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white"
//                 required
//               />
//             </div>

//             {/* Bouton d'envoi de type "submit" */}
//             <button
//               type="submit"
//               disabled={isSubmitting || isSuccess}
//               className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
//                 isSuccess 
//                   ? 'bg-green-500 text-white' 
//                   : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader className="w-5 h-5 animate-spin" />
//                   Envoi en cours...
//                 </>
//               ) : isSuccess ? (
//                 <>
//                   <CheckCircle className="w-5 h-5" />
//                   Message envoyé !
//                 </>
//               ) : (
//                 <>
//                   Envoyer le message
//                   <Send className="w-5 h-5" />
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Coordonnées */}
//       <div className="space-y-6">
//         <div>
//           <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent">
//             Coordonnées
//           </h2>
//           <p className="text-gray-500 mb-8">Retrouvez-nous facilement</p>
//         </div>

//         {/* Carte Adresse */}
//         <div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
//           <div className="relative flex items-start space-x-4">
//             <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <MapPin className="w-7 h-7 text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl mb-2 text-gray-900">Adresse</h3>
//               <p className="text-gray-700 leading-relaxed">
//                 59, Bd Zerktouni Étage 11, N°32<br />
//                 Casablanca, Maroc
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Carte Téléphone */}
//         <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
//           <div className="relative flex items-start space-x-4">
//             <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <Phone className="w-7 h-7 text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl mb-2 text-gray-900">Téléphone</h3>
//               <p className="text-gray-700 text-lg font-semibold">+212 606 698 210 / +212 665 288 522</p>
//             </div>
//           </div>
//         </div>

//         {/* Carte Email */}
//         <div className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
//           <div className="relative flex items-start space-x-4">
//             <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
//               <Mail className="w-7 h-7 text-white" />
//             </div>
//             <div>
//               <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
//               <p className="text-gray-700 text-lg font-semibold">contact@diebenu.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Exporter le composant par défaut
// export default ContactForm;




'use client';

import React, { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent, FC } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, AlertCircle } from 'lucide-react';

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  
  const [focusedField, setFocusedField] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formStartTime, setFormStartTime] = useState<number>(0);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  // Validation ultra-simplifiée
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Nom - validation minimale
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom est trop court';
    }
    
    // Email - format basique uniquement
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    // Sujet - validation minimale
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Le sujet est trop court';
    }
    
    // Message - validation minimale (5 caractères minimum)
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Le message est trop court';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsError(false);
    
    if (!validateForm()) {
      return;
    }

    const submissionTime = Date.now() - formStartTime;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
          submissionTime: submissionTime
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur serveur');
      }

      setIsSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        });
        setIsSuccess(false);
        setFormStartTime(Date.now());
      }, 5000);

    } catch (error: any) {
      console.error('❌ Erreur envoi:', error);
      setErrorMessage(error.message || 'Une erreur est survenue. Veuillez réessayer.');
      setIsError(true);
      
      setTimeout(() => {
        setIsError(false);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Formulaire */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-3xl transform rotate-1 opacity-50"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl opacity-20 -z-10"></div>
          
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent">
            Envoyez un message
          </h2>
          <p className="text-gray-500 mb-8">Remplissez le formulaire et nous vous répondrons rapidement</p>
          
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900">Message envoyé avec succès !</h3>
                <p className="text-sm text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            </div>
          )}

          {isError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Erreur d'envoi</h3>
                <p className="text-sm text-red-700">{errorMessage || 'Veuillez réessayer ultérieurement.'}</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* HONEYPOT - Champ invisible pour piéger les bots */}
            <div className="absolute -left-[5000px]" aria-hidden="true">
              <label htmlFor="website">Ne pas remplir ce champ</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Champ Nom */}
            <div className="relative group">
              <label 
                htmlFor="name" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'name' || formData.name 
                    ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
                    : 'top-4 text-gray-500'
                }`}
              >
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                className={`w-full px-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white ${
                  errors.name 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                }`}
                required
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Champ Email */}
            <div className="relative group">
              <label 
                htmlFor="email" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'email' || formData.email 
                    ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
                    : 'top-4 text-gray-500'
                }`}
              >
                Adresse email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className={`w-full px-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white ${
                  errors.email 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                }`}
                required
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Champ Sujet */}
            <div className="relative group">
              <label 
                htmlFor="subject" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'subject' || formData.subject 
                    ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
                    : 'top-4 text-gray-500'
                }`}
              >
                Objet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField('')}
                className={`w-full px-4 py-4 border-2 rounded-2xl focus:outline-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white ${
                  errors.subject 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                }`}
                required
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Champ Message - ULTRA SIMPLIFIÉ */}
            <div className="relative group">
              <label 
                htmlFor="message" 
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focusedField === 'message' || formData.message 
                    ? '-top-3 text-xs bg-white px-2 text-red-600 font-semibold' 
                    : 'top-4 text-gray-500'
                }`}
              >
                Votre message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                rows={5}
                className={`w-full px-4 py-4 pt-6 border-2 rounded-2xl focus:outline-none resize-none transition-all duration-300 group-hover:border-gray-300 bg-gray-50 focus:bg-white ${
                  errors.message 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:border-red-500'
                }`}
                required
              />
              <div className="flex justify-between items-center mt-2">
                {errors.message ? (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                ) : (
                  <span></span>
                )}
                <p className="text-xs text-gray-500">
                  {formData.message.length} / 5000
                </p>
              </div>
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
                isSuccess 
                  ? 'bg-green-500 text-white cursor-default' 
                  : isSubmitting
                  ? 'bg-gray-400 text-white cursor-wait'
                  : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message envoyé !
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              🛡️ Protégé contre le spam | Vos données sont sécurisées
            </p>
          </form>
        </div>
      </div>

      {/* Coordonnées */}
      <div className="space-y-6">
        <div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent">
            Coordonnées
          </h2>
          <p className="text-gray-500 mb-8">Retrouvez-nous facilement</p>
        </div>

        {/* Carte Adresse */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Adresse</h3>
              <p className="text-gray-700 leading-relaxed">
                59, Bd Zerktouni Étage 11, N°32<br />
                Casablanca, Maroc
              </p>
            </div>
          </div>
        </div>

        {/* Carte Téléphone */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Téléphone</h3>
              <p className="text-gray-700 text-lg font-semibold">+212 606 698 210 / +212 665 288 522</p>
            </div>
          </div>
        </div>

        {/* Carte Email */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
              <p className="text-gray-700 text-lg font-semibold">contact@diebenu.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;