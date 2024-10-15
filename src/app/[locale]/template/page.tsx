import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Template from '@/app/components/Template';

export default function TemplatePage() {
  const t = useTranslations('TemplatePage');

  return (
    <div>
      <Template />
      <h1>{t('title')}</h1>
      <p>{t('text')}</p>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
