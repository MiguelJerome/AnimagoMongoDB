import { useRouter } from 'next/router';
import styles from '/styles/ProduitCard.module.css';
import React from 'react';
import { useCart } from '/components/AchatPanier/UseCart';
import DimensionsMoyennesImages from '/components/Images/DimensionsMoyennesImages.jsx';
import ProduitItem from '/components/produit/ProduitItem.jsx';
import UpdateProductStockAndSetCart from '/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart';

export default function ProduitCard({
  showPanierPanneau,
  toggler,
  produits,
  addToCart,
  getPurchaseQuantity,
  getRemainingStock,
}) {
  const router = useRouter();
  const { produitsState, setProduits, updateProductStockAndSetCart } =
    UpdateProductStockAndSetCart({ produits });

  // Wait until produitsState is defined before rendering the component
  if (!produitsState) {
    return null;
  }

  return (
    <div className={styles.gallerie}>
      <DimensionsMoyennesImages produits={produitsState}>
        {({ averageWidth, averageHeight }) => (
          <>
            {produitsState.map((product) => (
              <ProduitItem
                key={product._id}
                product={product}
                averageWidth={averageWidth}
                averageHeight={averageHeight}
                router={router}
                updateProductStockAndSetCart={updateProductStockAndSetCart}
                toggler={toggler}
                showPanierPanneau={showPanierPanneau}
                addToCart={addToCart}
                getPurchaseQuantity={getPurchaseQuantity}
                getRemainingStock={getRemainingStock}
              />
            ))}
          </>
        )}
      </DimensionsMoyennesImages>
    </div>
  );
}
