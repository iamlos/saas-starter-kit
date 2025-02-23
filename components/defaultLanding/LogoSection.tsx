import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { logos } from './data/logos';
import DecoBlockBorder from '@/components/defaultLanding/iconSection';
import Image from 'next/image';

export default function LogoSection() {
  const [duplicatedLogos, setDuplicatedLogos] = useState(logos);

  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos, ...logos]);
  }, []);

  return (
    <section className="container overflow-hidden">
      <div className="px-4">
        {/* Row 1: Title */}
        <h2 className="mb-8 text-4xl font-bold text-center text-[#A3A6C2]">
          Trusted by Leading Companies
        </h2>

        {/* Row 2: Description */}
        <p className="mx-auto mb-16 max-w-3xl text-3xl text-center text-[#A3A6C2]/80">
          Join thousands of companies that trust our platform for their recruitment needs
        </p>

        {/* Row 3: Right to Left Scrolling Logos */}
        <div className="overflow-hidden relative mx-auto mb-10 max-w-5xl">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -80 * duplicatedLogos.length],
            }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-16"
                initial={{ opacity: 0.20 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0.20 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={128}
                  height={64}
                  unoptimized={true}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 4: Left to Right Scrolling Logos */}
        {/* <div className="overflow-hidden relative mx-auto mb-10 max-w-5xl">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [-75 * duplicatedLogos.length, 0],
            }}
            transition={{
              duration:75,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-16"
                initial={{ opacity: 20 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 20 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <img
                  src={logo.path}
                  alt={`Partner logo ${index + 1}`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}