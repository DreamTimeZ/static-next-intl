'use client';

import React, { JSX, ReactNode } from 'react';
import { IntlProvider } from 'next-intl';
import { getMessages } from '@/lib/i18n/nextIntlConfig';
import { useTimeZone } from '@/lib/i18n/nextIntlConfig';
import { useLocaleContext } from '@/contexts/LocaleContext';

/**
 * ClientLayout wraps the application with the next‑intl IntlProvider.
 * It supplies the current locale, translation messages, and timezone to all child components.
 *
 * @param children - The React nodes that require internationalization.
 * @returns A JSX element providing the intl context.
 */
export function ClientLayout({ children }: { children: ReactNode }): JSX.Element {
	const { locale } = useLocaleContext();
	const messages = getMessages(locale);
	const timeZone = useTimeZone();

	return (
		<IntlProvider messages={messages} locale={locale} timeZone={timeZone}>
			{children}
		</IntlProvider>
	);
}
