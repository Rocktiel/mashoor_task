"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FloatingInput({
  label,
  className,
  value,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = Boolean(value);

  return (
    <div className="relative">
      <Input
        className={cn(
          "h-12 pt-1 border-gray-300  focus:border-primary focus:border-0 focus:ring-1 focus:ring-amber-500 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 transition-colors duration-200",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        {...props}
      />
      <label
        className={cn(
          "absolute left-3 opacity-0 px-1 transition-all duration-200 pointer-events-none",
          "text-gray-500", // Varsayılan renk
          isFocused || hasValue
            ? "-top-2 text-xs opacity-100 bg-white text-gray-500 "
            : "top-3 text-sm"
        )}
      >
        {label}
      </label>
    </div>
  );
}
