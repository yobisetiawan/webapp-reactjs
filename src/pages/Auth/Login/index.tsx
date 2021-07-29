import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";

const { Footer, Content } = Layout;

import s from "./style.module.scss";
import { useHistory } from "react-router-dom";
import { FooterPage } from "../../../components";

const Page = () => {
  const rules = {
    email: "Invalid E-mail",
    required: "This is required",
  };

  const history = useHistory();

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className={s.login_page}>
              <Card>
                <h1 className="mb-5">Login</h1>
                <Form layout="vertical" initialValues={{ remember: true }}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: rules.required },
                      { type: "email", message: rules.email },
                    ]}
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: rules.required }]}
                    className="mb-5"
                  >
                    <Input.Password size="large" placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <div className="d-flex justify-content-between">
                      <Button
                        type="link"
                        style={{ paddingLeft: 0 }}
                        onClick={() => {
                          history.push("/forgot-password");
                        }}
                      >
                        Forgot your password?
                      </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        shape="round"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </Card>
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
