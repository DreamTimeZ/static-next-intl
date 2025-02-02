import {Locale} from '@/constants/enums/locale.enum';

export interface LocaleContextProps {
	locale: Locale;
	setLocale: (locale: Locale, updateUrl?: boolean) => void;
}