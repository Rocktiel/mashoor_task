"use client";
import React, { useState, ReactNode, useEffect, useRef } from "react";

interface TooltipProps {
  children: ReactNode;
  text?: string;
  image?: string;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  minWidth?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  image,
  position = "top",
  minWidth = "min-w-[100px]",
}) => {
  const [visible, setVisible] = useState(false);

  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    "top-left": "bottom-full -right-1 mb-2",
    "top-right": "bottom-full -left-1 mb-2",
    "bottom-left": "top-full right-0 mt-2",
    "bottom-right": "top-full left-0 mt-2",
  };

  const arrowPosition: Record<string, string> = {
    top: "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-400",
    bottom:
      "absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-400",
    left: "absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] border-t-transparent border-b-transparent border-l-blue-400",
    right:
      "absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-r-[8px] border-t-transparent border-b-transparent border-r-blue-400",
    "top-left":
      "absolute top-full right-1 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-400",
    "top-right":
      "absolute top-full left-1 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-400",
    "bottom-left":
      "absolute bottom-full right-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-400",
    "bottom-right":
      "absolute bottom-full left-0 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-blue-400",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 px-3 py-2 bg-blue-400 text-white font-normal text-sm rounded shadow-md ${minWidth} break-words whitespace-normal ${positionClasses[position]}`}
        >
          {text && (
            <div className="overflow-y-auto max-h-[200px] mb-1">{text}</div>
          )}

          {image && (
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt="Tooltip Image"
                className="w-40 h-50 object-fill"
              />
            </div>
          )}

          <div className={arrowPosition[position]} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
