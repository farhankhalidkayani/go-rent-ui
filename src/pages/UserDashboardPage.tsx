import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

// Mock wishlist data
const wishlistItems = [
  {
    id: "wish1",
    title: "Sony A7 III Mirrorless Camera",
    image:
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 65,
    owner: "Sarah K.",
    ownerRating: 4.9,
    location: "San Francisco, CA",
    availability: "Available",
    category: "Electronics",
    dateAdded: "April 20, 2025",
  },
  {
    id: "wish2",
    title: "Weber Genesis II Gas Grill",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 35,
    owner: "Michael T.",
    ownerRating: 4.7,
    location: "Oakland, CA",
    availability: "Available May 5",
    category: "Home & Garden",
    dateAdded: "April 15, 2025",
  },
  {
    id: "wish3",
    title: "DJI Mavic Air 2 Drone",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 55,
    owner: "Jessica L.",
    ownerRating: 4.8,
    location: "San Jose, CA",
    availability: "Available",
    category: "Electronics",
    dateAdded: "April 10, 2025",
  },
  {
    id: "wish4",
    title: "Trek Marlin 7 Mountain Bike",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    price: 30,
    owner: "David W.",
    ownerRating: 4.6,
    location: "San Francisco, CA",
    availability: "Available",
    category: "Sports & Outdoors",
    dateAdded: "April 5, 2025",
  },
];

const UserDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const location = useLocation();

  // Check for tab query parameter on load
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");

    if (
      tabParam &&
      [
        "overview",
        "profile",
        "bookings",
        "listings",
        "wishlist",
        "notifications",
        "reviews",
        "transactions",
        "settings",
      ].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  // Handle tab change with URL update
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/dashboard?tab=${tab}`, { replace: true });
  };

  // Logout function
  const handleLogout = () => {
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

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

  const renderBookingsTab = () => (
    <div className="bookings-content">
      <div className="dashboard-section-header">
        <h2>My Bookings</h2>
        <p className="section-subtitle">Manage your current and past rentals</p>
      </div>

      <div className="bookings-filters">
        <div className="filter-tabs">
          <button className="filter-tab active">All Bookings</button>
          <button className="filter-tab">Active</button>
          <button className="filter-tab">Upcoming</button>
          <button className="filter-tab">Past</button>
          <button className="filter-tab">Cancelled</button>
        </div>

        <div className="filter-controls">
          <div className="search-input">
            <svg
              className="search-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" placeholder="Search bookings" />
          </div>

          <select className="sort-select">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      <div className="bookings-list">
        {rentalHistory.map((rental) => (
          <div key={rental.id} className={`booking-card ${rental.status}`}>
            <div className="booking-image">
              <img src={rental.image} alt={rental.item} />
            </div>
            <div className="booking-details">
              <h3 className="booking-item">{rental.item}</h3>
              <p className="booking-category">{rental.category}</p>
              <div className="booking-info">
                <div className="info-group">
                  <span className="info-label">Rental Period</span>
                  <span className="info-value">
                    {rental.startDate} - {rental.endDate}
                  </span>
                </div>
                <div className="info-group">
                  <span className="info-label">Total Price</span>
                  <span className="info-value">
                    ${rental.totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="info-group">
                  <span className="info-label">Status</span>
                  <span className={`status-badge ${rental.status}`}>
                    {rental.status.charAt(0).toUpperCase() +
                      rental.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="booking-actions">
              {rental.status === "active" && (
                <>
                  <Button size="sm">Return Item</Button>
                  <Button size="sm" variant="outline">
                    Extend Rental
                  </Button>
                </>
              )}
              {rental.status === "completed" && (
                <Button size="sm" variant="outline">
                  Leave Review
                </Button>
              )}
              <button className="action-button">
                <svg
                  className="action-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-button prev">
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button next">
          Next
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderMyListingsTab = () => (
    <div className="listings-content">
      <div className="dashboard-section-header">
        <h2>My Listings</h2>
        <p className="section-subtitle">Manage your rental items</p>
        <Link to="/create-listing">
          <Button>Create New Listing</Button>
        </Link>
      </div>

      <div className="listings-stats">
        <div className="stat-card">
          <div className="stat-value">{userListings.length}</div>
          <div className="stat-label">Active Listings</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">20</div>
          <div className="stat-label">Total Rentals</div>
        </div>
        <div className="stat-card">
          <div className="stat-value"></div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.7</div>
          <div className="stat-label">Avg. Rating</div>
        </div>
      </div>

      <div className="listings-filters">
        <div className="search-input">
          <svg
            className="search-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input type="text" placeholder="Search listings" />
        </div>

        <div className="filter-controls">
          <select className="filter-select">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Sports & Outdoors</option>
            <option>Tools</option>
            <option>Home & Garden</option>
          </select>

          <select className="sort-select">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <div className="listings-grid">
        {userListings.map((listing) => (
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
              <Button size="sm" variant="outline">
                Manage Availability
              </Button>
              <button className="action-button">
                <svg
                  className="action-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReviewsTab = () => (
    <div className="reviews-content">
      <div className="dashboard-section-header">
        <h2>My Reviews</h2>
        <p className="section-subtitle">
          Manage reviews about you and your items
        </p>
      </div>

      <div className="reviews-tabs">
        <button className="review-tab active">Reviews About Me (12)</button>
        <button className="review-tab">Reviews About My Items (28)</button>
        <button className="review-tab">Reviews I've Written (15)</button>
      </div>

      <div className="reviews-list">
        {[1, 2, 3, 4, 5].map((review) => (
          <div key={review} className="review-card">
            <div className="reviewer-info">
              <img
                src={`https://randomuser.me/api/portraits/${
                  review % 2 === 0 ? "women" : "men"
                }/${review + 20}.jpg`}
                alt="Reviewer"
                className="reviewer-avatar"
              />
              <div className="reviewer-details">
                <h4>Jane Smith</h4>
                <div className="review-rating">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`star-icon ${i < 4 ? "filled" : ""}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <span className="review-date">April 10, 2025</span>
              </div>
            </div>
            <div className="review-content">
              <p>
                Great experience renting from Alex! The camera was in perfect
                condition and Alex was very prompt with communication. Would
                definitely rent from again.
              </p>
            </div>
            <div className="review-item">
              <span className="item-label">Item:</span>
              <span className="item-name">Canon EOS 5D Mark IV</span>
            </div>
            <div className="review-actions">
              <button className="action-link">Reply</button>
              <button className="action-link">Report</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-button prev">
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button next">
          Next
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  const renderTransactionsTab = () => (
    <div className="transactions-content">
      <div className="dashboard-section-header">
        <h2>My Transactions</h2>
        <p className="section-subtitle">
          View your payment history and earnings
        </p>
      </div>

      <div className="transactions-summary">
        <div className="summary-card">
          <span className="summary-title">Total Earnings</span>
          <span className="summary-amount">$825.00</span>
          <span className="summary-change positive">
            <svg
              className="change-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            12% from last month
          </span>
        </div>
        <div className="summary-card">
          <span className="summary-title">Total Spent</span>
          <span className="summary-amount">$450.00</span>
          <span className="summary-change negative">
            <svg
              className="change-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            5% from last month
          </span>
        </div>
        <div className="summary-card">
          <span className="summary-title">Current Balance</span>
          <span className="summary-amount">$375.00</span>
          <Button size="sm">Withdraw</Button>
        </div>
      </div>

      <div className="transactions-controls">
        <div className="transactions-total">Showing 25 of 56 transactions</div>
        <div className="transactions-actions">
          <select className="sort-dropdown">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Highest Amount</option>
            <option>Lowest Amount</option>
          </select>
          <button className="export-button">
            <svg
              className="export-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="transactions-list">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Rental</th>
              <th>Status</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[...recentTransactions, ...recentTransactions].map(
              (transaction, index) => (
                <tr key={transaction.id + index}>
                  <td className="transaction-date">{transaction.date}</td>
                  <td className="transaction-description">
                    <div>{transaction.description}</div>
                    <div className="transaction-id">
                      #{transaction.id + index}
                    </div>
                  </td>
                  <td className="transaction-rental">
                    Rental #{Math.floor(Math.random() * 1000)}
                  </td>
                  <td>
                    <span
                      className={`transaction-status status-${
                        transaction.type === "earning"
                          ? "completed"
                          : "processing"
                      }`}
                    >
                      {transaction.type === "earning"
                        ? "Completed"
                        : "Processing"}
                    </span>
                  </td>
                  <td
                    className={`transaction-amount ${
                      transaction.type === "earning" ? "positive" : "negative"
                    }`}
                  >
                    {transaction.type === "earning" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td className="transaction-actions">
                    <button className="action-button">
                      <svg
                        className="action-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </button>
                    <button className="action-button">
                      <svg
                        className="action-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-button prev">
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button next">
          Next
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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

  const renderWishlistTab = () => (
    <div className="wishlist-content">
      <div className="dashboard-section-header">
        <h2>My Wishlist</h2>
        <p className="section-subtitle">
          Items you'd like to rent in the future
        </p>
      </div>

      <div className="wishlist-filters">
        <div className="filter-tabs">
          <button className="filter-tab active">
            All Items ({wishlistItems.length})
          </button>
          <button className="filter-tab">
            Available Now (
            {
              wishlistItems.filter((item) => item.availability === "Available")
                .length
            }
            )
          </button>
          <button className="filter-tab">Recently Added</button>
          <button className="filter-tab">Price: Low to High</button>
        </div>

        <div className="filter-controls">
          <div className="search-input">
            <svg
              className="search-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" placeholder="Search your wishlist" />
          </div>
        </div>
      </div>

      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            <div className="wishlist-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="wishlist-image"
              />
              <button className="remove-wishlist-btn">
                <svg
                  className="remove-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
            <div className="wishlist-info">
              <h4 className="wishlist-title">{item.title}</h4>
              <p className="wishlist-price">${item.price}/day</p>
              <div className="wishlist-details">
                <div className="details-group">
                  <span className="detail-label">Owner:</span>
                  <span className="detail-value">
                    {item.owner} ({item.ownerRating}★)
                  </span>
                </div>
                <div className="details-group">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{item.location}</span>
                </div>
                <div className="details-group">
                  <span className="detail-label">Availability:</span>
                  <span
                    className={`detail-value ${
                      item.availability === "Available"
                        ? "available"
                        : "upcoming"
                    }`}
                  >
                    {item.availability}
                  </span>
                </div>
                <div className="details-group">
                  <span className="detail-label">Added:</span>
                  <span className="detail-value">{item.dateAdded}</span>
                </div>
              </div>
            </div>
            <div className="wishlist-actions">
              <Button size="sm">Rent Now</Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
              <div className="action-buttons">
                <button className="action-button">
                  <svg
                    className="action-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
                <button className="action-button">
                  <svg
                    className="action-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="notifications-content">
      <div className="dashboard-section-header">
        <h2>Notifications</h2>
        <p className="section-subtitle">
          Stay updated on your rentals and activity
        </p>
      </div>

      <div className="notifications-actions">
        <div className="filter-controls">
          <select className="filter-select">
            <option>All Notifications</option>
            <option>Unread</option>
            <option>Bookings & Rentals</option>
            <option>Messages</option>
            <option>Reviews</option>
            <option>System</option>
          </select>
        </div>

        <div className="notification-buttons">
          <button className="mark-read-btn">Mark all as read</button>
          <button className="settings-btn">
            <svg
              className="settings-icon"
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
            Notification Settings
          </button>
        </div>
      </div>

      <div className="notification-dates">
        <h4 className="date-heading">Today</h4>
      </div>

      <div className="notifications-list full-list">
        <div className="notification-item unread priority-high">
          <div className="notification-icon rental">
            <svg
              className="icon"
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
          </div>
          <div className="notification-content">
            <div className="notification-header">
              <span className="notification-type">Upcoming Rental</span>
              <span className="notification-time">2 hours ago</span>
            </div>
            <p className="notification-message">
              Your rental of Canon EOS 5D Mark IV starts tomorrow. The owner has
              provided pickup instructions.
            </p>
            <div className="notification-actions">
              <button className="notification-action-btn">View Details</button>
              <button className="notification-action-btn">Message Owner</button>
            </div>
          </div>
          <div className="notification-actions-menu">
            <button className="mark-read-btn">
              <svg
                className="read-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button className="delete-btn">
              <svg
                className="delete-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="notification-item read priority-medium">
          <div className="notification-icon message">
            <svg
              className="icon"
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
          </div>
          <div className="notification-content">
            <div className="notification-header">
              <span className="notification-type">New Message</span>
              <span className="notification-time">5 hours ago</span>
            </div>
            <p className="notification-message">
              Mary has sent you a message about your projector rental.
            </p>
            <div className="notification-actions">
              <button className="notification-action-btn">View Message</button>
            </div>
          </div>
          <div className="notification-actions-menu">
            <button className="mark-unread-btn">
              <svg
                className="unread-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </button>
            <button className="delete-btn">
              <svg
                className="delete-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="notification-dates">
        <h4 className="date-heading">Yesterday</h4>
      </div>

      <div className="notifications-list full-list">
        <div className="notification-item read priority-low">
          <div className="notification-icon review">
            <svg
              className="icon"
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
          </div>
          <div className="notification-content">
            <div className="notification-header">
              <span className="notification-type">New Review</span>
              <span className="notification-time">Yesterday</span>
            </div>
            <p className="notification-message">
              Your listing 'Camping Tent' has received a new 5-star review.
            </p>
            <div className="notification-actions">
              <button className="notification-action-btn">View Review</button>
            </div>
          </div>
          <div className="notification-actions-menu">
            <button className="mark-unread-btn">
              <svg
                className="unread-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </button>
            <button className="delete-btn">
              <svg
                className="delete-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="notification-item read priority-medium">
          <div className="notification-icon system">
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="notification-content">
            <div className="notification-header">
              <span className="notification-type">System Notification</span>
              <span className="notification-time">Yesterday</span>
            </div>
            <p className="notification-message">
              Your payout of $75.00 has been processed and should arrive in your
              bank account within 1-3 business days.
            </p>
          </div>
          <div className="notification-actions-menu">
            <button className="mark-unread-btn">
              <svg
                className="unread-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </button>
            <button className="delete-btn">
              <svg
                className="delete-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="notification-dates">
        <h4 className="date-heading">Earlier This Week</h4>
      </div>

      <div className="notifications-list full-list">
        <div className="notification-item read priority-low">
          <div className="notification-icon system">
            <svg
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="notification-content">
            <div className="notification-header">
              <span className="notification-type">System Notification</span>
              <span className="notification-time">April 22, 2025</span>
            </div>
            <p className="notification-message">
              We've updated our Terms of Service. Please review the changes.
            </p>
            <div className="notification-actions">
              <button className="notification-action-btn">View Terms</button>
            </div>
          </div>
          <div className="notification-actions-menu">
            <button className="mark-unread-btn">
              <svg
                className="unread-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </button>
            <button className="delete-btn">
              <svg
                className="delete-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="pagination">
        <button className="page-button prev">
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button next">
          Next
          <svg
            className="page-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
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
              onClick={() => handleTabChange("overview")}
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
              onClick={() => handleTabChange("profile")}
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
            <button
              className={`nav-item ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => handleTabChange("bookings")}
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              My Bookings
            </button>
            <button
              className={`nav-item ${activeTab === "listings" ? "active" : ""}`}
              onClick={() => handleTabChange("listings")}
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              My Listings
            </button>
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
            <button
              className={`nav-item ${activeTab === "wishlist" ? "active" : ""}`}
              onClick={() => handleTabChange("wishlist")}
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Wishlist
            </button>
            <button
              className={`nav-item ${
                activeTab === "notifications" ? "active" : ""
              }`}
              onClick={() => handleTabChange("notifications")}
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              Notifications
              <span className="badge">1</span>
            </button>
            <button
              className={`nav-item ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => handleTabChange("reviews")}
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Reviews
            </button>
            <button
              className={`nav-item ${
                activeTab === "transactions" ? "active" : ""
              }`}
              onClick={() => handleTabChange("transactions")}
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Transactions
            </button>
            <button
              className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => handleTabChange("settings")}
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
            <button onClick={handleLogout} className="nav-item logout">
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
            </button>
          </nav>
        </div>

        <div className="dashboard-content">
          {activeTab === "overview" && renderOverviewTab()}
          {activeTab === "profile" && renderProfileTab()}
          {activeTab === "bookings" && renderBookingsTab()}
          {activeTab === "listings" && renderMyListingsTab()}
          {activeTab === "wishlist" && renderWishlistTab()}
          {activeTab === "notifications" && renderNotificationsTab()}
          {activeTab === "reviews" && renderReviewsTab()}
          {activeTab === "transactions" && renderTransactionsTab()}
          {activeTab === "settings" && renderSettingsTab()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
