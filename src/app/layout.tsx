import './globals.scss';
import { JSX, ReactNode } from 'react';
import { UpdateHtmlLang } from '@/providers/UpdateHtmlLang';
import { UpdateMetadata } from '@/providers/UpdateMetadata';
import { LocaleContextProvider } from '@/contexts/LocaleContext';
import { ClientLayout } from '@/app/ClientLayout';
import { DEFAULT_LOCALE } from '@/constants/locale.const';

/**
 * The root layout of the Next.js application.
 *
 * @remarks
 * This layout:
 *  - Imports global styles.
 *  - Sets the initial `<html lang>` attribute to the default locale, which is then updated client‑side.
 *  - Wraps the app with the {@link LocaleContextProvider} and {@link ClientLayout}.
 *  - Provides dynamic HTML `<lang>` updates and metadata updates via respective providers.
 *
 * @param props - The component props.
 * @param props.children - The child nodes for the layout.
 *
 * @returns A JSX element representing the overall layout structure.
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
