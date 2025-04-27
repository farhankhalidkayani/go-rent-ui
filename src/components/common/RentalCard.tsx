import React from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/rentals/${id}`}>
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-full text-xs font-medium text-gray-700">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/rentals/${id}`} className="block mb-1">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {title}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
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
          <span className="ml-1 text-sm text-gray-500">{location}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-700">
              {rating}
            </span>
          </div>
          <div>
            <span className="text-lg font-bold text-primary">${price}</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
