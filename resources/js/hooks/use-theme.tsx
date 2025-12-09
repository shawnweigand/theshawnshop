import { useEffect, useState } from 'react';
import { useAppearance } from './use-appearance';

// Wrapper hook to provide next-themes compatible API
export function useTheme() {
  const { appearance } = useAppearance();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = appearance === 'dark' ||
      (appearance === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setResolvedTheme(isDark ? 'dark' : 'light');
  }, [appearance]);

  return {
    theme: 'light', //appearance,
    setTheme: () => {}, // Not used in hero-section
    resolvedTheme,
  };
}

