import styles from "./Styles/Home.module.css";
import Slider from "../Layout/Slider";
import CatDog from "../img/CatDog.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <div className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>
            <h2>
              Bem vindo a <span>PetMania</span>
            </h2>
            <p>
              Na PetMania, acreditamos em um futuro mais sustentável para os
              animais e para o planeta. Por isso, oferecemos produtos naturais e
              orgânicos, além de apoiar projetos de adoção e bem-estar animal.
              Nossa missão é promover a saúde e o bem-estar dos pets,
              contribuindo para um mundo mais justo e solidário.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img alt="CatDog" src={CatDog} />
          </div>
        </div>
        <button>
          <Link className={styles.link} to="/pets">Venha ver nosso pets!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
