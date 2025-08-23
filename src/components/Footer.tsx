import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Luxe Nails</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your premier destination for luxury nail care and artistry. We provide exceptional 
              service in a relaxing, clean environment with the latest techniques and trends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">123 Beauty Ave, City, ST 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-pink-400" />
                <div className="text-gray-300">
                  <div>Mon-Sat: 9AM-7PM</div>
                  <div>Sun: 10AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Luxe Nails. All rights reserved. | Professional nail care with certified technicians.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;