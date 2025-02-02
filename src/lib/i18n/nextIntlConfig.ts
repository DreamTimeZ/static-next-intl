import { AbstractIntlMessages } from 'next-intl';
import { useEffect, useState } from 'react';
import enMessages from '@messages/en.json';
import deMessages from '@messages/de.json';
import { DEFAULT_LOCALE, DEFAULT_TIMEZONE, SUPPORTED_LOCALES } from '@/constants/locale.const';
import { Locale } from '@/constants/enums/locale.enum';

/**
 * A mapping of locales to their respective translation messages.
 */
export const messagesMap: Record<Locale, AbstractIntlMessages> = {
	en: enMessages,
	de: deMessages,
};

/**
 * Retrieves translation messages for a given locale.
 *
 * @param locale - The locale code (e.g., 'en', 'de').
 *
 * @returns The translation messages for the specified locale,
 * or the default locale's messages if not found.
 */
export const getMessages = (locale: Locale): AbstractIntlMessages => {
	return messagesMap[locale] || messagesMap[DEFAULT_LOCALE];
};

/**
 * Normalizes a raw locale string (e.g., from the browser) to a supported locale.
 *
 * @param rawLocale - A raw locale string, e.g. `'en-US'` or `'de-DE'`.
 *
 * @returns A {@link Locale} supported by the application, or `DEFAULT_LOCALE` if unsupported.
 */
export function normalizeLocale(rawLocale: string): Locale {
	const localePrefix = rawLocale.split(/[-_]/)[0].toLowerCase();
	const candidate = localePrefix as Locale;
	return SUPPORTED_LOCALES.includes(candidate) ? candidate : DEFAULT_LOCALE;
}

/**
 * A custom hook that determines the user's current timezone using the Intl API.
 *
 * @remarks
 * Falls back to {@link DEFAULT_TIMEZONE} if the browser does not support
 * retrieving the timezone or if an error occurs.
 *
 * @returns The user's timezone as a string.
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
