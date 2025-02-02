'use client';

import { useEffect } from 'react';
import { useLocaleContext } from '@/contexts/LocaleContext';

/**
 * Updates the `<html>` element's `lang` attribute to the current locale.
 *
 * @remarks
 * Essential for SEO and accessibility in a static site.
 *
 * @returns `null` — this is a side-effect-only component.
 */
export function UpdateHtmlLang(): null {
	const { locale } = useLocaleContext();

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	return null;
}
