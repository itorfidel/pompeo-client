import styles from "../styles/components/Category.module.scss";
import { Link } from "react-router-dom";
import ContentWrapper from "../routes/global/ContentWrapper";
import handleScrollToTop from "../helpers/scrollToTop";

const Category = () => {
  return (
    <ContentWrapper
      sideText="Hand craft pottery"
      titleSm="Product categories"
      titleLg={
        <div>
          Porcelain
          <span> & </span>Pottery
        </div>
      }
    >
      <div className={styles.top}>
        <Link
          to="/shop?category=vases"
          className={styles.item}
          state="Vases"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.yellow}`}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785701136/5bb7874064724534dc9870d0_icons8-pottery-64_v6h7at.png"
              alt=""
            />
            <h3>Vases</h3>
          </div>
        </Link>
        <Link
          to="/shop?category=mugs"
          className={styles.item}
          state="Mugs"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.red}`}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785701183/5bb7876aedf07b21c27e7b66_icons8-salad-bowl-64_ztwpou.png"
              alt=""
            />
            <h3>Mugs</h3>
          </div>
        </Link>
        <Link
          to="/shop?category=plates"
          className={styles.item}
          state="Plates"
          onClick={handleScrollToTop}
        >
          <div className={`${styles.disc} ${styles.maroon}`}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785701229/5bb78d5e9e1f337308de45cf_ICON-22_dx249p.png"
              alt=""
            />
            <h3>Plates</h3>
          </div>
        </Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <h1>Hand Grafted Pottery since 1990</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
        <div className={styles.container}>
          <h1>We Provide Premium Pottery Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
            faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
            vitae risus posuere.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Category;
