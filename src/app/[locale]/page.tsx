import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit recusandae quidem iure voluptatibus omnis officiis quos, sequi corrupti ad quia illo facilis suscipit, corporis, perferendis voluptas cupiditate? Ratione, iste dolor.</p>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
