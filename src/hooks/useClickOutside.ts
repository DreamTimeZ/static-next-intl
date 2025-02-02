'use client';

import { useEffect, RefObject } from 'react';

/**
 * Custom hook that detects clicks outside of the given element reference.
 *
 * @param ref - A React ref object pointing to the element to detect outside clicks for.
 * @param handler - A callback function invoked when a click occurs outside the referenced element.
 */
export function useClickOutside<T extends HTMLElement>(
	ref: RefObject<T | null>, // Allow null explicitly
	handler: () => void
): void {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			// If ref.current is null, or the click was inside the element, do nothing.
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler();
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
}
