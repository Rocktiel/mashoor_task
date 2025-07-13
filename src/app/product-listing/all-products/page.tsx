"use client";
import { useState } from "react";
import { ProductListingFilterLayout } from "@/components/filter/product-listing/layout";
import { ProductListingHeader } from "@/components/header/product-listing/product-listing-header";
import { ProductListingProductsLayout } from "@/components/products/product-listing/layout";

export default function ProductListing() {
  const [activeTab, setActiveTab] = useState("all");
  // Filtre stateleri
  const [barcode, setBarcode] = useState("");
  const [productName, setProductName] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [stockCode, setStockCode] = useState("");
  const [giftPackage, setGiftPackage] = useState<string[]>([]);
  const [selectedCategoryValues, setSelectedCategoryValues] = useState<
    string[]
  >([]);
  const [selectedBrandValues, setSelectedBrandValues] = useState<string[]>([]);
  const [selectedVideoValues, setSelectedVideoValues] = useState<string[]>([]);
  const [selectedSizeValues, setSelectedSizeValues] = useState<string[]>([]);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  // Uygulanan filtreleri tutacak state
  const [appliedFilters, setAppliedFilters] = useState<any>(null);

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
    setAppliedFilters(null); // Temizle butonuna basınca filtreleri de temizle
  };

  const handleFilter = () => {
    setAppliedFilters({
      barcode,
      productName,
      modelCode,
      stockCode,
      giftPackage,
      selectedCategoryValues,
      selectedBrandValues,
      selectedVideoValues,
      selectedSizeValues,
    });
  };

  return (
    <div className="bg-gray-100 h-[100%]">
      <ProductListingHeader />
      <ProductListingFilterLayout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        barcode={barcode}
        setBarcode={setBarcode}
        productName={productName}
        setProductName={setProductName}
        modelCode={modelCode}
        setModelCode={setModelCode}
        stockCode={stockCode}
        setStockCode={setStockCode}
        giftPackage={giftPackage}
        setGiftPackage={setGiftPackage}
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
        onFilter={handleFilter}
      />
      <ProductListingProductsLayout
        appliedFilters={appliedFilters}
        activeTab={activeTab}
      />
    </div>
  );
}
