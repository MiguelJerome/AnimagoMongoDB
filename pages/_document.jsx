import Document, { Html, Head, Main, NextScript } from 'next/document';
import { DefaultSeo } from 'next-seo';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <DefaultSeo
            title="Animago - Accueil"
            description="Une page d'accueil de site web, avec une image de Animago propriétaire du e-commerce"
            openGraph={{
              title: 'Animago - Accueil',
              description:
                "Une page d'accueil de site web, avec une image de Animago propriétaire du e-commerce",
              images: [
                {
                  url: 'http://localhost:3000/img/AnimagoLogo.png',
                  alt: 'Animago',
                },
              ],
              site_name: 'Animago',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
