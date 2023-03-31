import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
//import { getPaniers } from '/server/config/mongo/paniers';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function Home({ panier }) {
  //  console.log('test produits index page:', JSON.stringify(panier));
  // const [cart, initCart, addToCart, removeFromCart, setCart, getPurchaseQuantity, getRemainingStock ] = useCart();
  return (
    <>
      <ToastContainer />
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
