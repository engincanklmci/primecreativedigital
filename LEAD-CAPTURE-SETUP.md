# 🎯 Lead Capture & Email Marketing Sistemi Kurulum Rehberi

## 📋 Sistem Özellikleri

### ✅ Otomatik Lead Yakalama
- **15+ saniye** sitede kalan ziyaretçiler için popup
- **45+ saniye** için özel teklif popup'ı
- **2+ dakika** için premium paket teklifi
- **Exit intent** detection (sayfadan çıkarken)
- **Return visitor** detection (tekrar gelen ziyaretçiler)

### ✅ GDPR Uyumlu
- Çerez onayı sistemi
- Veri işleme izni
- Unsubscribe seçeneği
- Şeffaf veri kullanımı

### ✅ Otomatik Email Sequences
- Welcome email (anında)
- SEO analizi (1 saat sonra)
- İndirim teklifleri (30 dakika sonra)
- Follow-up emails (1-3 gün sonra)

### ✅ Lead Scoring
- Sayfa kalma süresi
- Scroll derinliği
- Etkileşim sayısı
- Sayfa görüntüleme

## 🚀 Kurulum Adımları

### 1. Email Service Provider Seçimi

#### Mailgun (Önerilen)
```bash
# Mailgun hesabı oluşturun: https://mailgun.com
# Domain doğrulaması yapın
# API key'inizi alın
```

#### SendGrid (Alternatif)
```bash
# SendGrid hesabı: https://sendgrid.com
# API key oluşturun
# Sender authentication yapın
```

### 2. Environment Variables Ayarlama

`.env` dosyası oluşturun:
```env
MAILGUN_API_KEY=key-xxxxxxxxxxxxxxxxx
MAILGUN_DOMAIN=mg.primedigitalcreative.com
GA_MEASUREMENT_ID=G-XXXXXXXXXX
EMAIL_FROM_ADDRESS=noreply@primedigitalcreative.com
```

### 3. DNS Kayıtları (Email için)

Mailgun için gerekli DNS kayıtları:
```
TXT: v=spf1 include:mailgun.org ~all
CNAME: mg.primedigitalcreative.com → mailgun.org
MX: mxa.mailgun.org (priority 10)
MX: mxb.mailgun.org (priority 10)
```

### 4. Sistem Aktivasyonu

Sistem otomatik olarak aktif! Sadece:
```javascript
// src/main.jsx içinde zaten aktif
import { initLeadCapture } from './utils/leadCapture';
initLeadCapture();
```

## 📊 Lead Dashboard Erişimi

Admin panelinde lead dashboard'a erişim:
```
/admin/dashboard → Lead Dashboard sekmesi
```

### Dashboard Özellikleri:
- ✅ Gerçek zamanlı lead listesi
- ✅ Lead scoring ve analitik
- ✅ Email gönderim durumu
- ✅ CSV export
- ✅ Conversion tracking

## 🎨 Popup Özelleştirme

### Popup Türleri:
1. **Subtle** (15s) - Hafif ilgi gösterme
2. **Offer** (45s) - İndirim teklifi
3. **Premium** (2m) - Premium paket
4. **Exit Intent** - Çıkış niyeti
5. **Return Visitor** - Tekrar gelen

### Özelleştirme:
```javascript
// src/utils/leadCapture.js içinde
const LEAD_CAPTURE_CONFIG = {
  timeThresholds: {
    interested: 15000,    // 15 saniye
    engaged: 45000,       // 45 saniye  
    highIntent: 120000    // 2 dakika
  }
};
```

## 📧 Email Template Özelleştirme

### Template Düzenleme:
```javascript
// src/api/emailMarketing.js içinde
const templates = {
  welcome: {
    html: `<div>Özel HTML içeriğiniz</div>`,
    text: 'Plain text versiyonu'
  }
};
```

### Sequence Düzenleme:
```javascript
this.sequences.set('interested_visitor', [
  { delay: 0, template: 'welcome', subject: 'Hoş Geldiniz!' },
  { delay: 3600000, template: 'seo_analysis', subject: 'SEO Analizi' }
]);
```

