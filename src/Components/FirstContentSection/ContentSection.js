import React from "react";
import { Row, Col } from "react-bootstrap";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

import styles from "./ContentSection.module.scss";

const ContentSection = ({ direction, data }) => {
  return (
    <Col xs={11} md={10} className={`${styles.contentSection} mx-auto`}>
      <Row
        style={{ flexDirection: direction }}
        className={`align-items-center`}
      >
        <Col
          md={6}
          className={`d-flex justify-content-center align-items-center`}
        >
          {" "}
          <div className={styles.container}>
            <div className={styles.badges}>
              <Badge className={styles.badge} />
              <Badge
                className={styles.badge}
                background="rgba(255, 248, 224, 1)"
              />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{data.title}</p>
              <p className={styles.subtitle}>{data.text}</p>
              <Button />
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className={`d-flex justify-content-center align-items-center`}
        >
          <img alt="" className={styles.sectionImage} src={data.image} />
        </Col>
      </Row>
    </Col>
  );
};

export default ContentSection;
