import React from "react";
import { Col, Row, Typography } from "antd";
import styles from "./Homepage.module.css";
import Logo from "../Logo/Logo";

function HomePage() {
  const { Title } = Typography;
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url(/landing-page/background-landing-page.png",
      }}
    >
      <Row justify="center">
        <Col className={styles.textContainer} span={18}>
          <Row justify="center">
            <Col span={6}>
              <Logo />
            </Col>
          </Row>
          <Title className={styles.text}>ONLINE ORDER</Title>
          <Title className={styles.text} level={3}>
            How do you want to recceive your order ?
          </Title>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
