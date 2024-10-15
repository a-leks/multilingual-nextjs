import { useTranslations } from 'next-intl';

export default function Template() {
  const t = useTranslations('template');

  return (
    <div className="mt-14 mb-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 shadow-lg rounded-md">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <p className="mt-2">{t('text')}</p>
      <a
        href="/about"
        className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        {t('about')}
      </a>
    </div>
  );
}
