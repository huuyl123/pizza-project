import React from "react";
import Link from "next/link";
import { Col, Row } from "antd";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <Row justify="end">
        <Col span={3}>
          <Link href="/data-protection">Data Protection</Link>
        </Col>
        <Col span={3}>
          <Link href="/impressum">Impressum</Link>
        </Col>
        <Col span={3}>Contactless delivery</Col>
      </Row>
    </div>
  );
}

export default Footer;
