import React from "react";
import { Form, Input, Button } from "antd";

const Page = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form layout="vertical" initialValues={{ remember: true }}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input size="large" placeholder="Email Address" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <div>
            <Button type="link">Forgot your password?</Button>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Page;
