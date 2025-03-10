import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Load the JSON script globally */}
      <Script 
        src="https://www.rndframe.com/server/web/js/json.min.js" 
        strategy="beforeInteractive"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
