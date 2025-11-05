// =========================================================================
// COMPOSANT : PDF DOWNLOAD MODAL

import { X, Download, FileText, Loader2, Send, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

// =========================================================================
interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSuccess: () => void;
  isAuthorized: boolean;
  onDownload: () => void;
}

const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  isOpen,
  onClose,
  onFormSuccess,
  isAuthorized,
  onDownload,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Demande de téléchargement du catalogue de formations',
    message: 'Je souhaite télécharger le catalogue de formations Diebenu & Partners.',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        subject: 'Demande de téléchargement du catalogue de formations',
        message: 'Je souhaite télécharger le catalogue de formations Diebenu & Partners.',
        honeypot: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Nom requis (minimum 2 caractères)';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email valide requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (formData.honeypot) {
      console.warn('Spam detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/telecharger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message,
          honeypot: formData.honeypot,
          submissionTime: Date.now(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur serveur');
      }

      onFormSuccess();

    } catch (error: any) {
      console.error('Erreur:', error);
      alert(`Une erreur est survenue : ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-8 py-4 sm:py-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors group z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Télécharger le catalogue
              </h2>
              <p className="text-white/90 text-xs sm:text-sm">
                Remplissez le formulaire pour accéder au PDF
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-8">
          {!isAuthorized ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="pdf-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="pdf-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="Votre nom et prénom"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="pdf-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  id="pdf-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="votre.email@entreprise.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-blue-900">
                  <p className="font-semibold mb-1">Catalogue complet inclus :</p>
                  <ul className="text-blue-800 space-y-1 text-xs">
                    <li>• Plus de 200 formations professionnelles</li>
                    <li>• Descriptions détaillées et objectifs pédagogiques</li>
                    <li>• Tarifs et durées de chaque formation</li>
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Valider et accéder au PDF
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Vos données sont sécurisées et ne seront jamais partagées
              </p>
            </form>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Merci pour votre demande !
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Vous pouvez maintenant télécharger le catalogue de formations
              </p>

              <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
                📧 Un email de confirmation a été envoyé à votre adresse
              </p>

              <button
                onClick={onDownload}
                type="button"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Télécharger le catalogue PDF
              </button>

              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
                Le téléchargement devrait commencer automatiquement
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PdfDownloadModal;