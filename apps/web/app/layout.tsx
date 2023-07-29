import { NavigExample } from '../components/navig-example/navig-example'
import { Noto_Sans_Display } from '@next/font/google'

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
})

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body suppressHydrationWarning={true} className={notoSansDisplay.className}>
      <NavigExample />
      {children}
    </body>
  </html>
)

export default RootLayout
