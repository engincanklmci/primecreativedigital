import React, { useState, useEffect } from 'react';
import { X, Shield, Eye, BarChart3, Mail, Settings } from 'lucide-react';
import { setAnalyticsConsent } from '../utils/analytics';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    const consentDate = localStorage.getItem('cookie_consent_date');
    
    // Show banner if no consent or consent is older than 1 year
    if (!consent || (consentDate && Date.now() - parseInt(consentDate) > 365 * 24 * 60 * 60 * 1000)) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(localStorage.getItem('cookie_preferences') || '{}');
      setPreferences(prev => ({ ...prev, ...savedPreferences }));
      
      // Set analytics consent based on saved preferences
      setAnalyticsConsent(savedPreferences.analytics || false);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    saveConsent(newPreferences);
    setAnalyticsConsent(true);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    saveConsent(newPreferences);
    setAnalyticsConsent(false);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setAnalyticsConsent(preferences.analytics);
    setShowBanner(false);
    setShowDetails(false);
  };

  const saveConsent = (prefs) => {
    localStorage.setItem('cookie_consent', 'true');
    localStorage.setItem('cookie_consent_date', Date.now().toString());
    localStorage.setItem('cookie_preferences', JSON.stringify(prefs));
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 max-h-screen overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          {!showDetails ? (
            // Simple Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-prime-yellow" />
                  <h3 className="font-semibold text-gray-900">Çerez Kullanımı ve Gizlilik</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu web sitesi, size daha iyi hizmet verebilmek için çerezler kullanır. 
                  Ayrıca <strong>KVKK</strong> kapsamında kişisel verilerinizi işliyoruz. 
                  Web sitesini kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <a 
                    href="/gizlilik-politikasi" 
                    className="text-prime-black underline decoration-prime-yellow underline-offset-2 text-sm"
                    target="_blank"
                  >
                    Gizlilik Politikası
                  </a>
                  <a 
                    href="/cerez-politikasi" 
                    className="text-prime-black underline decoration-prime-yellow underline-offset-2 text-sm"
                    target="_blank"
                  >
                    Çerez Politikası
                  </a>
                  <a 
                    href="/kvkk-aydinlatma-metni" 
                    className="text-prime-black underline decoration-prime-yellow underline-offset-2 text-sm"
                    target="_blank"
                  >
                    KVKK Aydınlatma Metni
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <Settings className="w-4 h-4" />
                  Ayarlar
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Reddet
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors text-sm"
                >
                  Tümünü Kabul Et
                </button>
              </div>
            </div>
          ) : (
            // Detailed Settings
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Çerez Tercihleri</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  type="button"
                  aria-label="Çerez ayarlarını kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-gray-900">Gerekli Çerezler</h4>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Zorunlu
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir. 
                    Bu çerezler devre dışı bırakılamaz.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Kullanım alanları:</strong> Oturum yönetimi, güvenlik, form verileri
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                      <h4 className="font-semibold text-gray-900">Analitik Çerezler</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-prime-yellow/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-prime-yellow"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Web sitesi kullanımını analiz etmek ve iyileştirmeler yapmak için kullanılır. 
                    Google Analytics ile anonim istatistikler toplanır.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Kullanım alanları:</strong> Sayfa görüntüleme, kullanıcı davranışı, trafik analizi
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-purple-500" />
                      <h4 className="font-semibold text-gray-900">Pazarlama Çerezleri</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-prime-yellow/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-prime-yellow"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Size özel teklifler sunmak ve ilgi alanlarınıza uygun içerik göstermek için kullanılır.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Kullanım alanları:</strong> E-posta pazarlama, kişiselleştirilmiş içerik, retargeting
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-orange-500" />
                      <h4 className="font-semibold text-gray-900">İşlevsel Çerezler</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-prime-yellow/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-prime-yellow"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Kullanıcı deneyimini iyileştiren ek özellikler için kullanılır.
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Kullanım alanları:</strong> Dil tercihi, tema ayarları, chat widget
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Tümünü Reddet
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Seçimleri Kaydet
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-3 bg-prime-yellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Tümünü Kabul Et
                </button>
              </div>

              {/* Legal Notice */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong>KVKK Uyarısı:</strong> Bu web sitesi, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında 
                  kişisel verilerinizi işlemektedir. Detaylı bilgi için 
                  <a href="/kvkk-aydinlatma-metni" className="text-prime-yellow hover:underline ml-1" target="_blank">
                    KVKK Aydınlatma Metni
                  </a>'ni inceleyebilirsiniz.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;