'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Dynamically updates document title and meta description based on translations.
 *
 * @remarks
 * - Uses `next-intl` translations for `app.title` and `app.description`.
 * - Creates a `<meta>` element if it doesn't exist.
 *
 * @returns `null` — this is a side-effect-only component.
 */
export function UpdateMetadata(): null {
	const t = useTranslations();

	useEffect(() => {
		document.title = t('app.title');

		let metaDescription = document.querySelector('meta[name="description"]');
		if (!metaDescription) {
			metaDescription = document.createElement('meta');
			metaDescription.setAttribute('name', 'description');
			document.head.appendChild(metaDescription);
		}
		metaDescription.setAttribute('content', t('app.description'));
	}, [t]);

	return null;
}
