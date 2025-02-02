'use client';

import React, {JSX} from 'react';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/app/components/LocaleSwitcher';

/**
 * The main application page.
 *
 * @remarks
 * This client component renders localized text via {@link useTranslations},
 * and includes a {@link LocaleSwitcher} for changing the application's language.
 *
 * @returns A JSX element representing the home page content.
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
