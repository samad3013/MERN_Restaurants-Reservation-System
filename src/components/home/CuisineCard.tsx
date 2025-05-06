import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

interface CuisineProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const CuisineCard: React.FC<CuisineProps> = ({ id, name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={`/reservation?cuisine=${id}`}>
          <Button variant="primary" size="sm" className="mt-2">
            Reserve Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CuisineCard;