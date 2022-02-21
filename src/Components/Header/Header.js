import React from "react";
import { Col } from "react-bootstrap";
// import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`${styles.header} `}>
      <Col xs={11} md={10} className={`${styles.container} mx-auto`}>
        <img alt="" className={styles.logo} src="./assets/logo.png" />
        <div className={styles.headerRight}>
          <div className={styles.menus}>
            <p className={styles.menuItem}>Menu item</p>
            <p className={styles.menuItem}>Menu item</p>
            <p className={styles.menuItem}>Menu item</p>
            <p className={styles.menuItem}>Menu item</p>
            <p className={`${styles.menuItem} ${styles.user}`}>
              username{" "}
              <img src="./assets/user.png" alt="User" className="userImage" />
            </p>
          </div>
          {/* <div className={styles.buttons}>
            <Button className={styles.button} />
            <div style={{ marginLeft: "6px" }}>
              <Button className={styles.button} />
            </div>
          </div> */}
        </div>
      </Col>
    </div>
  );
};

export default Header;
