import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1600')` 
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Exquisite Dining Experience
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-up">
              Reserve your table at Savoria and embark on a culinary journey with our diverse cuisines prepared by world-class chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/reservation">
                <Button variant="primary" size="lg">
                  Reserve a Table
                </Button>
              </Link>
              <a href="#cuisines">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-700">
                  Explore Cuisines
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;