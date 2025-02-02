import React from 'react';
import { Locale } from '@/constants/enums/locale.enum';

/**
 * Describes the configuration for a locale.
 *
 * @interface LocaleInfo
 *
 * @property code - The locale code (e.g. `'en'`, `'de'`).
 * @property translationKey - The key for retrieving locale strings from translations.
 * @property Icon - A React component for rendering an icon or flag representing the locale.
 */
export interface LocaleInfo {
	code: Locale;
	translationKey: string;
	Icon: React.ComponentType;
}
