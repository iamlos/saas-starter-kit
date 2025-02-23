import { useTranslation } from 'next-i18next';
import { Card } from 'react-daisyui';
import { NextSeo } from 'next-seo';
<>
    <NextSeo
      title="OneTapRecuit - Get Recruited Faster with Ai."
      description="Athletic College Recuitment on Autopilot with Ai."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://onetaprecruit.com/',
        title: "OneTapRecuit - We Get Athletes Recruited.",
        description: 'Athletic College Recuitment on Autopilot with Ai. Get Recruited Faster. No Games. No Hassle. No Stress. It Just Works.',
        images: [
          {
            url: 'https://onetaprecruit.com/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'OneTapRecuit - Ai Platform for Athletic College Recruitments.',
            type: 'image/jpeg',
          },
          {
            url: 'https://onetaprecruit.com/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Get Recruited Faster with Ai.',
            type: 'image/jpeg',
          },
          { url: 'https://onetaprecruit.com/og-image-03.jpg' },
          { url: 'https://onetaprecruit.com/og-image-04.jpg' },
        ],
        siteName: 'OneTapRecruit Ai',
      }}
      twitter={{
        handle: '@onetaprecruit',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <p>Athletic College Recuitment on Autopilot with Ai. Get Recruited Faster. No Games. No Hassle. No Stress. It Just Works.</p>
  </>

import faqs from './data/faq.json';

const FAQSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-6">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-bold text-center normal-case">
          {t('frequently-asked')}
        </h2>
        <p className="text-xl text-center">
        We Answer Your Athletic College Recuitment Questions.<br></br> No Games. No Hassle. No Stress. It Just Works.
        </p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-2">
            {faqs.map((faq, index) => {
              return (
                <Card key={index} className="border-none">
                  <Card.Body className="border border-gray-300 items-left dark:border-gray-200">
                    <Card.Title tag="h2">Q. {faq.question}</Card.Title>
                    <p>A. {faq.answer}</p>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
};

export default FAQSection;
