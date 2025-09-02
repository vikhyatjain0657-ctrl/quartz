"use client"
import { Plus } from "lucide-react"
import Link from "next/link"

export function FloatingAction() {
  return (
    <Link
      href="/dashboard"
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105"
      aria-label="Quick action: List a container"
    >
      <Plus className="h-5 w-5" />
    </Link>
  )
}
