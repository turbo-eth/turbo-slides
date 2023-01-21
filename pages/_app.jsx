import '@/styles/app.css'
import '@rainbow-me/rainbowkit/styles.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import { Raleway } from '@next/font/google'
import { RainbowKit } from '@/components/providers/RainbowKit'
import { useIsMounted } from '@/lib/hooks/useIsMounted'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MDXProvider from '@/components/providers/MDXProvider'
import { CurrentSlideProvider } from '@/lib/context/CurrentSlideContext'
import { ModeProvider } from '@/lib/context/ModeContext'

import { APP_CONFIG, AUTHOR_IMAGE_URL, AUTHOR_NAME, AUTHOR_URL, PRESENTATION_DATE, SITE_NAME, SITE_TAGLINE, SITE_TITLE } from '@/lib/constants'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
})

export default function App({ Component, pageProps }) {
  const isMounted = useIsMounted()
  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>
      <MDXProvider>
        {isMounted && (
          <RainbowKit>
            <CurrentSlideProvider>
              <ModeProvider>
                <AnimatePresence exitBeforeEnter>
                  <Head>
                    <title>{SITE_TITLE}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                      href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
                      rel="stylesheet"
                    />
                  </Head>
                  <Header name={SITE_NAME} title={SITE_TAGLINE} date={PRESENTATION_DATE} url={APP_CONFIG.twitter} />
                  <Component {...pageProps} />
                  <Footer authorName={AUTHOR_NAME} authorUrl={AUTHOR_URL} authorImgUrl={AUTHOR_IMAGE_URL} />
                </AnimatePresence>
              </ModeProvider>
            </CurrentSlideProvider>
          </RainbowKit>
        )}
      </MDXProvider>
    </>
  )
}
