"use client";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";

interface IconProps {
  icon: IconName;
  IconClassName?: string;
}

export const Icon = (props: IconProps) => {
  return <DynamicIcon name={props.icon} className={props.IconClassName} />;
};
