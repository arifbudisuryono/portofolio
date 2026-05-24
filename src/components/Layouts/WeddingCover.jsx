import React, { useEffect } from 'react';
import WeddingButton from '../Elements/WeddingButton';

const WeddingCover = ({ namaTamu, targetSectionRef, isOpened, onOpen }) => {
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    onOpen(); // Mengubah isOpened di file induk menjadi true

    // Jeda 1 detik sebelum otomatis scroll ke bawah
    setTimeout(() => {
      if (targetSectionRef && targetSectionRef.current) {
        targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000); 
  };

  return (
    <section className="relative flex flex-col items-center justify-end pb-[50px] md:pt-0 w-full min-h-screen text-center text-white bg-center bg-cover"
      style={{ backgroundImage: 'url(/wedding/depan.png)' }}
    >
      {/* OVERLAY HITAM TRANSPARAN */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* KONTEN TEKS & TOMBOL */}
      <div className="relative z-20 flex flex-col items-center w-[90%] max-w-[500px]">
        
        <p className="mb-5 font-sans text-[12px] lg:text-[10px] tracking-[2px] uppercase">
          The Wedding Of
        </p>
        
        {/* NAMA MEMPELAI */}
        <h1 className="mb-5 font-serif text-[28px] font-normal md:text-6xl lg:text-4xl">
          Arif & Indri
        </h1>

        {/* --- EFEK MENGHILANG --- */}
        {/* Nama tamu dan tombol dibungkus div ini agar menghilang dengan halus saat tombol diklik */}
        <div className={`flex flex-col items-center transition-all duration-1000 ease-in-out ${isOpened ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          
          {/* BAGIAN TAMU */}
          <div className="mb-8">
            <p className="mb-2 font-sans text-sm text-gray-300">
              Kepada Yth.
            </p>
            <h3 className="m-0 font-serif text-[15px] font-normal capitalize">
              {namaTamu}
            </h3>
          </div>

          {/* TOMBOL */}
          <WeddingButton onClick={handleOpenInvitation}>
            <span className="text-xl">✉</span>
            Buka Undangan
          </WeddingButton>

        </div>
        
      </div>
    </section>
  );
};

export default WeddingCover;