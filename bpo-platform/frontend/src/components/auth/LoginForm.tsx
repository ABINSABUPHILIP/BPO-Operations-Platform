import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onLogin(values.email as string, values.password as string);
    } catch (error) {}
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;