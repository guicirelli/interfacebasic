import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function FloatingCta({ href = '#cta', label }) {
  const { t } = useLanguage();
  const resolvedLabel = label || t('floatingCta.label') || 'Começar grátis';

  return (
    <Link
      href={href}
      className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full px-5 py-3 bg-[var(--color-brand)] text-white flex items-center gap-2 hover:opacity-90 transition"
    >
      <span className="font-semibold">{resolvedLabel}</span>
      <FiArrowUpRight />
    </Link>
  );
}
