'use client';

import React, { useState, useCallback } from 'react';

/**
 * A custom hook for managing keyboard navigation in a listbox.
 *
 * @remarks
 * - Supports wrapping around items when navigating up/down.
 * - Calls `onSelect` when the Enter key is pressed.
 * - Calls `onEscape` (if provided) when the Escape key is pressed.
 *
 * @param itemCount - The total number of items in the list.
 * @param onSelect - Invoked when an item is selected with the Enter key.
 * @param onEscape - (Optional) Invoked when the Escape key is pressed.
 *
 * @returns An object containing:
 *  - `activeIndex`: The current focused index in the list.
 *  - `setActiveIndex`: Setter for manually changing the active index.
 *  - `handleKeyDown`: A keydown event handler to manage keyboard interactions.
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
