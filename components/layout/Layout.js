import Head from 'next/head';
import { useServiceWorker } from '../../lib/useServiceWorker';
import StructuredData from '../StructuredData';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Layout({ settings: settingsProp, children }) {
  const { settings: contextSettings } = useLanguage();
  const settings = settingsProp || contextSettings;

  if (!settings) {
    return <>{children}</>;
  }

  useServiceWorker();

  return (
    <>
      <Head>
        <title>{settings.general.seoTitle}</title>
        <meta name="description" content={settings.general.seoDescription} />
        <meta property="og:title" content={settings.general.seoTitle} />
        <meta property="og:description" content={settings.general.seoDescription} />
        <meta property="og:image" content={settings.general.openGraphImage} />
        <meta property="og:url" content={settings.general.siteUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={settings.general.seoTitle} />
        <meta name="twitter:description" content={settings.general.seoDescription} />
        <meta name="twitter:image" content={settings.general.openGraphImage} />
        <link rel="canonical" href={settings.general.siteUrl} />
        <link rel="icon" href={settings.general.favicon} />
      </Head>

      <StructuredData settings={settings} />

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
