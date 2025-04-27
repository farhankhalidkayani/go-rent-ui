import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    bio: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Load user data when component mounts
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        address: user.address || "",
        city: user.city || "",
        state: user.state || "",
        zipCode: user.zipCode || "",
        bio: user.bio || "",
      }));
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // Call the update profile method from AuthContext
      await updateProfile(formData);
      setMessage({ text: "Profile updated successfully!", type: "success" });
      setIsEditing(false);
    } catch (error) {
      setMessage({
        text:
          error instanceof Error ? error.message : "Failed to update profile",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="page-header">
          <h1>My Profile</h1>
          <p>View and edit your personal information</p>
        </div>

        <div className="dashboard-navigation">
          <Link to="/dashboard" className="dashboard-link">
            Dashboard
          </Link>
          <Link to="/profile" className="dashboard-link active">
            Profile
          </Link>
          <Link to="/bookings" className="dashboard-link">
            Bookings
          </Link>
          <Link to="/my-listings" className="dashboard-link">
            My Listings
          </Link>
          <Link to="/reviews" className="dashboard-link">
            Reviews
          </Link>
          <Link to="/transactions" className="dashboard-link">
            Transactions
          </Link>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <div className="section-header">
              <h2>Personal Information</h2>
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  Edit Profile
                </Button>
              )}
            </div>

            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <Input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={true} // Email cannot be changed
                    required
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                  />
                </div>
              </div>

              <h3>Address Information</h3>
              <div className="form-grid">
                <div className="form-group full-width">
                  <Input
                    id="address"
                    name="address"
                    label="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="city"
                    name="city"
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="state"
                    name="state"
                    label="State"
                    value={formData.state}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                  />
                </div>
                <div className="form-group">
                  <Input
                    id="zipCode"
                    name="zipCode"
                    label="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    disabled={!isEditing || isLoading}
                  />
                </div>
              </div>

              <h3>About Me</h3>
              <div className="form-group full-width">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing || isLoading}
                  placeholder="Tell potential renters about yourself..."
                  className="textarea"
                ></textarea>
              </div>

              {isEditing && (
                <div className="button-group">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
