import React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Row,
} from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FooterPage } from "../../../components";
import { MSG } from "../../../configs";
import { RootState } from "../../../redux/store";
import { getDefValue } from "../../../utils/helper";
import { DocumentTitle } from "../../../hooks";

import { LoginServices } from "./Service";
import s from "./style.module.scss";

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
            <div className={s.login_page}>
              <Card>
                <h1 className="mb-5">Login</h1>
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
                    <Input size="large" placeholder="Email Address" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: MSG.required }]}
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
                        loading={login.loading}
                        shape="round"
                      >
                        Submit
                      </Button>
                    </div>
                    <Divider className="mt-5">OR</Divider>
                    <div className="text-center ">
                      <Button
                        type="link"
                        onClick={() => {
                          history.push("/register");
                        }}
                      >
                        Create an Acoount
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
