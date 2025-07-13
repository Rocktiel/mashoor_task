"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Icon } from "@/components/Icon/icon";

interface ColumnDefinition {
  key: string;
  name: string;
}

interface ColumnSelectorProps {
  visibleColumns: Record<string, boolean>;
  onToggle: (columnKey: string) => void;
  columnDefinitions: ColumnDefinition[];
  onSetAllVisibility: (isVisible: boolean) => void;
}

export const ColumnSelector: React.FC<ColumnSelectorProps> = ({
  visibleColumns,
  onToggle,
  columnDefinitions,
  onSetAllVisibility,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [tempVisibleColumns, setTempVisibleColumns] =
    useState<Record<string, boolean>>(visibleColumns);

  useEffect(() => {
    setTempVisibleColumns(visibleColumns);
  }, [visibleColumns, isOpen]);

  const totalColumns = columnDefinitions.length;
  const selectedColumnCount =
    Object.values(tempVisibleColumns).filter(Boolean).length;

  const isAllSelected = selectedColumnCount === totalColumns;
  const isIndeterminate = selectedColumnCount > 0 && !isAllSelected;

  const handleSelectAll = (checked: boolean) => {
    const newVisibility: Record<string, boolean> = {};
    columnDefinitions.forEach((col) => {
      newVisibility[col.key] = checked;
    });
    setTempVisibleColumns(newVisibility);
  };

  const handleApplyChanges = () => {
    columnDefinitions.forEach((col) => {
      if (tempVisibleColumns[col.key] !== visibleColumns[col.key]) {
        onToggle(col.key);
      }
    });
    setIsOpen(false);
  };

  const handleRevertToDefault = () => {
    const defaultVisibility: Record<string, boolean> = {};
    columnDefinitions.forEach((col) => {
      defaultVisibility[col.key] = true;
    });
    setTempVisibleColumns(defaultVisibility);
  };

  // Tekil kolonun durumunu değiştir
  const handleColumnToggle = (columnKey: string) => {
    setTempVisibleColumns((prev) => ({
      ...prev,
      [columnKey]: !prev[columnKey],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* Tabloyu Özelleştir Butonu */}
        <Button
          variant="outline"
          className="bg-white border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white cursor-pointer"
        >
          Tabloyu Özelleştir
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Tabloyu Özelleştir
          </DialogTitle>
          <DialogClose asChild />
        </DialogHeader>

        {/* Tümünü Seç / Seçilenleri Kaldır Bölümü */}
        <div className="mt-4 flex items-center justify-between border-b-1 pb-4 ">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-amber-600">
            <Checkbox
              checked={isAllSelected}
              onCheckedChange={handleSelectAll}
              className={
                isAllSelected ? "bg-amber-500 border-amber-500 text-white" : ""
              }
            />
            <span className="text-sm font-light hover:text-amber-600">
              Tümünü Seç
            </span>
          </label>
          {selectedColumnCount > 0 && (
            <Button
              variant="default"
              onClick={() => handleSelectAll(false)}
              className="text-amber-600 font-light hover:text-amber-700 p-0 h-auto cursor-pointer"
            >
              Seçilenleri Kaldır ({selectedColumnCount})
            </Button>
          )}
        </div>

        {/* Sütun Listesi */}
        <div className="mt-4 max-h-80 overflow-y-auto pr-2">
          <div className="text-sm font-semibold text-gray-700 py-2 top-0 bg-gray-300 px-3 rounded-lg z-10">
            Ürün Bilgisi
          </div>
          {columnDefinitions.map((column) => (
            <div
              key={column.key}
              className="flex items-center justify-between py-3  last:border-b-0"
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <Checkbox
                  checked={tempVisibleColumns[column.key]}
                  onCheckedChange={() => handleColumnToggle(column.key)}
                  className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 text-white border-black"
                />
                <span className="text-sm text-gray-800">{column.name}</span>
              </label>

              <Icon
                icon="grip-vertical"
                IconClassName="h-4 w-4 text-gray-400 cursor-grab"
              />
            </div>
          ))}
          <div className="text-sm font-semibold text-gray-700 py-2 top-0 bg-gray-300 px-3 rounded-lg z-10">
            İşlemler
          </div>
        </div>

        {/* Alt Butonlar */}
        <div className="mt-6 flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={handleRevertToDefault}
            className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white cursor-pointer"
          >
            Varsayılan Ayarlara Dön
          </Button>
          <Button
            onClick={handleApplyChanges}
            className="flex-1 bg-amber-600 text-white hover:bg-amber-700 cursor-pointer"
          >
            Onayla
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
