const nextConfig = require('@dcommerce/shop-nextjs-config')
const withNextIntl = require('next-intl/plugin')(
  // Specify a custom path here
  './i18n.ts'
)

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  ...nextConfig(),
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      importMap: {
        '@mui/system': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/system', 'styled']
          }
        },
        '@mui/material/styles': {
          styled: {
            canonicalImport: ['@emotion/styled', 'default'],
            styledBaseImport: ['@mui/material/styles', 'styled']
          }
        }
      }
    }
  }
})
