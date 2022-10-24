import styles from "./Product.module.css";
import { FaCartPlus } from "react-icons/fa";

import { addToCart } from "../../redux/ducks/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ productInfo }) {
  const product = productInfo;
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    document.querySelector("#sidebar").classList.remove("sidebar--isHidden");
  };

  const addItemInCart = () => {
    handleOpenSidebar();
    dispatch(
      addToCart({
        id: product.id,
        title: product.product,
        image: product.image,
        price: product.price,
      })
    );
  };

  return (
    <>
      <div className={styles.product}>
        <button className={styles.addCart} onClick={addItemInCart}>
          <FaCartPlus />
        </button>
        <a
          href={`https://cozastoree.netlify.app/products/${product.slug}/?color=${product.color}&category=${product.category}`}
        >
          <img src={product.image} alt={product.product} />
          <p>{product.product}</p>
          <p className={styles.preco}>{product.price}</p>
        </a>
      </div>
    </>
  );
}
