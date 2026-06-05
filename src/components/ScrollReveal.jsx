import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, direction = 'left', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '-30px 0px -30px 0px' // Offset to trigger before fully exiting
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getRevealClass = () => {
    if (direction === 'left') {
      return isVisible
        ? 'opacity-100 translate-x-0 scale-100'
        : 'opacity-0 translate-x-16 md:-translate-x-16 scale-95 pointer-events-none';
    } else {
      return isVisible
        ? 'opacity-100 translate-x-0 scale-100'
        : 'opacity-0 translate-x-16 scale-95 pointer-events-none';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform ${getRevealClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
