import React from "react";
import { Icon } from "@/components/Icon/icon";
import Tooltip from "@/components/tooltip/tooltip";
import { Button } from "@/components/ui/button";

interface TdFixedColumnContentProps {
  productId: string;
  productName: string;
  productImage: string;
  productModelCode: string;
  productColor: string;
  productStockCode: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isVariantRow?: boolean;
  variantSize?: string;
  variantBarcode?: string;
}

export const TdFixedColumnContent: React.FC<TdFixedColumnContentProps> = ({
  productId,
  productName,
  productImage,
  productModelCode,
  productColor,
  productStockCode,
  isExpanded,
  onToggleExpand,
  isVariantRow = false,
  variantSize,
  variantBarcode,
}) => {
  return (
    <div
      className={`h-30 flex items-center border-b-1 border-gray-300 text-left pl-4 pr-2 py-2 relative space-x-4 ${
        isVariantRow ? "bg-gray-50 pl-8 border-b-0" : "bg-white"
      }`}
      key={productId}
    >
      {!isVariantRow && (
        <div className="flex items-center gap-2">
          <div>
            <button
              onClick={onToggleExpand}
              className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full cursor-pointer"
            >
              <Icon
                icon={isExpanded ? "chevron-down" : "chevron-right"}
                IconClassName="text-amber-500 "
              />
            </button>
          </div>
          <div>
            <input type="checkbox" className="ml-2" />
          </div>
          <div>
            <Tooltip
              image={productImage}
              minWidth="min-w-[200px]"
              position="right"
            >
              <img
                src={productImage}
                alt={productName}
                className="w-12 h-15 rounded object-cover"
              />
            </Tooltip>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-800 whitespace-normal">
              {productName}
            </div>
            <div className="text-xs text-gray-600">
              Model Kodu: {productModelCode}
            </div>
            {isVariantRow ? (
              <>
                <div className="text-xs text-gray-600">
                  Beden: {variantSize}
                </div>
                <div className="text-xs text-gray-600">
                  Barkod: {variantBarcode}
                </div>
              </>
            ) : (
              <div className="text-xs text-gray-600">Renk: {productColor}</div>
            )}
          </div>
        </div>
      )}
      {isVariantRow && (
        <div className="flex items-center gap-2">
          <div>
            <input type="checkbox" className="ml-2" />
          </div>
          <div>
            <div className="text-xs text-gray-600">
              Stok Kodu: {productStockCode}
            </div>
            <div className="text-xs text-gray-600">
              Barkod: {variantBarcode}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
