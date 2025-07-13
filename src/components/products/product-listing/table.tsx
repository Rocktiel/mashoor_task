"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { TdFixedColumnContent } from "./td-fixed-column-content";
import { TdColumnContent } from "./td-column-content";
import React from "react";
import { Button } from "@/components/ui/button";
import { ActionsDropdown } from "@/components/dropdown-menu/dropdown-menu";
import { ColumnSelector } from "./columnSelector";
import { mockProducts, Product, ProductVariant } from "./Product";
import { TdInput } from "./td-input";

export default function Table() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [scrollBarLeft, setScrollBarLeft] = useState(0);
  const [bottomScrollBarTrackWidth, setBottomScrollBarTrackWidth] = useState(0);

  const [expandedProductIds, setExpandedProductIds] = useState<Set<string>>(
    new Set()
  );

  const [showPriceInputFor, setShowPriceInputFor] = useState<{
    productId: string;
    variantId?: string;
    price: number;
    targetRef: React.RefObject<HTMLDivElement>;
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const priceInputRefs = useRef<
    Record<string, React.RefObject<HTMLDivElement>>
  >({});

  const toggleExpand = useCallback((productId: string) => {
    setExpandedProductIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  const allColumnDefinitions = [
    { key: "variant", name: "Varyant" },
    { key: "state", name: "Durum" },
    { key: "fillRate", name: "Doluluk Oranı" },
    { key: "stateDescription", name: "Durum Açıklaması" },
    { key: "stockCode", name: "Stok Kodu" },
    { key: "commission", name: "Komisyon" },
    { key: "gtipCode", name: "GTIP Kodu(HSCode)" },
    { key: "trendyolSellingPrice", name: "Trendyol Satış Fiyatı" },
    { key: "totalStock", name: "Stok" },
    { key: "buyboxPrice", name: "Buybox Fiyatı" },
    { key: "buyboxStatus", name: "Buybox" },
    { key: "deliveryTime", name: "Termin Süresi" },
    { key: "category", name: "Kategori" },
    { key: "brand", name: "Marka" },
    { key: "customerVisiblePrice", name: "Müşterinin Gördüğü Fiyat" },
    { key: "vatRate", name: "KDV" },
    { key: "desi", name: "Desi Bilgisi" },
    { key: "shippingAddress", name: "Sevkiyat Adresi" },
    { key: "returnAddress", name: "İade Adresi" },
    { key: "cargoCompany", name: "Kargo Şirketi" },
  ];

  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>(
    () => {
      const initialVisibility: Record<string, boolean> = {};
      allColumnDefinitions.forEach((col) => {
        initialVisibility[col.key] = true;
      });
      return initialVisibility;
    }
  );

  const handleToggleColumnVisibility = useCallback((columnKey: string) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnKey]: !prev[columnKey],
    }));
  }, []);

  const handleSetAllColumnVisibility = useCallback(
    (isVisible: boolean) => {
      setVisibleColumns(() => {
        const newVisibility: Record<string, boolean> = {};
        allColumnDefinitions.forEach((col) => {
          newVisibility[col.key] = isVisible;
        });
        return newVisibility;
      });
    },
    [allColumnDefinitions]
  );

  const activeColumnKeys: Array<keyof Product | keyof ProductVariant | string> =
    allColumnDefinitions
      .filter((col) => visibleColumns[col.key])
      .map((col) => col.key);

  const activeColumnDefinitions = allColumnDefinitions.filter(
    (col) => visibleColumns[col.key]
  );

  const colCount = activeColumnKeys.length;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateScrollbar = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const actualVisibleWidth = clientWidth;
      const thumbWidth =
        (actualVisibleWidth / scrollWidth) * actualVisibleWidth;
      const thumbLeft = (scrollLeft / scrollWidth) * actualVisibleWidth;

      setScrollBarWidth(thumbWidth);
      setScrollBarLeft(thumbLeft);
      setBottomScrollBarTrackWidth(actualVisibleWidth);
    };

    updateScrollbar();
    container.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    const timeoutId = setTimeout(updateScrollbar, 0);

    return () => {
      container.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      clearTimeout(timeoutId);
    };
  }, [activeColumnKeys]);

  const handleScrollbarDrag = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    const startX = e.clientX;
    const startScrollLeft = container.scrollLeft;

    const trackWidth = bottomScrollBarTrackWidth;
    const scrollableWidth = container.scrollWidth - container.clientWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const scrollAmount = (dx / trackWidth) * scrollableWidth;
      container.scrollLeft = startScrollLeft + scrollAmount;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const getColumnWidth = (count: number) => {
    if (count <= 4) return "min-w-[13rem] lg:w-52";
    return "min-w-[10rem] lg:w-40";
  };

  const handlePriceUpdate = useCallback(
    (
      productId: string,
      newPrice: number,
      applyToAll: boolean,
      variantId?: string
    ) => {
      console.log(
        `Updating price for ${
          variantId ? `Variant ${variantId}` : `Product ${productId}`
        } to ${newPrice}`
      );
      if (applyToAll) {
        console.log(
          `Applying ${newPrice} to all variants of product ${productId}`
        );
      }
      setShowPriceInputFor(null);
    },
    []
  );

  const getCellContent = (
    item: Product | ProductVariant,
    key: string,
    isVariantRow: boolean
  ) => {
    if (key === "image") {
      if (isVariantRow) return "---";
      return (
        <img
          src={(item as Product).image}
          alt={(item as Product).name}
          className="w-16 h-16 object-cover rounded-md"
        />
      );
    }
    if (key === "variant") {
      if (isVariantRow) {
        return (item as ProductVariant).size;
      }
      return (
        <div className="flex items-center">
          {item.variants.length > 0 ? (
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
              {item.variants.length} Varyant
            </span>
          ) : (
            "---"
          )}
        </div>
      );
    }
    if (key === "commission") {
      if (isVariantRow) {
        return String((item as ProductVariant).commission || "---");
      }
      return `%${((item as Product).commission * 100).toFixed(0)}`;
    }
    if (key === "trendyolSellingPrice") {
      const price = isVariantRow
        ? (item as ProductVariant).trendyolSellingPrice
        : (item as Product).sellingPrice;
      const itemId = isVariantRow
        ? (item as ProductVariant).id
        : (item as Product).id;
      const refKey = isVariantRow ? `variant-${itemId}` : `product-${itemId}`;

      if (!priceInputRefs.current[refKey]) {
        priceInputRefs.current[refKey] = React.createRef<HTMLDivElement>();
      }

      return (
        <div className="relative inline-block">
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => {
              setShowPriceInputFor({
                productId: (item as Product).id || (item as ProductVariant).id,
                variantId: isVariantRow
                  ? (item as ProductVariant).id
                  : undefined,
                price: price,
                targetRef: priceInputRefs.current[refKey]!,
              });
            }}
            ref={priceInputRefs.current[refKey]}
          >
            {price.toFixed(2)} ₺
          </span>
          {showPriceInputFor?.targetRef === priceInputRefs.current[refKey] && (
            <TdInput
              currentPrice={showPriceInputFor.price}
              onUpdate={(newPrice, applyAll) =>
                handlePriceUpdate(
                  showPriceInputFor.productId,
                  newPrice,
                  applyAll,
                  showPriceInputFor.variantId
                )
              }
              onClose={() => setShowPriceInputFor(null)}
              isVariant={isVariantRow}
            />
          )}
        </div>
      );
    }

    if (key === "buyboxPrice" && typeof (item as any)[key] === "number") {
      return `${(item as any)[key].toFixed(2)} ₺`;
    }
    if (
      key === "customerVisiblePrice" &&
      typeof (item as any)[key] === "number"
    ) {
      return `${(item as any)[key].toFixed(2)} ₺`;
    }
    if (key === "vatRate") {
      return `%${((item as any)[key] * 100).toFixed(0)}`;
    }
    if (key === "state" && (item as any).state === "Tükendi") {
      return (
        <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
          Tükendi
        </span>
      );
    }
    if (key === "state" && (item as any).state === "Satışta") {
      return (
        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
          Satışta
        </span>
      );
    }
    if (
      key === "stock" ||
      key === "desi" ||
      key === "totalStock" ||
      key === "totalVariantCount" ||
      key === "activeVariantCount" ||
      key === "deliveryTime"
    ) {
      if (typeof (item as any)[key] === "number") {
        return String((item as any)[key]);
      }
      return String((item as any)[key] || "0");
    }

    return String((item as any)[key] || "---");
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = mockProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(mockProducts.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="relative w-full p-4 overflow-hidden">
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Ürün göster:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <ColumnSelector
          visibleColumns={visibleColumns}
          onToggle={handleToggleColumnVisibility}
          columnDefinitions={allColumnDefinitions}
          onSetAllVisibility={handleSetAllColumnVisibility}
        />
      </div>

      <div className="flex w-full border-2 rounded-sm overflow-x-auto custom-scrollbar">
        <div className="flex w-full rounded-sm">
          <div className="min-w-[10rem] md:w-80 shrink-0 bg-white border-r text-center">
            <div className="font-bold h-12 flex items-center bg-gray-200 justify-center border-b">
              Ürün Bilgileri
            </div>
            {currentProducts.map((product) => (
              <div
                key={`fixed-product-${product.id}`}
                className="border-b-5 border-gray-300"
              >
                <React.Fragment>
                  <TdFixedColumnContent
                    productId={product.id}
                    productName={product.name}
                    productImage={product.image}
                    productModelCode={product.modelCode}
                    productColor={product.color}
                    productStockCode={product.stockCode}
                    isExpanded={expandedProductIds.has(product.id)}
                    onToggleExpand={() => toggleExpand(product.id)}
                  />
                  {expandedProductIds.has(product.id) &&
                    product.variants.map((variant) => (
                      <TdFixedColumnContent
                        key={`fixed-variant-${variant.id}`}
                        productId={variant.id}
                        productName={product.name}
                        productImage={product.image}
                        productModelCode={product.modelCode}
                        productColor={product.color}
                        productStockCode={product.stockCode}
                        isExpanded={false}
                        onToggleExpand={() => {}}
                        isVariantRow={true}
                        variantSize={variant.size}
                        variantBarcode={variant.barcode}
                      />
                    ))}
                </React.Fragment>
              </div>
            ))}
          </div>

          <div
            className="overflow-auto w-full custom-scrollbar"
            ref={scrollRef}
          >
            <div className="min-w-max">
              <div className="flex sticky top-0 z-50">
                {activeColumnDefinitions.map((col) => (
                  <div
                    key={col.key}
                    className={`${getColumnWidth(
                      colCount
                    )} h-12 bg-gray-200 font-bold flex items-center justify-center border-b border-r px-2 text-center`}
                  >
                    {col.name}
                  </div>
                ))}
              </div>

              {colCount > 4 && (
                <div
                  className="absolute h-1.5 bg-gray-400 rounded z-50 hidden md:block"
                  style={{
                    top: "7.5rem",
                    width: `${bottomScrollBarTrackWidth}px`,
                    left: "336px",
                  }}
                >
                  <div
                    className="h-1.5 bg-black rounded cursor-pointer pointer-events-auto"
                    style={{
                      width: `${scrollBarWidth}px`,
                      left: `${scrollBarLeft}px`,
                      position: "absolute",
                    }}
                    onMouseDown={handleScrollbarDrag}
                  />
                </div>
              )}
              {/* BODY */}
              {currentProducts.map((product) => (
                <div
                  key={`row-group-${product.id}`}
                  className="border-b-5 border-gray-300"
                >
                  <React.Fragment>
                    <div className="flex" key={`row-${product.id}`}>
                      {activeColumnKeys.map((key) => (
                        <div
                          key={`cell-${product.id}-${key}`}
                          className={`${getColumnWidth(
                            colCount
                          )} h-30 flex items-center justify-center border-b border-b-gray-300 border-r text-sm px-2`}
                        >
                          <TdColumnContent
                            content={getCellContent(product, key, false)}
                            columnKey={key}
                          />
                        </div>
                      ))}
                    </div>

                    {expandedProductIds.has(product.id) &&
                      product.variants.map((variant) => (
                        <div
                          className="flex bg-gray-50"
                          key={`variant-row-${variant.id}`}
                        >
                          {activeColumnKeys.map((key) => (
                            <div
                              key={`variant-cell-${variant.id}-${key}`}
                              className={`${getColumnWidth(
                                colCount
                              )} h-30 flex items-center justify-center border-b border-r text-sm px-2 text-gray-700`}
                            >
                              <TdColumnContent
                                content={getCellContent(variant, key, true)}
                                columnKey={key}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                  </React.Fragment>
                </div>
              ))}
            </div>
          </div>
          <div className="min-w-[8rem] md:w-40 shrink-0 bg-white border-l text-center">
            <div className="font-bold h-12 flex items-center bg-gray-200 justify-center border-b">
              İşlemler
            </div>
            {currentProducts.map((product) => (
              <div
                key={`action-group-${product.id}`}
                className="border-b-5 border-gray-300"
              >
                <React.Fragment>
                  <div
                    key={`right-${product.id}`}
                    className="h-30 flex flex-col items-center justify-center border-b border-gray-300 p-2"
                  >
                    <Button
                      onClick={() => toggleExpand(product.id)}
                      className="cursor-pointer w-full h-8 px-2 text-sm hover:bg-gray-300 text-black mb-2"
                    >
                      {expandedProductIds.has(product.id)
                        ? "Varyantları Kapat"
                        : "Varyantları Aç"}
                    </Button>

                    <Button
                      onClick={() => alert(`Yeni varyant ekle: ${product.id}`)}
                      className="cursor-pointer w-full h-8 px-2 text-sm border-1 border-amber-500 hover:bg-amber-600 hover:text-white text-amber-600 mb-2"
                    >
                      Varyant Ekle
                    </Button>
                  </div>

                  {expandedProductIds.has(product.id) &&
                    product.variants.map((variant) => (
                      <div
                        key={`variant-right-${variant.id}`}
                        className="h-30 flex flex-col items-center justify-center border-b bg-gray-50 p-2"
                      >
                        <Button className="cursor-pointer w-full h-8 px-2 text-sm border-1 border-amber-500 hover:bg-amber-600 hover:text-white text-amber-600 mb-2">
                          Detaya Git
                        </Button>
                        <ActionsDropdown
                          buttonLabel="İşlemler" // Etiket değiştirildi
                          count={product.totalStock}
                          menuItems={[
                            {
                              label: "Ürünü Kopyala",
                              onClick: () =>
                                alert(
                                  `Ana Ürün ${product.modelCode}-${product.color} kopyalandı!`
                                ),
                            },
                            {
                              label: "Performans Görüntüle",
                              onClick: () =>
                                alert(
                                  `Ana Ürün ${product.modelCode}-${product.color} performans görüntüle`
                                ),
                            },
                            {
                              label: "Arşive Ekle",
                              onClick: () =>
                                alert(
                                  `Ana Ürün ${product.modelCode}-${product.color} arşive eklendi`
                                ),
                            },
                            {
                              label: "Ürünü Sil",
                              onClick: () =>
                                alert(
                                  `Ana Ürün ${product.modelCode}-${product.color} silindi!`
                                ),
                              disabled: product.totalStock > 0,
                            },
                          ]}
                        />
                      </div>
                    ))}
                </React.Fragment>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 flex-wrap gap-2">
        <nav
          className="relative z-0 inline-flex shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Önceki
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                currentPage === index + 1
                  ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Sonraki
          </Button>
        </nav>
      </div>
    </div>
  );
}
