import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReservationDetails from '../components/confirmation/ReservationDetails';
import { getReservation } from '../services/reservationService';
import { getCuisine } from '../services/cuisineService';
import { Reservation } from '../types/Reservation';
import { Cuisine } from '../types/Cuisine';

const Confirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [cuisine, setCuisine] = useState<Cuisine | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      try {
        const reservationData = await getReservation(id);
        setReservation(reservationData);
        
        if (reservationData.cuisineId) {
          const cuisineData = await getCuisine(reservationData.cuisineId);
          setCuisine(cuisineData);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load reservation details');
        setLoading(false);
        console.error('Error fetching reservation:', err);
      }
    };
    
    fetchData();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error || !reservation) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Error
              </h2>
              <p className="text-red-600 mb-6">
                {error || 'Reservation not found'}
              </p>
              <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Thank You for Your Reservation
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>
          
          <ReservationDetails reservation={reservation} cuisine={cuisine} />
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;