import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import Footer from '@/components/Shared/PageStructure/Footer';
import Header from '@/components/Shared/PageStructure/Header';
import './globals.scss';
import { getLanguageFromCookies, getThemeFromCookies } from '@/utils/handleCookies';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  const theme = await getThemeFromCookies();
  const locale = await getLanguageFromCookies();

  return (
    <html lang={locale} data-theme={theme} className={theme}>
      <head>
        <title>Lucas Mendonça Portfolio</title>
        <meta name="description" content="My Front-End developer portfolio and info" />
      </head>
      <body className="bg-primary min-h-dvh">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
