import React from 'react';

/**
 * Represents a single item in the listbox.
 */
export interface ListboxItem {
	/**
	 * Unique code representing the item (e.g., a locale code like `'en'`).
	 */
	code: string;
	/**
	 * Display label for the item (e.g., `'English'`).
	 */
	label: string;
	/**
	 * Optional React component for rendering an icon alongside the label.
	 */
	Icon?: React.ComponentType;
}

/**
 * The props for configuring a listbox component.
 */
export interface ListboxProps {
	/**
	 * Whether to display the listbox.
	 */
	isOpen: boolean;

	/**
	 * The list of items to display.
	 */
	items: ListboxItem[];

	/**
	 * The index of the currently active (highlighted) item.
	 */
	activeIndex: number;

	/**
	 * Callback invoked when an item is selected.
	 *
	 * @param index - The index of the selected item.
	 */
	onSelectAction: (index: number) => void;

	/**
	 * Callback invoked when the user presses Escape.
	 */
	onEscapeAction?: () => void;
}
