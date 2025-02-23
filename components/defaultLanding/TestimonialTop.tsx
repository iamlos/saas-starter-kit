import Image from 'next/image';
import { testimonialTopData } from './data/testimonialTop';

const TestimonialTop = () => {
  return (
    <section className="py-24 w-full" style={{ backgroundColor: '#10111D' }}>
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="flex flex-col gap-12 items-center md:flex-ro">
          <div className="relative w-72 h-72 md:w-80 md:h-80 sm:w-48 sm:h-48">
            <Image
              src={testimonialTopData.image}
              alt={testimonialTopData.company}
              width={320}
              height={320}
              className="object-cover rounded-lg"
            />
            <Image
              src="/highlights/quote-gg-green.svg?auto=format&w=186&h=124"
              alt="Quote"
              width={186}
              height={124}
              className="opacity-50"
              style={{ top: '-8px', left: '-8px' }}
            />
          </div>

          <div className="flex-1 space-y-6">
            <p className="text-xl font-medium leading-relaxed lg:text-2xl text-primary">
              {testimonialTopData.quote}
            </p>
            <div>
              <h3 className="mb-2 text-xl font-bold text-[#A3A6C2] sm:justify-center sm:text-center">
                {testimonialTopData.company}
              </h3>
              <p className="text-[#A3A6C2] text-lg sm:justify-center sm:text-center">
                {testimonialTopData.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTop;