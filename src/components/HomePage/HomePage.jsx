import React from "react";
import { Col, Row, Typography, Button } from "antd";
import Link from "next/link";
import styles from "./Homepage.module.css";
import Logo from "../Logo/Logo";

function HomePage() {
  const { Title } = Typography;
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: "url(/landing-page/background-landing-page.jpg",
      }}
    >
      <Row justify="center">
        <Col className={styles.textContainer} span={18}>
          <Row justify="center" className={styles.logo}>
            <Col span={8}>
              <Logo />
            </Col>
          </Row>
          <Title className={styles.textColor}>ONLINE ORDER</Title>
          <Title className={styles.textColor} level={3}>
            How do you want to recceive your order ?
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={12} lg={10} xl={12}>
          <Link href="/delivery">
            <Button size="large" className={styles.buttonDelivery}>
              <p>Delivery</p>
            </Button>
          </Link>
        </Col>
        <Col xs={24} md={12} lg={10} xl={12}>
          <Button size="large" className={styles.buttonTakeOut}>
            Pick up
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
