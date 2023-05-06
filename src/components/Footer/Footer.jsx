import React from "react";
import Link from "next/link";
import { Col, Row } from "antd";

function Footer() {
  return (
    <div>
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
