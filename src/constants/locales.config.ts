import { Locale } from '@/constants/enums/locale.enum';
import { EnglishIcon } from '@/app/components/icons/EnglishIcon';
import { GermanIcon } from '@/app/components/icons/GermanIcon';
import { LocaleInfo } from '@/models/locale.model';

/**
 * Locales Configuration.
 *
 * @remarks
 * Provides the configuration details for each supported locale, including the locale code,
 * the translation key, and the associated icon component.
 *
 * @example
 * ```typescript
 * import { LOCALES_INFO } from '@/constants/locales.config';
 * console.log(LOCALES_INFO);
 * ```
 */
export const LOCALES_INFO: LocaleInfo[] = [
	{
		code: Locale.ENGLISH,
		translationKey: 'locales.english', // key in the translation file for English
		Icon: EnglishIcon,
	},
	{
		code: Locale.GERMAN,
		translationKey: 'locales.german', // key in the translation file for German
		Icon: GermanIcon,
	},
];
