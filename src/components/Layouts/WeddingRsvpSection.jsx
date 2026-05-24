import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase'; // Pastikan path ini sesuai
import WeddingButton from '../Elements/WeddingButton';
import AnimatedSection from '../Elements/AnimatedSection';

const WeddingRsvpSection = ({ namaTamuDefault }) => {
  const [formData, setFormData] = useState({
    name: namaTamuDefault && namaTamuDefault !== 'Tamu Undangan' ? namaTamuDefault : '',
    attendance: 'Hadir', // Nilai default
    message: ''
  });
  
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ambil data real-time dari Firestore
  useEffect(() => {
    const q = query(collection(db, 'greetings'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(data);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return alert('Mohon isi nama dan ucapan.');

    setIsSubmitting(true);

    try {
      // Simpan ke Firestore
      await addDoc(collection(db, 'greetings'), {
        nama: formData.name,
        kehadiran: formData.attendance,
        ucapan: formData.message,
        timestamp: serverTimestamp()
      });
      
      // Kosongkan pesan setelah berhasil, biarkan nama tetap
      setFormData({ ...formData, message: '' }); 
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logika Menghitung Rekapitulasi Kehadiran (Sesuai field Firebase)
  const countHadir = comments.filter(c => c.kehadiran === 'Hadir').length;
  const countTidakHadir = comments.filter(c => c.kehadiran === 'Tidak Hadir' || c.kehadiran === 'Maaf, Tidak Bisa Hadir').length;
  const countRagu = comments.filter(c => c.kehadiran === 'Masih Ragu').length;

  // Fungsi untuk mengatur warna badge secara dinamis
  const getBadgeStyle = (status) => {
    if (status === 'Hadir') return 'border-green-500/50 text-green-400 bg-green-500/10';
    if (status === 'Tidak Hadir' || status === 'Maaf, Tidak Bisa Hadir') return 'border-red-500/50 text-red-400 bg-red-500/10';
    if (status === 'Masih Ragu') return 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10';
    return 'border-gray-500/50 text-gray-400 bg-gray-500/10';
  };

  // Fungsi untuk memformat Timestamp Firebase menjadi format tanggal yang rapi
  const formatTime = (timestamp) => {
    if (!timestamp) return 'Baru saja';
    const date = timestamp.toDate();
    return date.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <section className="relative flex flex-col items-center w-full px-8 text-center text-white bg-black/70">
      
      {/* JUDUL SECTION */}
      <AnimatedSection animation="zoom-in">
        <div className="mb-12">
          <p className="mb-3 font-sans text-xs tracking-[4px] uppercase text-gray-400">
            Kehadiran & Doa
          </p>
          <h2 className="font-serif text-4xl text-white">RSVP & Wishes</h2>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" className='w-full'>
        <div className="max-w-lg">
          {/* --- KOTAK SUMMARY REKAP KEHADIRAN --- */}
          <div className="border-t border-x border-gray-600 bg-black/40 backdrop-blur-sm rounded-tl-2xl rounded-tr-2xl p-6">
            <h3 className="font-serif text-2xl tracking-wide text-center text-white border-gray-600 pb-4">
              {comments.length} Comments
            </h3>
            <div className="flex justify-between gap-3">
              {/* Box Hadir */}
              <div className="flex flex-col items-center justify-center flex-[1px] py-3 border rounded-xl bg-green-500/10 border-green-500/30">
                <span className="text-2xl font-serif text-white mb-1">{countHadir}</span>
                <span className="text-[10px] uppercase tracking-widest text-green-400">Hadir</span>
              </div>
              {/* Box Tidak Hadir */}
              <div className="flex flex-col items-center justify-center flex-1 py-4 border rounded-xl bg-red-500/10 border-red-500/30">
                <span className="text-2xl font-serif text-white mb-1">{countTidakHadir}</span>
                <span className="text-[10px] uppercase tracking-widest text-red-400">Tidak Hadir</span>
              </div>
              {/* Box Masih Ragu */}
              <div className="flex flex-col items-center justify-center flex-1 py-4 border rounded-xl bg-yellow-500/10 border-yellow-500/30">
                <span className="text-2xl font-serif text-white mb-1">{countRagu}</span>
                <span className="text-[10px] uppercase tracking-widest text-yellow-400">Masih Ragu</span>
              </div>
            </div>
          </div>
          {/* --- FORM RSVP --- */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 border border-gray-600 bg-black/40 backdrop-blur-sm">
            
            <div className="flex flex-col text-left">
              <label className="mb-2 font-sans text-xs tracking-widest text-gray-400 uppercase">Nama Anda</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
                className="w-full px-4 py-3 font-sans text-sm text-white transition-colors bg-transparent border border-gray-600 rounded-lg outline-none focus:border-gray-300 placeholder:text-gray-600"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-2 font-sans text-xs tracking-widest text-gray-400 uppercase">Konfirmasi Kehadiran</label>
              <div className="relative">
                <select 
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-sans text-sm text-white transition-colors bg-transparent border border-gray-600 rounded-lg outline-none appearance-none focus:border-gray-300"
                >
                  <option value="Hadir" className="bg-gray-900">Hadir</option>
                  <option value="Tidak Hadir" className="bg-gray-900">Maaf, Tidak Bisa Hadir</option>
                  <option value="Masih Ragu" className="bg-gray-900">Masih Ragu</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-2 font-sans text-xs tracking-widest text-gray-400 uppercase">Pesan & Doa</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tuliskan ucapan atau doa untuk kedua mempelai..."
                required
                rows="4"
                className="w-full px-4 py-3 font-sans text-sm text-white transition-colors bg-transparent border border-gray-600 rounded-lg outline-none resize-none focus:border-gray-300 placeholder:text-gray-600"
              ></textarea>
            </div>

            <div className="mt-4">
              <WeddingButton type="submit" disabled={isSubmitting}>
                <span className="flex items-center justify-center gap-2 w-[180px] py-1">
                  {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  )}
                </span>
              </WeddingButton>
            </div>
          </form>
          {/* --- DAFTAR UCAPAN --- */}
          <div className="w-full h-[300px] overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex flex-col p-5 text-left border border-gray-700 bg-black/20  rounded-bl-2xl rounded-br-2xl">
                  
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      {/* Menggunakan comment.nama dari Firebase */}
                      <h4 className="font-sans text-sm font-semibold tracking-wider text-gray-200 uppercase">{comment.nama}</h4>
                      <p className="mt-1 font-sans text-[10px] tracking-widest text-gray-400 uppercase">
                        {formatTime(comment.timestamp)}
                      </p>
                    </div>
                    {/* Badge Kehadiran menggunakan comment.kehadiran dari Firebase */}
                    <span className={`px-3 py-1 text-[9px] uppercase tracking-wider rounded-full border ${getBadgeStyle(comment.kehadiran)}`}>
                      {comment.kehadiran}
                    </span>
                  </div>
                  {/* Menggunakan comment.ucapan dari Firebase */}
                  <p className="font-sans text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">
                    "{comment.ucapan}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
          }
        `}
      </style>

    </section>
  );
};

export default WeddingRsvpSection;