import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./Delivery.module.css";

const { Title, Text } = Typography;

export default function Delivery() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col sx={20} md={12} lg={8} xl={8}>
          <Title level={2} className={styles.pageHeader}>
            Delivery
          </Title>
          <Title level={5}>When would you like to receive your order?</Title>
        </Col>
      </Row>
    </div>
  );
}
