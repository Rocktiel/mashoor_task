"use client";

import { ProductListingFilterHeader } from "./filter-header";
import { FilterInputs } from "./filter-inputs";
import { FilterSelect } from "./filter-select";
interface ProductListingFilterLayoutProps {
  activeTab: string;
  onTabChange: (val: string) => void;
  barcode: string;
  setBarcode: (val: string) => void;
  productName: string;
  setProductName: (val: string) => void;
  modelCode: string;
  setModelCode: (val: string) => void;
  stockCode: string;
  setStockCode: (val: string) => void;
  giftPackage: string[];
  setGiftPackage: (val: string[]) => void;
  selectedCategoryValues: string[];
  setSelectedCategoryValues: (val: string[]) => void;
  selectedBrandValues: string[];
  setSelectedBrandValues: (val: string[]) => void;
  selectedVideoValues: string[];
  setSelectedVideoValues: (val: string[]) => void;
  selectedSizeValues: string[];
  setSelectedSizeValues: (val: string[]) => void;
  isFilterExpanded: boolean;
  setIsFilterExpanded: (val: boolean) => void;
  onClear: () => void;
  onFilter: () => void;
}
export const ProductListingFilterLayout = ({
  activeTab,
  onTabChange,
  barcode,
  setBarcode,
  productName,
  setProductName,
  modelCode,
  setModelCode,
  stockCode,
  setStockCode,
  giftPackage,
  setGiftPackage,
  selectedCategoryValues,
  setSelectedCategoryValues,
  selectedBrandValues,
  setSelectedBrandValues,
  selectedVideoValues,
  setSelectedVideoValues,
  selectedSizeValues,
  setSelectedSizeValues,
  isFilterExpanded,
  setIsFilterExpanded,
  onClear,
  onFilter,
}: ProductListingFilterLayoutProps) => {
  const handleClear = () => {
    setBarcode("");
    setProductName("");
    setModelCode("");
    setStockCode("");
    setGiftPackage([]);
    setSelectedCategoryValues([]);
    setSelectedBrandValues([]);
    setSelectedVideoValues([]);
    setSelectedSizeValues([]);
  };

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col my-6 mx-5 md:mx-5 bg-white rounded-bl-md rounded-b-md">
        <ProductListingFilterHeader
          activeTab={activeTab}
          onTabChange={(activeTab) => onTabChange(activeTab)}
        />
        <FilterInputs
          activeTab={activeTab}
          barcode={barcode}
          setBarcode={setBarcode}
          productName={productName}
          setProductName={setProductName}
          modelCode={modelCode}
          setModelCode={setModelCode}
          stockCode={stockCode}
          setStockCode={setStockCode}
          selectedValues={giftPackage}
          setSelectedValues={setGiftPackage}
        />
        <FilterSelect
          selectedCategoryValues={selectedCategoryValues}
          setSelectedCategoryValues={setSelectedCategoryValues}
          selectedBrandValues={selectedBrandValues}
          setSelectedBrandValues={setSelectedBrandValues}
          selectedVideoValues={selectedVideoValues}
          setSelectedVideoValues={setSelectedVideoValues}
          selectedSizeValues={selectedSizeValues}
          setSelectedSizeValues={setSelectedSizeValues}
          isFilterExpanded={isFilterExpanded}
          setIsFilterExpanded={setIsFilterExpanded}
          onClear={handleClear}
          onFilter={onFilter}
        />
      </div>
    </div>
  );
};
