import axios from 'axios';
import { Reservation } from '../types/Reservation';

const API_URL = 'http://localhost:5000/api';

// For demo purposes, we'll use mock data until the backend is connected
let MOCK_RESERVATIONS: Reservation[] = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    date: '2025-06-15',
    time: '19:00',
    partySize: '4',
    cuisineId: '1',
    specialRequests: 'Window table preferred',
    status: 'confirmed',
    createdAt: '2025-06-10T12:00:00Z'
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 987-6543',
    date: '2025-06-16',
    time: '20:00',
    partySize: '2',
    cuisineId: '3',
    status: 'confirmed',
    createdAt: '2025-06-11T09:30:00Z'
  },
  {
    _id: '3',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    phone: '(555) 456-7890',
    date: '2025-06-15',
    time: '18:00',
    partySize: '6',
    cuisineId: '2',
    specialRequests: 'Celebrating an anniversary',
    status: 'confirmed',
    createdAt: '2025-06-09T15:45:00Z'
  }
];

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const createReservation = async (reservationData: Partial<Reservation>): Promise<Reservation> => {
  try {
    // In a real app, this would post to your API
    // const response = await axios.post(`${API_URL}/reservations`, reservationData);
    // return response.data;
    
    // For demo, we'll create a mock reservation
    return new Promise((resolve) => {
      setTimeout(() => {
        const newReservation: Reservation = {
          _id: Date.now().toString(),
          ...reservationData,
          status: 'confirmed',
          createdAt: new Date().toISOString(),
        } as Reservation;
        
        MOCK_RESERVATIONS.push(newReservation);
        resolve(newReservation);
      }, 500);
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw error;
  }
};

export const getReservations = async (): Promise<Reservation[]> => {
  try {
    // In a real app, this would fetch from your API
    // const response = await axios.get(`${API_URL}/reservations`);
    // return response.data;
    
    // For demo, we'll return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...MOCK_RESERVATIONS]);
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    throw error;
  }
};

export const getReservation = async (id: string): Promise<Reservation> => {
  try {
    // In a real app, this would fetch from your API
    // const response = await axios.get(`${API_URL}/reservations/${id}`);
    // return response.data;
    
    // For demo, we'll return mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const reservation = MOCK_RESERVATIONS.find(r => r._id === id);
        if (reservation) {
          resolve(reservation);
        } else {
          reject(new Error('Reservation not found'));
        }
      }, 300);
    });
  } catch (error) {
    console.error(`Error fetching reservation with id ${id}:`, error);
    throw error;
  }
};

export const updateReservation = async (id: string, reservationData: Partial<Reservation>): Promise<Reservation> => {
  try {
    // In a real app, this would put to your API
    // const response = await axios.put(`${API_URL}/reservations/${id}`, reservationData);
    // return response.data;
    
    // For demo, we'll update mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = MOCK_RESERVATIONS.findIndex(r => r._id === id);
        if (index !== -1) {
          MOCK_RESERVATIONS[index] = {
            ...MOCK_RESERVATIONS[index],
            ...reservationData,
            updatedAt: new Date().toISOString(),
          };
          resolve(MOCK_RESERVATIONS[index]);
        } else {
          reject(new Error('Reservation not found'));
        }
      }, 500);
    });
  } catch (error) {
    console.error(`Error updating reservation with id ${id}:`, error);
    throw error;
  }
};

export const deleteReservation = async (id: string): Promise<void> => {
  try {
    // In a real app, this would delete from your API
    // await axios.delete(`${API_URL}/reservations/${id}`);
    
    // For demo, we'll remove from mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = MOCK_RESERVATIONS.findIndex(r => r._id === id);
        if (index !== -1) {
          MOCK_RESERVATIONS = MOCK_RESERVATIONS.filter(r => r._id !== id);
          resolve();
        } else {
          reject(new Error('Reservation not found'));
        }
      }, 300);
    });
  } catch (error) {
    console.error(`Error deleting reservation with id ${id}:`, error);
    throw error;
  }
};

export const getReservationStats = async (): Promise<{
  totalReservations: number;
  todayReservations: number;
  upcomingReservations: number;
  averagePartySize: number;
}> => {
  try {
    // In a real app, this would fetch from your API
    // const response = await axios.get(`${API_URL}/reservations/stats`);
    // return response.data;
    
    // For demo, we'll calculate from mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const today = getTodayDate();
        const todayReservations = MOCK_RESERVATIONS.filter(r => r.date === today);
        const upcomingReservations = MOCK_RESERVATIONS.filter(r => r.date > today);
        
        // Calculate average party size
        const totalPartySize = MOCK_RESERVATIONS.reduce(
          (sum, reservation) => sum + parseInt(reservation.partySize), 
          0
        );
        const averagePartySize = MOCK_RESERVATIONS.length ? 
          totalPartySize / MOCK_RESERVATIONS.length : 0;
        
        resolve({
          totalReservations: MOCK_RESERVATIONS.length,
          todayReservations: todayReservations.length,
          upcomingReservations: upcomingReservations.length,
          averagePartySize
        });
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching reservation stats:', error);
    throw error;
  }
};