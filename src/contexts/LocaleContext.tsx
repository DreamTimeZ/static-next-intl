'use client';

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
	JSX,
	useCallback,
	useMemo,
} from 'react';
import { Locale } from '@/constants/enums/locale.enum';
import { DEFAULT_LOCALE } from '@/constants/locale.const';
import { normalizeLocale } from '@/lib/i18n/nextIntlConfig';
import { LocaleContextProps } from '@/props/contexts/localeContext.props';

/**
 * Provides access to the current locale and a method to update it.
 */
const LocaleContext = createContext<LocaleContextProps>({
	locale: DEFAULT_LOCALE,
	setLocale: () => {},
});

/**
 * Wraps the application to supply locale state via React Context.
 *
 * @remarks
 * - Reads from `localStorage` on mount to determine the initial locale.
 * - Falls back to the browser's language if no stored locale is available.
 * - Allows updating the locale via the `setLocale` function, which also persists it to storage.
 *
 * @param props - The component props.
 * @param props.children - The child components that need the locale context.
 *
 * @returns A JSX element that provides the locale state to its children.
 */
export const LocaleContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

	useEffect(() => {
		try {
			const stored = localStorage.getItem('locale');
			if (stored) {
				setLocale(normalizeLocale(stored));
				return;
			}
		} catch (error) {
			console.error('Error accessing localStorage', error);
		}
		// Fallback to browser language if available
		if (navigator?.language) {
			setLocale(normalizeLocale(navigator.language));
		}
	}, []);

	/**
	 * Updates the locale state and persists it in localStorage.
	 *
	 * @param newLocale - The new locale to set.
	 */
	const updateLocale = useCallback((newLocale: Locale) => {
		setLocale(newLocale);
		try {
			localStorage.setItem('locale', newLocale);
		} catch (error) {
			console.error('Error saving locale to localStorage', error);
		}
	}, []);

	// Memoize the context value to prevent unnecessary re-renders.
	const contextValue = useMemo(
		() => ({
			locale,
			setLocale: updateLocale,
		}),
		[locale, updateLocale]
	);

	return (
		<LocaleContext.Provider value={contextValue}>
			{children}
		</LocaleContext.Provider>
	);
};

/**
 * A custom hook for using the current locale context.
 *
 * @returns The locale and the function to update the locale.
 */
export const useLocaleContext = (): LocaleContextProps => useContext(LocaleContext);
