# E-posta Güvenlik Kurulumu - Prime Dijital

## DMARC Kaydı Ekleme

DMARC (Domain-based Message Authentication, Reporting & Conformance) kaydı, e-posta güvenliğini artırır ve spam'i önler.

### DNS'e Eklenecek DMARC Kaydı:

```
Kayıt Türü: TXT
Host: _dmarc.primedigitalcreative.com
Değer: v=DMARC1; p=quarantine; rua=mailto:dmarc@primedigitalcreative.com; ruf=mailto:dmarc@primedigitalcreative.com; fo=1
```

### DMARC Politika Seviyeleri:
- `p=none` - Sadece raporlama (başlangıç için önerilir)
- `p=quarantine` - Şüpheli e-postaları spam klasörüne gönder
- `p=reject` - Şüpheli e-postaları reddet (en güvenli)

## SPF Kaydı Ekleme

SPF (Sender Policy Framework) kaydı, hangi sunucuların domain adınız için e-posta gönderebileceğini belirtir.

### DNS'e Eklenecek SPF Kaydı:

```
Kayıt Türü: TXT
Host: primedigitalcreative.com
Değer: v=spf1 include:_spf.google.com include:mailgun.org ~all
```

### SPF Kayıt Açıklaması:
- `v=spf1` - SPF versiyon 1
- `include:_spf.google.com` - Google Workspace kullanıyorsanız
- `include:mailgun.org` - Mailgun kullanıyorsanız
- `~all` - Diğer tüm sunucular için soft fail

## DKIM Kaydı

DKIM (DomainKeys Identified Mail) e-posta imzalama sistemidir.

### E-posta Sağlayıcınızdan DKIM Anahtarını Alın:
1. Google Workspace, Mailgun, SendGrid vb. panelinden DKIM anahtarını alın
2. DNS'e TXT kaydı olarak ekleyin

Örnek DKIM kaydı:
```
Kayıt Türü: TXT
Host: selector1._domainkey.primedigitalcreative.com
Değer: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```

## Kurulum Adımları

### 1. DNS Yönetim Paneline Giriş
- Domain sağlayıcınızın (GoDaddy, Namecheap vb.) DNS yönetim paneline girin

### 2. TXT Kayıtlarını Ekleyin
- Yukarıdaki DMARC ve SPF kayıtlarını TXT kayıt türü olarak ekleyin

### 3. Doğrulama
- Kayıtların aktif olması 24-48 saat sürebilir
- Aşağıdaki araçlarla doğrulayın:
  - [MXToolbox DMARC Lookup](https://mxtoolbox.com/dmarc.aspx)
  - [SPF Record Checker](https://www.kitterman.com/spf/validate.html)

### 4. İzleme
- DMARC raporlarını düzenli olarak kontrol edin
- Gerekirse politika seviyesini artırın

## Önemli Notlar

⚠️ **Dikkat**: SPF ve DMARC kayıtlarını yanlış yapılandırmak e-posta teslimatını etkileyebilir.

✅ **Öneri**: İlk kurulumda `p=none` ile başlayın, raporları izleyin, sonra `p=quarantine` veya `p=reject`'e geçin.

📧 **Test**: Kurulum sonrası test e-postaları göndererek doğrulayın.

## Faydalı Araçlar

- [DMARC Analyzer](https://www.dmarcanalyzer.com/)
- [MXToolbox](https://mxtoolbox.com/)
- [Mail Tester](https://www.mail-tester.com/)
- [Google Admin Console](https://admin.google.com/) (Google Workspace kullanıyorsanız)