import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FooterPage, Logo } from "../../../components";
import { MSG } from "../../../configs";
import { DocumentTitle } from "../../../hooks";
import { RootState } from "../../../redux/store";
import { getServerErr } from "../../../utils/helper";

import { ForogtPasswordServices } from "./Service";

const { Footer, Content } = Layout;

const Page = () => {
  DocumentTitle("Forgot Password");
  const [form] = Form.useForm();
  const forgotPassword = useSelector(
    (state: RootState) => state.forgotPassword
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = () => {
    message.success("Email has sent!");
    form.resetFields();
  };

  const _getServerErr = (field: string, status = false) =>
    getServerErr(forgotPassword.error, field, status);

  return (
    <Layout>
      <Content>
        <Row>
          <Col span={24}>
            <div className="yb-auth-page">
              <Logo />
              <Card className="yb-auth-form">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={(values) => {
                    ForogtPasswordServices.run(dispatch, values, onSuccess);
                  }}
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: MSG.required },
                      { type: "email", message: MSG.email },
                    ]}
                    validateStatus={_getServerErr("email", true)}
                    help={_getServerErr("email")}
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
                      loading={forgotPassword.loading}
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
