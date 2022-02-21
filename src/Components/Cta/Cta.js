// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import { Col } from "react-bootstrap";
import Button from "../Button/Button";
import styles from "./Cta.module.scss";

const CtaSection = () => {
  return (
    <Col xs={11} md={10} className={`${styles.ctaSection} mx-auto px-3`}>
      <Col className={styles.content}>
        <p className={styles.title}>Ready? Try for free</p>
        <p className={styles.subtitle}>
          In tincidunt id netus fringilla. Ac viverra accumsan dignissim
          tincidunt etiam. Nisl, condimentum enim consequat sagittis.{" "}
        </p>
        <div className="d-flex justify-content-center align-items-center mt-4 w-100">
          <Button />
        </div>
      </Col>
    </Col>
  );
};

export default CtaSection;
