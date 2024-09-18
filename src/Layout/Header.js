import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";

import styles from "./Styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.menuDesktop}>
        <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/"><MdPets /></Link>
        </div>
          <div className={styles.menu}>
            <ul>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to="/pets" className={styles.link}>Pets</Link></li>
              <li><Link to="/products" className={styles.link}>Products</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
