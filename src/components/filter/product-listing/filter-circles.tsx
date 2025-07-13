import { cn } from "@/lib/utils";

const tabFilters = {
  all: [],
  active: [
    { id: "all", label: "Tümü", count: 28 },
    { id: "buybox-in", label: "Buybox Dahil Olanlar", count: 0 },
    { id: "buybox-out", label: "Buybox Dahil Olmayanlar", count: 28 },
  ],
  pending: [
    { id: "all", label: "Tümü", count: 0 },
    { id: "waiting", label: "Onay Bekleyenler", count: 0 },
    { id: "revise", label: "Revize Gerekenler", count: 0 },
  ],
  passive: [
    { id: "all", label: "Tümü", count: 1 },
    { id: "soldout", label: "Tükenenler", count: 0 },
    { id: "price-missing", label: "Fiyat Girilmesi Gerekenler", count: 1 },
    { id: "lockings", label: "Kilitliler", count: 1 },
    { id: "in-archive", label: "Arşivdekiler", count: 1 },
    { id: "closed-sale", label: "Satışa Kapatılanlar", count: 1 },
  ],
};
interface Filter {
  id: string;
  label: string;
  count: number;
}

interface TabFiltersProps {
  activeTab: string;
  selectedFilter: string;
  onChange: (filterId: string) => void;
}

export const TabFilters: React.FC<TabFiltersProps> = ({
  activeTab,
  selectedFilter,
  onChange,
}) => {
  const filters = tabFilters[activeTab as keyof typeof tabFilters] || [];

  if (filters.length === 0) return null;

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-2 sm:gap-4 my-3 sm:my-4 min-w-max px-2">
        {filters.map((filter) => {
          const isSelected = selectedFilter === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => onChange(filter.id)}
              className={cn(
                "flex items-center gap-1 text-sm font-normal whitespace-nowrap",
                isSelected ? "text-orange-500" : "text-gray-800"
              )}
            >
              <span
                className={cn(
                  "w-4 h-4 rounded-full border relative flex items-center justify-center",
                  isSelected ? "border-orange-500" : "border-gray-300"
                )}
              >
                {isSelected && (
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </span>
              <span className="ml-1">
                {filter.label} <span className="ml-1">({filter.count})</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
