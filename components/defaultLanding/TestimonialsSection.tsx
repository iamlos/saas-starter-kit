import React from 'react';
import Image from 'next/image';
import { testimonials } from './data/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-24 w-full" style={{ backgroundColor: '#10111D' }}>
      <div className="container mx-auto max-w-4xl mxpx-4">
        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="absolute -top-8 -left-8">
                <Image
                  src="/public/highlights/quote-gg-green.svg"
                  alt="Quote"
                  width={186}
                  height={124}
                  className="opacity-50"
                />
              </div>
              
              <div className="flex flex-col space-y-6">
                <div className="space-y-4">
                  <p className="text-[#56F699] text-2xl font-medium leading-relaxed">
                    {testimonial.quote}
                  </p>
                  {testimonial.subQuote && (
                    <p className="text-[#A3A6C2] text-xl leading-relaxed">
                      {testimonial.subQuote}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-6">
                  <div className="overflow-hidden w-24 h-24 rounded-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-[#A3A6C2]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;