import React from 'react';
import { Menu, Icon } from 'antd';
import { HomeOutlined, DashboardOutlined } from '@ant-design/icons';

const NavigationBar = () => {
  return (
    <div className="bg-white shadow-sm">
      <Menu mode="horizontal" defaultSelectedKey="/dashboard">
        <Menu.Item key="/" icon={<Icon component={HomeOutlined} />}>
          Home
        </Menu.Item>
        <Menu.Item key="/dashboard" icon={<Icon component={DashboardOutlined} />}>
          Dashboard
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavigationBar;