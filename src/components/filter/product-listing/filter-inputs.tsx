import { CustomSelect } from "@/components/select/product-listing/product-listing-custom-select";
import { FloatingInput } from "@/components/input/product-listing/filter-input";

interface FilterInputsProps {
  activeTab: string;
  barcode: string;
  setBarcode: (val: string) => void;
  productName: string;
  setProductName: (val: string) => void;
  modelCode: string;
  setModelCode: (val: string) => void;
  stockCode: string;
  setStockCode: (val: string) => void;
  selectedValues: string[];
  setSelectedValues: (val: string[]) => void;
}

export const FilterInputs = ({
  activeTab,
  barcode,
  setBarcode,
  productName,
  setProductName,
  modelCode,
  setModelCode,
  stockCode,
  setStockCode,
  selectedValues,
  setSelectedValues,
}: FilterInputsProps) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 mt-1 md:mt-0 md:space-y-0 px-4 md:px-6 pt-1 ">
      <FloatingInput
        label="Barkod"
        placeholder="Barkod"
        className="w-85 md:w-[273px] h-8"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <FloatingInput
        label="Ürün Adı"
        placeholder="Ürün Adı"
        className="w-85 md:w-[273px] h-8"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <FloatingInput
        label="Model Kodu"
        placeholder="Model Kodu"
        className="w-85 md:w-[273px] h-8"
        value={modelCode}
        onChange={(e) => setModelCode(e.target.value)}
      />
      <FloatingInput
        label="Stok Kodu"
        placeholder="Stok Kodu"
        className="w-85 md:w-[273px] h-8"
        value={stockCode}
        onChange={(e) => setStockCode(e.target.value)}
      />
      {activeTab !== "pending" && (
        <CustomSelect
          mode="single"
          options={[
            { value: "paket1", label: "Hediye paketi tanımlı" },
            { value: "paket2", label: "Hediye paketi ve notu tanımlı" },
            { value: "none", label: "Tanımsız" },
          ]}
          value={selectedValues?.[0] || ""}
          placeholder="Hediye Paketi"
          onChange={(val) => setSelectedValues([val])}
          width="w-85 md:w-[273px]"
        />
      )}
    </div>
  );
};
