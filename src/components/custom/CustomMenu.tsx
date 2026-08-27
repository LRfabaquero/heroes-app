import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu.tsx";
import {Link, useLocation} from "react-router";
import {cn} from "@/lib/utils.ts";

export const CustomMenu = () => {

    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/*Home*/}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/') && "bg-slate-200",  "rounded-md p-2")}>
                        <Link to={"/"}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/*Search*/}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/search') && "bg-slate-200",  " rounded-md p-2")}>
                        <Link to={"/search"}>Buscar súperheroe</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
