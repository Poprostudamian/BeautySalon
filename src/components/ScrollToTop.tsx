import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Przewiń do góry przy każdej zmianie ścieżki
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Płynne przewijanie
    });
  }, [pathname]);

  return null; // Ten komponent nie renderuje nic
};

export default ScrollToTop;