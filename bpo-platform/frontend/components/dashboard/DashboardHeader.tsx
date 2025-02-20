import React from 'react';
import { Menu, Dropdown } from 'antd';

const DashboardHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="dashboard-header">
      <div className="logo">BPO Platform</div>
      <div className="nav-items">
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link">
            User Menu
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardHeader;