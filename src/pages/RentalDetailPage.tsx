import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import RentalCard from "../components/common/RentalCard";
import "./RentalDetailPage.css";

// Mock rental data for detail page
const rentalData = {
  id: "123",
  title: "Professional DSLR Camera Kit with Lenses",
  category: "Electronics",
  price: 45,
  location: "San Francisco, CA",
  rating: 4.8,
  reviewCount: 24,
  description:
    "Professional Canon EOS 5D Mark IV DSLR Camera with a complete set of lenses for all your photography needs. This kit includes the camera body, 24-70mm lens, 70-200mm lens, 50mm prime lens, extra batteries, memory cards, and a carrying case.",
  features: [
    "Canon EOS 5D Mark IV DSLR Camera",
    "24-70mm f/2.8L II USM Lens",
    "70-200mm f/2.8L IS III USM Lens",
    "50mm f/1.4 USM Lens",
    "2 Extra Batteries",
    "3 Memory Cards (64GB each)",
    "Professional Carrying Case",
    "Tripod",
  ],
  rules: [
    "Valid ID required for pickup",
    "Security deposit of $500 required",
    "Return in the same condition",
    "No international travel without prior approval",
    "Late returns charged at 1.5x daily rate",
  ],
  availability: true,
  securityDeposit: 500,
  minRentalDays: 1,
  images: [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1584824486516-0555a07fc511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  ],
  owner: {
    id: "owner123",
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4.9,
    responseRate: 98,
    responseTime: "within 1 hour",
    listingsCount: 12,
    joined: "March 2022",
  },
  reviews: [
    {
      id: "review1",
      user: {
        name: "Sarah Wilson",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      rating: 5,
      date: "April 10, 2025",
      text: "Excellent camera kit! Everything was in perfect condition and Michael was very helpful explaining how to use some of the more advanced features. Would definitely rent again.",
    },
    {
      id: "review2",
      user: {
        name: "James Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      rating: 5,
      date: "March 25, 2025",
      text: "Great experience renting this camera kit. The lenses were high quality and the whole package was well maintained. Pickup and drop-off were smooth and convenient.",
    },
    {
      id: "review3",
      user: {
        name: "Emma Thompson",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      rating: 4,
      date: "February 12, 2025",
      text: "The camera and lenses were in great condition. I rented the kit for a weekend photography trip and got some amazing shots. Knocked one star because one of the memory cards was a bit slow, but otherwise perfect.",
    },
  ],
  similarRentals: [
    {
      id: "124",
      title: "Sony Alpha Mirrorless Camera",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      location: "San Francisco, CA",
      rating: 4.7,
      category: "Electronics",
    },
    {
      id: "125",
      title: "Drone with 4K Camera",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      location: "Oakland, CA",
      rating: 4.9,
      category: "Electronics",
    },
    {
      id: "126",
      title: "GoPro Hero 10 Kit",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      location: "San Jose, CA",
      rating: 4.6,
      category: "Electronics",
    },
    {
      id: "127",
      title: "Professional Lighting Kit",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      location: "Palo Alto, CA",
      rating: 4.8,
      category: "Electronics",
    },
  ],
  latitude: 37.7749,
  longitude: -122.4194,
};

const RentalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(3); // Default rental period

  // In a real app, you would fetch the rental data based on the ID
  // const rental = fetchRentalById(id);
  const rental = rentalData; // Using mock data for now

  // Calculate the total cost
  const rentalCost = rental.price * days;
  const serviceFee = Math.round(rentalCost * 0.1); // 10% service fee
  const total = rentalCost + serviceFee;

  const handleDateChange = () => {
    // In a real app, calculate the number of days between start and end dates
    // and update the days state
  };

  return (
    <div className="rental-detail-page">
      <div className="container">
        <div className="detail-content">
          <div className="left-column">
            {/* Image Gallery */}
            <div className="image-gallery">
              <img
                src={rental.images[selectedImage]}
                alt={rental.title}
                className="main-image"
              />
              <div className="thumbnails">
                {rental.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${rental.title} - view ${index + 1}`}
                    className={`thumbnail ${
                      selectedImage === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Rental Information */}
            <div className="rental-info">
              <div className="rental-header">
                <h1 className="rental-title">{rental.title}</h1>
                <div className="rental-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="location-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{rental.location}</span>
                </div>
                <div className="rental-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="star-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>
                    {rental.rating} ({rental.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Rental Details */}
              <div className="rental-details">
                <div className="detail-section">
                  <h2 className="section-title">About this rental</h2>
                  <p className="detail-description">{rental.description}</p>
                </div>

                <div className="detail-section">
                  <h2 className="section-title">What's included</h2>
                  <div className="features-list">
                    {rental.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="feature-icon"
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
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rental-policy">
                  <h2 className="section-title">Rental Policies</h2>
                  <div className="policy-list">
                    {rental.rules.map((rule, index) => (
                      <div key={index} className="policy-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="policy-icon"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="policy-text">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${rental.latitude},${rental.longitude}&zoom=14&size=800x300&markers=color:red%7C${rental.latitude},${rental.longitude}&key=YOUR_API_KEY`}
                    alt="Item location map"
                    className="map-image"
                  />
                </div>
              </div>

              {/* Reviews Section */}
              <div className="reviews-section">
                <div className="reviews-header">
                  <div className="review-count">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h2 className="section-title">
                      {rental.rating} · {rental.reviews.length} Reviews
                    </h2>
                  </div>
                  <Button variant="outline">Write a Review</Button>
                </div>

                <div className="reviews-list">
                  {rental.reviews.map((review) => (
                    <div key={review.id} className="review">
                      <div className="review-header">
                        <img
                          src={review.user.avatar}
                          alt={review.user.name}
                          className="reviewer-avatar"
                        />
                        <div className="reviewer-info">
                          <div className="reviewer-name">
                            {review.user.name}
                          </div>
                          <div className="review-date">{review.date}</div>
                          <div className="review-stars">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="star-icon"
                                viewBox="0 0 20 20"
                                fill={
                                  i < review.rating ? "currentColor" : "#e5e7eb"
                                }
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similar Rentals Section */}
              <div className="similar-rentals">
                <h2 className="similar-rentals-title">Similar Rentals</h2>
                <div className="similar-rentals-grid">
                  {rental.similarRentals.map((item) => (
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
              </div>
            </div>
          </div>

          <div className="right-column">
            {/* Price and Booking Section */}
            <div className="rental-price">
              <div>
                <span className="price-amount">${rental.price}</span>
                <span className="price-period">/day</span>
              </div>

              <div className="availability">
                <strong>Availability:</strong>{" "}
                {rental.availability
                  ? "Available Now"
                  : "Currently Unavailable"}
              </div>

              <div className="date-inputs">
                <div className="form-group">
                  <label htmlFor="start-date">Start Date</label>
                  <input
                    type="date"
                    id="start-date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      handleDateChange();
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end-date">End Date</label>
                  <input
                    type="date"
                    id="end-date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      handleDateChange();
                    }}
                  />
                </div>
              </div>

              <div className="total-section">
                <div className="fee">
                  <span>
                    ${rental.price} x {days} days
                  </span>
                  <span>${rentalCost}</span>
                </div>
                <div className="fee">
                  <span>Service fee</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="fee">
                  <span>Security deposit (refundable)</span>
                  <span>${rental.securityDeposit}</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <Button fullWidth className="mt-4">
                Request to Book
              </Button>
            </div>

            {/* Owner Section */}
            <div className="owner-section">
              <div className="owner-header">
                <img
                  src={rental.owner.avatar}
                  alt={rental.owner.name}
                  className="owner-avatar"
                />
                <div className="owner-info">
                  <div className="owner-name">
                    Listed by {rental.owner.name}
                  </div>
                  <div className="owner-rating">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="star-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{rental.owner.rating} rating</span>
                  </div>
                </div>
              </div>

              <div className="owner-stats">
                <div className="stat">
                  <div className="stat-value">{rental.owner.responseRate}%</div>
                  <div className="stat-label">Response Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{rental.owner.responseTime}</div>
                  <div className="stat-label">Response Time</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{rental.owner.joined}</div>
                  <div className="stat-label">Joined</div>
                </div>
              </div>

              <Button variant="outline" fullWidth className="contact-owner-btn">
                Contact Owner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetailPage;
