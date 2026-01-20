import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star, Globe, Zap } from 'lucide-react';

const TrustIndicators = ({ variant = 'full' }) => {
  const trustElements = {
    certifications: [
      {
        icon: <Award className="w-8 h-8 text-yellow-500" />,
        title: "Google Partner",
        description: "Sertifikalı Google Ads & Analytics Uzmanı"
      },
      {
        icon: <Shield className="w-8 h-8 text-blue-500" />,
        title: "ISO 27001",
        description: "Bilgi Güvenliği Yönetim Sistemi"
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        title: "KVKK Uyumlu",
        description: "Kişisel Verilerin Korunması Kanunu"
      }
    ],
    
    statistics: [
      { number: "500+", label: "Tamamlanan Proje", icon: <CheckCircle /> },
      { number: "98%", label: "Müşteri Memnuniyeti", icon: <Star /> },
      { number: "5+", label: "Yıllık Deneyim", icon: <Clock /> },
      { number: "50+", label: "Aktif Müşteri", icon: <Users /> }
    ],
    
    guarantees: [
      {
        icon: <Shield className="w-6 h-6 text-green-500" />,
        title: "Para İade Garantisi",
        description: "30 gün içinde memnun kalmazsanız paranızı iade ediyoruz"
      },
      {
        icon: <Clock className="w-6 h-6 text-blue-500" />,
        title: "Zamanında Teslimat",
        description: "Belirlenen tarihte %100 teslimat garantisi"
      },
      {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "7/24 Destek",
        description: "Proje sonrası sürekli teknik destek"
      }
    ],
    
    clientLogos: [
      { name: "TechCorp", logo: "/clients/techcorp.png" },
      { name: "DigitalPro", logo: "/clients/digitalpro.png" },
      { name: "StartupX", logo: "/clients/startupx.png" },
      { name: "E-Commerce Plus", logo: "/clients/ecommerce.png" }
    ]
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-6 py-4">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">4.9/5 Müşteri Puanı</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium">SSL Güvenli</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium">500+ Proje</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rakamlarla Prime Dijital
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yılların deneyimi ve binlerce mutlu müşteri ile dijital dünyada güvenilir partneriniz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustElements.statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-prime-yellow/20 text-prime-black flex items-center justify-center">
                {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustElements.certifications.map((cert, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-center mb-4">
                {cert.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-prime-yellow/10 to-prime-yellow/5 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Size Verdiğimiz Garantiler
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trustElements.guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {guarantee.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{guarantee.title}</p>
                  <p className="text-gray-600 text-sm">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Güvenilen Markalar Bizimle Çalışıyor
          </h3>
          <div className="flex justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {trustElements.clientLogos.map((client, index) => (
              <div key={index} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;