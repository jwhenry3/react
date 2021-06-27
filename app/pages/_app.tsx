import Head from 'next/head'
import React, { useEffect } from 'react'
import { TelosThemeProvider } from '@cytracom/telos'

import './styles.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <title>{Component.title || 'Fallback Title'}</title>
      </Head>
      <TelosThemeProvider>
        <Component {...pageProps} />
      </TelosThemeProvider>
    </>
  )
}
export default MyApp
