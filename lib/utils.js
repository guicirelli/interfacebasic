export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export function loadLanguageConfig() {
  const theme = require('../content/settings/theme.json');

  const ptBR = {
    business: require('../content/i18n/pt-BR/business.json'),
    general: require('../content/i18n/pt-BR/general.json'),
    sections: require('../content/i18n/pt-BR/sections.json'),
    translations: require('../content/i18n/pt-BR/common.json'),
  };

  const enUS = {
    business: require('../content/i18n/en-US/business.json'),
    general: require('../content/i18n/en-US/general.json'),
    sections: require('../content/i18n/en-US/sections.json'),
    translations: require('../content/i18n/en-US/common.json'),
  };

  return {
    defaultLocale: 'pt-BR',
    theme,
    settingsByLocale: {
      'pt-BR': ptBR,
      'en-US': enUS,
    },
  };
}
