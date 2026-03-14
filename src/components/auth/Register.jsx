import "./Register.css";
import React, { useState } from "react";
import { registerUser } from "../../api/authApi"; // make sure path is correct

const Register = () => {
  // Form state
  const [userName, setUserName] = useState("");
  const [userOfficialEmail, setUserOfficialEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!userName || !userOfficialEmail || !password || !role) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await registerUser({ userName, userOfficialEmail, password, role });
      console.log("Registration success:", response.data);
      setSuccess("Account created successfully! You can now login.");
      // Optionally redirect to login page
      // window.location.href = "/login";
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Join Amdox Task Management</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Official Email</label>
            <input
              type="email"
              placeholder="Enter official email"
              value={userOfficialEmail}
              onChange={(e) => setUserOfficialEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select role</option>
              <option value="ADMIN">Admin</option>
              <option value="DEVELOPER">Developer</option>
              <option value="MANAGER">Manager</option>
            </select>
          </div>

          {error && <p className="register-error">{error}</p>}
          {success && <p className="register-success">{success}</p>}

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
