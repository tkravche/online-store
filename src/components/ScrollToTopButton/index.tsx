import { ArrowUpward } from '@mui/icons-material';
import { useState, useEffect } from 'react';


export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 2700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      } fixed bottom-[413px] right-16 p-2 rounded-full border border-solid border-main-black cursor-pointer transition-opacity duration-100 z-50`}
      onClick={scrollToTop}
    >
      <ArrowUpward className="text-white text-2xl" />
    </div>
  );
};

