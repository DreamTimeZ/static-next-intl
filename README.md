# Static Next.js + next-intl Example

This project demonstrates how to build a **statically-exported** Next.js application (`output: export`) with
multilingual support via [**next-intl**](https://github.com/amannn/next-intl). It also features:

- **TypeScript** for type safety
- **Tailwind CSS** and custom SCSS for styling
- **React Context** to manage the selected locale
- **Locale storage** in `localStorage`

## Quick Overview

- The project is configured so that **Next.js** exports a static site (rather than using server-side rendering).
- It uses **next-intl** for handling translations, providing an `IntlProvider` per locale.
- There’s a **LocaleSwitcher** component allowing users to switch between English and German, with locale preferences
  saved to `localStorage`.

## Getting Started

1. **Install Dependencies**

   ```bash
   pnpm install
   ```
   <sup>_Uses `pnpm`, but any package manager would work._</sup>

2. **Run in Development Mode**

   ```bash
   pnpm dev
   ```
   This starts a local dev server on [http://localhost:3000](http://localhost:3000).

3. **Build and Start**

   ```bash
   pnpm build
   pnpm start
   ```
   - `next build` generates static HTML files under the `out/` directory.
   - `next start` starts the application from the `out/` dir.

## Tips & Notes

1. **Locale Detection**  
   In this example, the locale is fetched from `localStorage` or falls back to the browser language. Adapt the logic
   to match your project requirements.

2. **Adding New Locales/Languages**
   - Naming: Locale used (instead of language) to make it scalable for later changes to a real locale like 'en-GB'.
   - Extend `Locale.enum.ts` for the new locale (e.g., `fr`).
   - Add the corresponding JSON translations in `@messages/`.
   - Update `messagesMap` in `nextIntlConfig.ts` to map the new locale to its messages.
   - Add a new icon and entry in `locales.config.ts`.

3. **SEO & Accessibility**  
   - The `<html lang>` attribute is dynamically updated for better accessibility and SEO.
   - `UpdateMetadata` modifies the `<title>` and `<meta name="description">` for each locale.

4. **Styling**  
   - **Tailwind** is used for utility classes.
   - **SCSS** is used for global styling (`globals.scss`) and can be extended for custom themes or overrides.

Feel free to customize any part of the code to suit your needs!
