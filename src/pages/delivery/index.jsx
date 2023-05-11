import React from "react";
import { Typography } from "antd";
import styles from "./Delivery.module.css";

const { Title } = Typography;

export default function Delivery() {
  return (
    <div>
      <Title className={styles.HeaderPage}>Delivery</Title>
    </div>
  );
}
