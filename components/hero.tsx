"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <div
        className="absolute inset-0 -z-10 bg-[url('/cargo-containers-at-port.png')] bg-cover bg-center"
        role="img"
        aria-label="Cargo containers at port"
      />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="max-w-xl rounded-xl bg-gray-900 p-6 text-white shadow-lg">
          <motion.h1
            className="text-balance text-4xl font-bold md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Don’t Ship Air. Ship Smarter.
          </motion.h1>
          <motion.p
            className="mt-3 text-pretty text-sm md:text-base text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Monetize unused container space or find affordable capacity—secure, verified, and sustainable.
          </motion.p>
          <motion.div
            className="mt-5 flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:brightness-110">
              <Link href="/dashboard">List Your Space</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:brightness-110 bg-transparent">
              <Link href="/marketplace">Find Space</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
