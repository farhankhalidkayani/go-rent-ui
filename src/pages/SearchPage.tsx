import React, { useState } from "react";
import Button from "../components/common/Button";
import RentalCard from "../components/common/RentalCard";
import "./SearchPage.css";

// Mock data for search results
const searchResults = [
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
    title: "Electric Lawn Mower",
    price: 30,
    image:
      "https://www.cnet.com/a/img/resize/531082283d025652813fda108c95bd77dd6213dc/hub/2021/05/20/448f6c5a-4045-46be-bbb8-6b707a86d819/electric-mowers-2021-09.jpg?auto=webp&fit=crop&height=1200&width=1200",
    location: "Atlanta, GA",
    rating: 4.5,
    category: "Tools",
  },
  {
    id: "6",
    title: "Professional Audio Equipment",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    location: "Nashville, TN",
    rating: 4.7,
    category: "Electronics",
  },
];

const categories = [
  { value: "", label: "All Categories" },
  { value: "cars", label: "Cars" },
  { value: "electronics", label: "Electronics" },
  { value: "home_appliances", label: "Home Appliances" },
  { value: "sports", label: "Sports & Outdoors" },
  { value: "tools", label: "Tools & Equipment" },
  { value: "fashion", label: "Fashion & Accessories" },
];

const sortOptions = [
  { value: "relevant", label: "Most Relevant" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rating" },
  { value: "newest", label: "Newest First" },
];

const SearchPage: React.FC = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortBy, setSortBy] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // For a real implementation, you would use these state values to filter results
  // For now, we'll just display all mock results

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="container">
          <h1 className="search-title">Search Rentals</h1>
          <p className="search-subtitle">
            Find the perfect rental from our wide selection of verified items
          </p>
        </div>
      </div>

      <div className="container">
        <div className="search-filters">
          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="search-query">Search</label>
              <input
                id="search-query"
                type="text"
                className="filter-control"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                className="filter-control"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                className="filter-control"
                placeholder="City, State or Zip"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="price">Price Range ($ per day)</label>
              <div className="price-range">
                <input
                  id="min-price"
                  type="number"
                  className="filter-control"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                />
                <input
                  id="max-price"
                  type="number"
                  className="filter-control"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-group"></div> {/* Empty for spacing */}
            <div className="filter-buttons">
              <Button variant="outline">Reset</Button>
              <Button>Search</Button>
            </div>
          </div>
        </div>

        <div className="search-results">
          <div className="search-results-header">
            <div className="results-count">
              {searchResults.length} results found
            </div>
            <div className="sort-by">
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="results-grid">
            {searchResults.map((result) => (
              <RentalCard
                key={result.id}
                id={result.id}
                title={result.title}
                price={result.price}
                image={result.image}
                location={result.location}
                rating={result.rating}
                category={result.category}
              />
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-btn">&laquo;</button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`pagination-btn ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="pagination-btn">&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
