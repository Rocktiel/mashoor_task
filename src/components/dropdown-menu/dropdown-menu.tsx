"use client";

import React, { useState } from "react";
import { Icon } from "../Icon/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuItemType {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface ActionsDropdownProps {
  buttonLabel?: string;
  buttonClassName?: string;
  count?: number;
  menuItems: DropdownMenuItemType[];
  dropdownContentClassName?: string;
}

export const ActionsDropdown: React.FC<ActionsDropdownProps> = ({
  buttonLabel = "İşlemler",
  buttonClassName = "cursor-pointer w-full h-8 px-2 text-sm mb-1 hover:bg-gray-200 text-black",
  count,
  menuItems,
  dropdownContentClassName = "bg-white",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDisabled = typeof count === "number" && count === 0;

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className={buttonClassName} disabled={isDisabled}>
          {buttonLabel}
          <Icon
            icon={isOpen ? "chevron-down" : "chevron-right"}
            IconClassName="ml-1 text-black"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={dropdownContentClassName}>
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={item.label + index}
            onClick={item.onClick}
            disabled={item.disabled}
            className="hover:bg-gray-200 cursor-pointer flex justify-between items-center"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
