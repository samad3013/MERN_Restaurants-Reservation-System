import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string | number;
    positive: boolean;
  };
  color: 'primary' | 'secondary' | 'success' | 'warning';
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  color 
}) => {
  const colorStyles = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-500',
    success: 'bg-success',
    warning: 'bg-warning',
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${colorStyles[color]} bg-opacity-20`}>
            <Icon className={`h-6 w-6 ${colorStyles[color]} text-opacity-100`} />
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
      
      {change && (
        <div className="bg-gray-50 px-5 py-3">
          <div className="flex items-center">
            <div className={`flex items-center text-sm ${change.positive ? 'text-success' : 'text-error'}`}>
              {change.positive ? (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              )}
              <span>{change.value}%</span>
            </div>
            <span className="ml-2 text-sm text-gray-500">from previous period</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsCard;