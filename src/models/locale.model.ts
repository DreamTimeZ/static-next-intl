import React from 'react';
import { Locale } from '@/constants/enums/locale.enum';

/**
 * Represents the configuration information for a locale.
 *
 * @interface LocaleInfo
 *
 * @property code - The locale code (e.g., 'en', 'de').
 * @property translationKey - The key used to look up the locale’s translation strings.
 * @property Icon - A React component that renders the locale’s icon.
 *
 * @example
 * ```typescript
 * const englishLocale: LocaleInfo = {
 *   code: Locale.ENGLISH,
 *   translationKey: 'locales.english',
 *   Icon: EnglishIcon,
 * };
 * ```
 */
export interface LocaleInfo {
	code: Locale;
	translationKey: string;
	Icon: React.ComponentType;
}