import React, {JSX} from 'react';

/**
 * GermanIcon Component.
 *
 * @remarks
 * Renders an SVG icon representing the German flag. Used as part of the locale selection UI.
 *
 * @param props - Standard SVG properties.
 * @returns A JSX element rendering the German flag icon.
 *
 * @example
 * ```tsx
 * import { GermanIcon } from './icons/GermanIcon';
 * <GermanIcon className="w-6 h-6" />
 * ```
 */
export function GermanIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			{...props}
		>
			<rect width="64" height="21.33" y="0" fill="#000" />
			<rect width="64" height="21.33" y="21.33" fill="#dd0000" />
			<rect width="64" height="21.33" y="42.66" fill="#ffce00" />
		</svg>
	);
}
