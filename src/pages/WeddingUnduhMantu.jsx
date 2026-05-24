import React, { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimatedSection from '../components/Elements/AnimatedSection';
import WeddingAudio from '../components/Elements/WeddingAudio';
import WeddingCover from '../components/Layouts/WeddingCover'; 
import WeddingHero from '../components/Layouts/WeddingHero';
import WeddingMempelai from '../components/Layouts/WeddingMempelai';
import WeddingEvent from '../components/Layouts/WeddingEvent';
import WeddingStory from '../components/Layouts/WeddingStory';
import WeddingGallery from '../components/Layouts/WeddingGallery';
import WeddingGift from '../components/Layouts/WeddingGift';
import WeddingClosing from '../components/Layouts/WeddingClosing';
import WeddingRsvpSection from '../components/Layouts/WeddingRsvpSection';

const WeddingUnduhMantu = () => {
  const [searchParams] = useSearchParams();
  const namaTamu = searchParams.get('to') || 'Tamu Undangan';
  const namaTamuFormatted = namaTamu.replace(/[-_]/g, ' ');
  const nextSectionRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [hideCover, setHideCover] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true); // Memutar musik & memicu animasi hero

    const targetElement = nextSectionRef.current;
    if (!targetElement) return;

    // Kalkulasi jarak dari Cover ke Hero
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    const duration = 2500; // DURASI SCROLL: 2500ms (2.5 detik). Silakan ubah angka ini!

    // Logika Ease In Out (Mulus di awal, cepat di tengah, mulus di akhir)
    const easeInOut = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    // Mesin Animasi Scroll
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOut(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run); 
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation); 
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setHideCover(true);    // 1. Hapus Cover secara permanen
        window.scrollTo(0, 0); // 2. Kembalikan titik scroll layar ke angka 0
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  useEffect(() => {
    // Matikan fitur browser yang mengingat posisi scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Paksa layar kembali ke koordinat paling atas (0, 0) saat dimuat/di-reload
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #000000; }
          ::-webkit-scrollbar-thumb { background: #ffffff; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #cccccc; }
        `}
      </style>

      <WeddingAudio isCoverOpened={isOpened} isVisible={hideCover} />
      
      {/* PERUBAHAN: Background diganti jadi bg-black agar seragam */}
      <div className="flex w-full min-h-screen bg-black" style={{ margin: 0, padding: 0 }}>
        
        {/* --- SISI KIRI (FOTO BESAR) - STICKY / DIAM DI DESKTOP --- */}
        <div 
          className={`${isMobile ? 'hidden' : 'hidden lg:flex'} lg:flex-[0_0_60%]`}
          style={{
            height: '100vh', 
            position: 'sticky', 
            top: 0,
            backgroundImage: 'url(/wedding/cover.jpg)', // PERUBAHAN: Hapus /public agar aman saat di-hosting
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            alignItems: 'flex-end',
            padding: '50px',
            zIndex: 10,
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }} />
          <div className="hidden lg:relative lg:text-left lg:text-white lg:block">
            {/* PERUBAHAN: Menyesuaikan nama dan tanggal Ngunduh Mantu */}
            <h1 style={{ fontFamily: 'serif', fontSize: '4rem', margin: '10px 0' }}>Arif & Indri</h1>
            <p style={{ fontFamily: 'serif', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.2rem' }}>
              Minggu, 24 Mei 2026
            </p>
          </div>
        </div>
        
        {/* --- SISI KANAN --- */}
        <div 
          className={`${isMobile ? 'w-full' : 'md:w-full lg:w-[40%]'} md:flex-1 lg:flex-[1_1_40%] relative bg-cover bg-center lg:bg-right lg:bg-[length:40%] lg:bg-repeat`}
          style={{ 
            backgroundImage: 'url(/wedding/bg-undangan.png)',
            backgroundAttachment: 'fixed',
            backgroundColor: '#000',
          }}
        >
          
          {/* PERUBAHAN KRUSIAL: Tambahkan !hideCover di sini */}
          {!hideCover && (
            <WeddingCover 
              namaTamu={namaTamuFormatted} 
              targetSectionRef={nextSectionRef} 
              isOpened={isOpened}
              onOpen={handleOpenInvitation}
            />
          )}

          <div ref={nextSectionRef}>
            <div className={`transition-all duration-[2800ms] ease-in-out ${isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <WeddingHero isOpened={isOpened} />
            </div>
            
            <div className="flex flex-col items-center justify-center px-8 py-24 text-center text-white bg-black">
              <AnimatedSection animation="zoom-in">
                <p className="max-w-md font-serif text-sm leading-relaxed text-gray-300 italic md:text-base">
                  "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
                </p>
                <p className="mt-6 font-sans text-xs tracking-widest text-gray-400 uppercase">
                  ( QS. Ar-Rum : 21 )
                </p>
              </AnimatedSection>
            </div>

            
            <WeddingMempelai />
            <WeddingEvent />
            <WeddingStory />
            <WeddingGallery />
            <WeddingGift />
            <WeddingRsvpSection namaTamuDefault={namaTamuFormatted} />
            <WeddingClosing />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingUnduhMantu;