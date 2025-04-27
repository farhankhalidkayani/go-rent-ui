import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useAuth } from "../context/AuthContext";
import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, error: authError } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms and Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Call the register method from AuthContext
        const success = await register({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        });

        if (success) {
          // Redirect to login page after successful registration
          navigate("/login", {
            state: { message: "Registration successful! Please log in." },
          });
        }
      } catch (err) {
        console.error("Registration error:", err);
        setErrors((prev) => ({
          ...prev,
          general: "Failed to register. Please try again.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Create an Account</h1>
        <p className="auth-subtitle">
          Join Go-Rent today to start renting or listing items in your area.
        </p>

        <form onSubmit={handleSubmit}>
          {(errors.general || authError) && (
            <div className="error-message">{errors.general || authError}</div>
          )}

          <div className="name-row">
            <div className="form-row half">
              <Input
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-row half">
              <Input
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

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
              label="Create Password"
              type="password"
              placeholder="Create a secure password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-row">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-check-row terms-check">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="checkbox"
              disabled={isSubmitting}
            />
            <label htmlFor="agreeToTerms" className="checkbox-label">
              I agree to the{" "}
              <Link to="/terms" className="terms-link">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="terms-link">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.agreeToTerms && (
            <div className="checkbox-error">{errors.agreeToTerms}</div>
          )}

          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
