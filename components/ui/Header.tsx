"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "./separator";

const Header = () => {
    const { status, data } = useSession();
    const handleLoginClick = async ()=>{
        await signIn()
    }
    const handleLogoutClick = async () => {
        await signOut();
      };
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
                    {status === "authenticated" && data?.user && (
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 py-4 pl-4">
                                <Avatar>
                                <AvatarFallback>
                                    {data.user.name?.[0].toUpperCase()}
                                </AvatarFallback>

                                {data.user.image && <AvatarImage className="rounded-[20rem]" src={data.user.image} />}
                                </Avatar>
                            </div>
                            <Separator />
                        </div>
                    )}
                    <div className="mt-2 flex flex-col gap-3">
                        {status === "unauthenticated" && (
                        <Button
                            onClick={handleLoginClick}
                            variant="outline"
                            className="w-full justify-start gap-2"
                        >
                            <LogInIcon size={16} />
                            Fazer Login
                        </Button>
                        )}

                        {status === "authenticated" && (
                        <Button
                            onClick={handleLogoutClick}
                            variant="outline"
                            className="w-full justify-start gap-2"
                        >
                            <LogOutIcon size={16} />
                            Fazer Logout
                        </Button>
                        )}
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