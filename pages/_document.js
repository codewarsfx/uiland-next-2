import Document, { Html, Head, Main, NextScript } from "next/document";


//This places the modal outside the DOM
class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
        <body>
          <Main />
          <NextScript />
          {/*Below we add the modal wrapper*/}
          <div id="portal"></div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;