import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/ProductDetail/Product";

import styles from "./index.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { randomNum } from "./Calc";
import ProductCard from "../../components/Product/ProductCard";

export const ProductDetail = () => {
  const urlParam = new URLSearchParams(window.location.search);
  const pathnameURL = document.location.pathname;
  const colorName = urlParam.get("color");

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
        `https://rest-api-cozastore.herokuapp.com/products/category/${product.category}`
      )
      .then((response) => {
        const finalNumber = response.data.length - 5;
        const randomNumber = randomNum(0, finalNumber);
        setIndications(response.data.slice(randomNumber, randomNumber + 5));
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

      <div className={styles.shop}>
        {indications?.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};
