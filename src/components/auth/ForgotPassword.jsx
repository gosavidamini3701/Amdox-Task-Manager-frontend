import { useState } from "react";
import "./ForgotPassword.css";
import { forgotPassword } from "../../api/authApi"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your official email");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        userOfficialEmail: email,
      };

      await forgotPassword(payload);

      setMessage("Password reset link has been sent to your email");
      setEmail("");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">

        <h2 className="forgot-title">Forgot Password?</h2>
        <p className="forgot-subtitle">
          Enter your official email to reset your password
        </p>

        <form className="forgot-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Official Email</label>
            <input
              type="email"
              placeholder="Enter your official email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="error-text">{error}</p>}
          {message && <p className="success-text">{message}</p>}

          <button type="submit" className="forgot-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

        </form>

        <div className="forgot-footer">
          <a href="/login">Back to Login</a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;