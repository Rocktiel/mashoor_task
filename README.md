# 1. Header (Başlık) Bölümü
  ## Yapılan Değişiklikler ve Eklemeler:

- Mevcut Header'ın Mobil Uyumluluğu: Asıl projenin mevcut header kısmı alınarak mobil cihazlarda daha iyi bir kullanıcı deneyimi sunacak şekilde responsive hale getirildi. Bu değişiklik, farklı ekran boyutlarında düzenin bozulmamasını ve öğelerin doğru şekilde hizalanmasını sağlamak amacıyla yapıldı.

- `src/components/header/NavbarItems.tsx` (Yeni Dosya): Header'daki navigasyon öğeleri (menü itemleri) ayrı bir dosyaya taşındı.

Neden Eklendi: Bu dosya, header bileşeninin daha düzenli ve okunabilir olmasını sağlamak, navigasyon öğelerinin merkezi bir yerden yönetilmesine olanak tanımak ve kod tekrarını azaltmak amacıyla eklendi. Navigasyon yapısının değişmesi durumunda sadece bu dosyanın güncellenmesi yeterli olacaktır.

# 2. Örnek Ürünler ve Ürün Listeleme
   ## Yapılan Değişiklikler ve Eklemeler:

src/components/products/product-listing/Product.tsx (Yeni Dosya): Örnek ürün verilerini temsil eden ve ürün kartlarını render eden bir bileşen oluşturuldu.

### Neden Eklendi: 
Ürün listeleme sayfasında gösterilecek her bir ürünün standart bir yapıda sunulabilmesi için bu bileşen eklendi. Bu sayede her ürün kartı için aynı stil ve düzen tekrar tekrar yazılmak yerine, Product bileşeni kullanılarak tutarlılık sağlandı ve geliştirme süreci hızlandırıldı.

3. Shadcn/ui Kütüphanesi Entegrasyonu
   Yapılan Değişiklikler ve Eklemeler:

src/components/ui Dizini (Yeni Dizin ve Dosyalar): Shadcn/ui kütüphanesinden çeşitli UI bileşenleri projeye entegre edildi. Bu bileşenler arasında button, checkbox, dialog, dropdown-menu, input, label, pagination, popover, select bulunmaktadır.

Neden Eklendi: Shadcn/ui, erişilebilir, özelleştirilebilir ve iyi tasarlanmış React bileşenleri sunar. Bu bileşenlerin projeye eklenmesi, uygulamanın genel görünüm ve hissini modernleştirmek, geliştirme süresini kısaltmak ve UI/UX tutarlılığını sağlamak amacıyla yapıldı. Bu bileşenler, temel UI elemanları için sağlam bir temel oluşturur.

4. Özel Bileşenler
   Yapılan Değişiklikler ve Eklemeler:

Proje ihtiyaçlarına özel olarak geliştirilen veya mevcut Shadcn/ui bileşenlerinin üzerine inşa edilen özel bileşenler oluşturuldu:

src/components/tooltip (Yeni Dizin ve Dosyalar): Özel bir Tooltip bileşeni eklendi.

Neden Eklendi: Kullanıcı arayüzünde ek bilgi sağlamak veya öğeler hakkında açıklama yapmak için standart bir tooltip çözümü sunmak amacıyla eklendi.

src/components/input/product-listing/filter-input.tsx (Yeni Dosya): Ürün listeleme sayfasındaki filtreleme için özel bir giriş alanı bileşeni.

Neden Eklendi: Filtreleme alanlarında kullanılan giriş kutularının belirli bir stil ve davranışa sahip olması gerektiğinden, bu özel bileşen oluşturuldu. Bu, filtreleme UI'sında tutarlılık sağlar.

src/components/select/product-listing/product-listing-custom-select.tsx (Yeni Dosya): Ürün listeleme sayfasındaki özel seçim kutusu bileşeni.

Neden Eklendi: Filtreleme ve sıralama gibi işlemlerde kullanılan seçim kutularının özelleştirilmiş bir görünüme ve işlevselliğe sahip olması için tasarlandı.

src/components/Icon/icon.tsx (Yeni Dosya): Proje genelinde kullanılacak ikonları yöneten bir bileşen.

Neden Eklendi: İkonların merkezi bir yerden yönetilmesi, kolayca eklenip çıkarılması ve projenin genel ikon setinde tutarlılık sağlanması amacıyla eklendi.

src/components/button/button.tsx (Yeni Dosya): Özel buton bileşeni.

Neden Eklendi: Shadcn/ui'deki buton bileşeninin üzerine, projeye özgü ek stil veya işlevsellik katmak için geliştirildi.

src/components/dropdown-menu/dropdown-menu.tsx (Yeni Dosya): Özel açılır menü bileşeni.

Neden Eklendi: Shadcn/ui'deki açılır menü bileşeninin üzerine, projeye özgü ek stil veya işlevsellik katmak için geliştirildi.

5. Ana Düzen (Main Layout)
   Yapılan Değişiklikler ve Eklemeler:

src/components/layout/main-layout.tsx (Yeni Dosya): Uygulamanın genel iskeletini oluşturan ana düzen bileşeni eklendi.

