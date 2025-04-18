
import React from 'react';
import Login from '@/components/auth/Login';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login - Hanzo AI</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
