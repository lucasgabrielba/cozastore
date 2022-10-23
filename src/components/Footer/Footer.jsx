import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import card1 from "./img/cards1.png";
import card2 from "./img/cards2.png";
import card3 from "./img/cards3.png";
import card4 from "./img/cards4.png";
import card5 from "./img/cards5.png";

function Footer() {
  return (
    <>
      <footer className={styles.footer1}>
        <div className={styles.categories_footer}>
          <h2>CATEGORIES</h2>
          <a href="/">Women</a>
          <a href="/">Men</a>
          <a href="/">Shoes</a>
          <a href="/">Watches</a>
        </div>
        <div className={styles.help}>
          <h2>HELP</h2>
          <a href="">Track Order</a>
          <a href="">Returns</a>
          <a href="">Shipping</a>
          <a href="">FAQs</a>
        </div>
        <div className={styles.get}>
          <h2>GET IN TOUCH</h2>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className={styles.social_medias}>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h2>NEWSLETTER</h2>
          <form action="submit">
            <input type="email" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </footer>
      <footer className={styles.footer2}>
        <div className={styles.cards}>
          <img src={card1} alt="paypal" />
          <img src={card2} alt="visa" />
          <img src={card3} alt="mastercard" />
          <img src={card4} alt="americanexpress" />
          <img src={card5} alt="recover" />
        </div>
        <div className={styles.copyright}>&copy; Copyright 2022</div>
      </footer>
    </>
  );
}

export default Footer;
