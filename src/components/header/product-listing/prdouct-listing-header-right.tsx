import Image from "next/image";
import { Button } from "@/components/button/button";
export const ProductListingHeaderRight = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-5 text-[0.80rem] font-bold text-gray-400 h-[100%] ">
      <Button
        svgIcon={
          <Image
            src="/plus-icon.svg"
            alt="Add product"
            width={16}
            height={16}
            className="text-green-500"
          />
        }
        iconClass="text-green-500"
        text="Ürün Ekle"
        textColor="text-orange-500"
      />
      <Button
        icon="graduation-cap"
        iconClass="text-purple-600 fill-purple-600 w-4 h-4"
        text="Ürün Listesini Nasıl Yönetirim?"
        textColor="text-purple-600"
      />
    </div>
  );
};
