import { Badge } from "@/components/ui/badge"
import { KeyboardIcon, PaintBucketIcon, Paintbrush2Icon } from "lucide-react";
import { CategoryItemProps } from "@/lib/utils";

const CategoryItem = ({category}: CategoryItemProps)  => {
const categoreIcon  = {
  venetian: <PaintBucketIcon size={16}/>,
  tools: <Paintbrush2Icon size={16}/>

}
  return ( 
      <Badge variant={"outline"} className="flex justify-center py-3 items-center gap-2 rounded-lg">
        {categoreIcon[category.slug as keyof typeof categoreIcon]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
   );
}
 
export default CategoryItem;