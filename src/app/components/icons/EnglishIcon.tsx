import React, {JSX} from 'react';

/**
 * EnglishIcon Component.
 *
 * @remarks
 * Renders an SVG icon representing the English flag. Used as part of the locale selection UI.
 *
 * @param props - Standard SVG properties.
 * @returns A JSX element rendering the English flag icon.
 *
 * @example
 * ```tsx
 * import { EnglishIcon } from './icons/EnglishIcon';
 * <EnglishIcon className="w-6 h-6" />
 * ```
 */
export function EnglishIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 60 30"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			{...props}
		>
			<rect width="60" height="30" fill="#012169" />
			<line x1="0" y1="0" x2="60" y2="30" stroke="white" strokeWidth="6" />
			<line x1="60" y1="0" x2="0" y2="30" stroke="white" strokeWidth="6" />
			<line x1="0" y1="0" x2="60" y2="30" stroke="#C8102E" strokeWidth="4" />
			<line x1="60" y1="0" x2="0" y2="30" stroke="#C8102E" strokeWidth="4" />
			<rect x="27" y="0" width="6" height="30" fill="white" />
			<rect x="0" y="12" width="60" height="6" fill="white" />
			<rect x="29" y="0" width="2" height="30" fill="#C8102E" />
			<rect x="0" y="14" width="60" height="2" fill="#C8102E" />
		</svg>
	);
}
