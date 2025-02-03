import { Locale } from '@/constants/enums/locale.enum';

/**
 * The interface defining the shape of the locale context.
 *
 * @remarks
 * Used to manage and provide the current locale
 * and a method to update it.
 */
export interface LocaleContextProps {
	/**
	 * The current locale of the application.
	 */
	locale: Locale;

	/**
	 * Updates the current locale and persists it (e.g., to localStorage).
	 *
	 * @param locale - The new locale to set.
	 * @param updateUrl - (Optional) If true, also update the URL to reflect the new locale.
	 */
	setLocale: (locale: Locale, updateUrl?: boolean) => void;
}
