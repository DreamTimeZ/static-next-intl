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
 * LocaleContext provides the current locale and a method to update it.
 * It initializes the locale based on localStorage or the browser’s language.
 */
const LocaleContext = createContext<LocaleContextProps>({
	                                                        locale: DEFAULT_LOCALE,
	                                                        setLocale: () => {},
                                                        });

/**
 * LocaleContextProvider wraps the application to supply locale state.
 *
 * @param children - The child components that require locale context.
 * @returns A JSX element that provides the locale state.
 */
export const LocaleContextProvider = ({
	                                      children,
                                      }: {
	children: ReactNode;
}): JSX.Element => {
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
	 * Updates the locale state and optionally updates the URL query parameter.
	 *
	 * @param newLocale - The new locale to set.
	 * @param updateUrl - If true, the URL is updated to include the new locale.
	 */
	const setLocale = useCallback(
		(newLocale: Locale) => {
			setLocaleState(newLocale);
			try {
				setStoredLocale(newLocale);
			} catch (error) {
				console.error('Error saving locale to localStorage', error);
			}
		},
		[]
	);

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			{children}
		</LocaleContext.Provider>
	);
};

/**
 * Custom hook to consume the LocaleContext.
 *
 * @returns The locale and setLocale function from context.
 */
export const useLocaleContext = (): LocaleContextProps => useContext(LocaleContext);
