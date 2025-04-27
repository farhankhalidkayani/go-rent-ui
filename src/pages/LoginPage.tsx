import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit login credentials to backend
      console.log("Login attempt:", formData);
      // Here you would make an API call to authenticate the user
      alert("Login successful!");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back!</h1>
        <p className="text-gray-600 text-center mb-8">
          Sign in to your Go-Rent account to continue your rental journey.
        </p>

        <form onSubmit={handleSubmit}>
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
          />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="text-primary hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" fullWidth>
            Sign In
          </Button>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Or continue with
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0.4c-5.3 0-9.6 4.3-9.6 9.6 0 4.5 3.1 8.4 7.4 9.4 0 0 0.1 0 0.1 0 0.4 0 0.5-0.2 0.5-0.4 0-0.2 0-0.7 0-1.4-2.8 0.5-3.4-1.3-3.4-1.3-0.4-1.1-1.1-1.4-1.1-1.4-0.9-0.6 0.1-0.6 0.1-0.6 1 0.1 1.5 1 1.5 1 0.9 1.5 2.4 1.1 2.9 0.8 0.1-0.6 0.3-1.1 0.6-1.3-2.2-0.3-4.6-1.1-4.6-5 0-1.1 0.4-2 1-2.7-0.1-0.3-0.5-1.4 0.1-2.9 0 0 0.8-0.3 2.7 1 0.8-0.2 1.7-0.3 2.5-0.3 0.8 0 1.7 0.1 2.5 0.3 1.9-1.3 2.7-1 2.7-1 0.6 1.5 0.2 2.6 0.1 2.9 0.6 0.7 1 1.6 1 2.7 0 3.8-2.4 4.7-4.6 5 0.3 0.3 0.6 0.9 0.6 1.8 0 1.3 0 2.3 0 2.6 0 0.2 0.1 0.5 0.5 0.4 4.3-1.1 7.4-4.9 7.4-9.4 0-5.3-4.3-9.6-9.6-9.6z" />
                </svg>
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
