import styles from "./Navbar.module.css";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaUser } from "react-icons/fa";
import { Cart } from "../Cart";

export function Navbar() {
  const [active, setActive] = useState(styles.nav_list);
  const navToggle = () => {
    active === styles.nav_list
      ? setActive(styles.active)
      : setActive(styles.nav_list);
  };

  const handleOpenSidebar = () => {
    const cart = document.querySelector('#sidebar').classList
      if(cart.contains('sidebar--isHidden')){
        cart.remove('sidebar--isHidden')
      }
    }



  return (
    <>
      <header>
        <nav>
          <a href="/" className={styles.logo}>
            <b>COZA</b> STORE
          </a>
          <ul className={active}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className={styles.nav_list2}>
            <li>
              <a href="/login">
                <FaUser />
              </a>
            </li>
            <li>
              <a href="">
                <FaSearch />
              </a>
            </li>
            <li className={styles.li2}>
              <a 
                onClick={handleOpenSidebar}
              >
                <FaShoppingCart />
              </a>
            </li>
          </ul>
          <div className={styles.mobile_menu}>
            <FaBars onClick={navToggle} />
          </div>
        </nav>
      </header>
      <div id="cart">
        <Cart/>

      </div>
    </>
  );
}
