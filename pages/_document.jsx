import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Une page d'accueil de site web, avec une image de Animago propriétaire du e-commerce"
          />
          <meta property="og:title" content="Animago - Accueil" />
          <meta
            property="og:description"
            content="Une page d'accueil de site web, avec une image de Animago propriétaire du e-commerce"
          />
          <meta
            property="og:image"
            content="http://localhost:3000/img/AnimagoLogo.png"
          />
          <meta property="og:image:alt" content="Animago" />
          <meta property="og:site_name" content="Animago" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
