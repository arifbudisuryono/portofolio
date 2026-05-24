import React, { useState, useEffect } from 'react';
import WeddingButton from '../Elements/WeddingButton';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingEvent = () => {
  const TARGET_DATE = new Date('2026-06-07T09:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openMaps = () => {
    // Ganti URL ini dengan link Google Maps lokasi Anda
    window.open('https://maps.app.goo.gl/b1u2gukgfNBfMF3y9?g_st=iw', '_blank');
  };

  return (
    <section className="relative flex flex-col items-center w-full px-8 py-24 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="fade-up">
        <div className="mb-16">
          <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Wedding Event
          </p>
          <h2 className="font-serif text-3xl text-white md:text-4xl">Save The Date</h2>
        </div>
      </AnimatedSection>

      {/* COUNTDOWN TIMER */}
      <div className="flex justify-center gap-4 mb-20 md:gap-8">
        <div className="flex flex-col items-center">
          <span className="font-serif text-4xl md:text-5xl">{timeLeft.days}</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mt-2">Hari</span>
        </div>
        <span className="font-serif text-4xl md:text-5xl text-gray-500">:</span>
        
        <div className="flex flex-col items-center">
          <span className="font-serif text-4xl md:text-5xl">{timeLeft.hours}</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mt-2">Jam</span>
        </div>
        <span className="font-serif text-4xl md:text-5xl text-gray-500">:</span>
        
        <div className="flex flex-col items-center">
          <span className="font-serif text-4xl md:text-5xl">{timeLeft.minutes}</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mt-2">Menit</span>
        </div>
        <span className="font-serif text-4xl md:text-5xl text-gray-500">:</span>
        
        <div className="flex flex-col items-center">
          <span className="font-serif text-4xl md:text-5xl">{timeLeft.seconds}</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mt-2">Detik</span>
        </div>
      </div>

      <div className='flex flex-col gap-12 md:gap-16'>
        {/* KARTU ACARA AKAD */}
        <AnimatedSection animation="fade-down">
          <div className="w-full max-w-[400px] border border-gray-600 rounded-b-lg p-8 bg-black/40 backdrop-blur-sm shadow-xl flex flex-col items-center">
            <h3 className="mb-6 font-serif text-2xl tracking-wide text-gray-400">Akad</h3>
            <div className="w-full mb-6 border-b border-gray-600/50"></div>
            <p className="mb-2 font-sans text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Minggu
            </p>
            <p className="mb-2 font-serif text-4xl text-gray-400">
              31
            </p>
            <p className="mb-6 font-sans text-sm tracking-widest text-gray-300 uppercase">
              Mei 2026
            </p>
            <p className="mb-6 font-sans text-sm text-gray-400">
              Pukul 07:30 WIB - Selesai
            </p>
            <div className="w-full mb-6 border-b border-gray-600/50"></div>
            <p className="mb-2 font-serif text-lg text-gray-400">
              Di Tempat
            </p>
          </div>
        </AnimatedSection>

        {/* KARTU ACARA NGUNDUH MANTU */}
        <AnimatedSection animation="fade-up">
          <div className="w-full max-w-[400px] border border-gray-600 rounded-b-lg p-8 bg-black/40 backdrop-blur-sm shadow-xl flex flex-col items-center">
            <h3 className="mb-6 font-serif text-2xl tracking-wide text-white">Ngunduh Mantu</h3>
            <div className="w-full mb-6 border-b border-gray-600/50"></div>
            <p className="mb-2 font-sans text-sm font-semibold tracking-widest text-gray-300 uppercase">
              Minggu
            </p>
            <p className="mb-2 font-serif text-4xl text-white">
              07
            </p>
            <p className="mb-6 font-sans text-sm tracking-widest text-gray-300 uppercase">
              Juni 2026
            </p>
            <p className="mb-6 font-sans text-sm text-gray-400">
              Pukul 09:30 WIB - Selesai
            </p>
            <div className="w-full mb-6 border-b border-gray-600/50"></div>
            <p className="mb-2 font-serif text-lg text-white">
              Kediaman Mempelai Pria
            </p>
            <p className="mb-8 font-sans text-xs leading-relaxed text-gray-400">
              Tegalsari RT.05 RW.01, Desa Karangjati, <br/>
              Kec. Kalijambe, Kab. Sragen
            </p>

            {/* TOMBOL MAPS */}
            <WeddingButton onClick={openMaps}>
              <div className="flex items-center justify-center gap-2 w-[200px] py-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 7 13 7.5 13.83.27.42.73.42 1 0C13 21 20 13.25 20 8c0-4.42-3.58-8-8-8zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5 15.5 6.07 15.5 8 13.93 11.5 12 11.5z"/>
                </svg>
                Buka Google Maps
              </div>
            </WeddingButton>
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
};

export default WeddingEvent;