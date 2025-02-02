'use client';

import React, { useState, useCallback } from 'react';

/**
 * Custom hook to manage keyboard navigation for listbox components.
 *
 * @param itemCount - The number of items in the list.
 * @param onSelect - Callback invoked when an item is selected (via Enter key).
 * @param onEscape - Optional callback invoked when Escape is pressed.
 *
 * @returns An object containing the active index, a setter for it, and a keydown handler.
 */
export function useListboxNavigation(
	itemCount: number,
	onSelect: (selectedIndex: number) => void,
	onEscape?: () => void
) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLUListElement>) => {
			if (event.key === 'ArrowDown') {
				event.preventDefault();
				setActiveIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				setActiveIndex((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
			} else if (event.key === 'Enter') {
				event.preventDefault();
				onSelect(activeIndex);
			} else if (event.key === 'Escape') {
				event.preventDefault();
				if (onEscape) onEscape();
			}
		},
		[activeIndex, itemCount, onSelect, onEscape]
	);

	return { activeIndex, setActiveIndex, handleKeyDown };
}
