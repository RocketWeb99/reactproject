// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card/Card";
import styles from "./Section1.module.scss";

const Section1 = () => {
  const cardArray = [
    {
      author: "./assets/author.png",
      title: "Write a title here",
      text: "Lectus eget amet at a, sit. Suspendisse nec, elementum sollicitudin turpis quisque sem in.",
      image: "./assets/tiger.png",
    },
    {
      author: "./assets/author.png",
      title: "Write a title here",
      text: "Lectus eget amet at a, sit. Suspendisse nec, elementum sollicitudin turpis quisque sem in.",
      image: "./assets/dear.png",
    },
    {
      author: "./assets/author.png",
      title: "Write a title here",
      text: "Lectus eget amet at a, sit. Suspendisse nec, elementum sollicitudin turpis quisque sem in.",
      image: "./assets/lion1.png",
    },
  ];
  return (
    <Col xs={11} md={10} className={`${styles.section1} mx-auto`}>
      <p className={styles.title}>Section 1</p>
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
  );
};

export default Section1;
