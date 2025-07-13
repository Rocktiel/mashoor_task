export const NavbarItems = [
  {
    text: "Ürün",
    subItemHeader: "Ürün Listesi",
    subItem: [
      {
        text: "Ürün Listesi",
        isNew: true,
        href: "/product-listing/all-products",
      },
      {
        text: "İçerik Doluluk Paneli",
        isNew: true,
        href: "/",
      },
      {
        text: "Toplu Ürün İşlemleri",
        isNew: false,
        href: "/",
      },
      {
        text: "Ürün Ekle",
        isNew: true,
        href: "/",
      },
      {
        text: "Görsel Galerisi",
        isNew: false,
        href: "/",
      },
      {
        text: "Video Merkezi",
        isNew: true,
        href: "/",
      },
      {
        text: "Tamamlayıcı Ürünler",
        isNew: true,
        href: "/",
      },
      {
        text: "Otomatik Fiyatlandırma",
        isNew: false,
        href: "/",
      },
      {
        text: "Belge ve Tescil İşlemleri",
        isNew: false,
        href: "/",
      },
    ],
  },
  {
    text: "Sipariş & Kargo",
    subItemHeader: "",
    subItem: [
      {
        text: "Kargo Aşamasındakiler",
        isNew: false,
        href: "/",
      },
      {
        text: "İptal Edilenler",
        isNew: false,
        href: "/",
      },
      {
        text: "İade İşlemleri",
        isNew: false,
        href: "/",
      },
      {
        text: "Toplu Sipariş İşlemleri",
        isNew: true,
        href: "/",
      },
      {
        text: "Hızlı Teslimat",
        isNew: true,
        href: "/",
      },
      {
        text: "Operasyon Ayarları",
        isNew: true,
        href: "/",
      },
      {
        text: "Kargo İşlemleri",
        isNew: false,
        href: "/",
      },
      {
        text: "Müşteri Talepleri",
        isNew: true,
        href: "/",
      },
    ],
  },
  {
    text: "Finans",
    subItemHeader: "Ödemeler & Finansal Çözümler",
    subItem: [
      {
        text: "Ödemeler",
        isNew: false,
        href: "/",
      },
      {
        text: "Fatura Listeleme",
        isNew: false,
        href: "/",
      },
      {
        text: "Sipariş Kayıtları",
        isNew: false,
        href: "/",
      },
      {
        text: "Finans Raporları",
        isNew: true,
        subItem: [
          {
            text: "Cari Hesap Ekstresi",
            href: "/",

            isNew: false,
          },
          {
            text: "E-ticaret Stopajı Dökümü",
            href: "/",
            isNew: true,
          },
        ],
      },
      {
        text: "Erken Ödeme Talebi",
        href: "/",
        isNew: true,
      },
      {
        text: "e-Dönüşüm",
        href: "/",
        isNew: true,
      },
      {
        header: "Finansal Çözümler",
        href: "/",
        text: "Ticari Kredi Kartları",
        isNew: false,
      },
    ],
  },
  {
    text: "Promosyon & Fiyat",
    subItemHeader: "Promosyon & Fiyat",
    subItem: [
      {
        text: "Ana Sayfa",
        href: "/",
        isNew: false,
      },
      {
        header: "Fiyatlandırma ",
        href: "/",
        text: "Fiyatlandırma Sayfası",
        isNew: true,
      },
      {
        text: "Ürün Komisyon Tarifeleri",
        href: "/",
        isNew: false,
      },
      {
        text: "Avantajlı Ürün Etiketleri",
        isNew: false,
        href: "/",
      },
      {
        text: "Flaş Ürünler",
        isNew: true,
        href: "/",
      },
      {
        header: "Promosyon",
        text: "İndirimler",
        isNew: false,
        href: "/",
      },
      {
        text: "Kuponlar",
        isNew: false,
        href: "/",
      },
      {
        text: "Kampanyalar",
        isNew: false,
        href: "/",
      },
    ],
  },
  {
    text: "Raporlar",
    subItemHeader: "Promosyon & Fiyat",
    subItem: [
      {
        text: "Ana Sayfa",
        isNew: false,
        href: "/",
      },
      {
        text: "Canlı Performansım",
        isNew: true,
        isLive: true,
        subItem: [
          {
            text: "Genel Performansım",
            href: "/",
            isNew: false,
          },
          {
            text: "Ürün Performansım",
            href: "/",
            isNew: false,
          },
        ],
      },
      {
        text: "Favori & Görüntülenme",
        isNew: false,
        href: "/",
        isLive: true,
      },
      {
        text: "Satış & Operasyon",
        isNew: true,
        subItem: [
          {
            text: "Satış",
            href: "/",
            isNew: false,
          },
          {
            text: "Sipariş Dağılım",
            href: "/",
            isNew: true,
          },
          {
            text: "Operasyon",
            href: "/",
            isNew: false,
          },
          {
            text: "Mağaza",
            href: "/",
            isNew: false,
          },
        ],
      },
      {
        text: "Promosyon & Fiyat",
        isNew: true,
        subItem: [
          {
            header: "Promosyon",
            text: "Kampanya",
            href: "/",
            isNew: false,
          },
          {
            text: "İndirim Oluştur",
            href: "/",
            isNew: false,
          },
          {
            text: "Kupon",
            href: "/",
            isNew: false,
          },
          {
            header: "Fiyatlandırma",
            text: "Flaş Ürünler",
            href: "/",
            isNew: true,
          },
        ],
      },
      {
        text: "Değerlendirmeler",
        isNew: false,
        subItem: [
          {
            header: "Promosyon",
            text: "Ürün Değerlendirmeleri",
            href: "/",
            isNew: false,
          },
          {
            text: "Satış Değerlendirmeleri",
            href: "/",
            isNew: false,
          },
          {
            text: "Satıcı Puanı",
            href: "/",
            isNew: false,
          },
        ],
      },
      {
        text: "Mashoor'un Enleri",
        isNew: false,
        href: "/",
      },
      {
        text: "İhaleler",
        isNew: true,
        href: "/",
      },
    ],
  },
  {
    text: "Mağaza & Müşteri",
    subItem: [
      {
        text: "Mağaza Tasarımı",
        isNew: false,
        href: "/",
      },
      {
        text: "Ürün Soruları",
        isNew: true,
        href: "/",
        isLive: true,
      },
      {
        text: "Sipariş Soruları",
        isNew: false,
        href: "/",
        isLive: true,
      },
      {
        text: "Müşteri Duyruları",
        href: "/",
        isNew: true,
      },
    ],
  },
  {
    text: "Reklam Yönetimi",
    subItem: [
      {
        header: "Reklamlar",
        text: "Ana Sayfa",
        href: "/",
        isNew: false,
      },
      {
        text: "Ürün Reklamları",
        isNew: true,
        isLive: true,
        href: "/",
      },
      {
        text: "Mağaza Reklamları",
        isNew: false,
        isLive: true,
        href: "/",
      },
      {
        header: "Duyurular",
        text: "Müşteri Duyruları",
        isNew: true,
        href: "/",
      },
    ],
  },
  {
    text: "Gelişim Merkezi",
    subItem: [
      {
        text: "Görevler & Gelişim Seviyeleri",
        isNew: false,
        href: "/",
      },
      {
        text: "Satici Rozetleri",
        isNew: true,
        href: "/",
      },
      {
        text: "Büyüme Önerileri",
        isNew: true,
        href: "/",
      },
    ],
  },
];
