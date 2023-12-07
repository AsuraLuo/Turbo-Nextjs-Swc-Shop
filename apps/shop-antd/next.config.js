const nextConfig = require('@dcommerce/shop-nextjs-config')

/** @type {import('next').NextConfig} */
module.exports = {
  ...nextConfig(),
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
      ssr: true,
      minify: false,
      pure: false,
      cssProp: false
    }
  }
}
