import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20">
         <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
               <div className="bg-prime-black text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6">İletişime Geçin</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      Projeniz hakkında konuşmak veya sadece tanışmak için formu doldurun. En kısa sürede size dönüş yapacağız.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-prime-yellow/20 p-2 rounded-lg text-prime-yellow">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Telefon</h4>
                          <p className="text-gray-400 text-sm">+90 535 949 53 05</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-prime-yellow/20 p-2 rounded-lg text-prime-yellow">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </div>
                        <div>
                          <h4 className="font-bold">E-Posta</h4>
                          <p className="text-gray-400 text-sm">primedigitalcreative@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-prime-yellow/20 p-2 rounded-lg text-prime-yellow">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Adres</h4>
                          <p className="text-gray-400 text-sm">Gaziosmanpaşa - İstanbul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decor */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-prime-yellow rounded-full blur-3xl opacity-20"></div>
               </div>
               
               <div className="p-12 md:w-3/5 bg-white">
                 <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                       <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" placeholder="Adınız Soyadınız" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta</label>
                       <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" placeholder="ornek@email.com" />
                     </div>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                     <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50">
                       <option>Proje Teklifi Almak İstiyorum</option>
                       <option>Genel Bilgi</option>
                       <option>İş Başvurusu</option>
                       <option>Diğer</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                     <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" placeholder="Mesajınızı buraya yazın..."></textarea>
                   </div>
                   
                   <button type="button" className="w-full bg-prime-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                     Gönder
                   </button>
                 </form>
               </div>
            </div>
         </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
