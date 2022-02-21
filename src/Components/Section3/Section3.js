// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Testimonial from "../Testimonial/Testomonial";
import { Col } from "react-bootstrap";
import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <Col
      xs={10}
      md={10}
      lg={9}
      xl={8}
      xxl={6}
      className={`${styles.section3} mx-auto`}
    >
      <p className={styles.title}>Section 3</p>
      <div className={styles.carrousel}>
        <Testimonial className={styles.testimonial} />
        <div className={styles.navigation}>
          <p className={styles.previous}>Previous</p>
          <p className={styles.previous}>Next</p>
        </div>
      </div>
    </Col>
  );
};

export default Section3;
