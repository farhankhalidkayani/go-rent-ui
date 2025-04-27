import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import useAuth hook
import "./header.css";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Browse", href: "/browse", current: false },
  { name: "Categories", href: "/categories", current: false },
  { name: "How It Works", href: "/how-it-works", current: false },
  { name: "About Us", href: "/about", current: false },
];

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth(); // Use the authentication context
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    // Optional: Redirect to home page or login page after logout
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-row">
          <div className="header-left">
            <div className="logo">
              <Link to="/" className="logo-link">
                Go-Rent
              </Link>
            </div>
            <div className="desktop-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={item.current ? "nav-link active" : "nav-link"}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="header-right">
            <Link to="/search" className="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            {isAuthenticated ? (
              <div className="auth-buttons">
                <Link to="/messages" className="icon-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="message-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
                <div className="user-profile">
                  <Link to="/profile" className="icon-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="user-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
                <Link to="/dashboard" className="btn btn-primary">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline">
                  Sign In
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="menu-button">
            <button onClick={toggleMenu} className="hamburger-button">
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="close-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hamburger-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={item.current ? "mobile-link active" : "mobile-link"}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mobile-auth">
            {isAuthenticated ? (
              <div className="mobile-user">
                <div className="user-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mobile-user-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="username">
                      {user?.firstName || "User"} {user?.lastName || "Name"}
                    </div>
                    <div className="user-email">
                      {user?.email || "user@example.com"}
                    </div>
                  </div>
                </div>
                <div className="mobile-buttons">
                  <Link to="/dashboard" className="mobile-button">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="mobile-button">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="mobile-buttons">
                <Link to="/login" className="mobile-button">
                  Sign In
                </Link>
                <Link to="/register" className="mobile-button">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
