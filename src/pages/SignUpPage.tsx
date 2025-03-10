
import React from 'react';
import SignUp from '@/components/auth/SignUp';
import { Helmet } from 'react-helmet';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up - Hanzo AI</title>
      </Helmet>
      <SignUp />
    </>
  );
};

export default SignUpPage;
