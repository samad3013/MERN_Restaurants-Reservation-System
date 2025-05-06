import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, Users, Utensils, TrendingUp } from 'lucide-react';
import StatsCard from '../../components/admin/StatsCard';
import { getReservationStats } from '../../services/reservationService';

interface ReservationStats {
  totalReservations: number;
  todayReservations: number;
  upcomingReservations: number;
  averagePartySize: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<ReservationStats | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getReservationStats();
        setStats(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reservation stats:', error);
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
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
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and manage all aspects of your restaurant's reservations
          </p>
        </div>
        
        {stats && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Reservations"
              value={stats.totalReservations}
              icon={CalendarClock}
              color="primary"
              change={{ value: 12, positive: true }}
            />
            <StatsCard
              title="Today's Reservations"
              value={stats.todayReservations}
              icon={Utensils}
              color="secondary"
            />
            <StatsCard
              title="Upcoming Reservations"
              value={stats.upcomingReservations}
              icon={TrendingUp}
              color="success"
              change={{ value: 8, positive: true }}
            />
            <StatsCard
              title="Average Party Size"
              value={stats.averagePartySize.toFixed(1)}
              icon={Users}
              color="warning"
            />
          </div>
        )}
        
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Manage Reservations</h3>
              <p className="mt-1 text-sm text-gray-500">
                View, edit, and cancel customer reservations
              </p>
              <div className="mt-4">
                <Link
                  to="/admin/reservations"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  View All Reservations
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              <p className="mt-1 text-sm text-gray-500">
                Common tasks and operations
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href="#"
                  className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 transition-colors"
                >
                  Export Reservations
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 transition-colors"
                >
                  Generate Reports
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 transition-colors"
                >
                  Manage Cuisines
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <p className="mt-1 text-sm text-gray-500">
                Latest system activities
              </p>
              <div className="mt-6 flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  <li className="py-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">New reservation created</p>
                      <p className="text-gray-500">John Doe - Table for 4</p>
                      <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Reservation updated</p>
                      <p className="text-gray-500">Sarah Smith - Changed time to 7:30 PM</p>
                      <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Reservation cancelled</p>
                      <p className="text-gray-500">Michael Johnson - Table for 2</p>
                      <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;