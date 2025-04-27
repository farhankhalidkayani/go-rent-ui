import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import "./BookingsPage.css";

interface Booking {
  id: string;
  itemName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "upcoming" | "active" | "completed" | "canceled";
  ownerName: string;
  imageUrl: string;
}

const BookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Mock data - in a real app, this would fetch from an API
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockBookings: Booking[] = [
        {
          id: "b1",
          itemName: "Professional DSLR Camera",
          startDate: "2025-05-01",
          endDate: "2025-05-07",
          totalPrice: 250.0,
          status: "upcoming",
          ownerName: "John Smith",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: "b2",
          itemName: "Mountain Bike",
          startDate: "2025-04-20",
          endDate: "2025-04-26",
          totalPrice: 180.0,
          status: "active",
          ownerName: "Alice Johnson",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: "b3",
          itemName: "Camping Tent (4-Person)",
          startDate: "2025-03-15",
          endDate: "2025-03-20",
          totalPrice: 120.0,
          status: "completed",
          ownerName: "Robert Brown",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: "b4",
          itemName: "Power Drill Set",
          startDate: "2025-02-10",
          endDate: "2025-02-12",
          totalPrice: 45.0,
          status: "completed",
          ownerName: "Emily Davis",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: "b5",
          itemName: "Projector",
          startDate: "2025-01-05",
          endDate: "2025-01-07",
          totalPrice: 75.0,
          status: "canceled",
          ownerName: "Michael Wilson",
          imageUrl: "https://via.placeholder.com/150",
        },
      ];

      setBookings(mockBookings);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "upcoming":
        return "status-upcoming";
      case "active":
        return "status-active";
      case "completed":
        return "status-completed";
      case "canceled":
        return "status-canceled";
      default:
        return "";
    }
  };

  const handleCancelBooking = (id: string) => {
    // In a real app, this would call an API to cancel the booking
    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: "canceled" as const }
          : booking
      )
    );
  };

  return (
    <div className="bookings-page">
      <div className="container">
        <div className="page-header">
          <h1>My Bookings</h1>
          <p>Manage your rental bookings</p>
        </div>

        <div className="dashboard-navigation">
          <Link to="/dashboard" className="dashboard-link">
            Dashboard
          </Link>
          <Link to="/profile" className="dashboard-link">
            Profile
          </Link>
          <Link to="/bookings" className="dashboard-link active">
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

        <div className="bookings-content">
          <div className="filters">
            <button
              className={filter === "all" ? "filter-active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "upcoming" ? "filter-active" : ""}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={filter === "active" ? "filter-active" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "filter-active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
            <button
              className={filter === "canceled" ? "filter-active" : ""}
              onClick={() => setFilter("canceled")}
            >
              Canceled
            </button>
          </div>

          {isLoading ? (
            <div className="loading">Loading your bookings...</div>
          ) : filteredBookings.length > 0 ? (
            <div className="bookings-list">
              {filteredBookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-image">
                    <img src={booking.imageUrl} alt={booking.itemName} />
                  </div>
                  <div className="booking-details">
                    <h3>{booking.itemName}</h3>
                    <p className="booking-dates">
                      {formatDate(booking.startDate)} -{" "}
                      {formatDate(booking.endDate)}
                    </p>
                    <p className="booking-owner">From: {booking.ownerName}</p>
                    <div className="booking-price">
                      ${booking.totalPrice.toFixed(2)}
                    </div>
                    <div
                      className={`booking-status ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </div>
                  </div>
                  <div className="booking-actions">
                    <Link
                      to={`/rentals/${booking.id}`}
                      className="btn btn-outline"
                    >
                      View Details
                    </Link>
                    {booking.status === "upcoming" && (
                      <Button
                        variant="outline"
                        className="btn-danger"
                        onClick={() => handleCancelBooking(booking.id)}
                      >
                        Cancel Booking
                      </Button>
                    )}
                    {booking.status === "completed" && (
                      <Link
                        to={`/reviews/create/${booking.id}`}
                        className="btn btn-primary"
                      >
                        Leave Review
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No bookings found</h3>
              <p>
                You don't have any {filter !== "all" ? filter : ""} bookings
                yet.
              </p>
              <Link to="/browse" className="btn btn-primary">
                Browse Items to Rent
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
