import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./UserDashboardPage.css";

// Mock user data
const userData = {
  id: "user123",
  firstName: "Alex",
  lastName: "Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  joinDate: "January 2024",
  location: "San Francisco, CA",
  bio: "Technology enthusiast and outdoor adventurer. I love trying new gadgets and exploring nature on the weekends.",
  verified: {
    email: true,
    phone: true,
    government: true,
  },
};

// Mock rental history data
const rentalHistory = [
  {
    id: "rental1",
    item: "Canon EOS 5D Mark IV",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    startDate: "April 15, 2025",
    endDate: "April 20, 2025",
    status: "active",
    totalPrice: 245.0,
  },
  {
    id: "rental2",
    item: "Mountain Bike - Trek X-Caliber 8",
    image:
      "https://images.unsplash.com/photo-1605008803801-051eefd3b8d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Sports & Outdoors",
    startDate: "March 10, 2025",
    endDate: "March 12, 2025",
    status: "completed",
    totalPrice: 85.0,
  },
  {
    id: "rental3",
    item: "DJI Mavic Air 2 Drone",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    startDate: "April 5, 2025",
    endDate: "April 7, 2025",
    status: "completed",
    totalPrice: 120.0,
  },
];

// Mock user listings data
const userListings = [
  {
    id: "listing1",
    title: "Professional Video Projector",
    image:
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 45,
    location: "San Francisco, CA",
    rating: 4.8,
    rentalCount: 12,
    listed: "January 15, 2025",
  },
  {
    id: "listing2",
    title: "Camping Tent (4-Person)",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 25,
    location: "San Francisco, CA",
    rating: 4.6,
    rentalCount: 8,
    listed: "February 3, 2025",
  },
];

// Mock recent transactions
const recentTransactions = [
  {
    id: "t1",
    description: "Mountain Bike Rental",
    date: "March 12, 2025",
    amount: 85.0,
    type: "payment",
  },
  {
    id: "t2",
    description: "DJI Mavic Air 2 Rental",
    date: "April 7, 2025",
    amount: 120.0,
    type: "payment",
  },
  {
    id: "t3",
    description: "Camping Tent Rental",
    date: "April 14, 2025",
    amount: 75.0,
    type: "earning",
  },
];

// Mock notifications
const notifications = [
  {
    id: "n1",
    message: "Your rental of Canon EOS 5D Mark IV starts tomorrow",
    date: "April 14, 2025",
    read: false,
    priority: "high",
  },
  {
    id: "n2",
    message: "Mary has sent you a message about your projector",
    date: "April 13, 2025",
    read: true,
    priority: "medium",
  },
  {
    id: "n3",
    message: "Your listing 'Camping Tent' has received a new review (★★★★★)",
    date: "April 10, 2025",
    read: true,
    priority: "low",
  },
];

const UserDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderOverviewTab = () => (
    <div className="dashboard-overview">
      <div className="dashboard-welcome">
        <h2>Welcome back, {userData.firstName}!</h2>
        <p className="last-login">Last login: April 26, 2025</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Active Rentals</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">2</div>
          <div className="stat-label">My Listings</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$425</div>
          <div className="stat-label">Total Earnings</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">8</div>
          <div className="stat-label">Total Rentals</div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <div className="section-header">
            <h3>Current Rentals</h3>
            <Link to="/bookings" className="view-all">
              View All
            </Link>
          </div>
          <div className="rentals-list">
            {rentalHistory
              .filter((rental) => rental.status === "active")
              .slice(0, 2)
              .map((rental) => (
                <div key={rental.id} className="rental-item">
                  <img
                    src={rental.image}
                    alt={rental.item}
                    className="rental-image"
                  />
                  <div className="rental-info">
                    <h4>{rental.item}</h4>
                    <p className="rental-dates">
                      {rental.startDate} - {rental.endDate}
                    </p>
                    <span className="rental-status active">Active</span>
                  </div>
                </div>
              ))}
            {rentalHistory.filter((rental) => rental.status === "active")
              .length === 0 && (
              <div className="empty-state">
                <p>You have no active rentals.</p>
                <Link to="/browse">
                  <Button size="sm">Browse Items</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-header">
            <h3>Recent Notifications</h3>
            <Link to="/notifications" className="view-all">
              View All
            </Link>
          </div>
          <div className="notifications-list">
            {notifications.slice(0, 3).map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${
                  notification.read ? "read" : "unread"
                } priority-${notification.priority}`}
              >
                <div className="notification-content">
                  <p className="notification-message">{notification.message}</p>
                  <span className="notification-date">{notification.date}</span>
                </div>
                {!notification.read && (
                  <span className="notification-badge"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-section">
          <div className="section-header">
            <h3>My Listings</h3>
            <Link to="/listings/my" className="view-all">
              View All
            </Link>
          </div>
          <div className="listings-grid">
            {userListings.slice(0, 2).map((listing) => (
              <div key={listing.id} className="listing-card">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="listing-image"
                />
                <div className="listing-info">
                  <h4>{listing.title}</h4>
                  <p className="listing-price">${listing.price}/day</p>
                  <div className="listing-stats">
                    <span className="listing-stat">
                      <svg
                        className="listing-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      {listing.rating}
                    </span>
                    <span className="listing-stat">
                      <svg
                        className="listing-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {listing.rentalCount} rentals
                    </span>
                  </div>
                </div>
                <div className="listing-actions">
                  <Link to={`/listings/edit/${listing.id}`}>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="create-listing-cta">
            <Link to="/create-listing">
              <Button size="sm">Create New Listing</Button>
            </Link>
          </div>
        </div>

        <div className="dashboard-section">
          <div className="section-header">
            <h3>Recent Transactions</h3>
            <Link to="/transactions" className="view-all">
              View All
            </Link>
          </div>
          <div className="transactions-list">
            {recentTransactions.slice(0, 3).map((transaction) => (
              <div
                key={transaction.id}
                className={`transaction-item ${transaction.type}`}
              >
                <div className="transaction-info">
                  <span className="transaction-description">
                    {transaction.description}
                  </span>
                  <span className="transaction-date">{transaction.date}</span>
                </div>
                <div className="transaction-amount">
                  {transaction.type === "earning" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="profile-content">
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img
            src={userData.avatar}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="profile-avatar"
          />
          <button className="change-avatar-btn">
            <svg
              className="edit-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
        <div className="profile-user-info">
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="profile-location">
            <svg
              className="location-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {userData.location}
          </p>
          <p className="member-since">Member since {userData.joinDate}</p>
          <div className="verification-badges">
            {userData.verified.email && (
              <span className="verification-badge email">Email Verified</span>
            )}
            {userData.verified.phone && (
              <span className="verification-badge phone">Phone Verified</span>
            )}
            {userData.verified.government && (
              <span className="verification-badge government">ID Verified</span>
            )}
          </div>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3 className="section-title">About Me</h3>
          <p className="profile-bio">{userData.bio}</p>
          <Button variant="outline" size="sm" className="edit-bio-btn">
            Edit Bio
          </Button>
        </div>

        <div className="profile-section">
          <h3 className="section-title">Personal Information</h3>
          <div className="profile-info-grid">
            <div className="info-item">
              <span className="info-label">First Name</span>
              <span className="info-value">{userData.firstName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Name</span>
              <span className="info-value">{userData.lastName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{userData.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{userData.phone}</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="edit-info-btn">
            Edit Information
          </Button>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="settings-content">
      <div className="settings-section">
        <h3 className="section-title">Account Settings</h3>
        <div className="settings-options">
          <div className="settings-option">
            <div className="option-label">
              <h4>Email Notifications</h4>
              <p className="option-description">
                Receive email notifications for messages, bookings, and updates
              </p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={true} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="settings-option">
            <div className="option-label">
              <h4>SMS Notifications</h4>
              <p className="option-description">
                Receive text messages for time-sensitive updates
              </p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={false} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="settings-option">
            <div className="option-label">
              <h4>Two-Factor Authentication</h4>
              <p className="option-description">
                Add an extra layer of security to your account
              </p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" checked={true} />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="settings-option">
            <div className="option-label">
              <h4>Profile Privacy</h4>
              <p className="option-description">
                Control what information is visible to other users
              </p>
            </div>
            <button className="manage-button">Manage</button>
          </div>

          <div className="settings-option">
            <div className="option-label">
              <h4>Connected Accounts</h4>
              <p className="option-description">
                Manage your connected social accounts
              </p>
            </div>
            <button className="manage-button">Manage</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h3 className="section-title">Payment Settings</h3>
        <Link to="/payment-methods" className="settings-link">
          Manage Payment Methods
        </Link>
        <Link to="/payout-preferences" className="settings-link">
          Payout Preferences
        </Link>
        <Link to="/billing" className="settings-link">
          Billing History
        </Link>
      </div>

      <div className="settings-section">
        <h3 className="section-title danger">Danger Zone</h3>
        <div className="danger-options">
          <div className="danger-option">
            <div className="option-label">
              <h4>Deactivate Account</h4>
              <p className="option-description">
                Temporarily disable your account
              </p>
            </div>
            <Button variant="outline" size="sm" className="danger-button">
              Deactivate
            </Button>
          </div>
          <div className="danger-option">
            <div className="option-label">
              <h4>Delete Account</h4>
              <p className="option-description">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="outline" size="sm" className="danger-button">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="user-dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-user">
            <img
              src={userData.avatar}
              alt={`${userData.firstName} ${userData.lastName}`}
              className="sidebar-avatar"
            />
            <div className="sidebar-user-info">
              <h3>
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="user-email">{userData.email}</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard Overview
            </button>
            <button
              className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Profile
            </button>
            <Link to="/bookings" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              My Bookings
            </Link>
            <Link to="/listings/my" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              My Listings
            </Link>
            <Link to="/messages" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Messages
              <span className="badge">3</span>
            </Link>
            <Link to="/wishlist" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Wishlist
            </Link>
            <Link to="/notifications" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
              <span className="badge">1</span>
            </Link>
            <Link to="/reviews" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Reviews
            </Link>
            <Link to="/transactions" className="nav-item">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Transactions
            </Link>
            <button
              className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </button>
            <hr className="sidebar-divider" />
            <Link to="/logout" className="nav-item logout">
              <svg
                className="nav-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </Link>
          </nav>
        </div>

        <div className="dashboard-content">
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "profile" && renderProfileTab()}
          {activeTab === "settings" && renderSettingsTab()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
