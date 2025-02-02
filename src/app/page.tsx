'use client';

import React, {JSX} from 'react';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/app/components/LocaleSwitcher';

/**
 * Main Page Component for the application.
 *
 * @remarks
 * This client component renders the homepage with internationalized content and includes a LocaleSwitcher
 * to allow users to change the application language.
 *
 * @returns A JSX element representing the page content.
 *
 * @see {@link https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts}
 */
export default function Page(): JSX.Element {
    const t = useTranslations('app');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
            <p className="mb-4">{t('description')}</p>
            <LocaleSwitcher />
        </div>
    );
}
