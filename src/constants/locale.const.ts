import { Locale } from '@/constants/enums/locale.enum';
import { Timezone } from 'use-intl';

/**
 * Locale Constants.
 *
 * @remarks
 * Defines the fallback locale, timezone, and supported locales used in the application.
 *
 * @constant DEFAULT_LOCALE - The fallback locale when no other locale is determined.
 * @constant DEFAULT_TIMEZONE - The fallback timezone.
 * @constant SUPPORTED_LOCALES - An array of supported locale codes.
 *
 * @example
 * ```typescript
 * import { DEFAULT_LOCALE } from '@/constants/locale.const';
 * console.log(DEFAULT_LOCALE);
 * ```
 */

export const DEFAULT_LOCALE: Locale = Locale.GERMAN;

export const DEFAULT_TIMEZONE: Timezone = 'Europe/Berlin';

export const SUPPORTED_LOCALES: Locale[] = Object.values(Locale);
