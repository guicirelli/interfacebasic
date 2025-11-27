import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer({ settings }) {
  const social = settings.business.social || {};

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{settings.business.brandName}</h3>
            <p className="text-gray-600">{settings.business.brandTagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-brand transition-colors text-gray-600">Início</a></li>
              <li><a href="#about" className="hover:text-brand transition-colors text-gray-600">Sobre</a></li>
              <li><a href="#features" className="hover:text-brand transition-colors text-gray-600">Diferenciais</a></li>
              <li><a href="#pricing" className="hover:text-brand transition-colors text-gray-600">Planos</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Contato</h4>
            <p className="text-gray-600 mb-2">{settings.business.brandEmail}</p>
            <p className="text-gray-600 mb-4">{settings.business.brandPhone}</p>
            
            {settings.theme.footer.showSocial && (
              <div className="flex space-x-4">
                {social.github && (
                  <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiGithub size={24} />
                  </a>
                )}
                {social.linkedin && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiLinkedin size={24} />
                  </a>
                )}
                {social.twitter && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                    <FiTwitter size={24} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Fique por dentro</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Receba dicas de produtividade e atualizações do Flowly
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-2">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>{settings.theme.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

