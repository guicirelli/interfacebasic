import { RefObject } from 'react';

// Intersection Observer Hook
export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
  triggerOnce?: boolean;
}

export type UseIntersectionObserverReturn = [
  RefObject<Element>,
  boolean,
  boolean
];

// Service Worker Hook
export type UseServiceWorkerReturn = void;

// Demo Logic Hook
export interface DemoStep {
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
}

export interface UseDemoLogicReturn {
  currentStep: number;
  isPlaying: boolean;
  tasks: Array<{
    id: number;
    title: string;
    priority: 'alta' | 'media' | 'baixa';
    status: 'pending' | 'in-progress' | 'scheduled' | 'completed';
    date?: string;
  }>;
  runDemo: () => Promise<void>;
}

// Counter Hook
export interface UseCounterOptions {
  duration?: number;
  startOnView?: boolean;
}

export type UseCounterReturn = [
  number,
  {
    start: () => void;
    reset: () => void;
    isAnimating: boolean;
  }
];

// Local Storage Hook
export type UseLocalStorageReturn<T> = [
  T,
  (value: T | ((prev: T) => T)) => void,
  () => void
];

// Debounce Hook
export type UseDebounceReturn<T> = T;

// Theme Hook (extending next-themes)
export interface UseThemeReturn {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  themes: string[];
  systemTheme: string | undefined;
  resolvedTheme: string | undefined;
}

// Media Query Hook
export interface UseMediaQueryOptions {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

export type UseMediaQueryReturn = boolean;

// Async Hook
export interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface UseAsyncReturn<T> extends UseAsyncState<T> {
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
}

// Form Hook
export interface FieldMeta {
  touched: boolean;
  error?: string;
  warning?: string;
}

export interface FieldInputProps {
  name: string;
  value: any;
  onChange: (event: any) => void;
  onBlur: () => void;
}

export interface UseFormReturn<T = any> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  submitCount: number;
  getFieldProps: (name: string) => FieldInputProps;
  getFieldMeta: (name: string) => FieldMeta;
  handleChange: (event: any) => void;
  handleBlur: (event: any) => void;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  validateField: (name: string) => Promise<void>;
  validateForm: () => Promise<Record<string, string>>;
  resetForm: () => void;
  submitForm: () => Promise<void>;
}
