import { useTranslation } from 'next-i18next';

import {
  BoltIcon,
  EnvelopeIcon,
  SparklesIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  CursorArrowRippleIcon,
  MegaphoneIcon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import features from './data/features.json';

const iconMap = {
  BoltIcon,
  EnvelopeIcon,
  SparklesIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  MegaphoneIcon,
  CursorArrowRippleIcon,
  UserCircleIcon,
  UserPlusIcon,
  UsersIcon,
  Cog6ToothIcon
};

const FeatureSection = () => {
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="w-6 h-6 text-[#A3A6C2]" /> : null;
  };

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 space-y-4 rounded-lg border border-gray-700">
              <div className="flex gap-3 items-center">
                {getIcon(feature.icon)}
                <h3 className="text-xl font-bold">{feature.name}</h3>
              </div>
              <p className="text-[#A3A6C2]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
