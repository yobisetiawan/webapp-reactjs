import React from "react";
import { Form, Input, Button, Layout, Row, Col, Card, message } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FooterPage, Logo } from "../../../components";
import { MSG } from "../../../configs";
import { DocumentTitle } from "../../../hooks";
import { RootState } from "../../../redux/store";
import { getServerErr } from "../../../utils/helper";

import { ResetPasswordServices } from "./Service";

const { Footer, Content } = Layout;

const Page = () => {
  DocumentTitle("Forgot Password");
  const [form] = Form.useForm();
  const resetPassword = useSelector((state: RootState) => state.resetPassword);
  const dispatch = useDispatch();
  const history = useHistory();

  const { token } = useParams<{ token?: string }>();

  const onSuccess = () => {
    message.success("New Password Saved!");
    form.resetFields();
    setTimeout(() => {
      history.push("/login");
    }, 400);
  };

  const _getServerErr = (field: string, status = false) =>
    getServerErr(resetPassword.error, field, status);

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
                    const gToken = token || "";
                    ResetPasswordServices.run(
                      dispatch,
                      gToken,
                      values,
                      onSuccess
                    );
                  }}
                >
                  <Form.Item
                    label="New Password"
                    name="password"
                    validateStatus={_getServerErr("password", true)}
                    help={_getServerErr("password")}
                    rules={[{ required: true, message: MSG.required }]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password"
                      className="yb-input"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password Confirmation"
                    name="password_confirmation"
                    help={_getServerErr("password_confirmation")}
                    rules={[{ required: true, message: MSG.required }]}
                    className="mb-5"
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password Confirmation"
                      className="yb-input"
                    />
                  </Form.Item>

                  <Form.Item className="mb-0">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={resetPassword.loading}
                      className="yb-btn yb-w-100"
                    >
                      Save
                    </Button>
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
