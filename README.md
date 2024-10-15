# Multilingual Next.js Boilerplate with next-intl

This project is a multilingual web application built using **Next.js** and **next-intl** for internationalization. It dynamically loads translation files for pages and components, and uses **Tailwind CSS** and **ShadCN** for styling and UI components. The project currently supports three languages (English, Estonian, and Russian) but can be extended easily.

## Table of Contents
- [Overview](#overview)
- [Internationalization Setup](#internationalization-setup)
- [Folder Structure](#folder-structure)
- [Adding New Translations](#adding-new-translations)
- [Adding a New Locale](#adding-a-new-locale)
- [Component Examples](#component-examples)
- [Running the Project](#running-the-project)
- [License](#license)

## Overview

This project uses **next-intl** to manage translations across pages and components. It dynamically loads appropriate translation files based on the user’s locale and provides a flexible structure for easily managing translations. Additionally, **Tailwind CSS** is used for styling, and **ShadCN** for UI components, providing a foundation for rapid development and consistent design.

### Key Features:
- **Dynamic Translation Loading**: Both page and component translations are dynamically loaded from JSON files.
- **Simple to Extend**: Adding new languages, pages, or components is straightforward.
- **Graceful Fallbacks**: Missing translation files won't break the app; warnings are logged instead.
- **Integrated UI Components**: Components from **ShadCN** provide accessible and composable building blocks for modern UIs.
- **Theme Toggle Support**: Built-in support for light/dark themes with a toggle switch that remembers the user's choice.

### Supported Locales:
- `en`: English
- `et`: Estonian
- `ru`: Russian

## Internationalization Setup

Internationalization (i18n) is handled through **next-intl**. The project uses dynamic imports to load translation files based on the user's locale. Translation files for both **pages** and **components** are placed in the `/messages` folder.

## Folder Structure

```bash
├── messages
│   ├── components
│   │   ├── navbar
│   │   │   ├── en.json
│   │   │   ├── et.json
│   │   │   └── ru.json
│   │   ├── footer
│   │   │   ├── en.json
│   │   │   ├── et.json
│   │   │   └── ru.json
│   ├── pages
│   │   ├── HomePage
│   │   │   ├── en.json
│   │   │   ├── et.json
│   │   │   └── ru.json
│   │   ├── AboutPage
│   │   │   ├── en.json
│   │   │   ├── et.json
│   │   │   └── ru.json
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   └── [locale]
│   │       ├── about
│   │       └── HomePage
```

### How It Works

1. **Dynamic Page and Component Translation**: The app automatically detects the current locale and loads the appropriate translation files for the page and components.
2. **Language Toggling**: Users can switch between supported languages via a dropdown in the navigation bar.
3. **Graceful Fallback**: Missing translation files log a warning but don't crash the app.

## Adding New Translations

### 1. Adding a New Page

To add a new page translation (e.g., `ContactPage`):
1. Create a new folder under `messages/pages` named `ContactPage`.
2. Add the required JSON translation files:

```bash
messages
├── pages
│   ├── ContactPage
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
```

3. Example `ContactPage/en.json`:

```json
{
  "title": "Contact Us",
  "description": "Feel free to reach out using the form below."
}
```

### 2. Adding a New Component

For a new component (e.g., `header`):
1. Create a new folder under `messages/components` named `header`.
2. Add the required JSON translation files:

```bash
messages
├── components
│   ├── header
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
```

3. Example `header/en.json`:

```json
{
  "welcome": "Welcome to our website"
}
```

## Adding a New Locale

To add a new language to the project, you will need to update a few parts of the codebase:

### 1. Update `routing.ts`

In `routing.ts`, add the new locale to the `locales` array and adjust the default locale if necessary:

```tsx
import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'et', 'ru', 'new-locale'], // Add your new locale here
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
```

### 2. Create Translation Files

For the new locale to be reflected in the app, you need to create the corresponding translation files in the `/messages` folder for both **pages** and **components**. Each translation file should follow the naming convention of the locale code.

Example: If you’re adding a locale for `es` (Spanish), create the following structure:

```bash
messages
├── components
│   ├── navbar
│   │   ├── es.json
│   ├── footer
│   │   ├── es.json
├── pages
│   ├── HomePage
│   │   ├── es.json
│   ├── AboutPage
│   │   ├── es.json
```

Each `es.json` file should contain the translated strings for that specific locale.

Example `navbar/es.json`:
```json
{
  "menu": {
    "home": "Inicio",
    "about": "Acerca de"
  }
}
```

### 3. Update Any Language-Specific Logic (Optional)

If your app includes any locale-specific logic (such as date formatting or currency display), make sure to update those sections to handle the new locale appropriately.

### 4. Test the Locale

After adding the locale in `routing.ts` and the translation files in `messages`, run the project and switch to the new locale using the language toggler to verify that everything works as expected.

### Summary of Changes Needed:
- Add the locale to `routing.ts`.
- Create the appropriate translation files in `messages`.
- Adjust any locale-specific logic in the project (if applicable).



## Component Examples

### Minimal Component Example

Here’s an example of a minimal component using translations. This serves as a template for how translations are loaded dynamically:

```tsx
import { useTranslations } from 'next-intl';

export default function MinimalComponent() {
  const t = useTranslations('minimal');

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <p>{t('text')}</p>
      <a href="/about" className="text-indigo-600 hover:underline">
        {t('about')}
      </a>
    </div>
  );
}
```

### Navbar with Language & Theme Toggling

The following example shows how translations and theme toggling are handled in the **Navbar** component:

```tsx
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { Link } from '@/i18n/routing';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function Navbar() {
  const t = useTranslations('navbar');
  const { theme, setTheme } = useTheme();
  const locale = useLocale();

  const handleLanguageChange = (lang: string) => {
    // Replace the current language in the URL with the new one
  };

  return (
    <nav className="bg-background/95 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">MultiLingual</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>{locale.toUpperCase()}</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {['en', 'et', 'ru'].map((lang) => (
              <DropdownMenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
                {lang.toUpperCase()}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
      </div>
    </nav>
  );
}
```

## Running the Project

1. Clone the repository:
```bash
git clone https://github.com/yourusername/multilingual-nextjs.git
cd multilingual-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---
