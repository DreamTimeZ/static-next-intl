import React, {JSX} from 'react';

/**
 * Renders a 404 "Page Not Found" view.
 *
 * @remarks
 * This component is automatically used by Next.js when a page is not found.
 *
 * @returns A JSX element displaying a not-found message.
 */
export default function NotFoundPage(): JSX.Element {
	return (
		<div>
			<h1>Page Not Found</h1>
		</div>
	);
}
