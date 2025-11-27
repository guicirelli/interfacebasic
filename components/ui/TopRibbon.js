import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function TopRibbon({ message, closeable = true }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (closeable) {
      const dismissed = localStorage.getItem('ribbonDismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, [closeable]);

  const handleClose = () => {
    setIsVisible(false);
    if (closeable) {
      localStorage.setItem('ribbonDismissed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-brand text-white py-2 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Texto animado */}
        <div className="flex items-center">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block mr-32">{message}</span>
            <span className="inline-block mr-32">{message}</span>
            <span className="inline-block mr-32">{message}</span>
          </div>
        </div>
        
        {/* Botão de fechar */}
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute right-4 hover:opacity-70 transition-opacity z-10 bg-brand px-2 py-1 rounded"
            aria-label="Fechar"
          >
            <FiX size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

