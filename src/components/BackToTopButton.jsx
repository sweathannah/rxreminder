// components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // or use a custom icon

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-[5rem] z-50 bg-[#015777] hover:bg-[#01405b] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTopButton;
