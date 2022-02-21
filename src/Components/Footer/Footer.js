import React from "react";
import { Row, Col } from "react-bootstrap";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.footer} `}>
      <Col xs={11} md={10} className={`mx-auto`}>
        <Row className={`${styles.siteMap} ${styles.top}`}>
          <Col xs={6} md={4} xl={2} className={`${styles.column} my-4 my-md-0`}>
            <div>
              <p className={styles.menuItem}>Column item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
            </div>
          </Col>
          <Col xs={6} md={4} xl={2} className={`${styles.column} my-4 my-md-0`}>
            <div>
              <p className={styles.menuItem}>Column item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
            </div>
          </Col>
          <Col xs={6} md={4} xl={2} className={`${styles.column} my-4 my-md-0`}>
            <div>
              <p className={styles.menuItem}>Column item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
              <p className={styles.menuItemTwo}>Menu item</p>
            </div>
          </Col>
          <Col
            xs={12}
            xl={6}
            className={`d-flex flex-column align-items-end pt-5 pt-xl-0`}
          >
            <p className={styles.menuItemThree}>Stay tuned</p>
            <p className={styles.menuItemFour}>
              Placerat maecenas in sit bibendum sed.
            </p>
            <div className={styles.subscriptionContainer}>
              <Input className={styles.input} />
              <Button />
            </div>
          </Col>
        </Row>

        <div className={styles.bottom}>
          <div className={styles.footerLeft}>
            <div className={styles.logo}>
              <div className={styles.frame29}>
                <img alt="" className={styles.union} src="./assets/logo.svg" />
              </div>
              <p className={styles.bushlife}>
                Bush
                <strong className={styles.bushlifeEmphasis1}>life</strong>
              </p>
            </div>
            <p className={styles.menuItemFive}>Menu item</p>
            <p className={styles.menuItemFive}>Menu item</p>
          </div>
          <div className={styles.socialIcons}>
            <img
              alt=""
              className={styles.logoLinkedin}
              src="./assets/linkedin.svg"
            />
            <img
              alt=""
              className={styles.logoLinkedin}
              src="./assets/facebook.svg"
            />
            <img
              alt=""
              className={styles.logoLinkedin}
              src="./assets/twitter.svg"
            />
            <img
              alt=""
              className={styles.logoLinkedin}
              src="./assets/instagram.svg"
            />
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
