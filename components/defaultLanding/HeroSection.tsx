import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div 
      className="flex relative justify-center items-center min-h-[80vh]" 
      style={{ 
        backgroundColor: '#10111D',
        backgroundImage: 'url(/bg/glow-bottom.svg)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="relative px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            <span className="block">{t('get-recruited')}</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/80 sm:text- md:text-2xl lg:text-3xl">
          {t('kickstart-your-college-recruiting')}
            
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <Link 
              href="/join/get-recruited" 
              className="px-6 py-3 text-lg font-semibold text-white bg-[#56F699] hover:bg-[#56F699]/90 rounded-lg transition-all duration-200"
            >
              {t('get-started')}
            </Link>
          </div>

          <div className="overflow-hidden relative justify-center w-full rounded-lg sm:flex-none">
            <div className="relative aspect-video">
              <iframe 
                src="https://www.facebook.com/plugins/video.php?height=323&href=https%3A%2F%2Fwww.facebook.com%2F61573007836826%2Fvideos%2F508197881949958%2F&show_text=false&width=560&t=0" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                width={560}
                height={323}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
