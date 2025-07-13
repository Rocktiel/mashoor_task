import { ProductListingHeaderLeft } from "./prdouct-listing-header-left";
import { ProductListingHeaderRight } from "./prdouct-listing-header-right";

export const ProductListingHeader = () => {
  return (
    <div className="w-full bg-white md:pl-6 md:pr-5 md:h-[48px] flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="w-full px-4 h-[48px] border-b border-gray-200 md:border-none flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-5">
          <h2 className="text-black text-lg font-normal">Ürün Listesi</h2>
          <div className="hidden md:flex items-center space-x-5 text-[0.75rem]">
            <ProductListingHeaderLeft />
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <ProductListingHeaderRight />
        </div>
      </div>

      <div className="flex md:hidden items-center py-2 px-4">
        <ProductListingHeaderLeft />
      </div>
    </div>
  );
};
