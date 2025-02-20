import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

interface UserFormProps {
  onSubmit: (formData: any) => void;
}

const UserForm = ({ onSubmit }: UserFormProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      onSubmit(form.getFieldsValue());
    } catch (error) {}
  };

  return (
    <div className="user-form">
      <h2>Add New User</h2>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter a username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ 
            required: true,
            type: 'email',
            message: 'Please enter a valid email!'
          }]}
        >
          <Input type="email" />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;