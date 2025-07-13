"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Download,
  FileCheck,
  FileSpreadsheet,
} from "lucide-react";
import { useState } from "react";

const downloadHistory = [
  "Ürünleriniz_08.06.2025-17.48.xlsx",
  "Ürünleriniz_31.05.2025-19.57.xlsx",
  "Ürünleriniz_24.04.2025-21.58.xlsx",
  "Ürünleriniz_24.04.2025-20.06.xlsx",
];

export const ExcelDownloadDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleExcelDownload = () => {
    // Burada gerçek indirme fonksiyonunu çağırabilirsin
    console.log("Excel indiriliyor...");
  };

  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden">
      {/* SOL TARAFTA İNDİRME BUTONU */}
      <Button
        variant="ghost"
        className="flex items-center gap-2 px-4 py-2 font-semibold text-black hover:bg-gray-100"
        onClick={handleExcelDownload}
      >
        <FileSpreadsheet className="w-4 h-4" />
        Excel ile indir
      </Button>

      {/* SAĞ TARAFTA DROPDOWN TETİKLEYİCİ */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 border-l border-gray-300 hover:bg-gray-100"
          >
            {open ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px] mt-2 bg-white">
          <div className="p-2 font-semibold text-sm text-gray-700 flex items-center gap-2 border-b border-gray-200 ">
            <Download className="w-4 h-4 text-green-600" />
            İndirme Geçmişim
          </div>
          {downloadHistory.map((file, index) => (
            <DropdownMenuItem
              key={index}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 bg-white cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm truncate">{file}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
