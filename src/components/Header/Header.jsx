import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { Row, Col, Button } from "antd";

function Header() {
  return (
    <div className={styles.container}>
      <Row justify="space-between">
        <Col span={4}>
          <Logo />
        </Col>
        <Col span={12}>
          <Row justify="end" className={styles.headerText}>
            <Col span={6}>
              <Link href="./">HOME</Link>
            </Col>
            <Col span={6}>
              <p>CONTACTLESS DELIVERY</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
