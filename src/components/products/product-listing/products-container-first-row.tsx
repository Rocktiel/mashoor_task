import Tooltip from "@/components/tooltip/tooltip";
import { ExcelDownloadDropdown } from "./ExcelDownloadDropdown";
import { Icon } from "@/components/Icon/icon";
import { Button } from "@/components/button/button";
interface Props {
  header: string;
}
export const ProductListingProductsFirstRow: React.FC<Props> = ({ header }) => {
  const getName = (activeTab: string) => {
    switch (activeTab) {
      case "all":
        return "Tüm Ürünler";
      case "active":
        return "Aktif Ürünler";
      case "pending":
        return "Onay Sürecindeki Ürünler";
      case "passive":
        return "Pasif Ürünler";
      default:
        return "Ürünler";
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="font-medium text-xl text-neutral-700">
            {getName(header)}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {header === "pending" && (
            <Button
              icon="graduation-cap"
              iconClass="text-purple-600 fill-purple-600 w-4 h-4"
              text="Ürün Onay Süreci"
              textColor="text-purple-600"
              buttonClassName="border border-purple-600 hover:bg-gray-100 h-9"
            />
          )}
          <ExcelDownloadDropdown />
          <Tooltip text="İndirme Geçmişim" position="top-left">
            <Icon icon={"info"} IconClassName="text-white fill-black w-5 h-5" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
