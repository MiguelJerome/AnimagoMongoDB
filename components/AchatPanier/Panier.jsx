import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import HistoriqueCommande from './HistoriqueCommande';

export default function Panier() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  const handleNewOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <>
      <PanierPanneau onNewOrder={handleNewOrder} />
      <HistoriqueCommande orders={orders} setOrders={setOrders} />
    </>
  );
}
