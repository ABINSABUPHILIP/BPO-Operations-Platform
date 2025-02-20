import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Implement login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Form className="w-full max-w-md" onFinish={onFinish}>
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        
        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
          <Input
            prefix={<UserOutlined className="mr-2 text-gray-500" />}
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password
            prefix={<LockOutlined className="mr-2 text-gray-500" />}
            placeholder="Enter your password"
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          style={{
            backgroundColor: '#1890ff',
            borderColor: '#1890ff'
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;