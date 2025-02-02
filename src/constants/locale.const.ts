import { Locale } from '@/constants/enums/locale.enum';
import { Timezone } from 'use-intl';

/**
 * Locale constants for the application.
 *
 * @remarks
 * - **DEFAULT_LOCALE**: Fallback locale when none is determined.
 * - **DEFAULT_TIMEZONE**: Fallback timezone for date/time formatting.
 * - **SUPPORTED_LOCALES**: All locales that the application supports.
 *
 * @example
 * ```typescript
 * console.log(DEFAULT_LOCALE); // 'de'
 * ```
 */
export const DEFAULT_LOCALE: Locale = Locale.GERMAN;

/**
 * Default fallback timezone.
 */
export const DEFAULT_TIMEZONE: Timezone = 'Europe/Berlin';

/**
 * An array of supported locale codes.
 */
export const SUPPORTED_LOCALES: Locale[] = Object.values(Locale);
