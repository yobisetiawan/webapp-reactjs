import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card } from "antd";
import { useHistory } from "react-router-dom";

import { FooterPage, Logo } from "../../../components";
import { MSG } from "../../../configs";
import { DocumentTitle } from "../../../hooks";

const { Footer, Content } = Layout;

const Page = () => {
  DocumentTitle("Forgot Password");
  const history = useHistory();

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className="yb-auth-page">
              <Logo />
              <Card className="yb-auth-form">
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
                    <Input
                      size="large"
                      placeholder="Email Address"
                      className="yb-input"
                    />
                  </Form.Item>

                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="yb-btn yb-w-100"
                    >
                      Send
                    </Button>
                  </Form.Item>
                </Form>
              </Card>

              <div className="text-center">
                <Button
                  type="link"
                  style={{ paddingLeft: 0 }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Rememeber your password?
                </Button>
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
