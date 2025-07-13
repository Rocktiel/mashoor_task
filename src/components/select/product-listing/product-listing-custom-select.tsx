"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Check, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  mode: "single" | "multiple";
  options: Option[];
  value?: string | string[];
  onChange: (val: string | string[]) => void;
  placeholder?: string;
  width?: string;
}

export const CustomSelect = ({
  mode,
  options,
  value,
  onChange,
  placeholder = "Seçiniz",
  width = "w-full",
}: CustomSelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = Boolean(value);

  if (mode === "single") {
    return (
      <div className="relative">
        <Select
          value={typeof value === "string" ? value : undefined}
          onValueChange={(val) => onChange(val)}
          onOpenChange={(open) => setIsFocused(open)}
        >
          <SelectTrigger
            className={`${width} !h-8 border border-gray-300 data-[state=open]:border-orange-400 rounded-md text-base md:text-sm px-3 text-gray-500 [&>svg]:transition-transform [&>svg]:duration-200 [&[data-state=open]>svg]:rotate-180 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="border-orange-400 bg-white">
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="py-2 px-4 hover:bg-gray-200"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <label
          className={cn(
            "absolute left-3 opacity-0 px-1 transition-all duration-200 pointer-events-none",
            "text-gray-500",
            isFocused || hasValue
              ? "-top-2 text-xs opacity-100 bg-white text-gray-500 "
              : "top-3 text-sm"
          )}
        >
          {placeholder}
        </label>
      </div>
    );
  }

  const [open, setOpen] = useState(false);
  const values = Array.isArray(value) ? value : [];

  const toggleValue = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange([]);
  };

  return (
    <div className="relative">
      <Popover
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          setIsFocused(open);
        }}
      >
        <PopoverTrigger
          className={`${width} !h-8 border border-gray-300 data-[state=open]:border-orange-400 rounded-md px-3 text-base md:text-sm text-left text-gray-500 flex items-center justify-between focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0`}
        >
          <span className="truncate">
            {values.length > 0
              ? options
                  .filter((o) => values.includes(o.value))
                  .map((o) => o.label)
                  .join(", ")
              : placeholder}
          </span>
          <div className="flex items-center gap-1 absolute right-3 top-1/2 transform -translate-y-1/2">
            {values.length > 0 && (
              <div className="flex items-center">
                <X
                  className="w-4 h-4 ml-1 text-gray-500 hover:text-red-500 cursor-pointer"
                  onClick={clearAll}
                />
                <div className="border-r border-gray-300 h-4 ml-2"></div>
              </div>
            )}
            {open ? (
              <ChevronUp className="w-4 h-4 ml-2 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
            )}
          </div>
        </PopoverTrigger>
        {values.length > 0 || open ? (
          <label
            className={cn(
              "absolute left-3 px-1 -top-2 text-xs opacity-100 bg-white text-gray-500 z-10 transition-all duration-200 pointer-events-none"
            )}
          >
            {placeholder}
          </label>
        ) : null}
        <PopoverContent
          className={`${width} min-w-[200px] p-2 border-orange-400 bg-white`}
          align="start"
        >
          {options.map((option) => {
            const selected = values.includes(option.value);
            return (
              <div
                key={option.value}
                onClick={() => toggleValue(option.value)}
                className={cn(
                  "flex items-center justify-start px-2 py-1 cursor-pointer rounded hover:bg-gray-100",
                  selected && "text-orange-600"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 mr-2 border border-gray-400 rounded-sm flex items-center justify-center",
                    selected && "bg-orange-500 border-orange-500 text-white"
                  )}
                >
                  {selected && <Check size={12} />}
                </div>
                <span>{option.label}</span>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
};
