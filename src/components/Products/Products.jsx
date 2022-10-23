import styles from "./Products.module.css";
import { FaFilter, FaSearch } from "react-icons/fa";

function Products() {
  return (
    <div className={styles.products}>
      <h1>PRODUCT OVERVIEW</h1>
      <div className={styles.list_and_buttons}>
        <div>
          <ul className={styles.list}>
            <li>
              <a href="/">All Products</a>
            </li>
            <li>
              <a href="/">Woman</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Bag</a>
            </li>
            <li>
              <a href="/">Shoes</a>
            </li>
            <li>
              <a href="/">Watches</a>
            </li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <button className="filter">
            <a href="/">
              <FaFilter className="filter" /> Filter
            </a>
          </button>
          <button className="find">
            <a href="/">
              <FaSearch /> Search
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
