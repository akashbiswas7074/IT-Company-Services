'use client';

import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className="back-to-top" 
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <i className="ion-ios-arrow-up">↑</i>
    </a>
  );
};

export default BackToTop;