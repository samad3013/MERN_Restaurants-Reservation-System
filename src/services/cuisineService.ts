import axios from 'axios';
import { Cuisine } from '../types/Cuisine';

const API_URL = 'http://localhost:5000/api';

// For demo purposes, we'll use mock data until the backend is connected
const MOCK_CUISINES: Cuisine[] = [
  {
    _id: '1',
    name: 'Italian',
    description: 'Savor the rich flavors of Italy with our authentic pasta dishes, wood-fired pizzas, and delectable risottos. Each dish is prepared with imported ingredients and traditional techniques.',
    imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    _id: '2',
    name: 'Asian Fusion',
    description: 'Experience a blend of flavors from across Asia, where traditional recipes meet modern culinary innovation. Our chefs combine techniques from Japan, China, Thailand, and Vietnam.',
    imageUrl: 'https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    _id: '3',
    name: 'Mediterranean',
    description: 'Transport yourself to the shores of the Mediterranean with our fresh seafood, olive oil-infused dishes, and vibrant salads. Healthy, flavorful, and inspired by coastal cuisines.',
    imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    _id: '4',
    name: 'French',
    description: 'Indulge in the elegance of French cuisine, known for its refined techniques and exquisite flavors. Our menu features classics like coq au vin, beef bourguignon, and crème brûlée.',
    imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    _id: '5',
    name: 'Modern American',
    description: 'Contemporary American cuisine that celebrates local ingredients and diverse cultural influences. Innovative dishes with a focus on farm-to-table freshness and seasonal offerings.',
    imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    _id: '6',
    name: 'Indian',
    description: 'Explore the aromatic world of Indian cuisine, featuring fragrant curries, tandoori specialties, and freshly baked naan. Our dishes showcase the diverse regional flavors of India.',
    imageUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

export const getCuisines = async (): Promise<Cuisine[]> => {
  try {
    // In a real app, this would fetch from your API
    // const response = await axios.get(`${API_URL}/cuisines`);
    // return response.data;
    
    // For demo, we'll return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_CUISINES);
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching cuisines:', error);
    throw error;
  }
};

export const getCuisine = async (id: string): Promise<Cuisine> => {
  try {
    // In a real app, this would fetch from your API
    // const response = await axios.get(`${API_URL}/cuisines/${id}`);
    // return response.data;
    
    // For demo, we'll return mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cuisine = MOCK_CUISINES.find(c => c._id === id);
        if (cuisine) {
          resolve(cuisine);
        } else {
          reject(new Error('Cuisine not found'));
        }
      }, 300);
    });
  } catch (error) {
    console.error(`Error fetching cuisine with id ${id}:`, error);
    throw error;
  }
};