import React from 'react';
import ReservationForm from '../components/reservation/ReservationForm';

const Reservation: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Reserve Your Table
            </h1>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Secure your dining experience at Savoria. Please complete the form below
              with your details and preferences, and we'll confirm your reservation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 animate-fade-in">
            <ReservationForm />
          </div>
          
          <div className="mt-10 bg-primary-50 border border-primary-100 rounded-lg p-6">
            <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">
              Reservation Policy
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm">
                  Reservations are held for 15 minutes past the scheduled time, after which they may be released.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm">
                  For parties of 6 or more, please call us directly for availability.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm">
                  Cancellations should be made at least 24 hours in advance.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm">
                  Special dietary requirements should be noted in the special requests field.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;