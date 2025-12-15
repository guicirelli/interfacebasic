import { useState, useEffect } from 'react';
import { FiGlobe, FiZap } from 'react-icons/fi';
import Link from 'next/link';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Header() {
  const { locale, setLocale, availableLocales, settings, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

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
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Estiloso - Canto esquerdo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Ícone da logo */}
            <div className="relative">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <FiZap className="text-white text-xl" />
              </div>
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-brandLight rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            {/* Texto da logo */}
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-gray-900 group-hover:text-brand transition-colors duração-300">
                {settings?.business?.brandName || 'Flowly'}
              </span>
            </div>
          </Link>

          {/* Seletor de idioma e Login - Canto direito */}
          <div className="flex items-center space-x-4">
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
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {t('header.contact') || 'Contato'}
              </button>
              <button className="px-4 py-2 text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {t('header.login') || 'Entrar'}
              </button>
              <button className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brandDark transition-colors font-medium shadow-md">
                {t('header.signup') || 'Cadastrar'}
              </button>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

