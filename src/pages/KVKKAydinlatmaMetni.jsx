import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const KVKKAydinlatmaMetni = () => {
  return (
    <>
      <Helmet>
        <title>KVKK Aydınlatma Metni | Prime Dijital</title>
        <meta name="description" content="Prime Dijital KVKK Aydınlatma Metni - Kişisel verilerinizin işlenmesi hakkında detaylı bilgi." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-prime-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              KVKK Aydınlatma Metni
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-yellow-800 mb-2">Önemli Bilgilendirme</h2>
                <p className="text-yellow-700">
                  Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca hazırlanmıştır.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Şirket:</strong> Prime Dijital</p>
                  <p><strong>Adres:</strong> Büyükdere Cad. No: 123/A, Şişli, İstanbul</p>
                  <p><strong>E-posta:</strong> kvkk@primedigitalcreative.com</p>
                  <p><strong>Telefon:</strong> +90 212 555 0123</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. İşlenen Kişisel Veriler</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Kimlik Verileri</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Ad, soyad</li>
                      <li>• E-posta adresi</li>
                      <li>• Telefon numarası</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">İletişim Verileri</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Şirket bilgileri</li>
                      <li>• Adres bilgileri</li>
                      <li>• İletişim tercihleri</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Teknik Veriler</h3>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• IP adresi</li>
                      <li>• Çerez verileri</li>
                      <li>• Tarayıcı bilgileri</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">Pazarlama Verileri</h3>
                    <ul className="text-orange-800 text-sm space-y-1">
                      <li>• İlgi alanları</li>
                      <li>• Tercihler</li>
                      <li>• Etkileşim geçmişi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Veri İşleme Amaçları</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-prime-yellow pl-4">
                    <h3 className="font-semibold">Hizmet Sunumu</h3>
                    <p className="text-gray-600">Talep ettiğiniz dijital hizmetleri sunmak ve müşteri ilişkilerini yönetmek</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">İletişim</h3>
                    <p className="text-gray-600">Sorularınızı yanıtlamak ve bilgilendirme yapmak</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">Pazarlama</h3>
                    <p className="text-gray-600">Size özel teklifler sunmak ve hizmetlerimizi tanıtmak</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">Analiz</h3>
                    <p className="text-gray-600">Web sitesi performansını ölçmek ve iyileştirmeler yapmak</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Veri İşleme Hukuki Dayanakları</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    <li>• <strong>Açık rıza:</strong> E-posta pazarlama ve çerez kullanımı</li>
                    <li>• <strong>Sözleşme:</strong> Hizmet sunumu ve müşteri ilişkileri</li>
                    <li>• <strong>Meşru menfaat:</strong> Web sitesi analizi ve güvenlik</li>
                    <li>• <strong>Hukuki yükümlülük:</strong> Yasal kayıt tutma zorunlulukları</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Veri Saklama Süreleri</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">Veri Türü</th>
                        <th className="border border-gray-300 p-3 text-left">Saklama Süresi</th>
                        <th className="border border-gray-300 p-3 text-left">Dayanak</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">İletişim Verileri</td>
                        <td className="border border-gray-300 p-3">3 yıl</td>
                        <td className="border border-gray-300 p-3">Müşteri ilişkileri</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Pazarlama Verileri</td>
                        <td className="border border-gray-300 p-3">Rıza geri alınana kadar</td>
                        <td className="border border-gray-300 p-3">Açık rıza</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Teknik Veriler</td>
                        <td className="border border-gray-300 p-3">2 yıl</td>
                        <td className="border border-gray-300 p-3">Güvenlik ve analiz</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Finansal Veriler</td>
                        <td className="border border-gray-300 p-3">10 yıl</td>
                        <td className="border border-gray-300 p-3">Yasal yükümlülük</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Haklarınız</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Bilgi Alma Hakkı</h3>
                    <p className="text-blue-800 text-sm">Verilerinizin işlenip işlenmediğini öğrenme</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Erişim Hakkı</h3>
                    <p className="text-green-800 text-sm">İşlenen verilerinize erişim talep etme</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-2">Düzeltme Hakkı</h3>
                    <p className="text-yellow-800 text-sm">Yanlış verilerin düzeltilmesini isteme</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Silme Hakkı</h3>
                    <p className="text-red-800 text-sm">Verilerinizin silinmesini talep etme</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">İtiraz Hakkı</h3>
                    <p className="text-purple-800 text-sm">Veri işlemeye itiraz etme</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-900 mb-2">Taşınabilirlik Hakkı</h3>
                    <p className="text-indigo-800 text-sm">Verilerinizi başka yere taşıma</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Başvuru Yöntemleri</h2>
                <div className="bg-prime-yellow/10 border border-prime-yellow rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Haklarınızı kullanmak için:</h3>
                  <div className="space-y-2">
                    <p>📧 <strong>E-posta:</strong> kvkk@primedigitalcreative.com</p>
                    <p>📮 <strong>Posta:</strong> Büyükdere Cad. No: 123/A, Şişli, İstanbul</p>
                    <p>📞 <strong>Telefon:</strong> +90 212 555 0123</p>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded border">
                    <p className="text-sm text-gray-600">
                      <strong>Not:</strong> Başvurularınız en geç 30 gün içinde yanıtlanacaktır. 
                      Kimlik doğrulama için gerekli belgeler talep edilebilir.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Güvenlik Önlemleri</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl mb-2">🔒</div>
                    <h3 className="font-semibold mb-2">SSL Şifreleme</h3>
                    <p className="text-sm text-gray-600">Tüm veri transferleri şifrelenir</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h3 className="font-semibold mb-2">Erişim Kontrolü</h3>
                    <p className="text-sm text-gray-600">Yetkisiz erişim engellenir</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl mb-2">💾</div>
                    <h3 className="font-semibold mb-2">Yedekleme</h3>
                    <p className="text-sm text-gray-600">Düzenli veri yedekleme</p>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')} <br />
                  Bu aydınlatma metni, yasal değişiklikler doğrultusunda güncellenebilir. 
                  Güncel versiyonu web sitemizden takip edebilirsiniz.
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

export default KVKKAydinlatmaMetni;