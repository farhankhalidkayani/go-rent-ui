import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useAuth } from "../context/AuthContext";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Call the login method from AuthContext
        const success = await login(
          formData.email,
          formData.password,
          formData.rememberMe
        );

        if (success) {
          // Redirect to dashboard or home page after successful login
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Login error:", err);
        setErrors((prev) => ({
          ...prev,
          general: "Failed to login. Please check your credentials.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Welcome Back!</h1>
        <p className="auth-subtitle">
          Sign in to your Go-Rent account to continue your rental journey.
        </p>

        <form onSubmit={handleSubmit}>
          {(errors.general || authError) && (
            <div className="error-message">{errors.general || authError}</div>
          )}

          <div className="form-row">
            <Input
              id="email"
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-row">
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-check-row">
            <div className="remember-me">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="checkbox"
                disabled={isSubmitting}
              />
              <label htmlFor="rememberMe" className="checkbox-label">
                Remember me
              </label>
            </div>
            <div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register" className="auth-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
