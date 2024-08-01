"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"
import Image from "next/image"

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
      <Image src="/nu.png" alt="nucleus" width={40} height={40}>
        
      </Image>
        <span className="hidden font-bold sm:inline-block text-sky-400">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6 font-extrabold">
        {
          docsConfig.mainNav?.map((items,i) => {
            return (
              <Link key={i}
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === items.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {items.title}
            </Link>
            )
          })
        }
      </nav>
    </div>
  )
}