'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

/**
 * UpdateMetadata Component.
 *
 * @remarks
 * A client-side component that updates the document’s title and meta description based on the current translations.
 * This ensures that page metadata is properly localized.
 *
 * @returns null
 *
 * @example
 * ```tsx
 * // Include within your layout to dynamically update metadata.
 * <UpdateMetadata />
 * ```
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
