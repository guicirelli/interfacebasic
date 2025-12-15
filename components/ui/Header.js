import { useState, useEffect } from 'react';
import { FiGlobe, FiZap, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Header() {
  const { locale, setLocale, availableLocales, settings, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageMenu && !event.target.closest('.language-menu')) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageMenu]);

  const languageNames = t('languages') || {};
  const languagesWithFlag = {
    'pt-BR': { label: languageNames['pt-BR'] || 'Português', flag: '🇧🇷' },
    'en-US': { label: languageNames['en-US'] || 'English', flag: '🇺🇸' }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo Estiloso - Canto esquerdo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            {/* Ícone da logo */}
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <FiZap className="text-white text-base sm:text-xl" />
              </div>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-brandLight rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            {/* Texto da logo */}
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 group-hover:text-brand transition-colors duration-300">
                {settings?.business?.brandName || 'Flowly'}
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Seletor de idioma e Login */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Seletor de Idioma */}
            <div className="relative language-menu">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 hover:text-brand transition-colors"
                aria-label={t('header.languageLabel') || 'Change language'}
              >
                <FiGlobe size={20} />
                <span className="text-sm font-medium">{languagesWithFlag[locale]?.flag}</span>
              </button>
              
              {/* Menu de idiomas */}
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50">
                  {availableLocales.map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLocale(code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-100 flex items-center space-x-2 ${
                        locale === code ? 'bg-slate-100 text-brand font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span>{languagesWithFlag[code]?.flag || '🌐'}</span>
                      <span>{languagesWithFlag[code]?.label || code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Botões de Contato, Login e Cadastro */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <button className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {t('header.contact') || 'Contact'}
              </button>
              <button className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {t('header.login') || 'Sign in'}
              </button>
              <button className="px-3 lg:px-4 py-2 text-sm lg:text-base bg-brand text-white rounded-lg hover:bg-brandDark transition-colors font-medium shadow-md">
                {t('header.signup') || 'Sign up'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Seletor de Idioma Mobile */}
            <div className="relative language-menu">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 hover:text-brand transition-colors p-2"
                aria-label={t('header.languageLabel') || 'Change language'}
              >
                <FiGlobe size={18} />
                <span className="text-xs">{languagesWithFlag[locale]?.flag}</span>
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50">
                  {availableLocales.map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLocale(code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center space-x-2 ${
                        locale === code ? 'bg-slate-100 text-brand font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span>{languagesWithFlag[code]?.flag || '🌐'}</span>
                      <span>{languagesWithFlag[code]?.label || code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <button className="block w-full text-left px-4 py-2 text-gray-600 font-medium hover:text-gray-800 transition-colors">
              {t('header.contact') || 'Contact'}
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-600 font-medium hover:text-gray-800 transition-colors">
              {t('header.login') || 'Sign in'}
            </button>
            <button className="block w-full text-left px-4 py-2 bg-brand text-white rounded-lg hover:bg-brandDark transition-colors font-medium shadow-md">
              {t('header.signup') || 'Sign up'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

