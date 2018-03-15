/* @flow */
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage()
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <link rel="manifest" href="manifest.json" />
          <meta name="theme-color" content="#317EFB" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="NextApp" />
          <meta name="apple-mobile-web-app-title" content="NextApp" />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
