import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import RentalCard from "../components/common/RentalCard";
import "./CategoriesPage.css";

// Mock data for categories
const categories = [
  {
    id: "1",
    name: "Cars",
    icon: "🚗",
    count: 243,
    description:
      "Find cars, trucks, vans and more for rent by hour, day, or week.",
    items: [
      {
        id: "1",
        title: "2023 Tesla Model Y",
        price: 120,
        image:
          "https://images.unsplash.com/photo-1617704548623-0ef2fe6c25a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Los Angeles, CA",
        rating: 4.9,
        category: "Cars",
      },
      {
        id: "2",
        title: "2022 Honda Accord",
        price: 85,
        image:
          "https://images.unsplash.com/photo-1575650980107-20ee1e797033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "San Francisco, CA",
        rating: 4.7,
        category: "Cars",
      },
      {
        id: "3",
        title: "2022 Ford F-150 Pickup",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1609637273853-082d7e5193ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Austin, TX",
        rating: 4.8,
        category: "Cars",
      },
      {
        id: "4",
        title: "2021 Jeep Wrangler",
        price: 110,
        image:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Denver, CO",
        rating: 4.6,
        category: "Cars",
      },
    ],
  },
  {
    id: "2",
    name: "Electronics",
    icon: "📱",
    count: 512,
    description:
      "Rent cameras, laptops, drones, and other electronics for your projects.",
    items: [
      {
        id: "5",
        title: "Professional DSLR Camera",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "San Francisco, CA",
        rating: 4.8,
        category: "Electronics",
      },
      {
        id: "6",
        title: "High-end Gaming Laptop",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Austin, TX",
        rating: 4.7,
        category: "Electronics",
      },
      {
        id: "7",
        title: "DJI Drone with 4K Camera",
        price: 60,
        image:
          "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Seattle, WA",
        rating: 4.9,
        category: "Electronics",
      },
      {
        id: "8",
        title: "Professional Audio Equipment",
        price: 55,
        image:
          "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Nashville, TN",
        rating: 4.7,
        category: "Electronics",
      },
    ],
  },
  {
    id: "3",
    name: "Home Appliances",
    icon: "🏠",
    count: 187,
    description:
      "Rent home appliances for your temporary needs or to try before you buy.",
    items: [
      {
        id: "9",
        title: "Professional Carpet Cleaner",
        price: 35,
        image:
          "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Chicago, IL",
        rating: 4.6,
        category: "Home Appliances",
      },
      {
        id: "10",
        title: "Industrial Air Purifier",
        price: 20,
        image:
          "https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "New York, NY",
        rating: 4.5,
        category: "Home Appliances",
      },
    ],
  },
  {
    id: "4",
    name: "Sports & Outdoors",
    icon: "⚽",
    count: 320,
    description:
      "Find equipment for any sport or outdoor activity for your next adventure.",
    items: [
      {
        id: "11",
        title: "Mountain Bike - Full Suspension",
        price: 25,
        image:
          "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Denver, CO",
        rating: 4.6,
        category: "Sports",
      },
      {
        id: "12",
        title: "Complete Camping Gear Set",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Portland, OR",
        rating: 4.8,
        category: "Sports",
      },
    ],
  },
  {
    id: "5",
    name: "Tools & Equipment",
    icon: "🔧",
    count: 156,
    description:
      "Get professional tools and equipment for home improvement or construction projects.",
    items: [
      {
        id: "13",
        title: "Electric Lawn Mower",
        price: 30,
        image:
          "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Atlanta, GA",
        rating: 4.5,
        category: "Tools",
      },
      {
        id: "14",
        title: "Professional Power Tool Set",
        price: 40,
        image:
          "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Dallas, TX",
        rating: 4.7,
        category: "Tools",
      },
    ],
  },
  {
    id: "6",
    name: "Fashion & Accessories",
    icon: "👔",
    count: 201,
    description:
      "Rent designer clothes, accessories, and jewelry for special occasions.",
    items: [
      {
        id: "15",
        title: "Designer Evening Gown",
        price: 75,
        image:
          "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "New York, NY",
        rating: 4.9,
        category: "Fashion",
      },
      {
        id: "16",
        title: "Premium Men's Suit",
        price: 55,
        image:
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        location: "Los Angeles, CA",
        rating: 4.7,
        category: "Fashion",
      },
    ],
  },
];

const CategoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="categories-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Browse Categories</h1>
          <p className="page-subtitle">
            Explore our wide range of rental categories to find exactly what you
            need
          </p>
        </div>
      </div>

      <div className="container">
        <div className="category-search">
          <input
            type="text"
            placeholder="Search categories..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button>Search</Button>
        </div>

        <div className="categories-list">
          {filteredCategories.map((category) => (
            <div key={category.id} className="category-section">
              <div className="category-header">
                <div className="category-icon-large">{category.icon}</div>
                <div>
                  <h2 className="category-title">{category.name}</h2>
                  <p className="category-count">{category.count} listings</p>
                </div>
              </div>
              <p className="category-description">{category.description}</p>

              <div className="rentals-grid">
                {category.items.map((item) => (
                  <RentalCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    location={item.location}
                    rating={item.rating}
                    category={item.category}
                  />
                ))}
              </div>
              <div className="view-all-button">
                <Link to={`/categories/${category.id}`}>
                  <Button variant="outline">View All {category.name}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
