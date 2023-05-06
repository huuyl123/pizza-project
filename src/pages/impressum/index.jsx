import React from "react";
import { Typography } from "antd";
import styles from "./Impressum.module.css";

export default function Impressum() {
  const { Title } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <Title>IMPRESSUM</Title>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Owner / Managing Director:</Title>
        <p>Mr. AAAA</p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Address:</Title>
        <p>FoodyFoody</p>
        <p>Loehrstrasse 60</p>
        <p>56068 Koblenz</p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Email:</Title>
        <p>info@foodyfoody.de</p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Website:</Title>
        <p>https://www.foodyfoody.de</p>
      </div>
    </div>
  );
}
