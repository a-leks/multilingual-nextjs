# Multilingual Next.js Boilerplate with next-intl

This project is a multilingual web application built using **Next.js** and **next-intl** for internationalization. It supports dynamic loading of translation files for both pages and components, making it easy to extend the app without manually updating routing logic. The project currently supports three languages and can be extended further.

## Table of Contents
- [Overview](#overview)
- [Internationalization Setup](#internationalization-setup)
- [Folder Structure](#folder-structure)
- [Adding New Translations](#adding-new-translations)
- [Example Translation Files](#example-translation-files)
- [Usage Examples](#usage-examples)
- [Running the Project](#running-the-project)
- [Adding or Changing Locales](#adding-or-changing-locales)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Continuous Integration and Deployment](#continuous-integration-and-deployment)
- [Known Issues and Troubleshooting](#known-issues-and-troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project uses **next-intl** for managing translations across pages and components. It dynamically loads the appropriate translation files based on the locale and provides a flexible structure for easily managing translations. Additionally, **Tailwind CSS** is used for styling, and **ShadCN** is integrated for UI components, providing a robust foundation for rapid development and consistent design.

### Features:
- **Dynamic Translation Loading**: Translations for both pages and components are automatically loaded from JSON files.
- **Easy to Add New Languages**: To add a new language, just add new translation files to the appropriate directories.
- **Graceful Fallbacks**: If translation files are missing, the app logs a warning and continues without crashing.
- **Extensible Structure**: New pages, components, or translations can be added without updating the routing logic.
- **Tailwind CSS for Styling**: A utility-first CSS framework that allows for rapid UI development with a responsive and mobile-first design approach.
- **ShadCN for UI Components**: ShadCN provides a set of accessible, customizable, and composable components for building modern UIs with ease.

## Internationalization Setup

This project is designed to support multiple languages dynamically, with translation files stored in structured JSON format. The application automatically detects the user's locale and loads the appropriate translation files from the `messages` directory.

### Supported Locales:
- `en`: English
- `et`: Estonian
- `ru`: Russian

## Folder Structure

Translations are organized under the `messages` directory, with separate subdirectories for **global**, **pages**, and **components**.

```
messages
├── global
│   ├── en.json
│   ├── et.json
│   └── ru.json
├── pages
│   ├── HomePage
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
│   ├── AboutPage
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
├── components
│   ├── navbar
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
│   ├── footer
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
```

## Adding New Translations

### 1. Adding a New Page

To add translations for a new page (e.g., `ContactPage`):
1. Create a new folder under `messages/pages` named `ContactPage`.
2. Add translation files for each locale:

```
messages
├── pages
│   ├── ContactPage
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
```

3. Each JSON file should include the necessary keys and translations for that page.

**Example `ContactPage/en.json`:**
```json
{
  "title": "Contact Us",
  "description": "Get in touch with us via the form below."
}
```

### 2. Adding a New Component

To add translations for a new component (e.g., `header`):
1. Create a new folder under `messages/components` named `header`.
2. Add translation files for each locale:

```
messages
├── components
│   ├── header
│   │   ├── en.json
│   │   ├── et.json
│   │   └── ru.json
```

3. Each JSON file should include the necessary keys and translations for that component.

**Example `header/en.json`:**
```json
{
  "welcomeMessage": "Welcome to our website"
}
```

## Example Translation Files

### HomePage Example (`HomePage/en.json`)
```json
{
  "title": "Welcome to the homepage",
  "about": "Learn more about us"
}
```

### Navbar Component Example (`navbar/en.json`)
```json
{
  "menu": {
    "home": "Home",
    "about": "About"
  }
}
```

## Usage Examples

### 1. Loading Translations in a Page

When creating a new page (e.g., `HomePage`), translations are loaded dynamically based on the current locale:

```javascript
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
    </div>
  );
}
```

### 2. Loading Translations in a Component

Similarly, for components (e.g., `navbar`), translations are loaded based on the component name and locale:

```javascript
import { useTranslations } from 'next-intl';
import { Link } from 'next/link';

export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t('menu.home')}</Link>
        </li>
        <li>
          <Link href="/about">{t('menu.about')}</Link>
        </li>
      </ul>
    </nav>
  );
}
```

## Running the Project

1. Clone the repository:
```bash
git clone https://github.com/a-leks/multilingual-nextjs.git
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

4. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Adding or Changing Locales

To add a new locale or change an existing one, update the `routing.ts` file. The locale must be added to the `locales` array:

```typescript
import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'et', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);
```

Additionally, you need to add the corresponding translation files in the `messages` folder. For example, to add `fr` (French):
1. Add `fr.json` in the appropriate directories under `messages` (e.g., `messages/global/fr.json`, `messages/pages/HomePage/fr.json`).
2. Update the `routing.ts` to include `'fr'` in the `locales` array.

## Development Guidelines

When contributing to this project, ensure the following:
- Follow the ESLint rules configured in the project (`.eslintrc.json`).
- Follow the folder structure and naming conventions for adding new pages, components, or translations.
- Use the `useTranslations` hook from `next-intl` for loading translations in both pages and components.
- For translations, make sure all language files are updated (e.g., `en.json`, `et.json`, `ru.json`, etc.).

### Running Linting
Before submitting any PR, ensure your code passes ESLint:
```bash
npm run lint
```

This will check for any syntax or formatting issues in your code.

## Testing

To ensure that everything works as expected, run the tests before submitting any code changes.

### Running Unit Tests
```bash
npm run test
```

## Continuous Integration and Deployment

This project uses **GitHub Actions** for continuous integration and automatic deployment to **Netlify**.

### GitHub Actions
The CI pipeline automatically runs the following checks:
- **Linting**: Runs ESLint to ensure code quality.
- **Build**: Builds the project to catch any build-time errors.

## Known Issues and Troubleshooting

### Issue: Translations not loading properly
**Solution**: Ensure that the locale is added in `routing.ts` and the corresponding translation files exist in the `/messages` folder.

### Issue: CSS styles not applying correctly
**Solution**: Ensure that Tailwind CSS is properly set up by checking the `tailwind.config.ts`

 and making sure the content paths are correct.

## Contributing

We welcome contributions to improve this project! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and ensure they pass the linter.
4. Submit a pull request with a detailed description of your changes.

For more details, see the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
