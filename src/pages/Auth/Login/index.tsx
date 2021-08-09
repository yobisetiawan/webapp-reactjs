import React from "react";
import { Alert, Button, Card, Col, Form, Input, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FooterPage, Logo } from "../../../components";
import { MSG } from "../../../configs";
import { RootState } from "../../../redux/store";
import { getDefValue } from "../../../utils/helper";
import { DocumentTitle } from "../../../hooks";

import { LoginServices } from "./Service";

const { Footer, Content } = Layout;

const Page = () => {
  DocumentTitle("Login");

  const login = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const msgErr = getDefValue(login.error, "error");
  const onSuccess = () => {
    history.push("/");
  };

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className="yb-auth-page">
              <Logo />
              <Card className="yb-auth-form">
                {msgErr !== "" && (
                  <Alert
                    message={msgErr}
                    type="error"
                    showIcon
                    className="mb-3 py-3"
                  />
                )}

                <Form
                  layout="vertical"
                  onFinish={(values) => {
                    LoginServices.loginProcess(dispatch, values, onSuccess);
                  }}
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: MSG.required },
                      { type: "email", message: MSG.email },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Email Address"
                      className="yb-input"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: MSG.required }]}
                    className="mb-5"
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password"
                      className="yb-input"
                    />
                  </Form.Item>
                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={login.loading}
                      className="yb-w-100 yb-btn"
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Card>

              <div className="text-center ">
                <div>
                  <Button
                    type="link"
                    onClick={() => {
                      history.push("/forgot-password");
                    }}
                  >
                    Forgot your password?
                  </Button>
                </div>
                <div>
                  <Button
                    type="link"
                    onClick={() => {
                      history.push("/register");
                    }}
                  >
                    Create an Acoount
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer className="text-center">
        <FooterPage />
      </Footer>
    </Layout>
  );
};

export default Page;
