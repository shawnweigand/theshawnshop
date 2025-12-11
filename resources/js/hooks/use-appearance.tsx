import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

// Commented out - enforcing light mode only
/*
const prefersDark = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (appearance: Appearance) => {
    const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());

    document.documentElement.classList.toggle('dark', isDark);
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance;
    applyTheme(currentAppearance || 'system');
};
*/

// Enforce light mode always
const applyTheme = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('dark');
    }
};

export function initializeTheme() {
    // Always apply light mode
    applyTheme();

    // Commented out - enforcing light mode only
    /*
    const savedAppearance = (localStorage.getItem('appearance') as Appearance) || 'system';

    applyTheme(savedAppearance);

    // Add the event listener for system theme changes...
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
    */
}

export function useAppearance() {
    // Always return 'light' mode
    const [appearance] = useState<Appearance>('light');

    // No-op function - appearance cannot be changed
    const updateAppearance = useCallback((mode: Appearance) => {
        // Ignore updates - always enforce light mode
        applyTheme();
    }, []);

    useEffect(() => {
        // Always apply light mode on mount
        applyTheme();

        // Commented out - enforcing light mode only
        /*
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        updateAppearance(savedAppearance || 'system');

        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
        */
    }, []);

    return { appearance, updateAppearance } as const;
}