## 🔧 Gelişmiş Ayarlar

### Lead Scoring Ağırlıkları:
```javascript
// Puanlama faktörleri
const scoring = {
  timeWeight: 0.3,      // %30 - Sayfa kalma süresi
  scrollWeight: 0.25,   // %25 - Scroll derinliği
  interactionWeight: 0.25, // %25 - Etkileşimler
  pagesWeight: 0.2      // %20 - Sayfa görüntüleme
};
```

### Popup Görünüm Koşulları:
```javascript
// Popup gösterme kuralları
const rules = {
  maxPopupsPerSession: 2,    // Oturum başına max popup
  minTimeBeforeRepeat: 86400000, // 24 saat tekrar gösterme
  excludePages: ['/admin', '/checkout'], // Hariç tutulan sayfalar
  mobileOptimized: true      // Mobil optimizasyonu
};
```

## 📈 Analytics ve İzleme

### Google Analytics Events:
- `generate_lead` - Lead yakalandığında
- `popup_shown` - Popup gösterildiğinde
- `popup_closed` - Popup kapatıldığında
- `email_sent` - Email gönderildiğinde

### Custom Tracking:
```javascript
// Özel event tracking
trackEvent('lead_captured', 'engagement', 'high_intent', leadScore);
```

## 🛡️ Güvenlik ve GDPR

### GDPR Compliance:
- ✅ Açık onay sistemi
- ✅ Veri işleme şeffaflığı
- ✅ Unsubscribe hakkı
- ✅ Veri silme talebi

### Güvenlik Önlemleri:
- ✅ Email validation
- ✅ Rate limiting
- ✅ CSRF protection
- ✅ Data encryption

## 🚀 Performans Optimizasyonu

### Lazy Loading:
```javascript
// Sistem sadece gerektiğinde yüklenir
const leadCapture = lazy(() => import('./utils/leadCapture'));
```

### Memory Management:
```javascript
// Event listener'lar otomatik temizlenir
useEffect(() => {
  const cleanup = trackScrollDepth();
  return cleanup; // Component unmount'ta temizlik
}, []);
```

## 📊 Beklenen Sonuçlar

### 1 Hafta İçinde:
- ✅ İlk lead'ler gelmeye başlar
- ✅ Email sequence'lar çalışır
- ✅ Analytics verileri toplanır

### 1 Ay İçinde:
- 📈 %15-25 lead capture rate
- 📧 %20-30 email open rate
- 💰 %5-10 conversion rate

### 3 Ay İçinde:
- 🎯 Optimize edilmiş popup timing
- 📊 Gelişmiş lead scoring
- 💼 Artan müşteri kazanımı

## 🔧 Troubleshooting

### Yaygın Sorunlar:

#### Popup Görünmüyor:
```javascript
// Console'da kontrol edin:
console.log('GDPR Consent:', localStorage.getItem('gdpr_consent'));
console.log('Lead Capture Active:', window.leadCaptureSystem);
```

#### Email Gönderilmiyor:
```javascript
// API endpoint'i test edin:
fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'test@test.com', source: 'test' })
});
```

#### Lead'ler Kaydedilmiyor:
```javascript
// LocalStorage kontrol:
console.log('Leads:', localStorage.getItem('captured_leads'));
```

## 📞 Destek

Sistem kurulumu veya özelleştirme için:
- 📧 Email: destek@primedigitalcreative.com
- 📱 WhatsApp: +90 535 555 0123
- 💬 Canlı Destek: primedigitalcreative.com/destek

## 🎉 Sonuç

Bu sistem ile:
- ✅ Otomatik lead yakalama
- ✅ GDPR uyumlu veri toplama  
- ✅ Akıllı email marketing
- ✅ Detaylı analytics
- ✅ Yüksek conversion rate

**Artık 15+ saniye sitede kalan her ziyaretçi potansiyel müşteriniz!** 🚀