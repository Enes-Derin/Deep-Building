# FixTrack İnşaat - Kurumsal Web Sitesi

## 📋 Proje Tanımı

**FixTrack İnşaat**, inşaat sektöründe faaliyet gösteren orta ölçekli bir firmanın dijitalde güven, prestij ve profesyonellik algısını güçlendirmek için tasarlanmış **admin panelli kurumsal web sitesidir**.

### Hedef
- Firmanın yaptığı işleri net şekilde sergileyen
- Teklif talebine yönlendiren
- İlk izlenimde "kurumsal ve güvenilir" hissi veren
- Mobil uyumlu profesyonel web varlığı oluşturmak

---

## 🎨 Tasarım Dili

### Stil
- **Kurumsal, sade, güçlü**
- Abartısız, güven veren
- Ajans işi hissi (freelance görünümü yok)

### Renk Paleti
- **Ana renk**: Koyu lacivert (#1a2e4a) / Antrasit (#2c3e50)
- **Vurgu**: Beton grisi (#7f8c8d), Açık gri (#ecf0f1)
- **CTA Buton**: Koyu turuncu (#d97634)

### Tipografi
- **Başlıklar**: Sans-serif, kalın (Inter)
- **Metinler**: Okunabilir, sade, 1.6 line-height

---

## 📁 Dosya Yapısı

```
syntaxa tasarım/
├── index.html              # Ana Sayfa
├── hakkimizda.html        # Hakkımızda sayfası
├── hizmetler.html         # Hizmetler sayfası
├── projeler.html          # Projeler sayfası (filtreleme özelliği ile)
├── iletisim.html          # İletişim formu sayfası
├── admin.html             # Admin Paneli
├── style.css              # Tüm site CSS stilleri
├── script.js              # Global JavaScript
└── README.md              # Bu dosya
```

---

## 🌐 Sayfa Özeti

### 1. Ana Sayfa (index.html)
- **Hero Alanı**: Şantiye görseli arka plan, "Güvenle Yükselen Yapılar" başlığı
- **Hizmetler**: 4 hizmet kartı (Konut, Ticari, Taahhüt, Danışmanlık)
- **Neden Biz**: 4 avantaj (Zamanında Teslim, Şeffaf Süreç, Deneyimli Ekip, Referans Odaklı)
- **Öne Çıkan Projeler**: 3 proje kartı + "Tüm Projeleri Gör" butonu
- **CTA Alanı**: Teklif talebine yönlendiren son section
- **Footer**: İletişim bilgileri ve sosyal medya

### 2. Hakkımızda (hakkimizda.html)
- Şirket açıklaması
- İstatistikler (20+ yıl, 150+ proje, 5000+ müşteri, 99% zamanında teslim)
- Vizyon ve Misyon
- Liderlik Ekibi (3 kişi)

### 3. Hizmetler (hizmetler.html)
- 5 Detaylı Hizmet Tanımı:
  1. Anahtar Teslim İnşaat
  2. Konut Projesi Uygulaması
  3. Ticari Yapı İnşaatı
  4. Proje Danışmanlığı
  5. Renovasyon ve Restorasyon
- Her hizmet için: Özet + Özellikler listesi
- Çalışma Süreci (6 adım)

### 4. Projeler (projeler.html)
- **Filtreleme**: Tümü, Konut, Ticari, Taahhüt
- **8 Örnek Proje**: Her proje kartında
  - Görsel placeholder
  - Kategori badge
  - Proje adı
  - Lokasyon
  - Açıklama
  - İstatistikler (m², Yıl)
- Responsive grid layout

### 5. İletişim (iletisim.html)
- **İletişim Formu** (Ad, E-posta, Telefon, Konu, Mesaj)
- **İletişim Kartları**:
  - Adres
  - Telefon (2 hat)
  - E-posta (2 adres)
  - Çalışma Saatleri
- Form verileri **localStorage**'da kaydedilir
- Admin panelinde görüntülenebilir

### 6. Admin Paneli (admin.html) ⭐
**Bu, projenin en güçlü özelliğidir!**

#### Dashboard
- Toplam proje sayısı
- Hizmet sayısı
- Gelen mesaj sayısı
- Son mesajları listeleyen tablo

#### Proje Yönetimi
- **Yeni Proje Ekle**: Form (Ad, Lokasyon, Kategori, Alan, Yıl, Görsel URL, Açıklama)
- **Proje Listesi**: Tablo ile tüm projeler
- **Düzenle / Sil**: Her proje için işlem butonu
- Verileri **localStorage**'da saklama

#### Hizmet Yönetimi
- Mevcut hizmetlerin listesi
- Hizmet bilgisi güncelleme

#### Mesaj Yönetimi
- Gelen tüm iletişim mesajlarını görüntüleme
- Mesaj detaylarını okuma
- Mesaj silme

#### Site Ayarları
- Şirket adı
- E-posta
- Telefon
- Adres
- Bu bilgiler sitenin tüm sayfalarında kullanılabilir

---

## ⚙️ Teknik Özellikler

### Frontend Stack
- **HTML5**: Semantik yapı
- **CSS3**: Responsive design, Grid, Flexbox
- **Vanilla JavaScript**: Herhangi bir framework olmadan
- **Font Awesome**: İkonlar (v6.4.0 CDN)
- **Google Fonts**: Inter font ailesi

### Storage & Data Management
- **localStorage API**: Projeler, mesajlar ve ayarları saklamak için
- **JSON Serialization**: Veri saklama ve geri yükleme
- Gerçek backend olmadan, tarayıcı-based veritabanı çözümü

### Responsive Design
- **Mobile-first** yaklaşım
- **Breakpoints**: 768px, 480px
- **Flexible Grid**: `repeat(auto-fit, minmax())`
- **Touch-friendly** butonlar ve form elemanları

### Performance
- CDN'den external assets (Font Awesome)
- Optimize edilmiş CSS (Single file)
- Minimal JavaScript (Vanilla JS)
- Hızlı yükleme süreleri

---

## 🚀 Nasıl Kullanılır?

### 1. Tarayıcıda Açma
Dosyaları kendi bilgisayarınızda açmak için:
```bash
# Klasör konumuna gidin
cd "c:\Users\monster\Desktop\syntaxa tasarım"

# index.html dosyasını tarayıcıda açın (Sağ Tıkla > Open with Browser)
```

### 2. Admin Paneline Erişim
- Herhangi bir sayfadan "Admin" linkine tıklayın
- Şifre kontrolü yoktur (demo amaçlı)
- Dashboard'a yönlendirileceksiniz

### 3. Proje Ekleme (Admin)
1. Admin Paneli → Projeler sekmesi
2. "Yeni Proje Ekle" formunu doldurun
3. "Proje Ekle" butonuna tıklayın
4. Proje otomatik olarak listeye eklenir
5. Projeler sayfasında görülür

### 4. Mesaj Görüntüleme (Admin)
1. İletişim sayfasından form gönderin
2. Admin Paneli → Mesajlar sekmesi
3. Gelen tüm mesajlar burada listelenir
4. "Oku" butonu ile mesaj içeriğini görün

---

## 🎯 Öne Çıkan Özellikler

### ✅ Kurumsal Tasarım
- Sade, profesyonel renk paleti
- Tipografi hiyerarşisi net
- Grid layout ile düzenli yapı
- Hover efektleri ve animasyonlar

### ✅ Admin Paneli
- Tam CRUD işlemleri (Create, Read, Update, Delete)
- Proje yönetimi
- İletişim mesajlarını görüntüleme
- Dashboard istatistikleri
- Site ayarları

### ✅ Mobil Uyumluluk
- Responsive navbar
- Flexible grid layoutlar
- Touch-friendly butonlar
- Tablet ve mobil optimize edilmiş

### ✅ SEO Friendly
- Semantik HTML
- Meta tags
- Doğru başlık hiyerarşisi
- Açıklayıcı link metinleri

### ✅ Kullanıcı Deneyimi
- Smooth scrolling
- Form validasyonu
- Başarı mesajları
- Filtreleme (Projeler sayfası)
- Scroll animations

---

## 💾 Veri Saklama

### localStorage Kullanılan Alanlar

1. **`projects`** (JSON Array)
   ```javascript
   [
     {
       id: 1234567890,
       name: "Proje Adı",
       location: "Lokasyon",
       category: "Konut|Ticari|Taahhüt",
       area: 5000,
       year: "2023-2024",
       image: "https://...",
       description: "Açıklama"
     }
   ]
   ```

2. **`contactMessages`** (JSON Array)
   ```javascript
   [
     {
       name: "Müşteri Adı",
       email: "email@example.com",
       phone: "+90...",
       subject: "Konu",
       message: "Mesaj içeriği",
       timestamp: "2024-01-22T10:30:00.000Z"
     }
   ]
   ```

### Tarayıcı Konsolundan Veri Görüntüleme
```javascript
// Projeleri görmek için
JSON.parse(localStorage.getItem('projects'))

// Mesajları görmek için
JSON.parse(localStorage.getItem('contactMessages'))
```

---

## 🔧 Kustomizasyon

### Renkleri Değiştirmek
`style.css` dosyasında `:root` bölümünü düzenleyin:
```css
:root {
    --dark-navy: #1a2e4a;        /* Ana renk */
    --dark-orange: #d97634;      /* Vurgu rengi */
    /* ... diğer renkler ... */
}
```

### Şirket Bilgisini Değiştirmek
Tüm sayfaların footer'ında görünen bilgileri değiştirin:
```html
<h4>FixTrack İnşaat</h4>
<p><i class="fas fa-phone"></i> +90 (212) 123 45 67</p>
```

### Örnek Projeleri Güncellemek
`projeler.html`'de proje kartlarını güncelleyin veya admin panelini kullanın.

---

## 📊 Site Yapısı Özeti

```
Ana Sayfa
├── Header (Logo + Navigation + Admin)
├── Hero (Başlık + Alt Metin + CTA)
├── Hizmetler (4 Kart)
├── Neden Biz (4 Avantaj)
├── Projeler (3 Proje Preview)
├── CTA Alanı
└── Footer (İletişim + Linkler + Sosyal)

Hakkımızda
├── Page Header
├── Şirket Açıklaması
├── İstatistikler (4 Box)
├── Vizyon & Misyon
├── Liderlik Ekibi (3 Kişi)
└── Footer

Hizmetler
├── Page Header
├── 5 Detaylı Hizmet (İkon + Başlık + Açıklama + Listeler)
├── Çalışma Süreci (6 Adım)
└── Footer

Projeler
├── Page Header
├── Filtreleme Butonları (Tümü, Konut, Ticari, Taahhüt)
├── Proje Grid (8 Proje)
└── Footer

İletişim
├── Page Header
├── İletişim Formu (Sol)
├── İletişim Bilgileri (Sağ)
└── Footer

Admin Paneli
├── Header (Logo + Logout)
├── Sidebar (Navigation)
└── Content
    ├── Dashboard (İstatistikler + Son Mesajlar)
    ├── Projeler (CRUD)
    ├── Hizmetler (Görüntüleme)
    ├── Mesajlar (Görüntüleme + Silme)
    └── Ayarlar (Şirket Bilgileri)
```

---

## 📱 Browser Uyumluluğu

- ✅ Chrome (Son 2 sürüm)
- ✅ Firefox (Son 2 sürüm)
- ✅ Safari (Son 2 sürüm)
- ✅ Edge (Son 2 sürüm)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 🚫 Sınırlamalar

- **Backend yok**: Veriler localStorage'da saklanır (tarayıcı silinirse kaybolur)
- **Şifre koruması yok**: Admin paneline herkes erişebilir
- **Resim upload yok**: Sadece URL'den görsel ekleme
- **Email gönderimi yok**: Mesajlar sadece admin panelinde saklanır

---

## 🔐 Gelişmiş Kullanım (Gerçek Deployment İçin)

Eğer bu projeyi gerçek olarak kullanmak istiyorsanız:

1. **Backend Kurma**
   - Node.js + Express
   - Python + Django/Flask
   - Veritabanı (MySQL, MongoDB)

2. **Admin Paneli Güvenliği**
   - Kullanıcı authentication
   - Password hashing
   - Session management

3. **Email Integration**
   - SMTP servisi
   - Otomatik email bildirimleri

4. **Hosting**
   - Netlify, Vercel, GitHub Pages (Static)
   - Heroku, AWS (Full Stack)

---

## 📝 Notlar

- Bu proje **demo/portfölio** amaçlı tasarlanmıştır
- Production'a almadan önce security kontrolleri yapın
- localStorage'da saklanan veri tarayıcı silinirse kaybolur
- Admin panelinde gerçek kimlik doğrulaması uygulanmamıştır

---

## 👨‍💻 Geliştirici Notları

### Kodun Yapısı
- **CSS**: Single file (style.css)
- **JavaScript**: Vanilla JS, modular kod
- **HTML**: Semantik, accessible
- **localStorage**: Simple data management

### Potansiyel İyileştirmeler
- [ ] Real backend API entegrasyonu
- [ ] User authentication
- [ ] Image upload ve resize
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

---

## 📄 Lisans

Bu proje eğitim ve portfölio amaçlıdır.

---

**Oluşturulma Tarihi**: Ocak 2024  
**Son Güncelleme**: Ocak 22, 2024  
**Versiyon**: 1.0
