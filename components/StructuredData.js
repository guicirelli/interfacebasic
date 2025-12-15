import Head from 'next/head';
import { useLanguage } from '../src/contexts/LanguageContext';

export default function StructuredData({ settings: settingsProp }) {
  const { settings: contextSettings } = useLanguage();
  const settings = settingsProp || contextSettings;

  if (!settings) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": settings.business.brandName,
    "description": settings.general.seoDescription,
    "url": settings.general.siteUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": settings.business.brandName,
      "url": settings.general.siteUrl
    },
    "featureList": settings.sections.features.items.map(feature => feature.title),
    "screenshot": `${settings.general.siteUrl}/og-image.png`
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}

