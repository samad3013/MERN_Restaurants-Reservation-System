import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CalendarPlus } from 'lucide-react';
import { 
  getReservations, 
  deleteReservation 
} from '../../services/reservationService';
import { getCuisines } from '../../services/cuisineService';
import ReservationTable from '../../components/admin/ReservationTable';
import Button from '../../components/common/Button';
import { Reservation } from '../../types/Reservation';
import { Cuisine } from '../../types/Cuisine';

const ManageReservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [cuisineMap, setCuisineMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch reservations
        const reservationsData = await getReservations();
        setReservations(reservationsData);
        
        // Fetch cuisines to map cuisine IDs to names
        const cuisinesData = await getCuisines();
        const cuisineMapping: Record<string, string> = {};
        cuisinesData.forEach((cuisine: Cuisine) => {
          cuisineMapping[cuisine._id] = cuisine.name;
        });
        setCuisineMap(cuisineMapping);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load reservations');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const handleDeleteReservation = async (id: string) => {
    try {
      await deleteReservation(id);
      setReservations(reservations.filter(reservation => reservation._id !== id));
      toast.success('Reservation deleted successfully');
    } catch (error) {
      console.error('Error deleting reservation:', error);
      toast.error('Failed to delete reservation');
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Manage Reservations
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              View, edit, and delete customer reservations
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link to="/admin">
              <Button variant="outline" className="mr-3">
                Back to Dashboard
              </Button>
            </Link>
            <Link to="/reservation">
              <Button>
                <CalendarPlus className="h-5 w-5 mr-2" />
                New Reservation
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              All Reservations
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {reservations.length} total reservations
            </p>
          </div>
          
          <ReservationTable 
            reservations={reservations} 
            cuisines={cuisineMap}
            onDelete={handleDeleteReservation}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageReservations;