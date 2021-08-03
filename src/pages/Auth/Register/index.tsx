import React from "react";
import { Button, Card, Col, Form, Input, Layout, Row } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FooterPage } from "../../../components";
import { MSG } from "../../../configs";
import { RootState } from "../../../redux/store";
import { DocumentTitle } from "../../../hooks";
import { getServerErr } from "../../../utils/helper";

import { RegisterServices } from "./Service";
import s from "./style.module.scss";

const { Footer, Content } = Layout;

const Page = () => {
  DocumentTitle("Register");
  const register = useSelector((state: RootState) => state.register);

  const history = useHistory();
  const dispatch = useDispatch();
  const onSuccess = () => {
    history.push("/");
  };

  const _getServerErr = (field: string, status = false) =>
    getServerErr(register.error, field, status);

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
                  onFinish={(values) => {
                    RegisterServices.registerProcess(
                      dispatch,
                      values,
                      onSuccess
                    );
                  }}
                >
                  <Form.Item
                    name="name"
                    label="Full Name"
                    validateStatus={_getServerErr("name", true)}
                    help={_getServerErr("name")}
                    rules={[{ required: true, message: MSG.required }]}
                  >
                    <Input size="large" placeholder="Full Name" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    validateStatus={_getServerErr("email", true)}
                    help={_getServerErr("email")}
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
                    validateStatus={_getServerErr("password", true)}
                    help={_getServerErr("password")}
                    rules={[{ required: true, message: MSG.required }]}
                  >
                    <Input.Password size="large" placeholder="Password" />
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
                    />
                  </Form.Item>
                  <Form.Item>
                    <div className="d-flex justify-content-between">
                      <span></span>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        shape="round"
                        loading={register.loading}
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
