import { Icon } from "@/components/Icon/icon";
import { IconName } from "lucide-react/dynamic";
import { ReactNode } from "react";

interface Props {
  icon?: IconName;
  svgIcon?: ReactNode;
  iconClass?: string;
  text: string;
  textColor?: string;
  buttonClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  icon,
  svgIcon,
  iconClass,
  text,
  textColor,
  buttonClassName,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`
        
        md:py-1.5 md:px-3 rounded-lg
        ${buttonClassName}
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center space-x-2">
        {svgIcon ? (
          <div className={iconClass}>{svgIcon}</div>
        ) : icon ? (
          <Icon icon={icon} IconClassName={iconClass ?? ""} />
        ) : null}
        <p
          className={`font-medium text-[0.80rem] hidden md:block ${textColor}`}
        >
          {text}
        </p>
      </div>
    </button>
  );
};
