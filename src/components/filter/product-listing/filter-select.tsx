"use client";

import { CustomSelect } from "@/components/select/product-listing/product-listing-custom-select";
import { FilterButtons } from "./filter-buttons";

interface FilterSelectProps {
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

export const FilterSelect = ({
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
}: FilterSelectProps) => {
  return (
    <div className="flex flex-col pt-2 px-2">
      <div className="flex pt-2 px-2 md:px-4 items-center h-max space-x-3 md:space-y-0 overflow-auto pb-3">
        <CustomSelect
          mode="multiple"
          options={[
            { value: "Body", label: "Body" },
            { value: "Elbise", label: "Elbise" },
            { value: "Gömlek", label: "Gömlek" },
            { value: "T-Shirt", label: "T-Shirt" },
          ]}
          value={selectedCategoryValues}
          placeholder="Kategori"
          onChange={(val) => setSelectedCategoryValues(val)}
          width="w-45 md:w-[348px]"
        />
        <CustomSelect
          mode="multiple"
          options={[
            { value: "shop", label: "shop" },
            { value: "Tuğram", label: "Tuğram" },
          ]}
          value={selectedBrandValues}
          placeholder="Marka"
          onChange={(val) => setSelectedBrandValues(val)}
          width="w-45 md:w-[348px]"
        />
        {isFilterExpanded && (
          <div className="flex items-center h-11 space-x-3">
            <div className="flex  items-center h-11 space-x-3 md:space-y-0 ">
              <CustomSelect
                mode="single"
                options={[
                  { value: "Video var", label: "Video var" },
                  { value: "Video yok", label: "Video yok" },
                ]}
                value={selectedVideoValues[0] || ""}
                placeholder="Video"
                onChange={(val) => setSelectedVideoValues([val])}
                width="w-45 md:w-[348px]"
              />
              <CustomSelect
                mode="single"
                options={[
                  {
                    value: "Beden tablosu tanımlı",
                    label: "Beden tablosu tanımlı",
                  },
                  {
                    value: "Beden tablosu tanımlı değil",
                    label: "Beden tablosu tanımlı değil",
                  },
                ]}
                value={selectedSizeValues[0] || ""}
                placeholder="Beden Tablosu"
                onChange={(val) => setSelectedSizeValues([val])}
                width="w-45 md:w-[348px]"
              />
            </div>
          </div>
        )}
        {!isFilterExpanded && (
          <FilterButtons
            isExpanded={isFilterExpanded}
            onToggle={() => setIsFilterExpanded(!isFilterExpanded)}
            onClear={onClear}
            onFilter={onFilter}
          />
        )}
      </div>
      {isFilterExpanded && (
        <div className="flex items-center justify-end md:mr-9 h-16 md:space-y-0 overflow-auto">
          <FilterButtons
            isExpanded={isFilterExpanded}
            onToggle={() => setIsFilterExpanded(!isFilterExpanded)}
            onClear={onClear}
            onFilter={onFilter}
          />
        </div>
      )}
    </div>
  );
};
