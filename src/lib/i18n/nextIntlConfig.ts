import { AbstractIntlMessages } from 'next-intl';
import { useEffect, useState } from 'react';
import enMessages from '@messages/en.json';
import deMessages from '@messages/de.json';
import { DEFAULT_LOCALE, DEFAULT_TIMEZONE, SUPPORTED_LOCALES } from '@/constants/locale.const';
import { Locale } from '@/constants/enums/locale.enum';

/**
 * Mapping of locale codes to their corresponding translation messages.
 * If a locale is not found, the DEFAULT_LOCALE messages are used.
 */
export const messagesMap: Record<Locale, AbstractIntlMessages> = {
	en: enMessages,
	de: deMessages,
};

/**
 * Retrieves the translation messages for a given locale.
 *
 * @param locale - The locale code.
 * @returns The corresponding translation messages.
 */
export const getMessages = (locale: Locale): AbstractIntlMessages => {
	return messagesMap[locale] || messagesMap[DEFAULT_LOCALE];
};

/**
 * Normalizes a raw locale string to one of the supported locales.
 *
 * @param rawLocale - A raw locale string (e.g., 'en-US' or 'de-DE').
 * @returns A supported locale, or DEFAULT_LOCALE if unsupported.
 */
export function normalizeLocale(rawLocale: string): Locale {
	const localePrefix = rawLocale.split(/[-_]/)[0].toLowerCase();
	const candidate = localePrefix as Locale;
	return SUPPORTED_LOCALES.includes(candidate) ? candidate : DEFAULT_LOCALE;
}

/**
 * Custom hook to determine the user's current timezone.
 * Uses the Intl API and defaults to DEFAULT_TIMEZONE if resolution fails.
 *
 * @returns The user's timezone.
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
