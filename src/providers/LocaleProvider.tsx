'use client';

import React, {JSX, ReactNode} from 'react';
import { IntlProvider } from 'next-intl';
import { getMessages, useLocale, useTimeZone } from '@/lib/i18n/nextIntlConfig';

/**
 * LocaleProvider Component.
 *
 * @remarks
 * Wraps the application with the next-intl IntlProvider, supplying the current locale, translations,
 * and timezone to all child components.
 *
 * @param children - The React nodes that require access to the internationalization context.
 *
 * @returns A JSX element that provides the internationalization context.
 *
 * @example
 * ```tsx
 * <LocaleProvider>
 *   <App />
 * </LocaleProvider>
 * ```
 *
 * @see {@link https://github.com/amannn/next-intl}
 */
export function LocaleProvider({ children }: { children: ReactNode }): JSX.Element {
	const locale = useLocale();
	const messages = getMessages(locale);
	const timeZone = useTimeZone();

	return (
		<IntlProvider messages={messages} locale={locale} timeZone={timeZone}>
			{children}
		</IntlProvider>
	);
}
