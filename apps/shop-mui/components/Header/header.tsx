import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('Index')

  return (
    <header>
      <h1>{t('title')}</h1>
    </header>
  )
}

export default Header
