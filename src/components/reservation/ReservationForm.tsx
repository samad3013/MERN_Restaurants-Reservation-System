import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { createReservation } from '../../services/reservationService';
import { getCuisines } from '../../services/cuisineService';
import { Cuisine } from '../../types/Cuisine';

const timeSlots = [
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '13:30', label: '1:30 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '18:30', label: '6:30 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '19:30', label: '7:30 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '20:30', label: '8:30 PM' },
  { value: '21:00', label: '9:00 PM' },
];

const partySize = Array.from({ length: 10 }, (_, i) => ({ 
  value: String(i + 1), 
  label: String(i + 1) + (i === 0 ? ' person' : ' people')
}));

const ReservationForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cuisineId = searchParams.get('cuisine');
  const navigate = useNavigate();
  
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    partySize: '2',
    cuisineId: cuisineId || '',
    specialRequests: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const data = await getCuisines();
        setCuisines(data);
        
        // If cuisineId is not provided or doesn't exist in the fetched cuisines, set the first cuisine as default
        if ((!cuisineId || !data.find(c => c._id === cuisineId)) && data.length > 0) {
          setFormData(prev => ({ ...prev, cuisineId: data[0]._id }));
        }
      } catch (error) {
        toast.error('Failed to load cuisines');
        console.error('Error fetching cuisines:', error);
      }
    };
    
    fetchCuisines();
  }, [cuisineId]);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s()-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    
    if (!formData.cuisineId) newErrors.cuisineId = 'Please select a cuisine';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const result = await createReservation(formData);
      toast.success('Reservation created successfully!');
      navigate(`/confirmation/${result._id}`);
    } catch (error) {
      toast.error('Failed to create reservation');
      console.error('Error creating reservation:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          id="phone"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
        
        <Select
          label="Cuisine"
          name="cuisineId"
          id="cuisineId"
          value={formData.cuisineId}
          onChange={handleChange}
          error={errors.cuisineId}
          options={cuisines.map(cuisine => ({
            value: cuisine._id,
            label: cuisine.name
          }))}
          required
        />
        
        <Input
          label="Date"
          type="date"
          name="date"
          id="date"
          min={today}
          value={formData.date}
          onChange={handleChange}
          error={errors.date}
          required
        />
        
        <Select
          label="Time"
          name="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
          options={timeSlots}
          required
        />
        
        <Select
          label="Party Size"
          name="partySize"
          id="partySize"
          value={formData.partySize}
          onChange={handleChange}
          options={partySize}
          required
        />
      </div>
      
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          id="specialRequests"
          rows={3}
          className="px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Allergies, dietary restrictions, special occasions, seating preferences..."
          value={formData.specialRequests}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" fullWidth isLoading={loading}>
          Complete Reservation
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;