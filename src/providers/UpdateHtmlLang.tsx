'use client';

import { useEffect } from 'react';
import { useLocaleContext } from '@/contexts/LocaleContext';

/**
 * UpdateHtmlLang updates the <html> element's lang attribute to match the current locale.
 * This is important for accessibility and SEO in a statically exported site.
 *
 * @returns null
 */
export function UpdateHtmlLang(): null {
	const { locale } = useLocaleContext();

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	return null;
}
