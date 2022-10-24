import React from "react";
import styles from "./index.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function Indications({ indications }) {
  return (
    <div className={styles.shop}>
      {indications.length > 0 &&
        indications.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
    </div>
  );
}
