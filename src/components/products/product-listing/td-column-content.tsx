import React, { useState } from "react";
import Tooltip from "@/components/tooltip/tooltip";
import { Product } from "./Product";

interface TdColumnContentProps {
  content: string;
  columnKey: keyof Product; // Hangi kolon olduğunu belirten anahtar
}

export const TdColumnContent: React.FC<TdColumnContentProps> = ({
  content,
  columnKey,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(content);

  const isInputColumn =
    columnKey === "sellingPrice" ||
    columnKey === "totalStock" ||
    columnKey === "commission";

  const handleBlur = () => {
    setIsEditing(false);
    // if (onEdit) {
    //   onEdit(value);
    // }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      // if (onEdit) {
      //   onEdit(value);
      // }
    }
  };

  const renderContent = () => {
    if (isInputColumn && isEditing) {
      return (
        <input
          type={
            columnKey === "sellingPrice" || columnKey === "totalStock"
              ? "number"
              : "text"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full h-full border border-blue-400 p-1 text-center"
          autoFocus
        />
      );
    }

    if (columnKey === "statusDescription") {
      return (
        <Tooltip text={content} position="top-left">
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => isInputColumn && setIsEditing(true)}
          >
            {content.substring(0, 15)}...
          </span>
        </Tooltip>
      );
    }

    return (
      <span
        className="sticky"
        onClick={() => isInputColumn && setIsEditing(true)}
      >
        {content}
      </span>
    );
  };

  return <>{renderContent()}</>;
};
