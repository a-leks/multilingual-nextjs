import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


export default function Template() {
  const t = useTranslations('template');

  return (
    <div className="mt-14 mb-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 shadow-lg rounded-md">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <p className="mt-2">{t('text')}</p>
      <Link href="/about" className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
  {t('about')}
</Link>
    </div>
  );
}
