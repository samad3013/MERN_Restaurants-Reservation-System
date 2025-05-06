export interface Reservation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  cuisineId: string;
  specialRequests?: string;
  status?: 'confirmed' | 'cancelled' | 'completed';
  createdAt?: string;
  updatedAt?: string;
}