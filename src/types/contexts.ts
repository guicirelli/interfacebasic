import { ReactNode } from 'react';

// Settings Context
export interface SettingsContextType {
  settings: import('./index').Settings | null;
  isLoading: boolean;
  error: string | null;
  updateSettings: (newSettings: Partial<import('./index').Settings>) => void;
  refreshSettings: () => Promise<void>;
}

// Theme Context
export interface ThemeContextType {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  resolvedTheme: 'light' | 'dark';
  systemTheme: 'light' | 'dark' | undefined;
}

// Analytics Context
export interface AnalyticsContextType {
  track: (event: import('./index').AnalyticsEvent) => void;
  trackPageView: (page: string, properties?: Record<string, any>) => void;
  trackConversion: (conversion: string, value?: number) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

// Error Boundary Context
export interface ErrorBoundaryContextType {
  hasError: boolean;
  error: Error | null;
  errorInfo: import('./index').ErrorInfo | null;
  resetError: () => void;
  reportError: (error: Error, errorInfo?: any) => void;
}

// Notification Context
export interface NotificationItem {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface NotificationContextType {
  notifications: NotificationItem[];
  addNotification: (notification: Omit<NotificationItem, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

// Modal Context
export interface ModalInstance {
  id: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  options?: {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    closable?: boolean;
    backdrop?: 'static' | 'blur' | 'none';
  };
}

export interface ModalContextType {
  modals: ModalInstance[];
  openModal: (component: React.ComponentType<any>, props?: Record<string, any>, options?: ModalInstance['options']) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

// Loading Context
export interface LoadingState {
  id: string;
  message?: string;
  progress?: number;
}

export interface LoadingContextType {
  loadings: LoadingState[];
  startLoading: (id: string, message?: string) => void;
  updateLoading: (id: string, progress: number) => void;
  stopLoading: (id: string) => void;
  isLoading: (id?: string) => boolean;
}

// Feature Flags Context
export interface FeatureFlagsContextType {
  flags: Record<string, boolean>;
  isEnabled: (flag: string) => boolean;
  enableFlag: (flag: string) => void;
  disableFlag: (flag: string) => void;
  toggleFlag: (flag: string) => void;
}

// User Preferences Context
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  dateFormat: string;
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  accessibility: {
    reducedMotion: boolean;
    highContrast: boolean;
    fontSize: 'small' | 'medium' | 'large';
  };
}

export interface UserPreferencesContextType {
  preferences: UserPreferences;
  updatePreference: <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => void;
  resetPreferences: () => void;
}

// App Context (combines multiple contexts)
export interface AppContextType {
  settings: SettingsContextType;
  theme: ThemeContextType;
  analytics: AnalyticsContextType;
  notifications: NotificationContextType;
  modals: ModalContextType;
  loading: LoadingContextType;
  userPreferences: UserPreferencesContextType;
  featureFlags: FeatureFlagsContextType;
}

// Provider Props
export interface AppProviderProps {
  children: ReactNode;
  initialSettings?: import('./index').Settings;
  enableAnalytics?: boolean;
  enableErrorTracking?: boolean;
}
