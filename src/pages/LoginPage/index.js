import React from "react";
import { Col, Row, Card, Form, Input, Button, Spin } from "antd";

import { useDispatch, useSelector } from "react-redux";
import "./style.less";
import useForm from "../../utils/useForm";
import { setToken } from "../../redux/action";

const LoginPage = () => {
  // let navigate = useNavigate();
  const dispatch = useDispatch();
  const { globalReducer } = useSelector((state) => state);
  const [form, setForm] = useForm({
    username: "",
    password: "",
  });

  const loginSubmit = (e) => {
    e.preventDefault();
    if (form.username == "" || form.password == "")
      return alert("please fill form");
    dispatch(setToken(form));
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
                <Input
                  placeholder="input placeholder"
                  onChange={(value) => setForm("username", value)}
                />
              </Form.Item>
              <Form.Item label="Password" required>
                <Input.Password
                  placeholder="input placeholder"
                  onChange={(value) => setForm("password", value)}
                />
              </Form.Item>
              <Row>
                <Col span={14} offset={5}>
                  <Form.Item>
                    <Button
                      type="submit"
                      className="btn-flat"
                      disabled={globalReducer.isLoading ? true : false}
                      onClick={loginSubmit}>
                      Login
                      {globalReducer.isLoading && (
                        <span className="ant-spin-dot ant-spin-dot-spin">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                      )}
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
