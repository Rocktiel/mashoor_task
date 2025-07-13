import Table from "./table";
import { ProductListingProductsFirstRow } from "./products-container-first-row";
import { ProductListingProductsOperations } from "./products-operations";

export const ProductListingProductsLayout = ({
  appliedFilters,
  activeTab,
}: {
  appliedFilters: any;
  activeTab: string;
}) => {
  return (
    <div className="bg-white rounded-lg m-6 p-6">
      <div className="flex flex-col space-y-4">
        <ProductListingProductsFirstRow header={activeTab} />
        {/* <ProductListingProductsOperations count={10} /> */}
        <Table />
      </div>
    </div>
  );
};
