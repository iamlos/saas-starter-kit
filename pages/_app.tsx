import app from '@/lib/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import colors from 'tailwindcss/colors';
import type { AppPropsWithLayout } from 'types';
import mixpanel from 'mixpanel-browser';

import '@boxyhq/react-ui/dist/style.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import env from '@/lib/env';
import { Theme, applyTheme } from '@/lib/theme';
import { Themer } from '@boxyhq/react-ui/shared';
import { AccountLayout } from '@/components/layouts';
import PublicLayout from '@/components/layouts/PublicLayout';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => {
    // Check if the page is a public route (not requiring auth)
    const isPublicRoute = !Component.requireAuth;
    return isPublicRoute ? (
      <PublicLayout>{page}</PublicLayout>
    ) : (
      page
    );
  });

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
