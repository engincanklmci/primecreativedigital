import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const ContactInfo = ({ variant = 'default', className = '' }) => {
  const contactData = {
    address: {
      street: "Büyükdere Cad. No: 123/A",
      district: "Şişli",
      city: "İstanbul",
      postalCode: "34394",
      country: "Türkiye"
    },
    phone: {
      primary: "+90 212 555 0123",
      mobile: "+90 535 555 0123",
      formatted: "(212) 555 01 23"
    },
    email: {
      info: "info@primedigitalcreative.com",
      sales: "satis@primedigitalcreative.com",
      support: "destek@primedigitalcreative.com"
    },
    workingHours: {
      weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
      saturday: "Cumartesi: 10:00 - 16:00",
      sunday: "Pazar: Kapalı"
    }
  };

  const handleContactClick = (type, value) => {
    trackEvent('click', 'contact_info', type);
    
    switch (type) {
      case 'phone':
        window.location.href = `tel:${value.replace(/\s/g, '')}`;
        break;
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'address':
        const addressQuery = encodeURIComponent(
          `${contactData.address.street}, ${contactData.address.district}, ${contactData.address.city}`
        );
        window.open(`https://maps.google.com/?q=${addressQuery}`, '_blank');
        break;
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-4 text-sm ${className}`}>
        <button
          onClick={() => handleContactClick('phone', contactData.phone.primary)}
          className="flex items-center gap-2 text-gray-600 hover:text-prime-yellow transition-colors"
        >
          <Phone className="w-4 h-4" />
          {contactData.phone.formatted}
        </button>
        <button
          onClick={() => handleContactClick('email', contactData.email.info)}
          className="flex items-center gap-2 text-gray-600 hover:text-prime-yellow transition-colors"
        >
          <Mail className="w-4 h-4" />
          {contactData.email.info}
        </button>
      </div>
    );
  }

  if (variant === 'schema') {
    // Return structured data for SEO
    return (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Prime Dijital",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": contactData.address.street,
            "addressLocality": contactData.address.district,
            "addressRegion": contactData.address.city,
            "postalCode": contactData.address.postalCode,
            "addressCountry": contactData.address.country
          },
          "telephone": contactData.phone.primary,
          "email": contactData.email.info,
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-16:00"
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.0082",
            "longitude": "28.9784"
          },
          "url": "https://primedigitalcreative.com",
          "priceRange": "$$",
          "servesCuisine": "Digital Services"
        })}
      </script>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Address */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-prime-yellow mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Adres</p>
          <button
            onClick={() => handleContactClick('address')}
            className="text-gray-600 hover:text-prime-yellow transition-colors text-left"
          >
            <p>{contactData.address.street}</p>
            <p>{contactData.address.district}, {contactData.address.city}</p>
            <p>{contactData.address.postalCode}, {contactData.address.country}</p>
          </button>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-prime-yellow mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Telefon</p>
          <div className="space-y-1">
            <button
              onClick={() => handleContactClick('phone', contactData.phone.primary)}
              className="block text-gray-600 hover:text-prime-yellow transition-colors"
            >
              {contactData.phone.formatted} (Sabit)
            </button>
            <button
              onClick={() => handleContactClick('phone', contactData.phone.mobile)}
              className="block text-gray-600 hover:text-prime-yellow transition-colors"
            >
              {contactData.phone.mobile} (Mobil)
            </button>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 text-prime-yellow mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">E-posta</p>
          <div className="space-y-1">
            <button
              onClick={() => handleContactClick('email', contactData.email.info)}
              className="block text-gray-600 hover:text-prime-yellow transition-colors"
            >
              {contactData.email.info}
            </button>
            <button
              onClick={() => handleContactClick('email', contactData.email.sales)}
              className="block text-gray-600 hover:text-prime-yellow transition-colors text-sm"
            >
              {contactData.email.sales} (Satış)
            </button>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-prime-yellow mt-1 flex-shrink-0" />
        <div>
          <p className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</p>
          <div className="space-y-1 text-gray-600">
            <p>{contactData.workingHours.weekdays}</p>
            <p>{contactData.workingHours.saturday}</p>
            <p className="text-red-500">{contactData.workingHours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;