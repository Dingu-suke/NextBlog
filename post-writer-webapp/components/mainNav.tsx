import { NavItem } from "@/types";
import Link from "next/link";
import MobileNav from "./mobileNav";

interface MainNavProps {
  items    : NavItem[];
  
}

export default function MainNav({ items }: MainNavProps ) {

  return(
    <div className="flex items-center justify-center gap-4">
      
      <Link href={"/"}>
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link 
                key={index}
                href={item.href}
                className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
          )
      )}
      </nav>
        <MobileNav items={items} />
    </div>
  )
}