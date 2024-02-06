import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Login Page</h1>
          <p>Provide your credentials to Login.</p>
        </div>
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
        <div>
          <p>Don't have an account?</p>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Login;