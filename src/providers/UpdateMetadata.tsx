'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

/**
 * UpdateMetadata dynamically sets the document title and meta description based on translations.
 * This helps with SEO and provides localized metadata.
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
