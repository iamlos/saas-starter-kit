import Link from 'next/link';
import { type ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout } from 'types';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FAQSection from '@/components/defaultLanding/FAQSection';
import HeroSection from '@/components/defaultLanding/HeroSection';
import LogoSection from '@/components/defaultLanding/LogoSection';
import FeatureSection from '@/components/defaultLanding/FeatureSection';
import PricingSection from '@/components/defaultLanding/PricingSection';
import ComparisonSection from '@/components/defaultLanding/ComparisonSection';
import DecoBlockBorder from '@/components/defaultLanding/iconSection';
import DecoLine from '@/components/defaultLanding/DecoLine';
import useTheme from 'hooks/useTheme';
import env from '@/lib/env';
import Head from 'next/head';
import DashboardShowcase from '@/components/defaultLanding/DashboardShowcase';
import TestimonialTop from '@/components/defaultLanding/TestimonialTop';
import TestimonialShowcase from '@/components/defaultLanding/TestimonialShowcase';
import TestimonialsSection from '@/components/defaultLanding/TestimonialsSection';
import HowItWorks from '@/components/defaultLanding/HowItWorks';
import EduScholarshipSection from '@/components/defaultLanding/EduScholarshipSection';
import ComplianceFooter from '@/components/compliance/Footer';
import PartnerFooter from '@/components/defaultLanding/PartnerFooter';

const Home: NextPageWithLayout = () => {
  const { toggleTheme, selectedTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('homepage-title')}</title>
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: '#10111D' }}>
        <div className="container mx-auto">
          <div className="px-6 py-4 bg-transparent navbar sm:px-1">
            <div className="flex-1">
              <Link href="/" className="text-xl normal-case">
                {t('company-name')}
              </Link>
            </div>
            <div className="flex-none">
             <ul className="flex gap-2 items-center menu menu-horizontal sm:gap-4">
                {env.darkModeEnabled && (
                  <li>
                    <button
                      className="flex justify-center items-center p-0 bg-none rounded-lg"
                      onClick={toggleTheme}
                    >
                      <selectedTheme.icon className="w-5 h-5" />
                    </button>
                  </li>
                )}
                <li>
                  <Link
                    href="/auth/join"
                    className="px-2 py-3 text-white btn btn-primary btn-md sm:px-4"
                  >
                    {t('sign-up')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/login"
                    className="px-2 py-3 btn btn-primary dark:border-zinc-600 dark:border-2 dark:text-zinc-200 btn-outline sm:px-4 btn-md"
                  >
                    {t('sign-in')}
                  </Link>
                </li>
              </ul> 
            </div>
          

          </div>
          <HeroSection />
          <DecoLine />
          {/* <TestimonialTop /> */}
          <DecoLine />
          <DashboardShowcase />

          <DecoLine />
          <LogoSection />
          <DecoLine />
          <HowItWorks />
          <DecoLine />
          <EduScholarshipSection />
          <DecoLine />
          <FeatureSection />
          <DecoLine />
          {/* <TestimonialShowcase /> */}
          
          <DecoLine />
          {/* <PricingSection /> */}
          <ComparisonSection />
          <DecoLine />
          {/* <TestimonialsSection/> */}
          <div className="divider"></div>
          {/* <FAQSection /> */}
         
        </div>
      </div>
      <ComplianceFooter />
      
      <PartnerFooter />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Redirect to login page if landing page is disabled
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;
