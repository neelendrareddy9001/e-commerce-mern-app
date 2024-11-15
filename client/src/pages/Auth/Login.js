import React from "react";
import Layout from "../../components/Layout/Layout";

import { useAuth } from "../../context/Auth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Login Page</h1>
    </Layout>
  );
};

export default Login;
