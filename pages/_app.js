import "@fontsource-variable/inter";
import "@fontsource/poppins/700.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import themeConfig from "../content/settings/theme.json";

export default function App({ Component, pageProps }) {
  const { language, ...componentProps } = pageProps || {};

  const providerProps = {
    settingsByLocale: language?.settingsByLocale || {},
    theme: language?.theme || themeConfig,
    defaultLocale: language?.defaultLocale || 'en-US',
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider {...providerProps}>
        <Component {...componentProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
