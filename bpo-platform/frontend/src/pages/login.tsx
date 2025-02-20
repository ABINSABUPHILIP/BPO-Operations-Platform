import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Implement login logic here
    if (email && password) {
      setIsLoggedIn(true);
      // Redirect using the navigate function
      navigate('/dashboard');
    }
  };

  // If logged in, automatically redirect to dashboard
  if (isLoggedIn) {
    navigate('/dashboard', { replace: true });
    return null;
  }

  return (
    <div className="login-page">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;