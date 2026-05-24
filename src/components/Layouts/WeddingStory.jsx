import React from 'react';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingStory = () => {
  // Tambahkan path foto di setiap tahapan cerita
  const stories = [
    {
      title: "Awal Pertemuan",
      content: "Di dunia yang luas ini, kami percaya bahwa tidak ada pertemuan yang benar-benar kebetulan. Bukan karena bertemu lalu berjodoh, tetapi karena berjodoh maka kami dipertemukan. Allah mempertemukan dua hati pada waktu yang tepat dengan cara yang sederhana, namun bermakna.",
      image: "/wedding/7.png"
    },
    {
      title: "Menjalin Hubungan",
      content: "Perjalanan kami dimulai dari sapa yang sederhana dan membawa kehangatan. Waktu demi waktu kami belajar tentang arti cinta, tentang menerima, memahami dan tumbuh bersama. Kami dipertemukan karena semesta merestui doa-doa yang kami panjatkan. Sejak saat itu kami menyadari satu sama lain bahwa ini adalah bagian dari takdir yang telah lama dicari.",
      image: "/wedding/8.png"
    },
    {
      title: "Lamaran",
      content: "Kini, kami memilih untuk melangkah bersama menuju fase baru, menyatukan dua hati dalam satu tujuan dan satu doa. Kehendak-Nya menuntun kami pada sebuah pertemuan yang tak pernah disangka, hingga akhirnya membawa kami pada sebuah ikatan suci yang dicintai-Nya. Kami melangsungkan acara lamaran pada 22 Maret 2026 lalu. Inilah sepenggal kisah cinta kami yang kami bagikan dengan penuh syukur dan sukacita.",
      image: "/wedding/9.png" 
    }
  ];

  return (
    <section className="relative flex flex-col items-center w-full px-8 py-24 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="zoom-in">
        <div className="mb-10">
          <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Kisah Kami
          </p>
          <h2 className="font-serif text-4xl text-white">Our Story</h2>
        </div>
      </AnimatedSection>

      {/* KONTEN TIMELINE CERITA */}
      <div className="relative flex flex-col items-center max-w-lg w-full">
        
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center w-full relative">

            <AnimatedSection animation="fade-up" className='w-[80%] max-w-[240px]'>
              <div className="mb-4 overflow-hidden border border-gray-600 rounded-xl p-1">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-[180px] object-cover rounded-lg transition-all duration-500"
                />
              </div>
            </AnimatedSection>

            {/* Judul Cerita */}
            <AnimatedSection animation="fade-down">
            <h3 className="mb-2 font-serif text-2xl tracking-wide text-white">
              {story.title}
            </h3>

            {/* Isi Cerita */}
            <p className="font-sans text-sm leading-relaxed text-gray-300 text-center mb-10">
              {story.content}
            </p>
            </AnimatedSection>
            
          </div>
        ))}

      </div>

    </section>
  );
};

export default WeddingStory;