import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { motion } from "motion/react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const menus = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Works",
    href: "works",
  },
  {
    name: "Side Projects",
    href: "sideProjects",
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-xs bg-white/50 z-100">
      <div className="max-w-[1400px] mx-auto px-5 pt-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex-1 flex items-center justify-between h-[60px] border-t-1 border-b-1 border-black"
          >
            <h1>
              <Link to="/" className="font-bold tracking-tighter text-lg">
                Jin's Web Portfolio
              </Link>
            </h1>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {menus.map((menu) => {
                  return (
                    <NavigationMenuItem key={menu.name}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link to="#" onClick={handleMenuClick(menu.href)}>
                          {menu.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                asChild
                className="md:hidden"
                onClick={() => setOpen(true)}
              >
                <MenuIcon className="size-6" />
              </SheetTrigger>
              <SheetContent className="z-1000 flex md:hidden flex-col justify-center">
                <SheetHeader>
                  <ul>
                    {menus.map((menu) => {
                      return (
                        <li key={menu.name} className="text-2xl">
                          <Link
                            to="#"
                            className="inline-block py-2"
                            onClick={(e) => {
                              setOpen(false);
                              handleMenuClick(menu.href)(e); // 여기서 이벤트 전달 필수!
                            }}
                          >
                            {menu.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
