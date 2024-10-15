// In src/app/components/Navbar/index.tsx
import { Link } from '@/i18n/routing'; // Import the Link component for routing
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('navbar'); // Use translations for the navbar

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t('home')}</Link> {/* Link to the home page */}
        </li>
        <li>
          <Link href="/about">{t('about')}</Link> {/* Link to the about page */}
        </li>
      </ul>
    </nav>
  );
}
