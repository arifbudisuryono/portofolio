import React, { useEffect } from 'react';
import WeddingButton from '../Elements/WeddingButton';

const WeddingCover = ({ namaTamu, isOpened, onOpen }) => {
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

  // FUNGSI handleOpenInvitation DIHAPUS.
  // Mengapa? Karena animasi scroll lambat (2.5 detik) yang kita buat sebelumnya 
  // sudah ditangani sepenuhnya oleh fungsi onOpen() dari file induk. 
  // Jika kode scroll lama dibiarkan di sini, animasinya akan bertabrakan!

  return (
    <section 
      // PERUBAHAN 1: Ubah min-h-screen menjadi min-h-[100dvh] (Dynamic Viewport Height). Ini kunci untuk iOS!
      // PERUBAHAN 2: Ubah pb-[50px] menjadi pb-[100px] atau pb-28 agar ada jarak aman yang ekstra di Android & iOS.
      className="relative flex flex-col items-center justify-end pb-[100px] md:pb-[80px] w-full min-h-[100dvh] text-center text-white bg-center bg-cover"
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
        <div className={`flex flex-col items-center transition-all duration-1000 ease-in-out w-full ${isOpened ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          
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
          {/* PERUBAHAN 3: onClick langsung menjalankan fungsi onOpen dari file induk */}
          <WeddingButton onClick={onOpen}>
            <span className="text-xl">✉</span>
            Buka Undangan
          </WeddingButton>

        </div>
        
      </div>
    </section>
  );
};

export default WeddingCover;