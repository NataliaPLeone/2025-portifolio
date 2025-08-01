"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

function NavBar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  { label: "Home", link: "/" },
  { label: "Projetos", link: "/projetos" },
  { label: "Blog", link: "/blog" },
];


export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="md:hidden">
      <nav className="w-full border-separate container flex items-center justify-between  px-5">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] p-5" side="left">
            
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  
                  />
              ))}
            </div>

          </SheetContent>
        </Sheet>
        

           
      
      <div className="flex h-[80px] min-h-[60px] ">
            <ModeToggle />
          </div>  

          </nav>
    </div>
  );
}



export function DesktopNavbar() {
  return (
    <div className="hidden  border-separate  md:block">
      <nav className="container flex  items-start justify-between px-6  ">
        <div className="flex h-[80px] min-h-[50px] items-center gap-x-4 ">
          
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>

            
      </nav>
    </div>
  );
}

function NavbarItem({ link, label,  }: { link: string; label: string; clickCallback? : () => void}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute  rounded-x1 bg-foreground md:block" />
      )}
    </div>
  );
}

export default NavBar;
