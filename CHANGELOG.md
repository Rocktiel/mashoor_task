## [0.0.1]-07.07.2025

### Added

- ProductListing sayfasının header'ı eklendi.Eski projenin Main Header'ı projeye eklendi.
  - Dosyalar:
    - src/app/product-listing/all-products/page.tsx
    - src/components/layout/main-layout
    - src/components/Icon/Icon.tsx (lucide-react/dynamic kütüphanesindeki istediğimiz iconu basit bir şekilde ekleyebiliyoruz.)
    - src/components/tooltip (Info ikonlarının üstüne geldiğimizde açılan bilgi kutucukları.)
    - src/components/header/product-listing (ProductListing sayfasının header kısmı)

## [0.0.2]-08.07.2025

### Added

- ProductListing sayfasının filter kısmı projeye eklendi.(Filtrelemiyor.)
  - Dosyalar:
    - src/components/filter/product-listing (ProductListing sayfasının filter kısmı)
    - src/components/input/product-listing/filter-input.tsx
    - src/components/select/product-listing/product-listing-custom-select.tsx
    - src/components/ui (Bazı Shadcn UI componentleri projeye eklendi..)

## [0.0.3]-09.07.2025

### Added

- ProductListing sayfasının product kısmının üst kısmı ve örnek Ürünler projeye eklendi.
  - Dosyalar:
    - src\components\products\product-listing\layout.tsx
    - src\components\products\product-listing\products-container-first-row.tsx
    - src\components\products\product-listing\ExcelDownloadDropdown.tsx
    - src\components\products\product-listing\Product.tsx

## [0.0.4]-10.07.2025

### Added

- ProductListing sayfasının product kısmının tablo kısmının bir kısmı yapıldı.
  - Dosyalar:
    - src\components\products\product-listing\table.tsx
    - src\components\products\product-listing\columnSelector.tsx
    - src\components\products\product-listing\td-column-content.tsx
    - src\components\products\product-listing\td-fixed-column-content.tsx

## [0.0.5]-11.07.2025

### Fixing

- Diğer projeden alınan header mobile uyumlu hale getirildi.

## [0.0.5]-13.07.2025

### Added

- ProductListing sayfasının product kısmının tablo kısmı projeye eklendi.Pagination ve tabloyu özelleştirme işlevleri eklendi.
