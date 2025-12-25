import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const SocialMediaLinks = ({ className = '', showLabels = false, size = 'md' }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/primedigitalcreative',
      icon: Facebook,
      color: 'hover:text-blue-600',
      description: 'Facebook sayfamızı takip edin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/primedigitalcreative',
      icon: Instagram,
      color: 'hover:text-pink-600',
      description: 'Instagram hesabımızı takip edin'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/primedigitalcreative',
      icon: Linkedin,
      color: 'hover:text-blue-700',
      description: 'LinkedIn profilimizi takip edin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/primedigitaltr',
      icon: Twitter,
      color: 'hover:text-blue-400',
      description: 'Twitter hesabımızı takip edin'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@primedigitalcreative',
      icon: Youtube,
      color: 'hover:text-red-600',
      description: 'YouTube kanalımıza abone olun'
    }
  ];

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const handleSocialClick = (platform, url) => {
    trackEvent('click', 'social_media', platform);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <button
            key={social.name}
            onClick={() => handleSocialClick(social.name, social.url)}
            className={`
              flex items-center gap-2 p-2 rounded-lg
              text-gray-600 ${social.color}
              transition-all duration-200
              hover:bg-gray-100 hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-prime-yellow
            `}
            title={social.description}
            aria-label={social.description}
          >
            <IconComponent className={sizeClasses[size]} />
            {showLabels && (
              <span className="text-sm font-medium">
                {social.name}
              </span>
            )}
            <ExternalLink className="w-3 h-3 opacity-50" />
          </button>
        );
      })}
    </div>
  );
};

// Social Media Follow Component for specific sections
export const SocialMediaFollow = () => {
  return (
    <div className="bg-gradient-to-r from-prime-yellow/10 to-prime-yellow/5 rounded-xl p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Sosyal Medyada Takip Edin
      </h3>
      <p className="text-gray-600 mb-4">
        Güncel projelerimizi, ipuçlarını ve sektör haberlerini kaçırmayın
      </p>
      <SocialMediaLinks 
        className="justify-center" 
        showLabels={false} 
        size="lg" 
      />
      <div className="mt-4 text-sm text-gray-500">
        <p>📺 YouTube kanalımızda ücretsiz eğitim videoları</p>
        <p>📸 Instagram'da günlük projelerimiz</p>
        <p>💼 LinkedIn'de sektör analizleri</p>
      </div>
    </div>
  );
};

export default SocialMediaLinks;