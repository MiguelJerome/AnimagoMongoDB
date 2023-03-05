import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';
//import { getPaniers } from '/server/config/mongo/paniers';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { getPaniersProps } from '/components/ServerProps/getPaniersProps';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ panier }) {
  //  console.log('test produits index page:', JSON.stringify(panier));
  // const [cart, initCart, addToCart, removeFromCart, setCart, getPurchaseQuantity, getRemainingStock ] = useCart();
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  return await getPaniersProps();
}
