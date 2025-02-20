import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <main className="content">
        <h1>Welcome to the Dashboard!</h1>
        {/* Add dashboard content here */}
      </main>
    </div>
  );
};

export default DashboardPage;