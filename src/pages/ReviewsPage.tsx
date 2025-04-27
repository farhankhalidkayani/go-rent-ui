import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReviewsPage.css";

interface Review {
  id: string;
  itemName: string;
  itemId: string;
  userName: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  isReceived: boolean; // Whether the review was received by the current user
  userPhotoUrl?: string;
}

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState<"received" | "given">("received");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Mock data - in a real app, this would fetch from an API
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      const mockReviews: Review[] = [
        {
          id: "r1",
          itemName: "Professional DSLR Camera",
          itemId: "l1",
          userName: "John Smith",
          userId: "u1",
          rating: 5,
          comment:
            "Amazing camera! It was in perfect condition and took beautiful photos. The owner was very responsive and helpful.",
          date: "2025-04-15",
          isReceived: true,
          userPhotoUrl: "https://via.placeholder.com/50",
        },
        {
          id: "r2",
          itemName: "Professional DSLR Camera",
          itemId: "l1",
          userName: "Emily Davis",
          userId: "u2",
          rating: 4,
          comment:
            "Great camera, but there were some minor scratches not shown in the photos. Otherwise, it worked perfectly and the owner was very nice.",
          date: "2025-04-10",
          isReceived: true,
          userPhotoUrl: "https://via.placeholder.com/50",
        },
        {
          id: "r3",
          itemName: "Mountain Bike",
          itemId: "l2",
          userName: "Michael Johnson",
          userId: "u3",
          rating: 5,
          comment:
            "Perfect bike for my weekend trip! It was well-maintained and comfortable to ride. I'd definitely rent it again.",
          date: "2025-03-28",
          isReceived: true,
          userPhotoUrl: "https://via.placeholder.com/50",
        },
        {
          id: "r4",
          itemName: "Camping Tent",
          itemId: "l7",
          userName: "Current User",
          userId: "current",
          rating: 4,
          comment:
            "The tent was easy to set up and kept us dry during unexpected rain. Only giving 4 stars because one zipper was a bit sticky.",
          date: "2025-04-05",
          isReceived: false,
          userPhotoUrl: "https://via.placeholder.com/50",
        },
        {
          id: "r5",
          itemName: "Power Washer",
          itemId: "l9",
          userName: "Current User",
          userId: "current",
          rating: 5,
          comment:
            "Excellent power washer! Made quick work of cleaning my deck and driveway. The owner provided clear instructions for use.",
          date: "2025-03-20",
          isReceived: false,
          userPhotoUrl: "https://via.placeholder.com/50",
        },
      ];

      setReviews(mockReviews);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredReviews = reviews.filter((review) => {
    return activeTab === "received" ? review.isReceived : !review.isReceived;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="reviews-page">
      <div className="container">
        <div className="page-header">
          <h1>My Reviews</h1>
          <p>See what others think about your items and your own reviews</p>
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
          <Link to="/my-listings" className="dashboard-link">
            My Listings
          </Link>
          <Link to="/reviews" className="dashboard-link active">
            Reviews
          </Link>
          <Link to="/transactions" className="dashboard-link">
            Transactions
          </Link>
        </div>

        <div className="reviews-content">
          <div className="reviews-tabs">
            <button
              className={activeTab === "received" ? "tab-active" : ""}
              onClick={() => setActiveTab("received")}
            >
              Reviews Received
            </button>
            <button
              className={activeTab === "given" ? "tab-active" : ""}
              onClick={() => setActiveTab("given")}
            >
              Reviews Given
            </button>
          </div>

          {isLoading ? (
            <div className="loading">Loading your reviews...</div>
          ) : filteredReviews.length > 0 ? (
            <div className="reviews-list">
              {filteredReviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-user">
                      {review.userPhotoUrl ? (
                        <img
                          src={review.userPhotoUrl}
                          alt={review.userName}
                          className="user-photo"
                        />
                      ) : (
                        <div className="user-initials">
                          {review.userName.charAt(0)}
                        </div>
                      )}
                      <div className="user-info">
                        <div className="user-name">{review.userName}</div>
                        <div className="review-date">
                          {formatDate(review.date)}
                        </div>
                      </div>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <div className="review-content">
                    <div className="review-item">
                      For:{" "}
                      <Link to={`/rentals/${review.itemId}`}>
                        {review.itemName}
                      </Link>
                    </div>
                    <div className="review-comment">{review.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No reviews found</h3>
              <p>
                You haven't {activeTab === "received" ? "received" : "given"}{" "}
                any reviews yet.
              </p>
              {activeTab === "received" ? (
                <Link to="/my-listings" className="btn btn-primary">
                  Manage Your Listings
                </Link>
              ) : (
                <Link to="/bookings" className="btn btn-primary">
                  View Your Bookings
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
