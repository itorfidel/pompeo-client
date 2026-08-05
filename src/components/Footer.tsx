import styles from "../styles/components/Footer.module.scss";
import Logo from "../routes/global/Logo";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
        <p className={styles.text}>
          I have always striven to fix beauty in wood, stone, glass or pottery,
          that has been my creed.
        </p>
        <div
          className={`${styles.contactContainer} ${
            inView ? styles.inView : ""
          }`}
          ref={ref}
        >
          <div className={styles.contact}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785702241/5bc61f43b6ba2a3332ee30f4_icons8-secured-letter-80_20_1_eeeo8l.png"
              alt=""
            />
            <h3>EMAIL</h3>
            <p>pompeopotery@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785702292/5bc61fa61d93fd9e7976d4af_icons8-marker-80_20_1_ydndz0.png"
              alt=""
            />
            <h3>FIND</h3>
            <p>Central Park, Manhattan New York, 1101</p>
          </div>
          <div className={styles.contact}>
            <img
              src="https://res.cloudinary.com/dplbkid9/image/upload/v1785702316/5bc61f741d93fdca4176d416_icons8-ringer-volume-80_b8gma5.png"
              alt=""
            />
            <h3>CALL</h3>
            <p>+1 292 345 678</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
