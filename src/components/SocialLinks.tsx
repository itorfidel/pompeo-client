import styles from "../styles/components/SocialLinks.module.scss";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      <li className={`${styles.link} ${styles.orange}`}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dplbkid9/image/upload/v1785853569/81341_u9oyua.png"
            alt="facebook"
          />
        </Link>
      </li>
      <li className={`${styles.link} ${styles.red}`}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dplbkid9/image/upload/v1785853610/733635_son13k.png"
            alt="twitter"
          />
        </Link>
      </li>
      <li className={`${styles.link} ${styles.maroon}`}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dplbkid9/image/upload/v1785853827/733613_srmker.png"
            alt="googlePlus"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
