import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// For demo purposes, we'll simulate authentication with localStorage
// In a real app, this would use JWT tokens and proper backend authentication

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const DEMO_ADMIN = {
  id: '1',
  email: 'admin@savoria.com',
  password: 'admin123',
  name: 'Admin User',
  role: 'admin',
};

export const login = async (email: string, password: string): Promise<User> => {
  // In a real app, this would be an API call to your backend
  // return axios.post(`${API_URL}/auth/login`, { email, password });
  
  // For demo, we'll simulate a login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
        const user = {
          id: DEMO_ADMIN.id,
          email: DEMO_ADMIN.email,
          name: DEMO_ADMIN.name,
          role: DEMO_ADMIN.role,
        };
        
        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};

export const logout = async (): Promise<void> => {
  // In a real app, this would be an API call to your backend
  // return axios.post(`${API_URL}/auth/logout`);
  
  // For demo, we'll just clear localStorage
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('user');
      resolve();
    }, 300);
  });
};

export const checkAuth = async (): Promise<User> => {
  // In a real app, this would validate the JWT token with your backend
  // return axios.get(`${API_URL}/auth/me`);
  
  // For demo, we'll check localStorage
  return new Promise((resolve, reject) => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr) as User;
      resolve(user);
    } else {
      reject(new Error('Not authenticated'));
    }
  });
};