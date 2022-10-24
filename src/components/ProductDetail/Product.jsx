import styles from "./Product.module.css";
import "./Colors.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/ducks/cart/cartSlice";

function Product({
  id,
  product,
  price,
  category,
  colors,
  description,
  image,
  slug,
}) {
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    document.querySelector("#sidebar").classList.remove("sidebar--isHidden");
  };

  const addItemInCart = () => {
    handleOpenSidebar();
    dispatch(
      addToCart({
        id,
        title: product,
        image,
        price,
      })
    );
  };

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={image} alt={product} />
      </div>
      <div className={styles.info_products}>
        <h5>{category}</h5>
        <h2>{product}</h2>
        <p className={styles.price}>R{price}</p>
        <p className={styles.description}>{description}</p>
        <section>
          <h3>Sizes</h3>
          <div className={styles.sizes}>
            <label htmlFor="size">P</label>
            <input value="P" id="P" name="size" type="radio" />
            <label htmlFor="size">M</label>
            <input value="M" id="M" name="size" type="radio" />
            <label htmlFor="size">G</label>
            <input value="G" id="G" name="size" type="radio" />
          </div>
          <h3>Colors</h3>
          {colors.map((color) => (
            <a
              href={`/products/${slug}/?color=${color}&category=${category}`}
              key={color}
            >
              <button className={`${styles.btnColor} ${color}`}>&nbsp;</button>
            </a>
          ))}
          <button className={styles.addcart} onClick={addItemInCart}>
            Adicionar ao carrinho
          </button>
        </section>
      </div>
    </div>
  );
}

export default Product;
