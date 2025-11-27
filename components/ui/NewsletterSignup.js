import { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de envio (em produção, substitua por API real)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#8B3A3A] text-white rounded-2xl p-8 text-center">
      <FiMail className="w-12 h-12 mx-auto mb-4 opacity-90" />

      <h3 className="text-2xl font-bold mb-2">
        Fique por dentro das novidades
      </h3>

      <p className="text-lg mb-6 opacity-90">
        Receba dicas de produtividade e atualizações do Flowly
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-lg text-white placeholder-white/70 bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isLoading || isSubmitted}
            className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 border border-white/30"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div>
                <span>Enviando...</span>
              </>
            ) : isSubmitted ? (
              <>
                <FiCheck className="w-4 h-4" />
                <span>Pronto!</span>
              </>
            ) : (
              'Inscrever-se'
            )}
          </button>
        </div>

        <p className="text-sm mt-3 opacity-75">
          Sem spam. Cancele quando quiser.
        </p>
      </form>
    </div>
  );
}

