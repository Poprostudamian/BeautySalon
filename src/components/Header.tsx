import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navigation = [
    { name: 'Strona Główna', href: '/' },
    { name: 'Usługi', href: '/services' },
    { name: 'Galeria', href: '/gallery' },
    { name: 'O Nas', href: '/about' },
    { name: 'Opinie', href: '/reviews' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px - hide navbar
          setIsVisible(false);
          setIsMenuOpen(false); // Close mobile menu when hiding
        } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
          // Scrolling up or at top - show navbar
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      // Show navbar when switching to desktop
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">Luxe Nails</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-pink-500 font-semibold'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/booking"
            className="hidden md:inline-flex bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-200"
          >
            Zarezerwuj
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Przełącz menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-pink-500 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-pink-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-pink-600 transition-colors duration-200 mt-4"
            >
              Zarezerwuj
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;