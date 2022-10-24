import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/ProductDetail/Product";

import { useEffect, useState } from "react";
import axios from "axios";
import { randomNum } from "./RandomNum";
import Indications from "../../components/Indications";

import styles from "./index.module.css";

export const ProductDetail = () => {
  const urlParam = new URLSearchParams(window.location.search);
  const pathnameURL = document.location.pathname;
  const colorName = urlParam.get("color");
  const categoryName = urlParam.get("category");

  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState([]);
  const [indications, setIndications] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://rest-api-cozastore.herokuapp.com${pathnameURL}p?color=${colorName}`
      )
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://rest-api-cozastore.herokuapp.com${pathnameURL}s`)
      .then((response) => {
        setColors(response.data.map((prod) => prod.color));
        console.log(colors);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://rest-api-cozastore.herokuapp.com/products/category/${categoryName}`
      )
      .then((response) => {
        const finalNumber = response.data.length - 5;
        const randomNumber = randomNum(0, finalNumber);
        setIndications(response.data.slice(randomNumber, randomNumber + 5));
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Product
        product={product.product}
        price={product.price}
        category={product.category}
        colors={colors}
        slug={product.slug}
        description={product.description}
        image={product.image}
        id={product.id}
      />
      <div className={styles.indications}>
        <h3>Você também pode gostar:</h3>
        <Indications indications={indications} />
      </div>
      <Footer />
    </>
  );
};
