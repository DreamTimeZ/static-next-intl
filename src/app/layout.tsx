import './globals.scss';
import { JSX, ReactNode } from 'react';
import { UpdateHtmlLang } from '@/providers/UpdateHtmlLang';
import { UpdateMetadata } from '@/providers/UpdateMetadata';
import {LocaleContextProvider} from '@/contexts/LocaleContext';
import { ClientLayout } from '@/app/ClientLayout';
import {DEFAULT_LOCALE} from '@/constants/locale.const';

/**
 * RootLayout component wraps the application with the locale and intl providers.
 * For static export, the <html> lang attribute is initially set to DEFAULT_LOCALE,
 * then updated on the client.
 *
 * @param children - The child nodes of the layout.
 * @returns A JSX element representing the overall layout.
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<html lang={DEFAULT_LOCALE}>
		<body>
		<LocaleContextProvider>
			<ClientLayout>
				<UpdateHtmlLang />
				<UpdateMetadata />
				{children}
			</ClientLayout>
		</LocaleContextProvider>
		</body>
		</html>
	);
}
