import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/app/components/Navbar'; // Import Navbar component

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <div suppressHydrationWarning={true}>
          <Navbar /> {/* Include Navbar */}
          {children} {/* Render the rest of the content */}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
