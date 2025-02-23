import React from 'react';
import TestimonialsSection from './TestimonialsSection';
import Image from 'next/image';

const TestimonialShowcase = () => {
  return (
    <section className="py-16 border-green-300 border-1 card-compact card dark:border-green-300" style={{ backgroundColor: '#10111D' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="relative mb-16">
          <Image
            src="https://otrai.s3.us-east-2.amazonaws.com/assets/otr-athlete-dash.png?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCibR%2Fpnwk3hFPQjBpxTNO9tkNgIVW0rUw2HUn2B6bwzwIgKuD831zmFyVv90BNaZEY6FGzibZLFJbs%2F1WCVNlA2q0q3gMIEBAAGgw5MTM1MjQ5MDczNDQiDJdB2lV%2FMn2cGfJvKyq7A2POwmocOdS520TftqtGBc7snijoeAYyLELi%2BhsKnX4H%2FP%2FUgrCpt%2FeDoMuzMRpATbZvKO%2B4CiyZYzWeRKT9G8ZsAYJzuetgAu0H4x%2FAAe6jKpDdF%2B%2BJ%2FaEuwcNfg4Znzd910OLPWMwaHYPwGFZH1pIVg1LQrgN31YSBTnkfS85LPIzz3d512d4oSCQQLil7JHharUd%2F%2F5JgtfgDaun76Br72FoNA%2BhU6KZD94tnUpfCYwKiq8I6vBPARQjqwH4onYN%2BYQ79R%2BpfoBT%2BqHuDSSaTPGqeripWMIdmIjEU5VbEJ7VJbZ45PvRtdNYRZeFKwTXfV6RMmtmAMN1rpyinVVou9Ov5VOGcHy8JGqq%2BRXUELUUSWXS7GYSeW%2FYxv8KvoPF561S6v9wcSGkXHqvePnoL%2FDq8cud%2FFKp9Xbe%2F69AzmkqhK27t78u5RSY7W4X65mNTd%2BstUoWSEE9pAIcfLczK6wr7zrQkpnBw2v39yG8vpXqdxEr%2BEt8LWCHjIDu75Vx5UP7v%2Bli9Jcc1k75yhDFx1y9n1OhkY6yrpAxKtXdC8uTj1nyoqhxcFtRYmf4cnpHOlLHkG1Zx048HMO6Ltr0GOuQCdvPprXRytG8qmTKSX4lQdRv%2Fkk7xJb2ep%2Bte1i%2BqcDqlHco0sumOX4yOfqeUZU%2FoC0T0kX7pO7zK0S3xwFtK3B6gUUgmJCPzES9oz7%2BEuz5Wh1ioefZ%2BmKJKdNhNqthCOoJTCtA2BdkTuaSMkmfN5YBPXnzNr%2BLD%2FRL4X%2BnWyBeH5fEuDlhpcsKo1c%2FKE8phgMFGq3nep2vh0v5DAh6M7Xy63AnX6TFV%2Btoo2E0reE9fmX6ZCEvSYbxCGZOnSQypP%2Fv2WyCp%2BvEn5HlORTpYGj8wsap%2BB6qijdK94TcrcTM2AjfUhaXoejAPt5tMHvD5SyDXe%2BJopUaqtvXEsCw40uZJqRdQ6nKch9uJwwwFTV%2BJNcsqWItlK07NJSK3zVcjPzh0MG0IxU7Bib7ez8iqiNDwDAxwgdsAO7AZqxeG%2BOghZglATg3dQg2LUkjJBg%2FypD940VF76Kp%2FVAN3U3ydMRPPHCs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5JMST3VIH7ESKSR3%2F20250213%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T063104Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=e8c0ddba5ce061119ff232d8f6cd232ffd312db66d25754e91c646d3adc7658e"
            alt="OneTapRecruit Athlete Dashboard"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default TestimonialShowcase;