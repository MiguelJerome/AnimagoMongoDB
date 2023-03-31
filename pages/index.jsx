import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';
import RedirectToAccueil from '../components/RedirectToAccueil';

export default function Home({ panier }) {
  return (
    <>
      <RedirectToAccueil />
      <Head>
        <title>Animago - Accueil</title>
      </Head>

      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  return await getPaniersProps();
}
