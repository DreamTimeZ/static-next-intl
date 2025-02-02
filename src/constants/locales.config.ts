import { Locale } from '@/constants/enums/locale.enum';
import { EnglishIcon } from '@/app/components/icons/EnglishIcon';
import { GermanIcon } from '@/app/components/icons/GermanIcon';
import { LocaleInfo } from '@/models/locale.model';

/**
 * Array of configurations for each supported locale.
 *
 * @remarks
 * Each entry includes:
 *  - A locale code of type {@link Locale}
 *  - A translation key used in messages
 *  - An icon component representing the flag
 *
 * @example
 * ```typescript
 * console.log(LOCALES_INFO);
 * // [
 * //   { code: 'en', translationKey: 'locales.english', Icon: [Function EnglishIcon] },
 * //   { code: 'de', translationKey: 'locales.german', Icon: [Function GermanIcon] }
 * // ]
 * ```
 */
export const LOCALES_INFO: LocaleInfo[] = [
	{
		code: Locale.ENGLISH,
		translationKey: 'locales.english',
		Icon: EnglishIcon,
	},
	{
		code: Locale.GERMAN,
		translationKey: 'locales.german',
		Icon: GermanIcon,
	},
];
