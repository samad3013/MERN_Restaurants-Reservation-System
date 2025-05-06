import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-serif font-semibold text-primary-600">Savoria</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'} transition-colors duration-200`}
            >
              Home
            </Link>
            <Link 
              to="/reservation" 
              className={`text-sm font-medium ${isActive('/reservation') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'} transition-colors duration-200`}
            >
              Make Reservation
            </Link>
            {user ? (
              <>
                <Link 
                  to="/admin" 
                  className={`text-sm font-medium ${isActive('/admin') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'} transition-colors duration-200`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/admin/login" 
                className={`text-sm font-medium ${isActive('/admin/login') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'} transition-colors duration-200`}
              >
                Admin
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-white bg-primary-600' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-500'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/reservation" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/reservation') ? 'text-white bg-primary-600' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-500'}`}
              onClick={() => setIsOpen(false)}
            >
              Make Reservation
            </Link>
            {user ? (
              <>
                <Link 
                  to="/admin" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/admin') ? 'text-white bg-primary-600' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-500'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/admin/login" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/admin/login') ? 'text-white bg-primary-600' : 'text-gray-700 hover:bg-gray-100 hover:text-primary-500'}`}
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;