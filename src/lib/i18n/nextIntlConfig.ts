import { AbstractIntlMessages } from 'next-intl';
import { useEffect, useState } from 'react';
import enMessages from '@messages/en.json'; // assuming you’ve set up an alias for messages
import deMessages from '@messages/de.json';
import { DEFAULT_LOCALE, DEFAULT_TIMEZONE, SUPPORTED_LOCALES } from '@/constants/locale.const';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/constants/enums/locale.enum';
import { getStoredLocale, setStoredLocale } from '@/lib/i18n/localeStorage';

/**
 * A mapping of locale codes to their corresponding translation messages.
 *
 * @remarks
 * If a locale is not found in this mapping, the DEFAULT_LOCALE messages are used.
 */
export const messagesMap: Record<Locale, AbstractIntlMessages> = {
	en: enMessages,
	de: deMessages,
};

/**
 * Retrieves the translation messages for a given locale.
 *
 * @param locale - The locale code for which to retrieve messages.
 * @returns The corresponding translation messages.
 *
 * @example
 * ```typescript
 * const messages = getMessages('en');
 * ```
 */
export const getMessages = (locale: Locale): AbstractIntlMessages => {
	return messagesMap[locale] || messagesMap[DEFAULT_LOCALE];
};

/**
 * Normalizes a raw locale string to one of the supported locales.
 *
 * @param rawLocale - A raw locale string (e.g., 'en-US' or 'de-DE').
 * @returns The normalized locale if supported; otherwise, returns DEFAULT_LOCALE.
 *
 * @example
 * ```typescript
 * const normalized = normalizeLocale('en-US'); // returns 'en'
 * ```
 */
export function normalizeLocale(rawLocale: string): Locale {
	const localePrefix = rawLocale.split(/[-_]/)[0].toLowerCase();
	const candidate = localePrefix as Locale;
	return SUPPORTED_LOCALES.includes(candidate) ? candidate : DEFAULT_LOCALE;
}

/**
 * Custom React hook to determine the current locale.
 *
 * @remarks
 * Checks localStorage, URL parameters, and the browser’s navigator language in order to determine and persist
 * the current locale.
 *
 * @returns The current locale as a Locale enum value.
 *
 * @example
 * ```tsx
 * const locale = useLocale();
 * ```
 */
export function useLocale(): Locale {
	const searchParams = useSearchParams();
	const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

	useEffect(() => {
		const persisted = getStoredLocale();
		if (persisted) {
			const normalizedPersisted = normalizeLocale(persisted);
			setLocale(normalizedPersisted);
			return;
		}

		const urlLocale = searchParams.get('locale');
		if (urlLocale) {
			const normalizedUrl = normalizeLocale(urlLocale);
			setLocale(normalizedUrl);
			setStoredLocale(normalizedUrl);
			return;
		}

		if (navigator?.language) {
			const normalizedBrowserLocale = normalizeLocale(navigator.language);
			setLocale(normalizedBrowserLocale);
			setStoredLocale(normalizedBrowserLocale);
		}
	}, [searchParams]);

	return locale;
}

/**
 * Custom React hook to determine the user's current timezone.
 *
 * @remarks
 * Utilizes the Intl API to resolve the timezone. Defaults to DEFAULT_TIMEZONE if resolution fails.
 *
 * @returns A string representing the user's timezone.
 *
 * @example
 * ```tsx
 * const timeZone = useTimeZone();
 * ```
 */
export function useTimeZone(): string {
	const [timeZone, setTimeZone] = useState<string>(DEFAULT_TIMEZONE);

	useEffect(() => {
		if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
			const resolvedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			setTimeZone(resolvedTimeZone || DEFAULT_TIMEZONE);
		}
	}, []);

	return timeZone;
}
