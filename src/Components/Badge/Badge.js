import React from "react";
import styles from "./Badge.module.scss";

const Badge = ({ background }) => {
  return (
    <div className={styles.badge} style={{ background: background }}>
      <p className={styles.label}>Badge</p>
    </div>
  );
};

export default Badge;