Neden Eklendi: Uygulamanın tüm sayfalarında tutarlı bir yapı (örneğin, sabit bir header, footer veya yan menü) sağlamak amacıyla eklendi. Bu bileşen, her sayfanın temel çerçevesini tanımlar ve içeriğin bu çerçeve içine yerleştirilmesini sağlar. Bu sayede, her sayfada tekrar eden kod yazmaktan kaçınılır ve uygulamanın genel görünümünde tutarlılık sağlanır.

6. Ürün Listeleme Ana Sayfası
   Yapılan Değişiklikler ve Eklemeler:

src/app/product-listing/all-products/page.tsx (Yeni Dosya): Ürün listeleme sayfasının ana içeriğini barındıran Next.js sayfası oluşturuldu.

Neden Eklendi: Bu dosya, tüm ürünlerin listelendiği ana giriş noktasıdır. Header, filtreleme ve ürünler listesi gibi tüm alt bileşenleri bir araya getirerek sayfanın bütününü oluşturur.

6.1. Ürün Listeleme Sayfası Header'ı
Yapılan Değişiklikler ve Eklemeler:

src/components/header/product-listing/product-listing-header-left.tsx (Yeni Dosya): Ürün listeleme sayfasının başlığının sol tarafındaki öğeleri içerir.

src/components/header/product-listing/product-listing-header-right.tsx (Yeni Dosya): Ürün listeleme sayfasının başlığının sağ tarafındaki öğeleri içerir.

src/components/header/product-listing/product-listing-header-left-items.tsx (Yeni Dosya): Sol kısımdaki spesifik öğeleri içerir.

src/components/header/product-listing/product-listing-header.tsx (Yeni Dosya): Ürün listeleme sayfasına özel ana başlık bileşeni.

Neden Eklendi: Ürün listeleme sayfasının kendine özgü bir başlık yapısı olduğu için, bu bileşenler sayfanın başlığını sol ve sağ kısımlara ayırarak daha modüler bir yapı sağladı. Bu, başlığın farklı bölümlerinin bağımsız olarak geliştirilmesine ve yönetilmesine olanak tanır.

7. Filtreleme Bölümü
   Yapılan Değişiklikler ve Eklemeler:

src/components/filter/product-listing/filter-button.tsx (Yeni Dosya): Filtreleme işlemleri için kullanılan buton bileşeni.

src/components/filter/product-listing/filter-circles.tsx (Yeni Dosya): Filtre durumunu görselleştiren dairesel göstergeler.

src/components/filter/product-listing/filter-header.tsx (Yeni Dosya): Filtreleme bölümünün başlığı.

src/components/filter/product-listing/filter-inputs.tsx (Yeni Dosya): Filtreleme için giriş alanları.

src/components/filter/product-listing/filter-select.tsx (Yeni Dosya): Filtreleme için seçim kutuları.

src/components/filter/product-listing/filter-tab-item.tsx (Yeni Dosya): Filtreleme sekmelerinin her bir öğesi.

src/components/filter/product-listing/layout.tsx (Yeni Dosya): Filtreleme bölümünün genel düzenini oluşturan bileşen.

Neden Eklendi: Ürün listeleme sayfasında kullanıcıların ürünleri çeşitli kriterlere göre filtreleyebilmesi için kapsamlı bir filtreleme arayüzü oluşturuldu. Bu bileşenler, filtreleme mantığını ve UI'sını modüler bir şekilde ayırarak, her bir filtreleme öğesinin bağımsız olarak geliştirilmesine ve yönetilmesine olanak tanıdı. Bu sayede filtreleme işlevselliği daha esnek ve bakımı kolay hale geldi.

8. Ürünler Listesi Bölümü (Alt Kısım)
   Yapılan Değişiklikler ve Eklemeler:

src/components/products/product-listing/columnSelector.tsx (Yeni Dosya): Tabloda gösterilecek sütunları seçmeye yarayan bileşen.

src/components/products/product-listing/ExcelDownloadDropdown.tsx (Yeni Dosya): Ürün verilerini Excel olarak indirme seçeneği sunan açılır menü.

src/components/products/product-listing/layout.tsx (Yeni Dosya): Ürün listeleme tablosunun genel düzeni.

src/components/products/product-listing/products-container-first-row.tsx (Yeni Dosya): Ürün listeleme konteynerinin ilk sırası.

src/components/products/product-listing/table.tsx (Yeni Dosya): Ürün verilerini gösteren ana tablo bileşeni.

src/components/products/product-listing/td-column-content.tsx (Yeni Dosya): Tablo hücrelerindeki dinamik sütun içeriği.

src/components/products/product-listing/td-fixed-column-content.tsx (Yeni Dosya): Tablo hücrelerindeki sabit sütun içeriği.

src/components/products/product-listing/td-input.tsx (Yeni Dosya): Tablo hücrelerindeki giriş alanları.

Neden Eklendi: Ürün listeleme sayfasının ana içeriğini oluşturan ürün tablosu ve ilgili işlevsellikler (sütun seçimi, Excel indirme) bu bileşenler aracılığıyla sağlandı. Tablo yapısının karmaşıklığı nedeniyle, her bir hücre tipi ve işlevselliği ayrı bileşenlere ayrılarak kodun daha yönetilebilir ve yeniden kullanılabilir olması sağlandı. Bu modüler yapı, tablonun esnekliğini artırır ve gelecekteki değişiklikleri kolaylaştırır.
