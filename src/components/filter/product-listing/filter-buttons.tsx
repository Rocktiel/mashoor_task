"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FilterButtonsProps {
  isExpanded: boolean;
  onToggle: () => void;
  onClear?: () => void;
  onFilter: () => void;
}

export const FilterButtons = ({
  isExpanded,
  onToggle,
  onClear,
  onFilter,
}: FilterButtonsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="outline"
        size="sm"
        className="bg-white border-none text-black cursor-pointer hover:bg-gray-100"
        onClick={onToggle}
      >
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 ml-2 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        )}
        Detaylı Filtreyi {isExpanded ? "Kapat" : "Aç"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="mr-2 cursor-pointer hover:bg-gray-300"
        onClick={onClear}
      >
        Temizle
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="bg-black text-white cursor-pointer hover:bg-gray-700"
        onClick={onFilter}
      >
        Filtrele
      </Button>
    </div>
  );
};
