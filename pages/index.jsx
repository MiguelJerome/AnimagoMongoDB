import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';
import { getPaniers } from '/server/config/mongo/paniers';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ panier }) {
  console.log('test produits:', JSON.stringify(panier));
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
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string
  const paniersStringified = paniers.map((panier) => ({
    ...panier,
    _id: panier._id.toString(),
  }));
  return { props: { panier: paniersStringified } };
}
