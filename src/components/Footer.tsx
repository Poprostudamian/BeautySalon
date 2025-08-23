import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">Luxe Nails</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Zapewniamy wyjątkową obsługę w relaksującym, czystym środowisku 
              z najnowszymi technikami i trendami.
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
            <h3 className="text-lg font-semibold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Usługi</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Galeria</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">O Nas</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Opinie</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informacje Kontaktowe</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">(22) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">ul. Piękna 123, Warszawa 00-001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-pink-400" />
                <div className="text-gray-300">
                  <div>Pon-Sob: 9:00-19:00</div>
                  <div>Nie: 10:00-18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Luxe Nails. Wszelkie prawa zastrzeżone. | Profesjonalna pielęgnacja paznokci z certyfikowanymi specjalistkami.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;