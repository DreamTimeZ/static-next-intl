'use client';

import React, { JSX, ReactNode } from 'react';
import { IntlProvider } from 'next-intl';
import { getMessages, useTimeZone } from '@/lib/i18n/nextIntlConfig';
import { useLocaleContext } from '@/contexts/LocaleContext';

/**
 * A client-side layout component that wraps its children in a Next IntlProvider.
 *
 * @remarks
 * This component retrieves the current locale from the {@link useLocaleContext} hook, obtains
 * corresponding translation messages, and sets the time zone for the IntlProvider.
 * It is intended to be used on the client side only.
 *
 * @param props - The component props.
 * @param props.children - The content nested under this layout.
 *
 * @returns A JSX element providing the internationalization context to child components.
 */
export function ClientLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
	const { locale } = useLocaleContext();
	const messages = getMessages(locale);
	const timeZone = useTimeZone();

	return (
		<IntlProvider messages={messages} locale={locale} timeZone={timeZone}>
			{children}
		</IntlProvider>
	);
}
