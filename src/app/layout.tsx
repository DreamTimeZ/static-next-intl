import './globals.scss';
import {JSX, ReactNode} from 'react';
import { LocaleProvider } from '@/providers/LocaleProvider';
import {DEFAULT_LOCALE} from '@/constants/locale.const';
import {UpdateHtmlLang} from '@/providers/UpdateHtmlLang';
import {UpdateMetadata} from '@/providers/UpdateMetadata';

/**
 * RootLayout component for the Next.js application.
 *
 * @remarks
 * This component defines the HTML structure and applies global styles. It wraps the application in
 * a LocaleProvider for internationalization, and updates the HTML language attribute and metadata dynamically.
 *
 * @param children - The React child nodes to be rendered within the layout.
 *
 * @returns A JSX element representing the application layout.
 *
 * @see {@link https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts}
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<html lang={DEFAULT_LOCALE}>
		<body>
		<LocaleProvider>
			<UpdateHtmlLang/>
			<UpdateMetadata/>
			{children}
		</LocaleProvider>
		</body>
		</html>
	);
}
