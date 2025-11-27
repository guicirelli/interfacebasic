// Global types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

// Business types
export interface BusinessSettings {
  brandName: string;
  brandTagline: string;
  brandEmail: string;
  brandPhone: string;
  brandLogo: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Theme types
export interface ThemeSettings {
  colors: {
    brand: string;
    brandDark: string;
    background: string;
    darkBackground: string;
    text: string;
    textDark: string;
    accent: string;
  };
  header: {
    sticky: boolean;
    transparent: boolean;
    logoAlign: 'left' | 'center' | 'right';
    showThemeToggle: boolean;
  };
  footer: {
    showSocial: boolean;
    showNewsletter: boolean;
    copyright: string;
  };
}

// General settings
export interface GeneralSettings {
  siteUrl: string;
  darkMode: boolean;
  scrollSmooth: boolean;
  seoTitle: string;
  seoDescription: string;
  openGraphImage: string;
  favicon: string;
}

// Section content types
export interface HeroSection {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export interface AboutSection {
  title: string;
  content: string;
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSection {
  title: string;
  subtitle: string;
  items: Feature[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export interface PricingSection {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TestimonialsSection {
  title: string;
  items: Testimonial[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export interface CTASection {
  title: string;
  subtitle: string;
  button: string;
  secondaryText: string;
}

export interface DemoSection {
  title: string;
  subtitle: string;
  button: string;
}

export interface LogosSection {
  title: string;
  items: string[];
}

export interface Step {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksSection {
  title: string;
  steps: Step[];
}

export interface IntegrationsSection {
  title: string;
  items: string[];
}

export interface TopRibbonSection {
  enabled: boolean;
  message: string;
  closeable: boolean;
}

export interface SectionsSettings {
  topRibbon: TopRibbonSection;
  hero: HeroSection;
  about: AboutSection;
  features: FeaturesSection;
  logos: LogosSection;
  howItWorks: HowItWorksSection;
  integrations: IntegrationsSection;
  demo: DemoSection;
  testimonials: TestimonialsSection;
  pricing: PricingSection;
  faq: FAQSection;
  cta: CTASection;
}

// Main settings type
export interface Settings {
  business: BusinessSettings;
  general: GeneralSettings;
  theme: ThemeSettings;
  sections: SectionsSettings;
}

// Component props types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self';
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardProps extends BaseComponentProps {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  vPadding?: string;
  hPadding?: string;
}

// Animation types
export interface AnimationConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

// Error types
export interface ErrorInfo {
  message: string;
  code?: string;
  statusCode?: number;
}

// API Response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: RegExp;
    message?: string;
    minLength?: number;
    maxLength?: number;
  };
  options?: Array<{ value: string; label: string }>;
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: Date;
}

// SEO types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// PWA types
export interface PWAManifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';
  background_color: string;
  theme_color: string;
  orientation: 'any' | 'natural' | 'landscape' | 'portrait' | 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary';
  scope: string;
  lang: string;
  dir: 'ltr' | 'rtl';
  categories: string[];
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
    purpose?: string;
  }>;
  screenshots?: Array<{
    src: string;
    sizes: string;
    type: string;
    label?: string;
  }>;
}
