import React from 'react';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingGallery = () => {
  // Array untuk menyimpan nama-nama file foto galeri Anda.
  // Anda bisa menambahkan atau mengurangi jumlahnya sesuai kebutuhan.
  const photos = [
    { id: 1, src: '/wedding/gallery-1.png', alt: 'Gallery 1' },
    { id: 2, src: '/wedding/gallery-3.png', alt: 'Gallery 2' },
    { id: 3, src: '/wedding/gallery-2.png', alt: 'Gallery 3' },
    { id: 4, src: '/wedding/gallery-4.png', alt: 'Gallery 4' }
  ];

  return (
    <section className="relative flex flex-col items-center w-full px-6 py-24 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="zoom-in">
        <div className="mb-16">
        <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Galeri Kami
          </p>
          <h2 className="font-serif text-4xl text-white">Our Gallery</h2>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
      <div className="w-full max-w-2xl columns-2 gap-4 space-y-4">
        
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative overflow-hidden border border-gray-700 rounded-md group break-inside-avoid p-1"
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-auto rounded shadow-lg  transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        ))}

      </div>
      </AnimatedSection>

    </section>
  );
};

export default WeddingGallery;