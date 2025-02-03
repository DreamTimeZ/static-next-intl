'use client';

import React, { useRef, useEffect, JSX } from 'react';
import { useListboxNavigation } from '@/hooks/useListboxNavigation';
import { ListboxProps } from '@/props/components/listbox.props';

/**
 * A configurable listbox component for selecting an item.
 *
 * @remarks
 * This component:
 *  - Uses a list of items passed in via props.
 *  - Handles keyboard navigation (up/down/enter/escape).
 *  - Syncs and displays the currently active item.
 *  - Supports mouse interactions for selection and hover.
 *  - Is only rendered when `isOpen` is true.
 *
 * @param props - The props for configuring the listbox.
 *
 * @returns A JSX element that renders the listbox, or `null` if `isOpen` is false.
 */
export function Listbox({
	                        isOpen,
	                        items,
	                        activeIndex,
	                        onSelectAction,
	                        onEscapeAction,
                        }: Readonly<ListboxProps>): JSX.Element | null {
	const listRef = useRef<HTMLUListElement>(null);

	const { activeIndex: localIndex, setActiveIndex, handleKeyDown } =
		useListboxNavigation(items.length, onSelectAction, onEscapeAction);

	// Sync parent's activeIndex with our localIndex
	useEffect(() => {
		setActiveIndex(activeIndex);
	}, [activeIndex, setActiveIndex]);

	// Focus the <ul> when open
	useEffect(() => {
		if (isOpen) {
			requestAnimationFrame(() => listRef.current?.focus());
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<ul
			ref={listRef}
			role="listbox"
			tabIndex={0}
			onKeyDown={handleKeyDown}
			aria-activedescendant={`listbox-item-${localIndex}`}
			className="absolute z-10 mt-2 w-full border rounded shadow-lg
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
		>
			{items.map((item, index) => {
				const isActive = index === localIndex;
				const CurrentIcon = item.Icon;

				return (
					<li
						key={item.code}
						id={`listbox-item-${index}`}
						role="option"
						aria-selected={isActive}
						onMouseEnter={() => setActiveIndex(index)}
						onClick={() => onSelectAction(index)}
						className={`flex items-center space-x-2 p-2 cursor-pointer
              hover:bg-gray-100 dark:hover:bg-gray-700
              ${isActive ? 'bg-gray-100 dark:bg-gray-700 font-bold' : ''}`}
					>
						{CurrentIcon && <CurrentIcon />}
						<span>{item.label}</span>
					</li>
				);
			})}
		</ul>
	);
}
