import { eduScholarshipData } from './data/eduScholarship';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const EduScholarshipSection = () => {
  return (
    <section 
      className="py-16 w-full" 
      style={{ 
        backgroundColor: '#10111D',
        backgroundImage: 'url(/bg/glow-top.svg)',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-white lg:text-4xl">
            {eduScholarshipData.mainTitle}{' '}
            <span className="text-[#56F699]">{eduScholarshipData.highlight}</span>
          </h2>
        </div>

        <Splide
          options={{
            type: 'slide',
            perPage: 1,
            arrows: true,
            pagination: true,
            drag: false,
            gap: '2rem',
            padding: { left: '10%', right: '10%' },
            classes: {
              arrow: 'splide__arrow !bg-[#56F699]',
              pagination: 'splide__pagination !bottom-[-2rem]',
              page: 'splide__pagination__page !bg-[#56F699]'
            }
          }}
        >
          {eduScholarshipData.sections.map((section) => (
            <SplideSlide key={section.id}>
              <div className="grid gap-8 px-4 lg:grid-cols-2 lg:px-8">
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{section.title}</h3>
                  <p className="text-base text-[#A3A6C2] sm:text-lg">{section.description}</p>
                  {section.features && (
                    <ul className="space-y-3">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#A3A6C2] sm:text-base">
                          <span className="text-[#56F699]">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="order-first lg:order-last">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={1200}
                    height={600}
                    className="w-full rounded-lg"
                    unoptimized={true}
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default EduScholarshipSection;