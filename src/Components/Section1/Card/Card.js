import React from "react";
import styles from "./Card.module.scss";

const Card = ({ author, image, title, text }) => {
  return (
    <div className={styles.card}>
      <img alt="" className={styles.cardImage} src={image} />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img alt="" className={styles.author} src={author} />
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.description}>{text}</p>
      </div>
      <div className={styles.reviewsContainer}>
        <p className={styles.grade}>4.26/5 (9 reviews)</p>
        <div className={styles.stars}>
          <img alt="" className={styles.vector} src="./assets/blankstar.svg" />
          <div className={styles.star}>
            <img alt="" className={styles.vectorTwo} src="./assets/star.svg" />
          </div>
          <div className={styles.star}>
            <img alt="" className={styles.vectorTwo} src="./assets/star.svg" />
          </div>
          <div className={styles.star}>
            <img alt="" className={styles.vectorTwo} src="./assets/star.svg" />
          </div>
          <div className={styles.star}>
            <img alt="" className={styles.vectorTwo} src="./assets/star.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
