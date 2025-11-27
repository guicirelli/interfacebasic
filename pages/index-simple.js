import Layout from '../components/layout/Layout';

export default function Home({ settings }) {
  return (
    <Layout settings={settings}>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Flowly - Teste</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = {
    business: require('../content/settings/business.json'),
    general: require('../content/settings/general.json'),
    theme: require('../content/settings/theme.json'),
    sections: require('../content/settings/sections.json')
  };

  return { props: { settings } };
}
