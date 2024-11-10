import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return (
    <Layout title="Register - Ecommerce App">
      <div className="register">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
