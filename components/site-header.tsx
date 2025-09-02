"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Ship, PackageSearch } from "lucide-react"
import { useState } from "react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/#how", label: "How It Works" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-semibold">SmartSpace</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" className="transition hover:translate-y-[-1px]">
            <Link href="/marketplace">
              <PackageSearch className="mr-2 h-4 w-4" />
              Find Space
            </Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:brightness-110">
            <Link href="/dashboard">List Your Space</Link>
          </Button>
        </div>
        <button aria-label="Open Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2 text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="ghost" className="flex-1">
                <Link href="/marketplace">Find Space</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/dashboard">List Space</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
