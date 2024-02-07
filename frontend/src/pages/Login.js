import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[40%] border-2 border-gray-300 rounded-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-center text-[30px]">Login Page</h1>
          <p className="text-center text-[20px]">
            Provide your credentials to Sign In.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <input
            className="w-[80%] border-2 border-gray-300"
            type="text"
            placeholder="Username"
          />
          <input
            className="mt-4 w-[80%] border-2 border-gray-300"
            type="password"
            placeholder="Password"
          />
          <button className="mt-4 w-[80%] border-2 bg-green-300">Login</button>
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
