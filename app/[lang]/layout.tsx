import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
} from '@mantine/core';
import { Providers } from '@/components/providers';
import { getLanguagesStaticParams } from '@/i18n/helpers';
import { ReactNode, Suspense } from 'react';
import { I18nProps } from '@/types/types';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { Notifications } from '@mantine/notifications';
import { ROUTES } from '@/constants';
import { TestModeModal } from '@/components/TestModeModal/TestModeModal';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SEO } from '@/seo';
import dynamic from 'next/dynamic';

export const generateStaticParams = getLanguagesStaticParams;

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = SEO.defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const PrivacyBanner = dynamic(
  () => import('@/components/PrivacyBanner/PrivacyBanner')
);
const Affix = dynamic(() => import('@/components/Affix/Affix'));

const RootLayout = async ({ children, params: { lang } }: RootLayoutProps) => {
  return (
    <ClerkProvider
      appearance={{ variables: { colorPrimary: '#e81e95' } }}
      afterSignInUrl={ROUTES.HOME}
      afterSignUpUrl={ROUTES.HOME}
    >
      <html lang={lang} className={inter.className}>
        <head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <ColorSchemeScript />
        </head>
        <body>
          <Providers>
            <AppShell bg={'rgb(6, 1, 17)'} color="grayscaleWhite.0">
              <AppShellHeader
                bg={'transparent'}
                pos={{ base: 'fixed', md: 'fixed' }}
                withBorder={false}
                style={{ boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)' }}
                zIndex={250}
                w={'100%'}
                color="grayscaleWhite.0"
              >
                <Header lang={lang} />
              </AppShellHeader>
              <AppShellMain pos={'relative'}>
                {children}
                <SpeedInsights />
                <Notifications />
                <Suspense fallback={<div>Ładowanie powiadomień...</div>}>
                  <PrivacyBanner lang={lang} />
                  <Affix />
                </Suspense>
              </AppShellMain>
              <AppShellFooter
                bg={'rgb(6, 1, 17)'}
                withBorder={false}
                pos={'static'}
              >
                <Footer lang={lang} />
              </AppShellFooter>
            </AppShell>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
