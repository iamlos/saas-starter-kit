const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  defaultNS: 'common',
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : './public/locales',
};
