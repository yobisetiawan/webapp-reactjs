import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";
import { useHistory } from "react-router-dom";

import { FooterPage } from "../../../components";
import { MSG } from "../../../configs";
import { DocumentTitle } from "../../../hooks";

import s from "./style.module.scss";

const { Footer, Content } = Layout;
const Page = () => {
  DocumentTitle("Forgot Password");
  const history = useHistory();

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className={s.forgot_password_page}>
              <Card>
                <h1 className="mb-5">Forgot Password</h1>
                <Form layout="vertical">
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: MSG.required },
                      { type: "email", message: MSG.email },
                    ]}
                    className="mb-5"
                  >
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>

                  <Form.Item>
                    <div className="d-flex justify-content-between">
                      <Button
                        type="link"
                        style={{ paddingLeft: 0 }}
                        onClick={() => {
                          history.push("/login");
                        }}
                      >
                        Rememeber your password? login
                      </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        shape="round"
                      >
                        Send
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
