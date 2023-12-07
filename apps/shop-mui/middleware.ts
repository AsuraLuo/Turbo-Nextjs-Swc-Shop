import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'zh',
  localePrefix: 'never'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/checkout', '/(en|zh)/:path*']
}
