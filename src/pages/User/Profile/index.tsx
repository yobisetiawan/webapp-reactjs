import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CameraOutlined, UserOutlined } from "@ant-design/icons";
import {
  Alert,
  Avatar,
  Button,
  Form,
  Input,
  message,
  Space,
  Tooltip,
} from "antd";

import { AppContent } from "../../../components";
import { RootState } from "../../../redux/store";
import { getDefValue, getServerErr } from "../../../utils/helper";
import { MSG } from "../../../configs";

import { ChangeProfileServices } from "./Service";

const Page = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const changeProfile = useSelector((state: RootState) => state.changeProfile);

  const _getServerErr = (field: string, status = false) =>
    getServerErr(changeProfile.error, field, status);

  const onSuccess = () => {
    message.success("Profile was saved!");
  };

  const verified = getDefValue(auth.user, "email_verified_at") !== "";

  return (
    <AppContent title="Profile">
      <div className="pt-3">
        {!verified && (
          <Alert
            message="Warning"
            description="Please verify your email."
            type="warning"
            showIcon
            className="mb-5"
            action={
              <Space>
                <Button size="small" danger>
                  Resend Email
                </Button>
              </Space>
            }
          />
        )}

        <Form
          labelCol={{ sm: { span: 24 }, lg: { span: 24 }, xl: { span: 4 } }}
          wrapperCol={{ sm: { span: 24 }, lg: { span: 24 }, xl: { span: 5 } }}
          initialValues={{
            name: auth.user.name,
            email: auth.user.email,
          }}
          onFinish={(values) => {
            ChangeProfileServices.profile(dispatch, values, onSuccess);
          }}
        >
          <Form.Item wrapperCol={{ xl: { offset: 4 } }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div
                style={{ position: "absolute", top: "-10px", right: "-10px" }}
              >
                <Tooltip title="Edit">
                  <Button shape="circle" icon={<CameraOutlined />} />
                </Tooltip>
              </div>
            </div>
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="name"
            validateStatus={_getServerErr("name", true)}
            help={_getServerErr("name")}
            rules={[{ required: true, message: MSG.required }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            validateStatus={_getServerErr("email", true)}
            help={_getServerErr("email")}
            rules={[
              { required: true, message: MSG.required },
              { type: "email", message: MSG.email },
            ]}
          >
            <Input placeholder="Email" readOnly />
          </Form.Item>

          <Form.Item wrapperCol={{ xl: { offset: 4 } }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={changeProfile.loading}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AppContent>
  );
};

export default Page;
