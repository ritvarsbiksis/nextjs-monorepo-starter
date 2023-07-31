import { Noto_Sans_Display, VT323 } from 'next/font/google'

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '700'],
})

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
})

export { notoSansDisplay, vt323 }
