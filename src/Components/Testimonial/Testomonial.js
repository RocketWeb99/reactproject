import React from "react";
import styles from "./Testimonial.module.scss";

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <img alt="" className={styles.authorImage} src="./assets/elephant.png" />
      <div className={styles.container}>
        <div className={styles.quoteLeft}>
          <img alt="" className={styles.image} src="./assets/leftquote.svg" />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Est pellentesque metus elementum interdum etiam semper nisl. Id enim
            vitae nisl, metus, nunc non nisl tellus id. Dui at enim, etiam duis
            aoreet. Est risus libero mi, convallis lectus congue netus ut quis.{" "}
          </p>
          <div className={styles.author}>
            <p className={styles.authorName}>John Doe</p>
            <p className={styles.description}>Animal lover</p>
          </div>
        </div>
        <div className={styles.quoteRight}>
          <img alt="" className={styles.image} src="./assets/rightquote.svg" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
