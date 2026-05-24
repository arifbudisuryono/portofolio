import React, { useState } from 'react';
import WeddingButton from '../Elements/WeddingButton';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Data Rekening (Silakan ganti dengan data asli Anda)
  const bankData = [
    {
      id: 1,
      bank: 'BCA',
      name: 'Arif Budi Suryono',
      number: '7735447661',
    },
    {
      id: 2,
      bank: 'BRI',
      name: 'Indri Cut Nadzila',
      number: '211001000609562',
    }
  ];

  // Fungsi untuk menyalin nomor rekening ke clipboard
  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    
    // Kembalikan teks tombol ke "Salin" setelah 2 detik
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="relative flex flex-col items-center w-full px-8 py-24 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="fade-up">
        <div className="mb-8">
          <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Tanda Kasih
          </p>
          <h2 className="font-serif text-4xl text-white">Wedding Gift</h2>
        </div>
      </AnimatedSection>

      {/* KATA PENGANTAR */}
      <AnimatedSection animation="fade-up">
      <p className="max-w-md mb-10 font-sans text-sm leading-relaxed text-gray-300">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Anda hendak memberikan tanda kasih, Anda dapat memberikannya melalui fitur di bawah ini.
      </p>
      </AnimatedSection>

      {/* TOMBOL BUKA GIFT */}
      <AnimatedSection animation="fade-up">
        <WeddingButton onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center justify-center gap-2 w-[180px] py-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
            </svg>
            {isOpen ? 'Tutup' : 'Kirim Hadiah'}
          </div>
        </WeddingButton>
      </AnimatedSection>

      {/* AREA KARTU REKENING (Muncul jika isOpen = true) */}
      <div 
        className={`w-full max-w-md mt-10 flex flex-col gap-6 transition-all duration-700 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-100 max-h-[1000px]' : 'opacity-0 scale-95 max-h-0 overflow-hidden'
        }`}
      >
        {bankData.map((data) => (
          // DESAIN KARTU ATM
          <div 
            key={data.id} 
            // PERUBAHAN: Tambah h-[220px] dan ubah susunan menjadi justify-between
            className="relative flex flex-col justify-between w-full h-[210px] p-6 sm:p-7 overflow-hidden text-left bg-gray-100 shadow-2xl rounded-2xl"
          >
            {/* Ornamen Latar Belakang Kartu (Sedikit dibesarkan agar proporsional) */}
            <div className="absolute top-0 right-0 w-56 h-56 transform translate-x-16 -translate-y-16 rounded-full bg-white/50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 transform -translate-x-10 translate-y-10 rounded-full bg-gray-200/60"></div>

            {/* BAGIAN ATAS: Chip & Nama Bank */}
            <div className="flex items-start justify-between w-full z-10">
              
              {/* Ikon Chip yang Diperbesar */}
              {/* PERUBAHAN: width dan height dibesarkan menjadi 65x48 (ViewBox tetap agar proporsi ukiran aman) */}
              <svg width="65" height="48" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-md rounded-md drop-shadow-md">
                <rect width="46" height="34" rx="6" fill="#e0b752" />
                <rect x="0.5" y="0.5" width="45" height="33" rx="5.5" stroke="#9e7b2f" strokeWidth="1" />
                <rect x="15" y="9" width="16" height="16" rx="3" stroke="#9e7b2f" strokeWidth="1.2" />
                <path d="M0 12h11M35 12h11M0 22h11M35 22h11" stroke="#9e7b2f" strokeWidth="1.2" />
                <path d="M11 0v34M35 0v34" stroke="#9e7b2f" strokeWidth="1.2" />
                <path d="M11 17h4M31 17h4" stroke="#9e7b2f" strokeWidth="1.2" />
                <path d="M19 0v9M27 0v9M19 25v34M27 25v34" stroke="#9e7b2f" strokeWidth="1.2" />
                <rect width="46" height="34" rx="6" fill="url(#metal-grad)" />
                <defs>
                  <linearGradient id="metal-grad" x1="0" y1="0" x2="46" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" stopOpacity="0.5" />
                    <stop offset="0.4" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="0.6" stopColor="#000000" stopOpacity="0" />
                    <stop offset="1" stopColor="#000000" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Nama Bank (Diperbesar sedikit ke text-2xl) */}
              <span className="font-serif text-2xl tracking-widest text-gray-800 uppercase mt-1">
                {data.bank}
              </span>
            </div>

            {/* BAGIAN BAWAH: Nama, Nomor Rekening & Tombol */}
            {/* mt-auto akan mendorong blok ini otomatis menempel ke area paling bawah kartu */}
            <div className="flex flex-col w-full z-10 mt-auto">
              <p className="mb-2 font-sans text-[13px] tracking-widest text-gray-700 uppercase drop-shadow-sm">
                {data.name}
              </p>
              
              <div className="flex items-end justify-between w-full">
                {/* Nomor Rekening (Diperbesar ke text-2xl) */}
                <p className="font-sans text-[15px] font-bold tracking-widest text-gray-900 drop-shadow-sm">
                  {data.number}
                </p>
                
                {/* Tombol Salin */}
                <button 
                  onClick={() => handleCopy(data.number, data.id)}
                  className="flex items-center gap-1 px-4 py-2 font-sans text-xs font-semibold text-white transition-colors rounded-full bg-[#C8B698] hover:bg-[#B3A080] active:scale-95 shadow-md"
                >
                  {copiedId === data.id ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Salin
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WeddingGift;