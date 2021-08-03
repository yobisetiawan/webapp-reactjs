import React from "react";
import { Form, Input, Button, Layout, Row, Col } from "antd";

const { Footer, Content } = Layout;

import s from "./style.module.scss";

const Page = () => {
  const rules = {
    email: "Invalid E-mail",
    required: "This is required",
  };

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className={s.login_page}>
              <h1>Login</h1>
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
                >
                  <Input.Password size="large" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <div className="d-flex justify-content-between">
                    <Button type="link" style={{ paddingLeft: 0 }}>
                      Forgot your password?
                    </Button>
                    <Button type="primary" htmlType="submit" size="large">
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer className="text-center">Project Name</Footer>
    </Layout>
  );
};

export default Page;
