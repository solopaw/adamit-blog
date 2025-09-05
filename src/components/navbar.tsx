import { HomeIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuItem,navigationMenuTriggerStyle,NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";
export default function Navbar() {
    return(
        <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/"><HomeIcon /></Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
    )
}