import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CerezPolitikasi = () => {
  return (
    <>
      <Helmet>
        <title>Çerez Politikası | Prime Dijital</title>
        <meta name="description" content="Prime Dijital Çerez Politikası - Web sitemizde kullanılan çerezler hakkında detaylı bilgi." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-prime-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Çerez Politikası
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-orange-800 mb-2">Çerezler Hakkında</h2>
                <p className="text-orange-700">
                  Bu sayfa, Prime Dijital web sitesinde kullanılan çerezler hakkında detaylı bilgi içermektedir.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Çerez Nedir?</h2>
                <p className="text-gray-600 mb-4">
                  Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınız tarafından bilgisayarınıza 
                  veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin 
                  daha iyi çalışmasını sağlar ve size daha iyi bir kullanıcı deneyimi sunar.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Çerezlerin Faydaları</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Web sitesinin daha hızlı yüklenmesi</li>
                    <li>• Kullanıcı tercihlerinin hatırlanması</li>
                    <li>• Kişiselleştirilmiş içerik sunumu</li>
                    <li>• Site performansının iyileştirilmesi</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullandığımız Çerez Türleri</h2>
                <div className="space-y-6">
                  
                  {/* Gerekli Çerezler */}
                  <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">!</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-900">Gerekli Çerezler</h3>
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Zorunlu
                      </span>
                    </div>
                    <p className="text-green-800 mb-4">
                      Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir. 
                      Bu çerezler olmadan site düzgün çalışmaz.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-green-100">
                            <th className="text-left p-2 font-semibold">Çerez Adı</th>
                            <th className="text-left p-2 font-semibold">Amaç</th>
                            <th className="text-left p-2 font-semibold">Süre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border-t">session_id</td>
                            <td className="p-2 border-t">Oturum yönetimi</td>
                            <td className="p-2 border-t">Oturum süresi</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">csrf_token</td>
                            <td className="p-2 border-t">Güvenlik</td>
                            <td className="p-2 border-t">24 saat</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">cookie_consent</td>
                            <td className="p-2 border-t">Çerez onayı</td>
                            <td className="p-2 border-t">1 yıl</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Analitik Çerezler */}
                  <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">📊</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">Analitik Çerezler</h3>
                      <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        İsteğe Bağlı
                      </span>
                    </div>
                    <p className="text-blue-800 mb-4">
                      Web sitesi kullanımını analiz etmek ve iyileştirmeler yapmak için kullanılır. 
                      Bu çerezler anonim veri toplar.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-blue-100">
                            <th className="text-left p-2 font-semibold">Çerez Adı</th>
                            <th className="text-left p-2 font-semibold">Sağlayıcı</th>
                            <th className="text-left p-2 font-semibold">Amaç</th>
                            <th className="text-left p-2 font-semibold">Süre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border-t">_ga</td>
                            <td className="p-2 border-t">Google Analytics</td>
                            <td className="p-2 border-t">Kullanıcı tanımlama</td>
                            <td className="p-2 border-t">2 yıl</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">_ga_*</td>
                            <td className="p-2 border-t">Google Analytics</td>
                            <td className="p-2 border-t">Oturum durumu</td>
                            <td className="p-2 border-t">2 yıl</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">_gid</td>
                            <td className="p-2 border-t">Google Analytics</td>
                            <td className="p-2 border-t">Kullanıcı tanımlama</td>
                            <td className="p-2 border-t">24 saat</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pazarlama Çerezleri */}
                  <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">📧</span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-900">Pazarlama Çerezleri</h3>
                      <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        İsteğe Bağlı
                      </span>
                    </div>
                    <p className="text-purple-800 mb-4">
                      Size özel teklifler sunmak ve ilgi alanlarınıza uygun içerik göstermek için kullanılır.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-purple-100">
                            <th className="text-left p-2 font-semibold">Çerez Adı</th>
                            <th className="text-left p-2 font-semibold">Amaç</th>
                            <th className="text-left p-2 font-semibold">Süre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border-t">marketing_consent</td>
                            <td className="p-2 border-t">Pazarlama onayı</td>
                            <td className="p-2 border-t">1 yıl</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">user_preferences</td>
                            <td className="p-2 border-t">Kullanıcı tercihleri</td>
                            <td className="p-2 border-t">6 ay</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* İşlevsel Çerezler */}
                  <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">⚙️</span>
                      </div>
                      <h3 className="text-xl font-bold text-orange-900">İşlevsel Çerezler</h3>
                      <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        İsteğe Bağlı
                      </span>
                    </div>
                    <p className="text-orange-800 mb-4">
                      Kullanıcı deneyimini iyileştiren ek özellikler için kullanılır.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-orange-100">
                            <th className="text-left p-2 font-semibold">Çerez Adı</th>
                            <th className="text-left p-2 font-semibold">Amaç</th>
                            <th className="text-left p-2 font-semibold">Süre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border-t">language_pref</td>
                            <td className="p-2 border-t">Dil tercihi</td>
                            <td className="p-2 border-t">1 yıl</td>
                          </tr>
                          <tr>
                            <td className="p-2 border-t">theme_mode</td>
                            <td className="p-2 border-t">Tema ayarı</td>
                            <td className="p-2 border-t">6 ay</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Çerez Yönetimi</h2>
                <div className="bg-prime-yellow/10 border border-prime-yellow rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-prime-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black font-bold text-xs">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Çerez Ayarları</h4>
                        <p className="text-gray-600 text-sm">
                          Web sitemizin alt kısmındaki çerez ayarları butonunu kullanarak tercihlerinizi değiştirebilirsiniz.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-prime-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Tarayıcı Ayarları</h4>
                        <p className="text-gray-600 text-sm">
                          Tarayıcınızın ayarlarından çerezleri devre dışı bırakabilir veya silebilirsiniz.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-prime-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Gizli Mod</h4>
                        <p className="text-gray-600 text-sm">
                          Tarayıcınızın gizli/özel modunu kullanarak çerez kaydetmeyi engelleyebilirsiniz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tarayıcı Bazlı Çerez Ayarları</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Google Chrome</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri
                    </p>
                    <a href="https://support.google.com/chrome/answer/95647" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-prime-yellow hover:underline text-sm">
                      Detaylı Rehber →
                    </a>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Mozilla Firefox</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri
                    </p>
                    <a href="https://support.mozilla.org/tr/kb/cerezleri-engelleme" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-prime-yellow hover:underline text-sm">
                      Detaylı Rehber →
                    </a>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Safari</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Tercihler → Gizlilik → Çerezleri ve web sitesi verilerini yönet
                    </p>
                    <a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-prime-yellow hover:underline text-sm">
                      Detaylı Rehber →
                    </a>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Microsoft Edge</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Ayarlar → Çerezler ve site izinleri → Çerezleri yönet ve sil
                    </p>
                    <a href="https://support.microsoft.com/tr-tr/microsoft-edge/cerezleri-silme-2b0e9977-e401-4d28-a5a8-fb9c1b9d9d0e" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-prime-yellow hover:underline text-sm">
                      Detaylı Rehber →
                    </a>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Yasal Uyarılar</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-900 mb-2">Önemli Bilgilendirme</h3>
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>• Bu çerez politikası KVKK ve GDPR uyarınca hazırlanmıştır</li>
                    <li>• Gerekli çerezler web sitesinin çalışması için zorunludur</li>
                    <li>• Diğer çerez türleri için açık rızanız alınmaktadır</li>
                    <li>• Rızanızı istediğiniz zaman geri çekebilirsiniz</li>
                    <li>• Çerez ayarlarınız tarayıcınızda saklanır</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İletişim</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-posta:</strong> cerez@primedigitalcreative.com</p>
                    <p><strong>Telefon:</strong> +90 212 555 0123</p>
                    <p><strong>Adres:</strong> Büyükdere Cad. No: 123/A, Şişli, İstanbul</p>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')} <br />
                  Bu çerez politikası, yasal değişiklikler ve teknolojik gelişmeler doğrultusunda 
                  güncellenebilir. Güncel versiyonu web sitemizden takip edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default CerezPolitikasi;