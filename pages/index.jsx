import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';

export default function Home({ panier }) {
  return (
    <>
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
