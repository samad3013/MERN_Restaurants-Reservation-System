import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';
import { getReservation } from '../../services/reservationService';
import { Reservation } from '../../types/Reservation';
import EditReservationForm from '../../components/admin/EditReservationForm';

const EditReservation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchReservation = async () => {
      if (!id) return;
      
      try {
        const data = await getReservation(id);
        setReservation(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load reservation details');
        setLoading(false);
        console.error('Error fetching reservation:', err);
      }
    };
    
    fetchReservation();
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
              <Link to="/admin/reservations" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/admin/reservations" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reservations
          </Link>
          <h1 className="mt-4 text-2xl font-serif font-bold text-gray-900">
            Edit Reservation
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update the reservation details for {reservation.name}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Reservation Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Reservation ID: {reservation._id}
            </p>
          </div>
          
          <div className="p-6">
            <EditReservationForm reservation={reservation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReservation;