import { NavigExample } from '../../components/navig-example/navig-example'
import { Providers } from '../../components/providers/providers'
import { notoSansDisplay } from '../../styles/fonts'
import '../../styles/global.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body suppressHydrationWarning={true} className={notoSansDisplay.className}>
      <Providers>
        <NavigExample />
        {children}
      </Providers>
    </body>
  </html>
)

export default RootLayout
