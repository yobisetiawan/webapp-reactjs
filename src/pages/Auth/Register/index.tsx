import React from "react";
import { Button, Card, Col, Form, Input, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";

import { FooterPage } from "../../../components";
import { MSG } from "../../../configs";

import { RegisterServices } from "./Service";
import s from "./style.module.scss";

const { Footer, Content } = Layout;

const Page = () => {
  const history = useHistory();

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className={s.login_page}>
              <Card>
                <h1 className="mb-5">Register</h1>
                <Form
                  layout="vertical"
                  onFinish={() => { 
                    RegisterServices.registerProcess(() => {
                      history.push("/");
                    });
                  }}
                >
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[{ required: true, message: MSG.required }]}
                  >
                    <Input size="large" placeholder="Full Name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: MSG.required },
                      { type: "email", message: MSG.email },
                    ]}
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: MSG.required }]}
                  >
                    <Input.Password size="large" placeholder="Password" />
                  </Form.Item>
                  <Form.Item
                    label="Password Confirmation"
                    name="password_confirmation"
                    rules={[{ required: true, message: MSG.required }]}
                    className="mb-5"
                  >
                    <Input.Password size="large" placeholder="Password Confirmation" />
                  </Form.Item>
                  <Form.Item>
                    <div className="d-flex justify-content-between">
                      <span></span>
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
