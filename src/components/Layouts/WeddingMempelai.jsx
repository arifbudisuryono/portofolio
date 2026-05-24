import React from 'react';
import WeddingButton from '../Elements/WeddingButton';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingMempelai = () => {
  const openInstagram = (username) => {
    window.open(`https://instagram.com/${username}`, '_blank', 'noopener,noreferrer');
  };

  return (
    // bg-black/70 memberikan efek transparan 70% agar foto background utama Anda terlihat tembus pandang di belakangnya
    <section className="relative flex flex-col items-center w-full px-8 py-24 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="zoom-in">
        <div className="mb-20">
          <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Kedua Mempelai
          </p>
          <h2 className="font-serif text-4xl text-white">Bride & Groom</h2>
        </div>
      </AnimatedSection>

      {/* MEMPELAI PRIA */}
      <AnimatedSection animation="fade-up">
        <div className="flex flex-col items-center mb-16">
          {/* Bingkai Foto Melengkung Atas (Arch) */}
          <div className="relative w-[180px] p-2 pb-8 mb-12 bg-[#f4f4f4] shadow-2xl transform transition-transform duration-700">
              <div className="w-full h-[210px] overflow-hidden bg-gray-800 border border-gray-300/50">
              <img 
                  src="/wedding/arif.png"
                  alt="Pengantin Pria"
                  className="object-cover w-full h-full transition-all duration-700 hover:scale-105" 
              />
              </div>
          </div>
          
          <AnimatedSection animation="fade-up">
            <h3 className="mb-2 font-serif text-3xl tracking-wide text-white">Arif Budi Suryono S.Kom</h3>
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <p className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">Pengantin Pria</p>
            <p className="my-4 font-sans text-sm text-gray-300 leading-relaxed">
              <b>Putra Kedua dari</b> <br/> Bapak Subeno Harjanto & Ibu Sainem
            </p>
          </AnimatedSection>

          {/* ICON SOCIAL MEDIA */}
          <AnimatedSection animation="zoom-in">
            <WeddingButton onClick={() => openInstagram('arifbudisuryono')}>
              <div className="flex items-center justify-center gap-2 h-[30px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @arifbudisuryono
              </div>
            </WeddingButton>
          </AnimatedSection>
        </div>
      </AnimatedSection>  

      {/* GARIS PEMISAH ELEGAN */}
      <AnimatedSection animation="zoom-in">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-400 to-transparent mb-16"></div>
      </AnimatedSection>

      {/* MEMPELAI WANITA */}
      <AnimatedSection animation="fade-up">
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-[180px] p-2 pb-8 mb-12 bg-[#f4f4f4] shadow-2xl transform transition-transform duration-700">
              <div className="w-full h-[210px] overflow-hidden bg-gray-800 border border-gray-300/50">
              <img 
                  src="/wedding/indri.png"
                  alt="Pengantin Wanita"  
                  className="object-cover w-full h-full transition-all duration-700 hover:scale-105" 
              />
              </div>
          </div>
          
          <AnimatedSection animation="fade-up">
            <h3 className="mb-2 font-serif text-3xl tracking-wide text-white">Indri Cut Nadzila A.md</h3>
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <p className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">Pengantin Wanita</p>
            <p className="my-4 font-sans text-sm text-gray-300 leading-relaxed">
              <b>Putri Pertama dari</b> <br/> Bapak Suyadi & Ibu Heni Supatmi
            </p>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in">
            <WeddingButton onClick={() => openInstagram('indricnz')}>
              <div className="flex items-center justify-center gap-2 h-[30px]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @indricnz
              </div>
            </WeddingButton>
          </AnimatedSection>
        </div>
      </AnimatedSection>

    </section>
  );
};

export default WeddingMempelai;