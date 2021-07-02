import Script from 'next/script'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: `console.log('next/head script run - ', new Date())`}} />
    </Head>
    <Script key="gtmscript">{`console.log('next/script run - ', new Date())`}</Script>
    <Component {...pageProps} />
  </>
}

export default MyApp
