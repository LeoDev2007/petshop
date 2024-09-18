import styles from "./Styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={props.img} alt="first" />
      <div className={styles.cardBody}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className={styles.cardBtn}>
          <button>Adote</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
