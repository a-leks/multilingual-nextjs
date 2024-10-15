import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client side based on the locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class">
            <div suppressHydrationWarning={true}>
              <Navbar /> {/* Include Navbar */}
              {children} {/* Render the rest of the content */}
            </div>
          </ThemeProvider>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
