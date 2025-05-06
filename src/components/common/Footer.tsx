import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold">Savoria</h3>
            <p className="mt-4 text-gray-300 text-sm">
              Experience culinary excellence in a warm, inviting atmosphere. Our chefs prepare
              authentic dishes from around the world, using the freshest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Potheri, Kattankalthur City, Chennai 603203</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(6262173362)</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@savoria.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium">Hours</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Monday - Thursday</p>
                  <p className="text-gray-300 text-sm">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Friday - Saturday</p>
                  <p className="text-gray-300 text-sm">11:00 AM - 11:30 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Sunday</p>
                  <p className="text-gray-300 text-sm">12:00 PM - 9:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <div className="mt-6">
              <a href="/reservation" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;