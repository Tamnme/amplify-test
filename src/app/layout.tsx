import '@/assets/styles/globals.css';
import '@/assets/styles/themes.css';

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'TAL Apparel',
  description: 'CommerceX - TAL Apparel',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="h-screen w-screen overflow-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
