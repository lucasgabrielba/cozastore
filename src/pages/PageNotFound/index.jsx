import pagenotfoundImage from "./pagenotfound.jpg";
import styles from "./index.module.css";

export const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <h1>Oops..! 404 página não encontrada</h1>
      <p>Parece que você chegou à página errada em nosso servidor</p>
    </div>
  );
};
