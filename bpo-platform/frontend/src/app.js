import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DashboardLayout from './pages/Dashboard';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavigationBar />
        <main className="pt-8 px-4 sm:px-6 lg:px-8">
          <DashboardLayout />
        </main>
      </div>
    </Router>
  );
}

export default App;