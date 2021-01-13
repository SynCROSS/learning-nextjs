// * If you are setting up a header that is commonly used on multiple pages,
// * you can create the _document.js file in the pages directory and write it as follows:

import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();

    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0, padding:0 } /* custom! */`}</style>
          <title>Next.js</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
