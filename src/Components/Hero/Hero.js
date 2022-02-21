// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Col } from "react-bootstrap";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <Col xs={11} md={10} className={`${styles.hero} mx-auto`}>
      <div className={styles.content}>
        <p className={styles.title}>A world of diversity</p>
        <p className={styles.subtitle}>
          In tincidunt id netus fringilla. Ac viverra accumsan dignissim
          tincidunt etiam. Nisl, condimentum enim consequat sagittis.{" "}
        </p>
        <div className={styles.subscriptionContainer}>
          <Input className={styles.input} />
          <Button />
        </div>
      </div>
      <img alt="" className={styles.heroImage} src="./assets/hero.png" />
    </Col>
  );
};

export default Hero;
