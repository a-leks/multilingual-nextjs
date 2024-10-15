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

This project is designed to support multiple languages dynamically, with translation files stored in structured JSON format. The folder structure for translations is separated into **global**, **pages**, and **components**.

The application automatically detects the user's locale and loads the appropriate translation files from the `messages` directory.

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

- **Global**: Contains translations that are used globally across the app (e.g., shared strings like button texts).
- **Pages**: Each page has its own subdirectory under `pages`, with locale-specific JSON files (e.g., `HomePage/en.json`, `AboutPage/ru.json`).
- **Components**: Each component has its own subdirectory under `components`, with locale-specific JSON files (e.g., `navbar/en.json`, `footer/et.json`).

### How It Works

1. **Dynamic Page and Component Translation**: The app automatically detects the current locale and loads the appropriate translation files for the page and component being rendered.
2. **Graceful Fallback**: If a translation file is missing, the system will log a warning and continue with an empty translation object, preventing the app from crashing.

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
git clone https://github.com/your-username/your-repo.git
cd your-repo
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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
