import React from "react";
import { Col, Row, Card, Form, Input, Button } from "antd";
import Cookies from "universal-cookie";
import "./style.less";
const cookies = new Cookies();

const LoginPage = () => {
  // let navigate = useNavigate();

  const loginSubmit = () => {
    setTimeout(() => {
      cookies.set("token", "ceritanya-token");
    }, 5000);
  };
  return (
    <>
      <Row>
        <Col span={24} className="container-login">
          <Card bordered={true} className="card-width">
            <h1 className="title-card">Login</h1>
            <br />
            <Form layout="vertical">
              <Form.Item label="Username" required>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Password" required>
                <Input.Password placeholder="input placeholder" />
              </Form.Item>
              <Row>
                <Col span={14} offset={5}>
                  <Form.Item>
                    <Button
                      type="primary"
                      className="btn-flat"
                      onClick={loginSubmit}>
                      Login
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
