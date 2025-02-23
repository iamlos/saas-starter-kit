import type { NextPage } from 'next';
import Link from 'next/link';
import { accessibilityData } from './data/accessibility';
import ComplianceFooter from '@/components/compliance/Footer';

const Accessibility: NextPage = () => {
  return (
    <>
      <div className="py-12 min-h-screen" style={{ backgroundColor: '#10111D' }}>
        <div className="container px-4 mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="text-sm breadcrumbs text-[#A3A6C2]">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li>Accessibility Statement</li>
              </ul>
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-8 text-4xl font-bold text-white">
            ACCESSIBILITY STATEMENT
          </h1>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <Link href="https://facebook.com/onetaprecruit" className="text-[#56F699] hover:text-[#56F699]/80">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://twitter.com/onetaprecruit" className="text-[#56F699] hover:text-[#56F699]/80">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="mailto:accessibility@onetaprecruit.com" className="text-[#56F699] hover:text-[#56F699]/80">
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Effective Date */}
          <div className="p-4 mb-8 text-sm bg-[#1A1B23] rounded-lg text-[#A3A6C2]">
            Last Updated: {accessibilityData.lastUpdated}
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-[#56F699]">
              {accessibilityData.introduction.title}
            </h2>
            {accessibilityData.introduction.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-[#A3A6C2]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {accessibilityData.sections.map((section) => (
              <div key={section.id}>
                <h2 className="mb-4 text-2xl font-bold text-[#56F699]">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-6 space-y-2 text-[#A3A6C2]">
                    {section.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#A3A6C2]">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ComplianceFooter />
    </>
  );
};

export default Accessibility;