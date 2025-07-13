import { ActionsDropdown } from "@/components/dropdown-menu/dropdown-menu";

interface Props {
  count: number;
}
export const ProductListingProductsOperations: React.FC<Props> = ({
  count,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <ActionsDropdown
        buttonLabel={`Toplu İşlemler (${count})`}
        buttonClassName="w-45 bg-amber-500 text-white hover:bg-amber-500 cursor-pointer"
        count={count}
        menuItems={[
          {
            label: "Seçili Ürünleri Arşivle ve Sil",
            onClick: () => {},
          },
          {
            label: "Seçili Ürünleri Arşivle",
            onClick: () => {},
          },
          {
            label: "Ürünlerin Fiyat & Stoğunu Güncelle",
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
};
