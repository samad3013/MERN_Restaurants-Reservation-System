import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Users, Utensils, InfoIcon } from 'lucide-react';
import { Reservation } from '../../types/Reservation';
import { Cuisine } from '../../types/Cuisine';

interface ReservationDetailsProps {
  reservation: Reservation;
  cuisine: Cuisine | null;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ reservation, cuisine }) => {
  // Format the date: May 15, 2025
  const formattedDate = reservation.date 
    ? format(new Date(reservation.date), 'MMMM d, yyyy')
    : 'Not specified';
  
  // Format the time: 7:00 PM
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${suffix}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
        Reservation Confirmed!
      </h2>
      
      <div className="border-t border-gray-200 pt-4">
        <p className="text-gray-600 mb-6">
          Thank you, {reservation.name}! Your reservation has been confirmed. We're looking forward to serving you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-500">Date</p>
              <p className="text-base font-medium">{formattedDate}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-500">Time</p>
              <p className="text-base font-medium">{formatTime(reservation.time)}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Users className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-500">Party Size</p>
              <p className="text-base font-medium">
                {reservation.partySize} {parseInt(reservation.partySize) === 1 ? 'Person' : 'People'}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Utensils className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-500">Cuisine</p>
              <p className="text-base font-medium">{cuisine?.name || 'Not specified'}</p>
            </div>
          </div>
        </div>

        {reservation.specialRequests && (
          <div className="mt-6 flex items-start">
            <InfoIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-500">Special Requests</p>
              <p className="text-base">{reservation.specialRequests}</p>
            </div>
          </div>
        )}
        
        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-md p-4">
          <h3 className="font-medium text-gray-900 mb-2">Reservation Details Have Been Sent</h3>
          <p className="text-gray-600 text-sm">
            A confirmation email has been sent to <strong>{reservation.email}</strong>. 
            If you need to modify or cancel your reservation, please contact us at least 24 hours in advance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetails;