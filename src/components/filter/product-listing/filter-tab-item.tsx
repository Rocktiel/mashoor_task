import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon/icon";
import Tooltip from "@/components/tooltip/tooltip";

interface TabItemProps {
  id: string;
  label: string;
  info: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  showDivider?: boolean;
}

export function FilterTabItem({
  id,
  label,
  count,
  info,
  isActive,
  onClick,
  showDivider = true,
}: TabItemProps) {
  return (
    <li
      key={id}
      className={cn(
        "relative h-[55px] whitespace-nowrap",
        showDivider && "tab-divider mr-1 sm:mr-2"
      )}
    >
      <button
        onClick={onClick}
        className={cn(
          "h-[55px] flex flex-col items-center justify-center px-3 sm:px-6 text-sm font-medium"
        )}
      >
        <div
          className={cn(
            "h-[55px] flex flex-col items-center justify-center",
            isActive ? "border-b-2 border-orange-500" : "border-transparent"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1",
              isActive ? "text-orange-500" : "text-gray-800"
            )}
          >
            <span className="text-xs sm:text-sm">{label}</span>
            <Tooltip text={info} minWidth="min-w-[200px]" position="top-right">
              <Icon
                icon="info"
                IconClassName={cn(
                  "w-3 h-3 sm:w-4 sm:h-4",
                  isActive
                    ? "text-white fill-orange-500"
                    : "text-white fill-grey-600"
                )}
              />
            </Tooltip>
          </div>
          <p className="text-[10px] sm:text-xs font-light text-black dark:text-gray-300">
            {count} Ürün(ler)
          </p>
        </div>
      </button>
    </li>
  );
}
