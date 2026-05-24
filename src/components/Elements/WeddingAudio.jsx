import React, { useState, useEffect, useRef } from 'react';

const WeddingAudio = ({ isCoverOpened, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // PERUBAHAN: Memori untuk mencatat apakah lagu sudah otomatis diputar
  const hasAutoPlayed = useRef(false); 

  useEffect(() => {
    // Putar lagu JIKA cover dibuka DAN belum pernah diputar otomatis sebelumnya
    if (isCoverOpened && audioRef.current && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true; // Kunci! Agar tidak mengulang saat di-stop manual
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay diblokir:", err));
    }
  }, [isCoverOpened]); // PERUBAHAN: isPlaying dihapus dari kurung siku ini

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`fixed z-[999] bottom-6 right-6 lg:bottom-10 lg:right-10 transition-all duration-1000 ease-out delay-300
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}
    >
      <audio ref={audioRef} src="/wedding/backsound.mp3" loop preload="auto" />

      <button
        onClick={toggleAudio}
        className={`flex items-center justify-center w-7 h-7 text-white border-2 border-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 
          ${isPlaying ? 'bg-black bg-opacity-80 border-gray-500' : 'bg-black bg-opacity-60 border-gray-500'} backdrop-blur-md`}
      >
        {isPlaying ? (
          // PERUBAHAN: Ukuran ikon piringan disesuaikan menjadi w-5 h-5
          <svg className="w-5 h-5 animate-[spin_3s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2" />
          </svg>
        ) : (
          // PERUBAHAN: Ukuran ikon play (stop) disesuaikan menjadi w-4 h-4 dan margin kirinya dikurangi sedikit
          <svg className="w-4 h-4 ml-0.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4l15 8-15 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WeddingAudio;