import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProdutsByPilot } from "../../redux/fetchActions";

import ProductCard from "../ProductCard/ProductCard";
import styles from "./Shop.module.css";

function Shop() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdutsByPilot());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.shop}>
        {products?.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
