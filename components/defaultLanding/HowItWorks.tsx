import { howItWorksData } from './data/howItWorks';
import { CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, FunnelIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const iconMap = {
  dollar: CurrencyDollarIcon,
  phone: PhoneIcon,
  envelope: EnvelopeIcon,
  funnel: FunnelIcon,
  arrows: ArrowsRightLeftIcon
};

const HowItWorks = () => {
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
          <h2 className="text-2xl font-bold text-white lg:text-4xl sm:text-md md:font-bold">
            {howItWorksData.mainTitle}{' '}
            <br/><span className="text-[#56F699] sm:text-md md:font-bold">{howItWorksData.highlight}</span>
          </h2>
        </div>

        <div className="space-y-24 lg:border-l border-opacity-60 border-[#00FF79] text-xl">
          {howItWorksData.steps.map((step) => (
            <div key={step.id} className="mx-auto space-y-8 max-w-4xl">
              <div className="inline-block px-4 py-2 bg-[#1A1B23] rounded-md">
                <span className=" text-[#00FF79]">Step {step.id}</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl text-white lg sm:text-md md:font-bold">{step.title}</h3>
                <p className="text-2xl sm:text-md text-[#A3A6C2]">{step.subtitle}</p>
                <p className="text-xl text-[#A3A6C2]/80">{step.description}</p>
              </div>

              {step.metrics && (
                <div className="grid grid-cols-4 gap-8 md:gap-4">
                  {step.metrics.map((metric, index) => {
                    const Icon = iconMap[metric.icon as keyof typeof iconMap];
                    return (
                      <div key={index} className="text-sm text-center lg:text-md">
                        <div className="inline-block p-4 bg-[#1A1B23] rounded-lg mb-2">
                          <Icon className="w-8 h-8 text-[#00FF79]" />
                        </div>
                        <p className="#A3A6C2">{metric.label}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {step.stats && (
                <div className="text-center">
                  {step.stats.map((stat, index) => (
                    <div key={index}>
                      <span className="text-[#00FF79] text-3xl font-bold">{stat.value}</span>
                      <span className="ml-2 text-xl font-bold text-white sm:text-md md:font-bold">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {step.image && (
                <div className="mt-8">
                  <Image
                    src={step.image}
                    alt={`Step ${step.id} visualization`}
                    width={1200}
                    height={600}
                    unoptimized={true}
                    className="w-full rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;