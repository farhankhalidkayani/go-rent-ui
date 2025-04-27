import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Select from "../components/common/Select";
import "./RegisterPage.css";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.userType) {
      newErrors.userType = "Please select a user type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form data to backend
      console.log("Form data submitted:", formData);
      // Here you would typically make an API call to register the user
      alert(
        "Registration successful! Please check your email to verify your account."
      );
    }
  };

  const userTypeOptions = [
    { value: "renter", label: "I want to rent items (Renter)" },
    { value: "provider", label: "I want to list items for rent (Provider)" },
    { value: "both", label: "Both" },
  ];

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Create Your Go-Rent Account</h1>
        <p className="auth-subtitle">
          Join our community and start renting or listing items today.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-row">
              <Input
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
              />
            </div>

            <div className="form-row">
              <Input
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
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
            />
          </div>

          <div className="form-row">
            <Input
              id="phone"
              name="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />
          </div>

          <div className="form-row">
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
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
            />
          </div>

          <div className="form-row">
            <Select
              id="userType"
              name="userType"
              label="I am registering as"
              options={userTypeOptions}
              value={formData.userType}
              onChange={handleChange}
              error={errors.userType}
              required
            />
          </div>

          <div className="form-row">
            <Button type="submit" fullWidth>
              Create Account
            </Button>
          </div>

          <div className="auth-footnote">
            <p>
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="auth-link">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="auth-link">
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>

        <div className="auth-footer">
          <p className="auth-footer-text">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
