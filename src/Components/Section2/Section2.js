import React from "react";
import Card from "./Card/Card";
import { Row, Col } from "react-bootstrap";
import styles from "./Section2.module.scss";

const Section2 = () => {
  const cardArray = [
    {
      title: "Write a title here",
      text: "Lectus eget amet at a, sit.",
      image: "./assets/hippo.png",
    },
    {
      title: "Write a title here",
      text: "Lectus eget amet at a, sit.",
      image: "./assets/hippo.png",
    },
    {
      title: "Write a title here",
      text: "Lectus eget amet at a, sit.",
      image: "./assets/hippo.png",
    },
  ];
  return (
    <div className={`${styles.section2}`}>
      <p className={styles.title}>Section 2</p>
      <Col xs={11} md={10} className={` mx-auto`}>
        <Row className={`${styles.cards} justify-content-center`}>
          {cardArray.map((el, i) => (
            <Col
              key={i}
              sm={8}
              md={6}
              xl={4}
              className={` justify-content-center align-items-center ${styles.card} my-2 my-xl-0`}
            >
              <Card {...el} />
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default Section2;
