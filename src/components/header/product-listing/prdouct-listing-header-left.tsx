import { ProductListingHeaderLeftItems } from "./product-listing-header-left-items";

export const ProductListingHeaderLeft = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-5 text-[0.75rem] ml-4 md:ml-1">
      <ProductListingHeaderLeftItems
        text1="Ürün Limit Seviyesi"
        text2="Seviye 1"
        toolipText="Ürün limit seviyesiniz satıcı seviyeniz baz alınarak hesaplanmaktadır. Haftalık olarak güncellenir. Seviye yükselmeniz durumunda takip eden hafta Ürün Limit Seviye’niz de yükselir. Seviye düşmeniz durumunda ise ürün girişlerinizin aniden bloklanmaması amacı ile 4 hafta süre verilir. 4. haftanın sonunda Ürün Limit Seviye’niz hesaplanan satıcı seviyenize eşitlenir ve yeni limit adedi geçerli olur."
      />
      <ProductListingHeaderLeftItems
        text1="Ürün Adedi"
        text2="85/50000"
        toolipText="Mevcut ürün listeleme üst sınırınızı ve ürün adedinizi gösterir. Güncellemeler haftalık olup seviye düşüşü yaşadığınızda ürün limitiniz 4 hafta sonundaki mevcut satıcı seviyenize göre güncellenecektir. Satıcı seviyelerine göre listelenebilecek maksimum ürün limit bilgileri aşağıdaki gibidir:"
      />
    </div>
  );
};
