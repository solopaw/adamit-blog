import { BookIcon, HomeIcon, List } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="/">
                <div className="flex flex-col items-center">
                  <HomeIcon />
                </div>
              </Link>
            }
          ></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/about">About</Link>}
          ></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/blog">Blog</Link>}
          ></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/contact">Contact</Link>}
          >
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={
              <Link href="/booking">
                <div className="flex flex-col items-center">
                  <BookIcon />
                </div>
              </Link>
            }
          ></NavigationMenuLink>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink render={
              <Link href="/leaderboard">
                <div className="flex flex-col items-center">
                  <List />
                </div>
              </Link>
            }></NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
