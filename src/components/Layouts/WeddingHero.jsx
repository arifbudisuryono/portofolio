import React, { useState, useEffect } from 'react';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingHero = ({ isOpened }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let timer;
    if (isOpened) {
      timer = setTimeout(() => {
        setCurrentImage(1);
      }, 2500); 
    }
    return () => clearTimeout(timer);
  }, [isOpened]);

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden text-center text-white bg-black">
      
      {/* FOTO 1 (Akan memudar setelah 4 detik) */}
      <div 
        className={`absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${currentImage === 0 ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: 'url(/wedding/hero1.png)' }}
      />

      {/* FOTO 2 (Akan muncul dan menetap selamanya) */}
      <div 
        className={`absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: 'url(/wedding/hero2.png)' }}
      />

      {/* OVERLAY HITAM TRANSPARAN */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      <AnimatedSection animation="fade-up" className="relative z-20 flex flex-col items-center justify-center w-full text-white">
          {/* KONTEN TEKS */}
          <div className="flex flex-col items-center w-[90%] max-w-[500px]">
            
            <p className="mb-5 font-sans text-[12px] tracking-[3px] uppercase">
              The Wedding Of
            </p>
            
            <h1 className="mb-6 font-serif text-5xl font-normal md:text-6xl">
              Arif & Indri
            </h1>

            {/* TANGGAL NGUNDUH MANTU */}
            <p className="font-serif text-sm tracking-widest uppercase text-gray-200">
              Minggu, 24 Mei 2026
            </p>
          </div>
        </AnimatedSection>

      <div className="absolute flex flex-col items-center z-20 bottom-10 animate-bounce opacity-80">
        <svg 
          className="w-7 h-7 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Garis Panah Atas */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6l7 7 7-7" />
          {/* Garis Panah Bawah */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default WeddingHero;