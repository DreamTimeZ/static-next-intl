'use client';

import React, { useState, useCallback, useRef, JSX } from 'react';
import { useTranslations } from 'next-intl';
import { LOCALES_INFO } from '@/constants/locales.config';
import { useLocaleContext } from '@/contexts/LocaleContext';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Listbox } from './Listbox';
import { Locale } from '@/constants/enums/locale.enum';
import { ListboxItem } from '@/props/components/listbox.props';

/**
 * A drop-down locale switcher component.
 *
 * @remarks
 * Displays a button that, when clicked, reveals a listbox allowing the user to switch locales.
 * Clicks outside the component close the listbox.
 * Selected locale is stored in context via {@link useLocaleContext}.
 *
 * @returns A JSX element containing the switcher UI.
 */
export function LocaleSwitcher(): JSX.Element {
	const { locale, setLocale } = useLocaleContext();
	const t = useTranslations();

	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	useClickOutside(containerRef, () => setIsOpen(false));

	// Prepare items for the listbox
	const items: ListboxItem[] = LOCALES_INFO.map((info) => ({
		code: info.code,
		label: t(info.translationKey),
		Icon: info.Icon,
	}));

	const currentIndex = items.findIndex((item) => item.code === locale);

	const toggleDropdown = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const handleSelectAction = useCallback(
		(selectedIndex: number) => {
			const selectedCode = items[selectedIndex].code as Locale;
			setLocale(selectedCode);
			setIsOpen(false);
		},
		[items, setLocale]
	);

	const handleEscapeAction = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<div ref={containerRef} className="relative inline-block">
			<button
				type="button"
				onClick={toggleDropdown}
				className="flex items-center space-x-2 p-2 border rounded
                   focus:outline-none focus:ring"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				{/* Safely show the current icon & label using the pattern below. */}
				{(() => {
					const CurrentIcon = items[currentIndex]?.Icon;
					return CurrentIcon ? <CurrentIcon /> : null;
				})()}
				<span>{items[currentIndex]?.label}</span>
			</button>

			<Listbox
				isOpen={isOpen}
				items={items}
				activeIndex={currentIndex}
				onSelectAction={handleSelectAction}
				onEscapeAction={handleEscapeAction}
			/>
		</div>
	);
}
