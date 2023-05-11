import React from "react";
import { Typography, Row, Col, Radio, TimePicker } from "antd";
import { useState } from "react";
import styles from "./Delivery.module.css";
import dayjs from "dayjs";

const { Title, Text } = Typography;

const format = "HH:mm";

export default function Delivery() {
  //Set value for radio
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const disableHours = [0, 1, 2, 3, 4, 5, 6, 7, 21, 22, 23, 24];

  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col sx={20} md={12} lg={8} xl={8}>
          <Title level={2} className={styles.pageHeader}>
            Delivery
          </Title>
          <Title level={5}>When would you like to receive your order?</Title>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>As soon as possible</Radio>
            <Radio value={2}>Later</Radio>
          </Radio.Group>
          {value === 2 ? (
            <div>
              <TimePicker
                format={format}
                size="large"
                minuteStep={15}
                disabledHours={() => disableHours}
              />
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </div>
  );
}
