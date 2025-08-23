import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section'); // Pierwsza sekcja to zwykle hero
      const footer = document.querySelector('footer');
      
      if (!heroSection || !footer) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const footerTop = footer.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      const currentScrollY = window.scrollY;

      // Pokaż przycisk jeśli:
      // - Przewinęliśmy poniżej sekcji hero
      // - I nie dotarliśmy jeszcze do stopki
      const shouldShow = currentScrollY > heroBottom && scrollPosition < footerTop + 100;
      
      setIsVisible(shouldShow);
    };

    // Dodaj event listener
    window.addEventListener('scroll', handleScroll);
    
    // Sprawdź pozycję na początku
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Re-run when route changes

  // Nie pokazuj na stronie booking
  if (location.pathname === '/booking') {
    return null;
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <Link
        to="/booking"
        className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-lg group"
      >
        <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        <span>Zarezerwuj</span>
      </Link>
    </div>
  );
};

export default StickyBookingButton;