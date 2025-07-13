"use client";

import { useState, useEffect } from "react";
import { FilterTabItem } from "./filter-tab-item";
import { TabFilters } from "./filter-circles";

export const ProductListingFilterHeader = ({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const tabs = [
    {
      id: "all",
      label: "Tüm Ürünler",
      count: 29,
      info: "Arşivlenmemiş ve onaylı tüm ürünlerinize ulaşabilirsiniz.",
    },
    {
      id: "active",
      label: "Aktif Ürünler",
      count: 28,
      info: "Satıştaki 'Buyboxa dahil olan' ve 'Buyboxa dahil olmayan' olan ürünlerinizi gösterir.",
    },
    {
      id: "pending",
      label: "Onay Sürecindeki Ürünler",
      count: 0,
      info: "Kontrol edilen 'Onay bekleyen' ve ürün listeleme kuralları doğrultusunda güncellemeniz gereken 'Revize gereken', henüz satışa çıkmamış ürünlerinizi gösterir.",
    },
    {
      id: "passive",
      label: "Pasif Ürünler",
      count: 1,
      info: "Hızlı aksiyonlarla satışa geri açabileceğiniz 'Tükenen', 'Fiyat Girilmesi Gereken' ve 'Kilitli' ürünleri, satmak istemediğiniz 'Arşiv' ürünlerini ve Trendyol kurallarına uymadığı için kaldırılan 'Satışa Kapatılan' ürünlerinizi gösterir.",
    },
  ];

  useEffect(() => {
    setSelectedFilter("all");
  }, [activeTab]);

  return (
    <div className="w-full">
      <ul className="flex -mb-px h-[55px] relative border-b border-gray-200 overflow-x-auto overflow-y-hidden sm:overflow-visible scrollbar-hide px-2 sm:px-0">
        {tabs.map((tab, index) => (
          <FilterTabItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            count={tab.count}
            info={tab.info}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            showDivider={index !== tabs.length - 1}
          />
        ))}
      </ul>

      <div className="mt-3 mr-3 ml-6">
        <TabFilters
          activeTab={activeTab}
          selectedFilter={selectedFilter}
          onChange={(id) => setSelectedFilter(id)}
        />
      </div>
    </div>
  );
};
