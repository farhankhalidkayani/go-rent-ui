import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return;
    }

    // In a real application, this would call an API endpoint to send a password reset email
    console.log("Password reset requested for:", email);

    // Show success message
    setIsSubmitted(true);
    setError("");
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <div className="forgot-password-card">
          <h1 className="forgot-password-title">Reset Your Password</h1>

          {!isSubmitted ? (
            <>
              <p className="forgot-password-description">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <form className="forgot-password-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    error={error}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <Button type="submit" fullWidth>
                  Send Reset Link
                </Button>
              </form>

              <div className="form-links">
                <Link to="/login" className="form-link">
                  Back to Login
                </Link>
              </div>
            </>
          ) : (
            <div className="reset-success">
              <div className="success-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="success-title">Check Your Email</h2>
              <p className="success-message">
                We've sent a password reset link to <strong>{email}</strong>.
                Please check your email and follow the instructions to reset
                your password.
              </p>
              <p className="success-note">
                If you don't receive an email within a few minutes, please check
                your spam folder.
              </p>
              <div className="success-actions">
                <Link to="/login">
                  <Button>Return to Login</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
