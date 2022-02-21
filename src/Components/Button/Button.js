import React from "react";
import styles from "./Button.module.scss";

const Button = () => {
  return (
    <button className={styles.button}>
      <p className={styles.label}>Button</p>
    </button>
  );
};

export default Button;
