import React from 'react';

const WeddingButton = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick}
      // Tema Monokrom: Border putih, teks putih. Hover: Background putih, teks hitam.
      className={`flex items-center justify-center gap-3 py-1 px-6 bg-white border-2 border-black hover:bg-black hover:border-white hover:text-white text-black rounded-full font-serif text-[12px] tracking-widest uppercase transition-all duration-300 lg:py-[2px] lg:px-[18px] lg:text-[10px] ${className}`}
    >
      {children}
    </button>
  );
};

export default WeddingButton;