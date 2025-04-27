import React from "react";
import { Link } from "react-router-dom";
import "./RentalCard.css";

interface RentalCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  category: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  id,
  title,
  price,
  image,
  location,
  rating,
  category,
}) => {
  return (
    <div className="rental-card">
      <Link to={`/rentals/${id}`}>
        <div className="rental-card-image-container">
          <img src={image} alt={title} className="rental-card-image" />
          <div className="rental-card-category">{category}</div>
        </div>
      </Link>

      <div className="rental-card-content">
        <Link to={`/rentals/${id}`} className="rental-card-title">
          <h3 className="rental-card-title">{title}</h3>
        </Link>

        <div className="rental-card-location">
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
          <span className="location-text">{location}</span>
        </div>

        <div className="rental-card-footer">
          <div className="rating-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="star-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="rating-text">{rating}</span>
          </div>
          <div className="price-container">
            <span className="price-amount">${price}</span>
            <span className="price-period">/day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
