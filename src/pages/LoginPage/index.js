import React from "react";
import { Col, Row, Card } from "antd";

const LoginPage = () => {
  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#000",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Card
            title="Login"
            bordered={false}
            style={{
              width: 500,
            }}>
            <p>Form</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
