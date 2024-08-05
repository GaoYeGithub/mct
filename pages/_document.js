

import Document, { Html, Head, Main, NextScript } from 'next/document'
 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}