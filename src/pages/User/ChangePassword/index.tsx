import React from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { AppContent } from "../../../components";
import { getServerErr } from "../../../utils/helper";
import { MSG } from "../../../configs";
import { RootState } from "../../../redux/store";

import { ChangePasswordServices } from "./Service";

const Page = () => {
  const [form] = Form.useForm();
  const changePass = useSelector((state: RootState) => state.changePassword);

  const dispatch = useDispatch();

  const _getServerErr = (field: string, status = false) =>
    getServerErr(changePass.error, field, status);

  const onSuccess = () => {
    message.success("New Password Saved!");
    form.resetFields();
  };

  return (
    <AppContent title="Change Password">
      <div className="pt-3">
        <Form
          form={form}
          labelCol={{ sm: { span: 24 }, lg: { span: 24 }, xl: { span: 4 } }}
          wrapperCol={{ sm: { span: 24 }, lg: { span: 24 }, xl: { span: 5 } }}
          onFinish={(values) => {
            ChangePasswordServices.run(dispatch, values, onSuccess);
          }}
        >
          <Form.Item
            label="Old Password"
            name="old_password"
            validateStatus={_getServerErr("old_password", true)}
            help={_getServerErr("old_password")}
            rules={[{ required: true, message: MSG.required }]}
          >
            <Input.Password placeholder="Old Password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="password"
            validateStatus={_getServerErr("password", true)}
            help={_getServerErr("password")}
            rules={[{ required: true, message: MSG.required }]}
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>
          <Form.Item
            label="Password Confirmation"
            name="password_confirmation"
            help={_getServerErr("password_confirmation")}
            rules={[{ required: true, message: MSG.required }]}
          >
            <Input.Password placeholder="Password Confirmation" />
          </Form.Item>
          <Form.Item wrapperCol={{ xl: { offset: 4 } }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={changePass.loading}
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AppContent>
  );
};

export default Page;
