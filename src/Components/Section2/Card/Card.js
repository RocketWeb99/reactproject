import React from "react";
import styles from "./Card.module.scss";

const Card = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <img alt="" className={styles.cardImage} src={image} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{text} </p>
      </div>
    </div>
  );
};

export default Card;
