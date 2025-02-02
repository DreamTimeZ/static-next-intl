# Static Next Intl

A Next.js/React frontend project featuring internationalization and static generation. This project leverages Tailwind
CSS and SCSS for styling, and uses pnpm for efficient dependency management.

---

## Overview

Static Next Intl provides:
- **Internationalization:** Powered by [next-intl](https://github.com/amannn/next-intl) with dynamic locale switching.
- **Static Generation:** Leveraging Next.js capabilities for optimal performance and SEO.
- **Robust Architecture:** Structured with clear separation of concerns—pages, components, constants, libraries, models,
  and providers.
- **Efficient Dependency Management:** Managed with pnpm, offering fast installs and a lightweight node_modules
  structure.

---

## Features

- **Locale Management:**
    - Automatic locale detection from URL, localStorage, or browser settings.
    - A user-friendly locale switcher with custom icons.
    - Dynamic updates to `<html lang="...">` and document metadata for accessibility and SEO.

- **Styling:**
    - Global styles using Tailwind CSS and SCSS.

- **Internationalization:**
    - Easy addition of new locales via configuration files.
    - Translation messages loaded from JSON files.

---

## Prerequisites

- **Node.js:** Version 16 or later.
- **pnpm:** Install globally if not already installed:
  ```text
  npm install -g pnpm
  ```
