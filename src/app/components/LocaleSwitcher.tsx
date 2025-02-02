'use client';

import React, {useState, useRef, useEffect, useCallback, JSX} from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { DEFAULT_LOCALE } from '@/constants/locale.const';
import { LOCALES_INFO } from '@/constants/locales.config';
import { Locale } from '@/constants/enums/locale.enum';
import { normalizeLocale } from '@/lib/i18n/nextIntlConfig';
import { setStoredLocale } from '@/lib/i18n/localeStorage';

/**
 * LocaleSwitcher Component.
 *
 * @remarks
 * Provides a dropdown UI for switching the application’s locale. It handles URL updates, persists the
 * selected locale in localStorage, and uses keyboard navigation for accessibility.
 *
 * @returns A JSX.Element rendering a button that toggles a locale selection dropdown.
 */
export function LocaleSwitcher(): JSX.Element {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const t = useTranslations();

	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const listboxRef = useRef<HTMLUListElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const rawLocale = searchParams.get('locale');
	const currentCode: Locale = rawLocale ? normalizeLocale(rawLocale) : DEFAULT_LOCALE;
	const currentLocaleInfo =
		LOCALES_INFO.find((info) => info.code === currentCode) || LOCALES_INFO[0];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	useEffect(() => {
		if (isOpen) {
			const currentIndex = LOCALES_INFO.findIndex((info) => info.code === currentCode);
			setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
			requestAnimationFrame(() => {
				listboxRef.current?.focus();
			});
		}
	}, [isOpen, currentCode]);

	const handleSelect = useCallback(
		(locale: Locale) => {
			setIsOpen(false);
			setStoredLocale(locale);
			const params = new URLSearchParams(searchParams.toString());
			params.set('locale', locale);
			router.push(`${pathname}?${params.toString()}`);
		},
		[router, pathname, searchParams]
	);

	const toggleDropdown = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const getOptionClickHandler = useCallback(
		(code: Locale) => () => handleSelect(code),
		[handleSelect]
	);

	const getOptionMouseEnterHandler = useCallback(
		(index: number) => () => setActiveIndex(index),
		[]
	);

	const handleListboxKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
		const maxIndex = LOCALES_INFO.length - 1;
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
		} else if (event.key === 'Enter') {
			event.preventDefault();
			const selectedLocale = LOCALES_INFO[activeIndex].code;
			handleSelect(selectedLocale);
			buttonRef.current?.focus();
		} else if (event.key === 'Escape') {
			event.preventDefault();
			setIsOpen(false);
			buttonRef.current?.focus();
		}
	};

	const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (['ArrowDown', 'Enter', ' '].includes(event.key)) {
			event.preventDefault();
			setIsOpen(true);
		}
	};

	return (
		<div ref={containerRef} className="relative inline-block">
			<button
				type="button"
				ref={buttonRef}
				onClick={toggleDropdown}
				onKeyDown={handleButtonKeyDown}
				className="flex items-center space-x-2 p-2 border rounded focus:outline-none focus:ring"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<currentLocaleInfo.Icon />
				<span>{t(currentLocaleInfo.translationKey)}</span>
			</button>

			{isOpen && (
				<ul
					ref={listboxRef}
					role="listbox"
					tabIndex={0}
					aria-activedescendant={`locale-option-${LOCALES_INFO[activeIndex].code}`}
					onKeyDown={handleListboxKeyDown}
					className="mt-2 border rounded shadow-lg bg-white dark:bg-gray-800 absolute z-10 w-full text-gray-900 dark:text-gray-100"
				>
					{LOCALES_INFO.map((localeInfo, index) => (
						<li
							key={localeInfo.code}
							id={`locale-option-${localeInfo.code}`}
							role="option"
							aria-selected={localeInfo.code === currentCode}
							onClick={getOptionClickHandler(localeInfo.code)}
							onMouseEnter={getOptionMouseEnterHandler(index)}
							className={`flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
								index === activeIndex ? 'bg-gray-100 dark:bg-gray-700 font-bold' : ''
							}`}
						>
							<localeInfo.Icon />
							<span>{t(localeInfo.translationKey)}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
