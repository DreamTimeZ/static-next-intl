'use client';

import { useEffect } from 'react';
import { useLocale } from '@/lib/i18n/nextIntlConfig';

/**
 * UpdateHtmlLang Component.
 *
 * @remarks
 * A client-side component that updates the `<html>` element’s `lang` attribute according to the current locale.
 * This is essential for accessibility, SEO, and ensuring that assistive technologies read the correct language.
 *
 * @returns null
 *
 * @example
 * ```tsx
 * // Include in your layout to dynamically update the HTML language attribute.
 * <UpdateHtmlLang />
 * ```
 */
export function UpdateHtmlLang(): null {
	const locale = useLocale();

	useEffect(() => {
		// Update the lang attribute on the <html> element
		document.documentElement.lang = locale;
	}, [locale]);

	return null;
}
