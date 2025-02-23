import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const PartnerFooter = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const complianceLinks = [
    { href: '/terms', label: 'Terms of Use' },
    { href: '/cookie-notice', label: 'Cookie Notice' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/california-privacy', label: 'California Privacy Rights' },
    { href: '/privacy-settings', label: 'Manage Privacy Settings' },
  ];

  return (
    <footer className="py-4 w-full border-t border-gray-800 bg-[#0E0E16]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
          <div className="text-sm text-gray-400">
            © 2002-{currentYear} OneTapRecruit AI All Rights Reserved
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center sm:gap-6">
            {complianceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-blue-500 transition-colors hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PartnerFooter;