import React from 'react';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingClosing = () => {
return (
    <section className="relative flex flex-col items-center w-full px-8 pt-24 pb-32 text-center text-white bg-black/70">
    
        {/* FOTO CLOSING */}
        <AnimatedSection animation="fade-up">
            <div className="relative w-[180px] p-2 pb-8 mb-12 bg-[#f4f4f4] shadow-2xl transform transition-transform duration-700">
                <div className="w-full h-[210px] overflow-hidden bg-gray-800 border border-gray-300/50">
                <img 
                    src="/wedding/closing.png"
                    alt="Arif & Indri" 
                    className="object-cover w-full h-full transition-all duration-700 hover:scale-105" 
                />
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
            {/* KATA-KATA PERMOHONAN DOA RESTU */}
            <div className="max-w-md mb-16">
                <p className="font-sans text-sm leading-loose text-gray-300">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. 
                <br /><br />
                Mengingat rahmat dan karunia-Nya, kami memohon doa agar rangkaian acara kami berjalan dengan lancar, serta kelak kami dapat membina keluarga yang senantiasa dilimpahi keberkahan, menjadi keluarga yang sakinah, mawaddah, dan warahmah.
                <br /><br />
                Atas segala doa, restu, dan perhatiannya, kami ucapkan terima kasih yang sedalam-dalamnya.
                </p>
            </div>
        </AnimatedSection>

        {/* WATERMARK DEVELOPER (Karena Anda adalah Web Developer!) */}
        <div className="absolute bottom-6 font-sans text-[10px] tracking-widest text-gray-600 uppercase">
            Created by Arif
        </div>

        </section>
    );
};

export default WeddingClosing;