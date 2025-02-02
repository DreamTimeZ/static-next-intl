/**
 * Retrieves the stored locale from localStorage.
 *
 * @returns The stored locale as a string, or null if not found or on error.
 *
 * @remarks
 * If localStorage access fails (for example, in a server-side context), an error is logged and null is returned.
 *
 * @example
 * ```typescript
 * const locale = getStoredLocale();
 * ```
 */
export const getStoredLocale = (): string | null => {
	try {
		return localStorage.getItem('locale');
	} catch (error) {
		console.error('Error reading locale from localStorage', error);
		return null;
	}
};

/**
 * Persists the given locale to localStorage.
 *
 * @param locale - The locale string to save.
 *
 * @remarks
 * In case of an error (e.g., storage quota exceeded), the error is caught and logged.
 *
 * @example
 * ```typescript
 * setStoredLocale('en');
 * ```
 */
export const setStoredLocale = (locale: string): void => {
	try {
		localStorage.setItem('locale', locale);
	} catch (error) {
		console.error('Error saving locale to localStorage', error);
	}
};
