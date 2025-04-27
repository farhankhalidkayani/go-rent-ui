import React, { useState } from "react";
import { Link } from "react-router-dom";
import RentalCard from "../components/common/RentalCard";
import Button from "../components/common/Button";
import "./BrowsePage.css";

// Mock category data
const categories = [
  { id: "all", name: "All Categories", count: 1234 },
  { id: "cars", name: "Cars", count: 243 },
  { id: "electronics", name: "Electronics", count: 512 },
  { id: "home_appliances", name: "Home Appliances", count: 187 },
  { id: "sports", name: "Sports & Outdoors", count: 320 },
  { id: "tools", name: "Tools & Equipment", count: 156 },
  { id: "fashion", name: "Fashion & Accessories", count: 201 },
];

// Mock rental data
const mockRentals = [
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
      "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/847000/600/847698.jpg",
    location: "Los Angeles, CA",
    rating: 4.9,
    category: "Cars",
  },
  {
    id: "3",
    title: "High-end Gaming Laptop",
    price: 35,
    image:
      "https://i.pcmag.com/imagery/reviews/06HnGEGjzlHopIl2HTTjJzT-1.fit_lim.size_919x518.v1706741783.jpg",
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
  {
    id: "5",
    title: "Power Drill Set",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Chicago, IL",
    rating: 4.5,
    category: "Tools",
  },
  {
    id: "6",
    title: "Stand Mixer - KitchenAid",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Seattle, WA",
    rating: 4.7,
    category: "Home Appliances",
  },
  {
    id: "7",
    title: "Designer Handbag - Luxury",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "New York, NY",
    rating: 4.9,
    category: "Fashion",
  },
  {
    id: "8",
    title: "4K Drone with Camera",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Miami, FL",
    rating: 4.4,
    category: "Electronics",
  },
  {
    id: "9",
    title: "Road Bike - Carbon Frame",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1569943228307-a66beab7cd96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Portland, OR",
    rating: 4.7,
    category: "Sports",
  },
  {
    id: "10",
    title: "Party Speaker System",
    price: 65,
    image:
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_500,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/9d761f8c-dca1-11ea-9ff5-1a1d4a98f6ce.jpg",
    location: "Las Vegas, NV",
    rating: 4.5,
    category: "Electronics",
  },
  {
    id: "11",
    title: "Camping Tent - 4 Person",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Boulder, CO",
    rating: 4.6,
    category: "Sports",
  },
  {
    id: "12",
    title: "Electric Lawn Mower",
    price: 28,
    image:
      "https://www.cnet.com/a/img/resize/531082283d025652813fda108c95bd77dd6213dc/hub/2021/05/20/448f6c5a-4045-46be-bbb8-6b707a86d819/electric-mowers-2021-09.jpg?auto=webp&fit=crop&height=1200&width=1200",
    location: "Phoenix, AZ",
    rating: 4.3,
    category: "Tools",
  },
];

const BrowsePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter the rentals based on search and filters
  const filteredRentals = mockRentals.filter((rental) => {
    // Search query filter
    if (
      searchQuery &&
      !rental.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !rental.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (
      selectedCategory !== "all" &&
      rental.category.toLowerCase() !==
        categories
          .find((cat) => cat.id === selectedCategory)
          ?.name.toLowerCase()
    ) {
      return false;
    }

    // Rating filter
    if (
      selectedRating !== "all" &&
      rental.rating < parseFloat(selectedRating)
    ) {
      return false;
    }

    // Price range filter
    if (minPrice && parseFloat(minPrice) > rental.price) {
      return false;
    }
    if (maxPrice && parseFloat(maxPrice) < rental.price) {
      return false;
    }

    // Location filter
    if (
      location &&
      !rental.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  // Sort rentals
  const sortedRentals = [...filteredRentals].sort((a, b) => {
    switch (sortBy) {
      case "price_low_to_high":
        return a.price - b.price;
      case "price_high_to_low":
        return b.price - a.price;
      case "highest_rated":
        return b.rating - a.rating;
      case "recommended":
      default:
        // Simple recommendation logic: higher rating means higher recommendation
        return b.rating - a.rating;
    }
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedRating("all");
    setMinPrice("");
    setMaxPrice("");
    setLocation("");
    setSortBy("recommended");
  };

  return (
    <div className="browse-page">
      <div className="browse-header">
        <div className="container">
          <h1 className="browse-title">Browse Rental Listings</h1>
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for items to rent..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button">
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
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="browse-content">
          <div className="mobile-filters">
            <button className="filter-toggle" onClick={toggleFilters}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="filter-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>
            <div className="sort-dropdown">
              <label htmlFor="mobileSort">Sort By:</label>
              <select
                id="mobileSort"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price_low_to_high">Price: Low to High</option>
                <option value="price_high_to_low">Price: High to Low</option>
                <option value="highest_rated">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className={`filters-sidebar ${showFilters ? "show" : ""}`}>
            <div className="filters-header">
              <h2 className="filters-title">Filters</h2>
              <button className="filters-close" onClick={toggleFilters}>
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
              </button>
            </div>

            <div className="filter-section">
              <h3 className="filter-section-title">Categories</h3>
              <div className="category-filters">
                {categories.map((category) => (
                  <div className="category-option" key={category.id}>
                    <input
                      type="radio"
                      id={`category-${category.id}`}
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={() => setSelectedCategory(category.id)}
                      className="category-radio"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="category-label"
                    >
                      <span>{category.name}</span>
                      <span className="category-count">({category.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-section-title">Price Range</h3>
              <div className="price-range">
                <input
                  type="number"
                  placeholder="Min"
                  className="price-input"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="price-separator">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="price-input"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-section-title">Rating</h3>
              <div className="rating-filters">
                <div className="rating-option">
                  <input
                    type="radio"
                    id="rating-all"
                    name="rating"
                    value="all"
                    checked={selectedRating === "all"}
                    onChange={() => setSelectedRating("all")}
                    className="rating-radio"
                  />
                  <label htmlFor="rating-all" className="rating-label">
                    Any Rating
                  </label>
                </div>
                <div className="rating-option">
                  <input
                    type="radio"
                    id="rating-4.5"
                    name="rating"
                    value="4.5"
                    checked={selectedRating === "4.5"}
                    onChange={() => setSelectedRating("4.5")}
                    className="rating-radio"
                  />
                  <label htmlFor="rating-4.5" className="rating-label">
                    4.5 & Up
                  </label>
                </div>
                <div className="rating-option">
                  <input
                    type="radio"
                    id="rating-4"
                    name="rating"
                    value="4"
                    checked={selectedRating === "4"}
                    onChange={() => setSelectedRating("4")}
                    className="rating-radio"
                  />
                  <label htmlFor="rating-4" className="rating-label">
                    4.0 & Up
                  </label>
                </div>
                <div className="rating-option">
                  <input
                    type="radio"
                    id="rating-3.5"
                    name="rating"
                    value="3.5"
                    checked={selectedRating === "3.5"}
                    onChange={() => setSelectedRating("3.5")}
                    className="rating-radio"
                  />
                  <label htmlFor="rating-3.5" className="rating-label">
                    3.5 & Up
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-section-title">Location</h3>
              <input
                type="text"
                placeholder="Enter city or zip code"
                className="location-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="filter-actions">
              <Button variant="primary" onClick={toggleFilters}>
                Apply Filters
              </Button>
              <Button variant="outline" onClick={resetFilters}>
                Reset
              </Button>
            </div>
          </div>

          <div className="rentals-container">
            <div className="results-header">
              <div className="results-count">
                {sortedRentals.length} items found
              </div>
              <div className="desktop-sort">
                <label htmlFor="desktopSort">Sort By:</label>
                <select
                  id="desktopSort"
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price_low_to_high">Price: Low to High</option>
                  <option value="price_high_to_low">Price: High to Low</option>
                  <option value="highest_rated">Highest Rated</option>
                </select>
              </div>
            </div>

            {sortedRentals.length > 0 ? (
              <div className="rentals-grid">
                {sortedRentals.map((rental) => (
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
            ) : (
              <div className="no-results">
                <div className="no-results-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="no-results-title">No Results Found</h2>
                <p className="no-results-text">
                  We couldn't find any rentals matching your criteria. Try
                  adjusting your filters or search query.
                </p>
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}

            {sortedRentals.length > 0 && (
              <div className="pagination">
                <button className="page-button active">1</button>
                <button className="page-button">2</button>
                <button className="page-button">3</button>
                <button className="page-button next">
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
