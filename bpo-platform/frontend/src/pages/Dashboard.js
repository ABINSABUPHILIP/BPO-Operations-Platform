import React from 'react';
import { Card } from 'antd';
import './styles/dashboard.css';

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Total Projects" className="bg-blue-50">
        <p className="text-2xl font-bold">12</p>
      </Card>

      <Card title="Active Users" className="bg-green-50">
        <p className="text-2xl font-bold">45</p>
      </Card>

      <Card title="Pending Tasks" className="bg-yellow-50">
        <p className="text-2xl font-bold">8</p>
      </Card>
    </div>
  );
};

export default DashboardLayout;