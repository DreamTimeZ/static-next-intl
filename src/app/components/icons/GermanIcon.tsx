import React, { JSX } from 'react';

/**
 * An SVG icon representing the German flag.
 *
 * @param props - Standard SVG properties passed to the component.
 * @returns A JSX element rendering the German flag icon.
 *
 * @example
 * ```tsx
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
