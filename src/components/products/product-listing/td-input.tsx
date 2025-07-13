import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TdPriceInputProps {
  currentPrice: number;
  onUpdate: (newPrice: number, applyToAll: boolean) => void;
  onClose: () => void;
  isVariant: boolean;
}

export const TdInput: React.FC<TdPriceInputProps> = ({
  currentPrice,
  onUpdate,
  onClose,
  isVariant,
}) => {
  const [price, setPrice] = useState(currentPrice);
  const [applyToAll, setApplyToAll] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    onUpdate(price, applyToAll);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrice(value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="absolute z-10 bg-white p-4 border rounded-md shadow-lg -mt-20 w-48"
    >
      <input
        type="number"
        value={price}
        onChange={handleInputChange}
        className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      {!isVariant && (
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="applyToAll"
            checked={applyToAll}
            onChange={(e) => setApplyToAll(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="applyToAll" className="text-sm">
            Tüm Varyantlara Uygula
          </label>
        </div>
      )}
      <Button
        onClick={handleSubmit}
        className="w-full bg-orange-500 text-white hover:bg-orange-600"
      >
        Güncelle
      </Button>
    </div>
  );
};
