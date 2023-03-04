import React, { useState } from 'react';

import { Inter } from '@next/font/google';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import OrderHistory from '/components/CommandeHIstorique/CommandeHIstorique.jsx';

import styles from '/styles/Cart.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HistoriqueCommande({ purchaseDate, orders }) {
  const [orderHistory, setOrderHistory] = useState(orders);
  let cart = [];

  //console.log("Orders in string passing from the current cart", orders);

  if (typeof orders === 'string') {
    try {
      cart = JSON.parse(orders);
    } catch (error) {
      console.error('Error parsing orders:', error);
    }
  }
  // console.log("Cart in string ", cart);

  // console.log("Order History in string ", orderHistory);
  return (
    <>
      <Header />
      <OrderHistory
        orders={orderHistory}
        cart={cart}
        purchaseDate={purchaseDate}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { orders } = context.query;
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toISOString();

  // If the orders parameter is present in the query string, parse it from a string back into an array.
  const ordersArray = orders ? JSON.parse(orders) : [];

  return {
    props: {
      purchaseDate: currentDate,
      currentTime: currentTime,
      orders: ordersArray || [],
    },
  };
}
