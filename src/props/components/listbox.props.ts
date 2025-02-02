import React from 'react';

export interface ListboxItem {
	code: string; // For example, a locale code like 'en', 'de'
	label: string;
	Icon?: React.ComponentType; // Optional icon component
}

export interface ListboxProps {
	/**
	 * Whether to show or hide the listbox.
	 */
	isOpen: boolean;

	/**
	 * All items to display in the listbox.
	 */
	items: ListboxItem[];

	/**
	 * Index of the currently active/selected item.
	 */
	activeIndex: number;

	/**
	 * Callback invoked when an item is selected (via click or Enter).
	 * Renamed to 'onSelectAction' to comply with Next.js / ESLint's
	 * naming convention for potential server actions or callback props.
	 */
	onSelectAction: (index: number) => void;

	/**
	 * Callback invoked when user presses Escape (optional).
	 */
	onEscapeAction?: () => void;
}
