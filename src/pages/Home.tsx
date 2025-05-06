import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import CuisineCard from '../components/home/CuisineCard';
import { getCuisines } from '../services/cuisineService';
import { Cuisine } from '../types/Cuisine';

const Home: React.FC = () => {
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const data = await getCuisines();
        setCuisines(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load cuisines');
        setLoading(false);
        console.error('Error fetching cuisines:', err);
      }
    };
    
    fetchCuisines();
  }, []);
  
  return (
    <div>
      <Hero />
      
      <AboutSection />
      
      <section id="cuisines" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
                Our Cuisines
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto my-4"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Explore our diverse range of culinary traditions from around the world, 
                each prepared with authentic techniques and the finest ingredients.
              </p>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : error ? (
              <div className="text-center text-error py-8">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cuisines.map((cuisine) => (
                  <CuisineCard
                    key={cuisine._id}
                    id={cuisine._id}
                    name={cuisine.name}
                    description={cuisine.description}
                    imageUrl={cuisine.imageUrl}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Ready to Experience Culinary Excellence?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-50">
              Join us for an unforgettable dining experience. Reserve your table now and
              embark on a gastronomic journey that will delight your senses.
            </p>
            <a
              href="/reservation"
              className="inline-block bg-white hover:bg-gray-100 text-primary-700 font-medium py-3 px-8 rounded-md transition-colors duration-200"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;