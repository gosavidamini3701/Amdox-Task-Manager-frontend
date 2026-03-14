import "./Login.css";
import React, { useState } from "react";
import { loginUser } from "../../api/authApi"; 

const Login = () => {
  const [userOfficialEmail, setUserOfficialEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Call loginUser with keys matching backend JSON
      const response = await loginUser({ userOfficialEmail, password });
      console.log("Login success:", response.data);

      // If JWT is returned, store it
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Redirect to dashboard
      window.location.href = "/dashboard"; 

    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Login to manage your tasks efficiently
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={userOfficialEmail}
              onChange={(e) => setUserOfficialEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <p>
            Don’t have an account? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
