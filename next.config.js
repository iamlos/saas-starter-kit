/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require('./next-i18next.config');
const { withSentryConfig } = require('@sentry/nextjs');

// Add Sentry webpack plugin options
const sentryWebpackPluginOptions = {
  silent: true,
  hideSourceMaps: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4002',
        pathname: '/highlights/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.254.45',
        port: '4002',
        pathname: '/highlights/**',
      },
      {
        protocol: 'https',
        hostname: 'onetaprecruit.com',
      },
      {
        protocol: 'https',
        hostname: 'boxyhq.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
      },
      {
        protocol: 'http',
        hostname: 'www.hope3k.net',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'otrai.s3.us-east-2.amazonaws.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'dxbhsrqyrr690.cloudfront.net',
        pathname: '/sidearm.nextgen.sites/**',
      },
      {
        protocol: 'https',
        hostname: 'opendorseinc.wpenginepowered.com',
        pathname: '/wp-content/uploads/**',
      }
    ],
  },
  i18n,
  async rewrites() {
    return [
      {
        source: '/.well-known/saml.cer',
        destination: '/api/well-known/saml.cer',
      },
      {
        source: '/.well-known/saml-configuration',
        destination: '/well-known/saml-configuration',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains;',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           importLoaders: 1,
  //           modules: {
  //             auto: true,
  //             localIdentName: '[local]_[hash:base64:5]'
  //           },
  //           url: {
  //             filter: (url) => {
  //               // Don't handle SVG Data URLs
  //               if (url.startsWith('data:')) {
  //                 return false;
  //               }
  //               return true;
  //             },
  //           },
  //         }
  //       },
  //       'postcss-loader'
  //     ],
  //   });

  //   config.module.rules.push({
  //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //     type: 'asset/resource',
  //     generator: {
  //       publicPath: '/_next/',
  //       outputPath: 'static/media/',
  //     },
  //   });

  //   return config;
  // },
  
  
  
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);