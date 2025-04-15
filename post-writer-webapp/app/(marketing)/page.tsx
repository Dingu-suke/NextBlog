import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <>
      <div className="antialiased flex justify-center">
        <section className="pt-6 md:pt-10 lg:pt-20 ">
          <div className="text-center flex flex-col items-center gap-4 max-w-[64rem] mx-10">
            <Link href={siteConfig.links.x}
                  className="border border-slate-300 bg-slate-300 hover:bg-blue-200 hover:border hover:border-slate-300 rounded-3xl py-2 px-4"
                  target="_blank"
                  rel="noreferrer">
              <div className="flex items-center gap-2">
                <RiTwitterXLine />
              </div>
            </Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl">Post Writer</h1>
            <p className="text-muted-foreground sm:text-lg leading-normal max-w-[42rem]">
              このアプリケーションは Next.js で作られたものです。このアプリケーションは Next.js で作られたものです。このアプリケーションは Next.js で作られたものです。このアプリケーションは Next.js で作られたものです。
            </p>
            <div className="flex gap-2">
              <Link href={("/")}
                    className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
                はじめる
              </Link>
              <Link href={(siteConfig.links.github)}
                    className={cn(buttonVariants({ size: "lg" }))}
                    target="_blank"
                    rel="noreferrer"
                    >
                  <FaGithub />
                  GitHub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}