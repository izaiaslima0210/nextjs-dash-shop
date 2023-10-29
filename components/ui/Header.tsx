import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return ( 
        <Card className="flex  p-[1.875rem] justify-between items-center">
            <Sheet>
                <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <SheetHeader>Category</SheetHeader>
                    <div className="mt-2 flex flex-col gap-3">
                        <Button variant='outline' className="justify-start gap-2">
                            <LogInIcon size={16}/>
                            Fazer Login
                        </Button>
                        <Button variant='outline' className="justify-start gap-2">
                            <HomeIcon size={16} />
                            Home
                        </Button>
                        <Button variant='outline' className="justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>
                        <Button variant='outline' className="justify-start gap-2">
                            <ListOrderedIcon size={16} />
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
            <h1 className="text-lg font-semibold"><span className="text-primary">FS</span> Shop</h1>
            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
     );
}
 
export default Header;