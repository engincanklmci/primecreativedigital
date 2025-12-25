import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GizlilikPolitikasi = () => {
  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası | Prime Dijital</title>
        <meta name="description" content="Prime Dijital Gizlilik Politikası - Kişisel verilerinizin korunması ve gizliliği hakkında detaylı bilgi." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-prime-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Gizlilik Politikası
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">Gizliliğiniz Bizim İçin Önemli</h2>
                <p className="text-blue-700">
                  Prime Dijital olarak, kişisel verilerinizin gizliliğini korumak en önemli önceliğimizdir.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Genel Bilgiler</h2>
                <p className="text-gray-600 mb-4">
                  Bu Gizlilik Politikası, Prime Dijital web sitesini ziyaret ettiğinizde veya hizmetlerimizi 
                  kullandığınızda kişisel bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında 
                  bilgi vermektedir.
                </p>
                <p className="text-gray-600">
                  Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği 
                  Genel Veri Koruma Yönetmeliği (GDPR) uyarınca hazırlanmıştır.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Kişisel Bilgiler</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Ad ve soyad</li>
                      <li>• E-posta adresi</li>
                      <li>• Telefon numarası</li>
                      <li>• Şirket bilgileri</li>
                      <li>• Mesaj içeriği</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Otomatik Toplanan Bilgiler</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• IP adresi</li>
                      <li>• Tarayıcı türü ve versiyonu</li>
                      <li>• İşletim sistemi</li>
                      <li>• Ziyaret edilen sayfalar</li>
                      <li>• Ziyaret tarihi ve süresi</li>
                      <li>• Referans URL'si</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanım Amaçları</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-prime-yellow mb-2">Hizmet Sunumu</h3>
                    <p className="text-gray-600 text-sm">
                      Talep ettiğiniz hizmetleri sunmak ve müşteri desteği sağlamak
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600 mb-2">İletişim</h3>
                    <p className="text-gray-600 text-sm">
                      Sorularınızı yanıtlamak ve bilgilendirme yapmak
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-600 mb-2">İyileştirme</h3>
                    <p className="text-gray-600 text-sm">
                      Web sitesi ve hizmetlerimizi geliştirmek
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-600 mb-2">Pazarlama</h3>
                    <p className="text-gray-600 text-sm">
                      İzniniz dahilinde pazarlama faaliyetleri yürütmek
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Çerez Kullanımı</h2>
                <p className="text-gray-600 mb-4">
                  Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. 
                  Çerezler hakkında detaylı bilgi için 
                  <a href="/cerez-politikasi" className="text-prime-yellow hover:underline ml-1">
                    Çerez Politikası
                  </a> sayfasını inceleyebilirsiniz.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Çerez Türleri</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Gerekli Çerezler:</strong> Web sitesinin çalışması için zorunlu</li>
                    <li>• <strong>Analitik Çerezler:</strong> Site kullanımını analiz etmek için</li>
                    <li>• <strong>Pazarlama Çerezleri:</strong> Kişiselleştirilmiş reklamlar için</li>
                    <li>• <strong>İşlevsel Çerezler:</strong> Kullanıcı tercihlerini hatırlamak için</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Veri Güvenliği</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl mb-2">🔐</div>
                    <h3 className="font-semibold mb-2">SSL Şifreleme</h3>
                    <p className="text-sm text-gray-600">
                      Tüm veri transferleri 256-bit SSL ile şifrelenir
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl mb-2">🛡️</div>
                    <h3 className="font-semibold mb-2">Güvenlik Duvarı</h3>
                    <p className="text-sm text-gray-600">
                      Gelişmiş güvenlik duvarı koruması
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl mb-2">🔒</div>
                    <h3 className="font-semibold mb-2">Erişim Kontrolü</h3>
                    <p className="text-sm text-gray-600">
                      Sıkı erişim kontrolü ve yetkilendirme
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Üçüncü Taraf Hizmetler</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold">Google Analytics</h3>
                    <p className="text-gray-600 text-sm">
                      Web sitesi trafiğini analiz etmek için kullanılır. 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-prime-yellow hover:underline ml-1">
                        Google Gizlilik Politikası
                      </a>
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">E-posta Hizmetleri</h3>
                    <p className="text-gray-600 text-sm">
                      İletişim formları ve e-posta gönderimi için güvenli hizmet sağlayıcıları kullanılır.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Haklarınız</h2>
                <div className="bg-prime-yellow/10 border border-prime-yellow rounded-lg p-6">
                  <h3 className="font-semibold mb-4">KVKK Kapsamındaki Haklarınız:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>✓ Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>✓ İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                      <li>✓ Kişisel verilerinizin işlenme amacını öğrenme</li>
                      <li>✓ Yurt içi/yurt dışı aktarılan üçüncü kişileri bilme</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Eksik/yanlış işlenen verilerin düzeltilmesini isteme</li>
                      <li>✓ Verilerin silinmesi/yok edilmesini talep etme</li>
                      <li>✓ Veri işlemeye itiraz etme</li>
                      <li>✓ Zararın giderilmesini talep etme</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. İletişim</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle ilgili 
                    talepleriniz için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-posta:</strong> gizlilik@primedigitalcreative.com</p>
                    <p><strong>Telefon:</strong> +90 212 555 0123</p>
                    <p><strong>Adres:</strong> Büyükdere Cad. No: 123/A, Şişli, İstanbul</p>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')} <br />
                  Bu gizlilik politikası, yasal değişiklikler ve hizmet güncellemeleri doğrultusunda 
                  güncellenebilir. Değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer.
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

export default GizlilikPolitikasi;