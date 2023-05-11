import React from "react";
import { Col, Row, Typography, Button } from "antd";
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
          <Row justify="center" className={styles.logo}>
            <Col span={8}>
              <Logo />
            </Col>
          </Row>
          <Title className={styles.text}>ONLINE ORDER</Title>
          <Title className={styles.text} level={3}>
            How do you want to recceive your order ?
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button size="large">Delievry</Button>
        </Col>
        <Col>
          <Button size="large">Take out</Button>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
