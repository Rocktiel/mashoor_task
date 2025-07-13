import { MainLayout } from "@/components/layout/main-layout";
import ProductListing from "./product-listing/all-products/page";

export default function Home() {
  return (
    <MainLayout>
      <ProductListing />
    </MainLayout>
  );
}
