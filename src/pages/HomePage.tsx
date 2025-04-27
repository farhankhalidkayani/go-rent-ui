import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import RentalCard from "../components/common/RentalCard";
import "./HomePage.css";

// Mock data for featured rentals
const featuredRentals = [
  {
    id: "1",
    title: "Professional DSLR Camera",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "San Francisco, CA",
    rating: 4.8,
    category: "Electronics",
  },
  {
    id: "2",
    title: "2023 Tesla Model Y",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1617704548623-0ef2fe6c25a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Los Angeles, CA",
    rating: 4.9,
    category: "Cars",
  },
  {
    id: "3",
    title: "High-end Gaming Laptop",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Austin, TX",
    rating: 4.7,
    category: "Electronics",
  },
  {
    id: "4",
    title: "Mountain Bike - Full Suspension",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Denver, CO",
    rating: 4.6,
    category: "Sports",
  },
];

// Mock data for categories
const categories = [
  {
    id: "1",
    name: "Cars",
    icon: "🚗",
    count: 243,
  },
  {
    id: "2",
    name: "Electronics",
    icon: "📱",
    count: 512,
  },
  {
    id: "3",
    name: "Home Appliances",
    icon: "🏠",
    count: 187,
  },
  {
    id: "4",
    name: "Sports & Outdoors",
    icon: "⚽",
    count: 320,
  },
  {
    id: "5",
    name: "Tools & Equipment",
    icon: "🔧",
    count: 156,
  },
  {
    id: "6",
    name: "Fashion & Accessories",
    icon: "👔",
    count: 201,
  },
];

const HomePage: React.FC = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [dateRange, setDateRange] = useState("");

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Rent Anything, Anywhere</h1>
            <p className="hero-subtitle">
              Go-Rent connects you with verified rental providers for a seamless
              and trustworthy rental experience.
            </p>
            <div className="search-box">
              <div className="search-grid">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your location"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="dates">Rental Period</label>
                  <input
                    type="text"
                    id="dates"
                    placeholder="Select dates"
                    className="form-control"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  />
                </div>
              </div>
              <div className="search-button">
                <Button fullWidth>Search Rentals</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="hero-container">
          <h2 className="section-title">Popular Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="featured-section">
        <div className="hero-container">
          <div className="section-header">
            <h2 className="section-title">Featured Rentals</h2>
            <Link to="/browse" className="view-all-link">
              View All
            </Link>
          </div>
          <div className="rentals-grid">
            {featuredRentals.map((rental) => (
              <RentalCard
                key={rental.id}
                id={rental.id}
                title={rental.title}
                price={rental.price}
                image={rental.image}
                location={rental.location}
                rating={rental.rating}
                category={rental.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="hero-container">
          <h2 className="section-title">How Go-Rent Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="step-icon"
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
              </div>
              <h3 className="step-title">Find What You Need</h3>
              <p className="step-description">
                Search through thousands of verified rental options near you.
              </p>
            </div>
            <div className="step">
              <div className="step-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="step-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="step-title">Book Securely</h3>
              <p className="step-description">
                Reserve items for your selected dates with secure payment
                processing.
              </p>
            </div>
            <div className="step">
              <div className="step-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="step-icon"
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
              <h3 className="step-title">Enjoy & Return</h3>
              <p className="step-description">
                Pick up your rental, enjoy it, and return it when you're done.
              </p>
            </div>
          </div>
          <div className="learn-more">
            <Link to="/how-it-works">
              <Button size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Platform Section */}
      <section className="join-section">
        <div className="hero-container">
          <div className="join-grid">
            <div>
              <h2 className="join-title">Ready to Start Renting?</h2>
              <p className="join-description">
                Join thousands of users who are already saving money by renting
                instead of buying.
              </p>
              <div className="join-buttons">
                <Link to="/register">
                  <Button variant="secondary" size="lg">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-outline-white"
                  >
                    Browse Rentals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="join-image-container">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Happy people renting items"
                className="join-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="hero-container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="testimonial-avatar"
                  />
                </div>
                <div>
                  <h3 className="testimonial-name">Sarah Johnson</h3>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="star-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "Go-Rent made it so easy to find and rent a high-quality camera
                for my vacation. The process was seamless and the deposit was
                returned promptly."
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt="User"
                    className="testimonial-avatar"
                  />
                </div>
                <div>
                  <h3 className="testimonial-name">Michael Brown</h3>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="star-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "As a rental provider, Go-Rent has helped me earn extra income
                from items I wasn't using regularly. The verification process
                gives renters confidence."
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="User"
                    className="testimonial-avatar"
                  />
                </div>
                <div>
                  <h3 className="testimonial-name">Emily Rodriguez</h3>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="star-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "I saved hundreds of dollars by renting a power washer for my
                weekend project instead of buying one. The quality was great and
                pickup/drop-off was convenient."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
