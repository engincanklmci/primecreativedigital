import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Proje Teklifi Almak İstiyorum',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Formspree ile gönder
      const response = await fetch('https://formspree.io/f/xpqzapye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Proje Teklifi Almak İstiyorum',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>İletişim | Prime Dijital - Web Tasarım ve Dijital Çözümler</title>
        <meta name="description" content="Prime Dijital ile iletişime geçin. İstanbul'da web tasarım, SEO, dijital pazarlama ve yazılım projeleriniz için bize ulaşın. +90 535 949 53 05" />
        <meta name="keywords" content="dijital ajans iletişim, web tasarım İstanbul, SEO hizmetleri, proje teklifi, Prime Dijital telefon, İstanbul ajans" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primedigitalcreative.com/iletisim" />
        <meta property="og:title" content="İletişim | Prime Dijital - Web Tasarım ve Dijital Çözümler" />
        <meta property="og:description" content="Prime Dijital ile iletişime geçin. İstanbul'da web tasarım, SEO, dijital pazarlama ve yazılım projeleriniz için bize ulaşın." />
        <meta property="og:image" content="https://primedigitalcreative.com/og-contact.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://primedigitalcreative.com/iletisim" />
        <meta property="twitter:title" content="İletişim | Prime Dijital - Web Tasarım ve Dijital Çözümler" />
        <meta property="twitter:description" content="Prime Dijital ile iletişime geçin. İstanbul'da web tasarım, SEO, dijital pazarlama ve yazılım projeleriniz için bize ulaşın." />
        <meta property="twitter:image" content="https://primedigitalcreative.com/og-contact.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://primedigitalcreative.com/iletisim" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Prime Dijital İletişim",
            "description": "Prime Dijital ile iletişime geçin. İstanbul'da web tasarım, SEO, dijital pazarlama ve yazılım projeleriniz için bize ulaşın.",
            "url": "https://primedigitalcreative.com/iletisim",
            "mainEntity": {
              "@type": "Organization",
              "name": "Prime Dijital",
              "url": "https://primedigitalcreative.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-535-949-53-05",
                "contactType": "customer service",
                "email": "info@primedigitalcreative.com",
                "availableLanguage": ["Turkish", "English"],
                "hoursAvailable": "Mo-Fr 09:00-18:00"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressRegion": "TR",
                "addressCountry": "Turkey"
              }
            }
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-20">
         <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">İletişim</h1>
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
                          <p className="font-bold">Telefon</p>
                          <p className="text-gray-400 text-sm">+90 535 949 53 05</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-prime-yellow/20 p-2 rounded-lg text-prime-yellow">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        </div>
                        <div>
                          <p className="font-bold">E-Posta</p>
                          <p className="text-gray-400 text-sm">primedigitalcreative@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-prime-yellow/20 p-2 rounded-lg text-prime-yellow">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                          <p className="font-bold">Adres</p>
                          <p className="text-gray-400 text-sm">Gaziosmanpaşa - İstanbul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decor */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-prime-yellow rounded-full blur-3xl opacity-20"></div>
               </div>
               
               <div className="p-12 md:w-3/5 bg-white">
                 {submitStatus === 'success' && (
                   <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                     Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                   </div>
                 )}
                 
                 {submitStatus === 'error' && (
                   <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                     <p className="font-semibold mb-2">Mesaj gönderilirken bir hata oluştu.</p>
                     <p className="text-sm mb-2">Lütfen aşağıdakileri kontrol edin:</p>
                     <ul className="text-sm list-disc ml-4 space-y-1">
                       <li>E-posta adresinin doğru yazıldığından (örn: isim@domain.com)</li>
                       <li>Tüm alanların doldurulduğundan emin olun</li>
                       <li>Tarayıcı konsolunu (F12) açarak detaylı hata bilgisini görebilirsiniz</li>
                     </ul>
                   </div>
                 )}

                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                       <input 
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                         className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" 
                         placeholder="Adınız Soyadınız"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta</label>
                       <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                         className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" 
                         placeholder="ornek@email.com"
                       />
                     </div>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                     <select 
                       name="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50"
                     >
                       <option value="Proje Teklifi Almak İstiyorum">Proje Teklifi Almak İstiyorum</option>
                       <option value="Genel Bilgi">Genel Bilgi</option>
                       <option value="İş Başvurusu">İş Başvurusu</option>
                       <option value="Diğer">Diğer</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                     <textarea 
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       rows="4" 
                       className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-prime-yellow focus:ring-1 focus:ring-prime-yellow transition-all bg-gray-50" 
                       placeholder="Mesajınızı buraya yazın..."
                     ></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className={`w-full font-bold py-4 rounded-lg transition-colors shadow-lg ${
                       isSubmitting 
                         ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                         : 'bg-prime-black text-white hover:bg-gray-800'
                     }`}
                   >
                     {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
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
