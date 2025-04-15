import MainNav from "@/components/mainNav";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="w-full z-40">
        <div className="h-20 py-6 px-5 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav}/>
          <nav className="antialiased flex justify-center">
            <Link href={"/login"} 
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                      "p-4",
                      "bg-slate-200",
                      "hover:bg-slate-300"
                    )
            }>ログイン</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}