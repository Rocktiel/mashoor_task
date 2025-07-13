import { Icon } from "@/components/Icon/icon";
import Tooltip from "@/components/tooltip/tooltip";

interface Props {
  text1: string;
  text2: string;
  toolipText: string;
}
export const ProductListingHeaderLeftItems: React.FC<Props> = ({
  text1,
  text2,
  toolipText,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <p className="font-normal text-[0.70rem] text-gray-600">{text1}</p>
        <p className="font-semibold text-[0.70rem] text-black">{text2}</p>
      </div>

      <div>
        <Tooltip text={toolipText} minWidth="min-w-[400px]" position="bottom">
          <Icon
            icon={"info"}
            IconClassName="text-white fill-grey-600 w-4 h-4"
          />
        </Tooltip>
      </div>
    </div>
  );
};
