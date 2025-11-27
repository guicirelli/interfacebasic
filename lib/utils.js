export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export function loadSettings() {
  return {
    business: require('../content/settings/business.json'),
    general: require('../content/settings/general.json'),
    theme: require('../content/settings/theme.json'),
    sections: require('../content/settings/sections.json')
  };
}

