import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@radix-ui/react-navigation-menu";
import {Link, useLocation} from "react-router";
import {cn} from "@/lib/utils.ts";

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    return (
        <NavigationMenu className={"py-5"}>
            <NavigationMenuList>
                {/*Home*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/') && "bg-slate-200", "p-2 rounded-md")}>
                        <Link to={"/"}>Home</Link>
                    </NavigationMenuLink>

                {/*Search*/}
                    <NavigationMenuLink asChild className={cn(isActive('/search') && "bg-slate-200", "p-2 rounded-md")}>
                        <Link to={"/search"}>Buscar súperheroe</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};