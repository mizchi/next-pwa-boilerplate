/* @flow */
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage()
  }

  render() {
    return (
      <html>
        <Head>{/* custom header */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
