// =========================================================================
// COMPOSANT : SEARCH OVERLAY

// app/components/Navbar.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  ChevronRight,
  BookOpen,
  Briefcase,
  Zap,
  Search,
  LayoutGrid,
  Award,
  Loader2,
  Download,
  Send,
  CheckCircle,
} from 'lucide-react';
import {SearchOverlayProps }  from '@/types/index';

import { GenericSearchResult } from '@/types/index';
// =========================================================================

const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  searchTerm,
  onSearchChange,
  searchResults,
  onSelect,
  onClose,
  isLoading,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const getIcon = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout':
        return <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
      case 'book':
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />;
      case 'file':
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />;
      default:
        return <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />;
    }
  };

  const getIconBg = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout':
        return 'bg-gradient-to-br from-blue-100 to-blue-200';
      case 'book':
        return 'bg-gradient-to-br from-red-100 to-red-200';
      case 'file':
        return 'bg-gradient-to-br from-green-100 to-green-200';
      case 'briefcase':
        return 'bg-gradient-to-br from-indigo-100 to-indigo-200';
      case 'zap':
        return 'bg-gradient-to-br from-yellow-100 to-yellow-200';
      default:
        return 'bg-gradient-to-br from-gray-100 to-gray-200';
    }
  };

  const getDotColor = (icon: GenericSearchResult['icon']) => {
    switch (icon) {
      case 'layout': return 'bg-blue-400';
      case 'book': return 'bg-red-400';
      case 'file': return 'bg-green-400';
      case 'briefcase': return 'bg-indigo-400';
      case 'zap': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

      <div
        className="relative w-full max-w-3xl mx-3 sm:mx-4 mt-[8vh] sm:mt-[12vh] animate-in slide-in-from-top-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>

            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 pb-4 sm:pb-5">
              <div className="flex-shrink-0">
                {isLoading ? (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 animate-spin" />
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={onSearchChange}
                className="flex-1 bg-transparent text-gray-900 text-base sm:text-lg font-medium placeholder-gray-400 focus:outline-none"
                autoFocus
              />

              {searchTerm && (
                <button
                  onClick={() =>
                    onSearchChange({ target: { value: '' } } as any)
                  }
                  className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                  title="Effacer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-gray-700" />
                </button>
              )}

              <button
                onClick={onClose}
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors group"
                title="Fermer (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-red-600" />
              </button>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
            {searchTerm.length < 2 ? (
              <div className="px-4 sm:px-6 py-12 sm:py-16 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Recherchez dans tous nos pôles
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-4">
                  Tapez au moins 2 caractères pour commencer la recherche
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
                  <span className="text-xs text-gray-400 font-medium w-full sm:w-auto">
                    Essayez :
                  </span>
                  {['Leadership', 'Finance', 'Audit', 'Digitalisation'].map((term) => (
                    <button
                      key={term}
                      onClick={() =>
                        onSearchChange({ target: { value: term } } as any)
                      }
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-medium rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : !isLoading && searchResults.length === 0 ? (
              <div className="px-4 sm:px-6 py-12 sm:py-16 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Essayez avec d'autres mots-clés
                </p>
              </div>
            ) : (
              <div className="p-2 sm:p-3">
                <div className="mb-2 sm:mb-3 px-2 sm:px-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-1">
                  {searchResults.map((result, index) => (
                    <button
                      key={`${result.page}-${result.type}-${result.title}-${index}`}
                      onClick={() => onSelect(result)}
                      className="w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50/50 transition-all duration-200 flex items-center gap-3 sm:gap-4 group border-2 border-transparent hover:border-red-100"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${getIconBg(
                            result.icon
                          )} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          {getIcon(result.icon)}
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-700 text-sm sm:text-base leading-snug mb-1 truncate">
                          {result.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${getDotColor(
                              result.icon
                            )}`}
                          ></span>
                          {result.detail}
                        </p>
                      </div>

                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-50/50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <kbd className="hidden sm:inline px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono text-xs">
                  ESC
                  Casablanca
                  Maroc
                  
                  Abidjan
                  Côte d'Ivoire
                  
                  Dakar
                  Sénégal
                  
                  Ouagadougou
                  Burkina Faso
                  
                  Dubaï
                  Émirats Arabes Unis
                  
                  
                </kbd>
                <span className="sm:hidden">ESC</span> pour fermer
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <kbd className="hidden sm:inline px-2 py-1 bg-white border border-gray-200 rounded text-gray-600 font-mono text-xs">
                  ↵
                </kbd>
                <span className="sm:hidden">↵</span> pour sélectionner
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;