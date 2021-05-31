import React, { ReactElement } from 'react'

import App from 'next/app'
import Head from 'next/head'

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'src/config/theme'

class MyApp extends App {
  render(): ReactElement {
    const {
      Component,
      pageProps
    } = this.props

    return (
      <>
        <Head>
          <title>{'FB Ad Library'}</title>
        </Head>
        <ThemeProvider
          theme={theme}
        >
          <CssBaseline />
          <Component
            {...pageProps}
          />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp