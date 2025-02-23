import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { galleryImages } from './data/galleryImages';

const DashboardShowcase = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="py-16 w-full card-compact card" style={{ backgroundColor: '#10111D' }} >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">
            {t('company-name')}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
           {t('tagline')}
          </p>
        </div>

        <div className="container mt-12">
          <div className="overflow-x-auto relative">
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative flex-none w-full snap-center first:pl-0 last:pr-0"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout=""
                      width={1200}
                      height={630}
                      className="object-cover rounded-lg drop-shadow-2xl"
                      unoptimized={true}
                      sizes="(max-width: 360px) 90vw, (max-width: 768px) 80vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 justify-center mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#56F699]/30 hover:bg-[#56F699]"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
