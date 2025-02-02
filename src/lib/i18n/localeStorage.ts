/**
 * Retrieves a stored locale string from `localStorage`.
 *
 * @remarks
 * Returns `null` if reading fails or if no locale is stored.
 *
 * @returns The stored locale as a string, or `null` if none is found.
 *
 * @example
 * ```typescript
 * const locale = getStoredLocale();
 * if (locale) {
 *   console.log(`Stored locale: ${locale}`);
 * }
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
 * Persists the given locale string to `localStorage`.
 *
 * @remarks
 * Logs an error if writing fails (e.g., storage quota is exceeded).
 *
 * @param locale - The locale string to store.
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
