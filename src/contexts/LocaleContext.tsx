'use client';

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
	JSX,
	useCallback,
} from 'react';
import { Locale } from '@/constants/enums/locale.enum';
import { DEFAULT_LOCALE } from '@/constants/locale.const';
import { normalizeLocale } from '@/lib/i18n/nextIntlConfig';
import { LocaleContextProps } from '@/props/localeContext.props';
import { getStoredLocale, setStoredLocale } from '@/lib/i18n/localeStorage';

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
	const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

	useEffect(() => {
		try {
			const stored = getStoredLocale();
			if (stored) {
				setLocaleState(normalizeLocale(stored));
				return;
			}
		} catch (error) {
			console.error('Error accessing localStorage', error);
		}
		// Fallback to browser language
		if (navigator?.language) {
			setLocaleState(normalizeLocale(navigator.language));
		}
	}, []);

	/**
	 * Updates the locale state and persists it in localStorage.
	 *
	 * @param newLocale - The new locale to set.
	 */
	const setLocale = useCallback((newLocale: Locale) => {
		setLocaleState(newLocale);
		try {
			setStoredLocale(newLocale);
		} catch (error) {
			console.error('Error saving locale to localStorage', error);
		}
	}, []);

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
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
