import { useTranslation } from 'next-i18next';
import { comparisonData } from './data/comparisonData';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ComparisonSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-16 w-full" style={{ backgroundColor: '#10111D' }}>
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-white">
          {comparisonData.title}
        </h2>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg shadow">
              <table className="min-w-full border-gray-700">
                {/* Pricing Tier Row */}
                <thead className="bg-transparent">
                  <tr>
                    <th scope="col" className="py-4 pr-3 pl-4 text-sm font-semibold text-left text-transparent sm:pl-6">
                      &nbsp;
                    </th>
                    {comparisonData.competitors.map((competitor) => (
                      <th
                        key={competitor.name}
                        scope="col"
                        className={`px-3 py-6 text-lg font-bold text-center rounded-t-lg ${
                          competitor.highlighted ? 'bg-[#56F699]/80 text-blue-950' : ' '
                        }`}
                      >
                        {competitor.highlighted ? 'RECOMMENDED' : ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <thead className="bg-[#1A1B23]">
                  <tr>
                    <th scope="col" className="py-4 pr-3 pl-4 text-sm font-semibold text-left text-[#56F699] sm:pl-6">
                      Features
                    </th>
                    {comparisonData.competitors.map((competitor) => (
                      <th
                        key={competitor.name}
                        scope="col"
                        className={`px-3 py-4 text-sm font-semibold text-center text-gray-300 ${
                          competitor.highlighted ? 'bg-[#56F699]/80 text-blue-950' : ''
                        }`}
                      >
                        {competitor.name}
                        {competitor.highlighted && (
                          <span className="ml-2 font-medium text-blue-950">
                            *
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-700">
                  {comparisonData.competitors[0].features.map((_, index) => (
                    <tr key={index}>
                      <td className="py-4 pr-3 pl-4 text-sm text-gray-300 bg-[#1A1B23] sm:pl-6">
                        {comparisonData.competitors[0].features[index]}
                      </td>
                      {comparisonData.competitors.map((competitor) => (
                        <td
                          key={competitor.name}
                          className={`px-3 py-4 text-sm text-center bg-[#1A1B23] ${
                            competitor.highlighted ? 'bg-[#56F699]/10' : ''
                          }`}
                        >
                          {index === 0 ? (
                            <span className="font-medium text-[#56F699]">
                              {competitor.features[index]}
                            </span>
                          ) : (
                            competitor.name === "OneTapRecruit AI" ? (
                              <CheckIcon className="inline-block w-5 h-5 text-[#56F699]" />
                            ) : (
                              <XMarkIcon className="inline-block w-5 h-5 text-red-500" />
                            )
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Footer Row */}
                  <tr className='bg-transparent'>
                    <td className="py-6 pr-3 pl-4 text-sm font-semibold text-[#56F699] sm:pl-6">
                      {/* Get Started */}
                    </td>
                    {comparisonData.competitors.map((competitor) => (
                      <td
                        key={competitor.name}
                        className={`px-3 py-6 text-center rounded-b-lg ${
                          competitor.highlighted 
                            ? 'bg-[#56F699]/80' 
                            : ''
                        }`}
                      >
                        <Link 
                          href="/auth/join"
                          className={`inline-block px-6 py-2 text-sm font-semibold rounded-lg ${
                            competitor.highlighted 
                              ? 'bg-blue-950 text-white hover:bg-blue-900'
                              : 'text-[#56F699] hover:text-[#56F699]/80'
                          }`}
                        >
                          {competitor.highlighted ? 'Try Now' : ''}
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;