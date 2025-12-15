import "@fontsource-variable/inter";
import "@fontsource/poppins/700.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "../src/contexts/LanguageContext";
import themeConfig from "../content/settings/theme.json";
import { useMemo } from "react";

export default function App({ Component, pageProps }) {
  const { language, ...componentProps } = pageProps || {};

  const providerProps = useMemo(() => ({
    settingsByLocale: language?.settingsByLocale || {},
    theme: language?.theme || themeConfig,
    defaultLocale: language?.defaultLocale || 'en-US',
  }), [language?.settingsByLocale, language?.theme, language?.defaultLocale]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider {...providerProps}>
        <Component {...componentProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
