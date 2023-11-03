import { Badge } from "@/components/ui/badge"
import { KeyboardIcon } from "lucide-react";
import { CategoryItemProps } from "@/lib/utils";

const CategoryItem = ({category}: CategoryItemProps)  => {

  return ( 
      <Badge variant={"outline"}>
        <KeyboardIcon />
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
   );
}
 
export default CategoryItem;