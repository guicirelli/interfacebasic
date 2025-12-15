import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Footer() {
  const { settings, t } = useLanguage();
  const social = settings?.business?.social || {};
  const footerCopy = t('footer') || {};
  const newsletterCopy = footerCopy.newsletter || {};
  const links = footerCopy.links || [];

  return (
    <footer className="bg-white text-gray-900 py-8 sm:py-10 md:py-12 lg:py-16 border-t border-gray-200">
      <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900">{settings?.business?.brandName}</h3>
            <p className="text-sm sm:text-base text-gray-600">{settings?.business?.brandTagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900">{footerCopy.quickLinks || 'Links'}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand transition-colors text-sm sm:text-base text-gray-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900">{t('header.contact') || 'Contato'}</h4>
            <p className="text-sm sm:text-base text-gray-600 mb-2">{settings?.business?.brandEmail}</p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{settings?.business?.brandPhone}</p>
            
            {settings?.theme?.footer?.showSocial && (
              <div className="flex space-x-3 sm:space-x-4">
                {social.github && (
                  <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiGithub size={20} className="sm:w-6 sm:h-6" />
                  </a>
                )}
                {social.linkedin && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiLinkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                )}
                {social.twitter && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiTwitter size={20} className="sm:w-6 sm:h-6" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900">{newsletterCopy.title || 'Newsletter'}</h4>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {newsletterCopy.description}
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder={newsletterCopy.placeholder || ''}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-brand text-white font-semibold rounded-lg hover:bg-brandDark transition-colors"
              >
                {newsletterCopy.button || 'OK'}
              </button>
            </form>
            
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {newsletterCopy.disclaimer}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-600">
          <p>{footerCopy.copyright || settings?.theme?.footer?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

