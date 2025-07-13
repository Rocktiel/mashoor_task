# Proje Geliştirme Dokümantasyonu

## 1. Header (Başlık) Bölümü

### Yapılan Değişiklikler
- Mevcut header mobil uyumlu hale getirildi
- Responsive tasarım ile tüm cihazlarda optimal görüntüleme sağlandı

### Yeni Dosyalar
- `src/components/header/NavbarItems.tsx`

### Eklenme Nedeni
- Navigasyon öğelerinin merkezi yönetimi
- Kod tekrarının önlenmesi
- Daha düzenli ve okunabilir kod yapısı

## 2. Ürün Listeleme Sistemi

### Yeni Bileşen
- `src/components/products/product-listing/Product.tsx`

### Avantajlar
- Standart ürün kartı yapısı
- Tutarlı UI/UX deneyimi
- Geliştirme sürecinin hızlanması

## 3. Shadcn/ui Entegrasyonu

### Eklenen UI Bileşenleri
- Button, Checkbox, Dialog
- Dropdown, Input, Label
- Pagination, Popover, Select

### Faydalar
- Modern ve erişilebilir arayüz
- Özelleştirilebilir bileşenler
- Geliştirme verimliliği

## 4. Özel Bileşenler

### Eklenen Özel Bileşenler
| Bileşen | Dosya Yolu | Amacı |
|---------|------------|-------|
| Tooltip | `src/components/tooltip` | Ek bilgi gösterme |
| Filtre Input | `src/components/input/product-listing/filter-input.tsx` | Özel filtreleme arayüzü |
| Özel Select | `src/components/select/product-listing/product-listing-custom-select.tsx` | Gelişmiş seçim özellikleri |
| İkon Yönetimi | `src/components/Icon/icon.tsx` | Merkezi ikon yönetimi |
| Buton | `src/components/button/button.tsx` | Özelleştirilmiş butonlar |
| Dropdown | `src/components/dropdown-menu/dropdown-menu.tsx` | Gelişmiş menü yapısı |

## 5. Ana Layout Sistemi

### Yeni Dosya
- `src/components/layout/main-layout.tsx`

### Sağladığı Faydalar
- Tüm sayfalarda tutarlı yapı
- Tekrar eden kodun önlenmesi
- Merkezi yönetim imkanı

## 6. Ürün Listeleme Sayfası

### Sayfa Yapısı
- Ana sayfa: `src/app/product-listing/all-products/page.tsx`

### Header Bileşenleri
- `product-listing-header-left.tsx`
- `product-listing-header-right.tsx`
- `product-listing-header-left-items.tsx`
- `product-listing-header.tsx`

## 7. Filtreleme Sistemi

### Bileşenler
- Filtre butonları
- Görsel göstergeler
- Filtre başlıkları
- Giriş alanları
- Sekme yapısı
- Genel layout

## 8. Ürün Tablosu Bileşenleri

### Temel Özellikler
- Dinamik sütun yönetimi
- Excel export özelliği
- Responsive tablo yapısı
- Özelleştirilebilir hücreler

### Bileşenler
- `columnSelector.tsx`
- `ExcelDownloadDropdown.tsx`
- `products-container-first-row.tsx`
- `table.tsx`
- Çeşitli hücre tipleri
