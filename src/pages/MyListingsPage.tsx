import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./MyListingsPage.css";

interface Listing {
  id: string;
  title: string;
  price: number;
  priceType: "hourly" | "daily" | "weekly";
  category: string;
  location: string;
  status: "active" | "pending" | "inactive";
  imageUrl: string;
  views: number;
  bookings: number;
}

const MyListingsPage: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Mock data - in a real app, this would fetch from an API
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockListings: Listing[] = [
        {
          id: "l1",
          title: "Professional DSLR Camera",
          price: 45.0,
          priceType: "daily",
          category: "Electronics",
          location: "San Francisco, CA",
          status: "active",
          imageUrl: "https://via.placeholder.com/150",
          views: 124,
          bookings: 8,
        },
        {
          id: "l2",
          title: "Mountain Bike - Trek X-Caliber",
          price: 35.0,
          priceType: "daily",
          category: "Sports & Outdoors",
          location: "San Francisco, CA",
          status: "active",
          imageUrl: "https://via.placeholder.com/150",
          views: 89,
          bookings: 4,
        },
        {
          id: "l3",
          title: "Camping Tent (4-Person)",
          price: 25.0,
          priceType: "daily",
          category: "Sports & Outdoors",
          location: "San Francisco, CA",
          status: "inactive",
          imageUrl: "https://via.placeholder.com/150",
          views: 45,
          bookings: 2,
        },
        {
          id: "l4",
          title: "Power Drill Set - DeWalt",
          price: 15.0,
          priceType: "daily",
          category: "Tools",
          location: "San Francisco, CA",
          status: "pending",
          imageUrl: "https://via.placeholder.com/150",
          views: 12,
          bookings: 0,
        },
        {
          id: "l5",
          title: "HD Projector - Epson",
          price: 40.0,
          priceType: "daily",
          category: "Electronics",
          location: "San Francisco, CA",
          status: "active",
          imageUrl: "https://via.placeholder.com/150",
          views: 78,
          bookings: 3,
        },
      ];

      setListings(mockListings);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredListings = listings.filter((listing) => {
    if (filter === "all") return true;
    return listing.status === filter;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case "active":
        return "status-active";
      case "pending":
        return "status-pending";
      case "inactive":
        return "status-inactive";
      default:
        return "";
    }
  };

  const toggleListingStatus = (id: string) => {
    // In a real app, this would call an API to update the listing status
    setListings(
      listings.map((listing) => {
        if (listing.id === id) {
          const newStatus = listing.status === "active" ? "inactive" : "active";
          return {
            ...listing,
            status: newStatus as "active" | "inactive" | "pending",
          };
        }
        return listing;
      })
    );
  };

  const formatPriceWithType = (price: number, type: string) => {
    return `$${price.toFixed(2)}/${type === "daily" ? "day" : type}`;
  };

  return (
    <div className="my-listings-page">
      <div className="container">
        <div className="page-header">
          <h1>My Listings</h1>
          <p>Manage your rental items</p>
          <Link to="/create-listing" className="btn btn-primary">
            + Create New Listing
          </Link>
        </div>

        <div className="dashboard-navigation">
          <Link to="/dashboard" className="dashboard-link">
            Dashboard
          </Link>
          <Link to="/profile" className="dashboard-link">
            Profile
          </Link>
          <Link to="/bookings" className="dashboard-link">
            Bookings
          </Link>
          <Link to="/my-listings" className="dashboard-link active">
            My Listings
          </Link>
          <Link to="/reviews" className="dashboard-link">
            Reviews
          </Link>
          <Link to="/transactions" className="dashboard-link">
            Transactions
          </Link>
        </div>

        <div className="my-listings-content">
          <div className="filters">
            <button
              className={filter === "all" ? "filter-active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "active" ? "filter-active" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "pending" ? "filter-active" : ""}
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>
            <button
              className={filter === "inactive" ? "filter-active" : ""}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </div>

          {isLoading ? (
            <div className="loading">Loading your listings...</div>
          ) : filteredListings.length > 0 ? (
            <div className="listings-table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Views</th>
                    <th>Bookings</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredListings.map((listing) => (
                    <tr key={listing.id}>
                      <td className="listing-item">
                        <img src={listing.imageUrl} alt={listing.title} />
                        <span>{listing.title}</span>
                      </td>
                      <td>
                        {formatPriceWithType(listing.price, listing.priceType)}
                      </td>
                      <td>{listing.category}</td>
                      <td>
                        <span
                          className={`status-badge ${getStatusClass(
                            listing.status
                          )}`}
                        >
                          {listing.status.charAt(0).toUpperCase() +
                            listing.status.slice(1)}
                        </span>
                      </td>
                      <td>{listing.views}</td>
                      <td>{listing.bookings}</td>
                      <td className="listing-actions">
                        <Link
                          to={`/edit-listing/${listing.id}`}
                          className="action-button edit"
                        >
                          Edit
                        </Link>
                        {listing.status !== "pending" && (
                          <button
                            className={`action-button ${
                              listing.status === "active"
                                ? "deactivate"
                                : "activate"
                            }`}
                            onClick={() => toggleListingStatus(listing.id)}
                          >
                            {listing.status === "active"
                              ? "Deactivate"
                              : "Activate"}
                          </button>
                        )}
                        <Link
                          to={`/rental-calendar/${listing.id}`}
                          className="action-button calendar"
                        >
                          Calendar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <h3>No listings found</h3>
              <p>
                You don't have any {filter !== "all" ? filter : ""} listings
                yet.
              </p>
              <Link to="/create-listing" className="btn btn-primary">
                Create Your First Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyListingsPage;
