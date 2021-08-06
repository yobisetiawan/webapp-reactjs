import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, message } from "antd";

import { AppContent } from "../../../components";
import { RootState } from "../../../redux/store";
import { getServerErr } from "../../../utils/helper";
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

  return (
    <AppContent title="Profile">
      <div className="pt-3">
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
            <Avatar size={64} icon={<UserOutlined />} />
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
