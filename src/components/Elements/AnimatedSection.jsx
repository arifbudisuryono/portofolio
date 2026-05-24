import React, { useEffect, useRef, useState } from 'react';

// PERUBAHAN: Menambahkan prop 'animation' dengan nilai default 'fade-up'
const AnimatedSection = ({ children, className = '', animation = 'fade-up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // DAFTAR GAYA ANIMASI
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-down': // Masuk dari arah kanan ke kiri
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16';
      case 'zoom-in': // Efek membesar perlahan
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80';
      case 'fade-up': // Masuk dari bawah ke atas (Default)
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1900ms] ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;