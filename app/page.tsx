import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HomeSearchBar } from "@/components/search-filters"
import { ValueProps } from "@/components/value-props"
import { Stepper } from "@/components/stepper"
import { VerifiedSecure } from "@/components/verified-secure"
import { FloatingAction } from "@/components/fab"
import Chatbot from "@/components/chatbot"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="relative flex flex-col gap-16 md:gap-24 pt-8 md:pt-12 pb-24">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-4">
          <Hero />
        </section>

        {/* Search (no negative margins; clear separation to avoid overlap) */}
        <section className="mx-auto w-full max-w-5xl px-4">
          <HomeSearchBar />
        </section>

        {/* Value props */}
        <section className="mx-auto w-full max-w-6xl px-4">
          <ValueProps />
        </section>

        {/* Stepper / How it works */}
        <section id="how" className="mx-auto w-full max-w-6xl px-4">
          <Stepper />
        </section>

        {/* Trust / Security */}
        <section id="about" className="mx-auto w-full max-w-6xl px-4">
          <VerifiedSecure />
        </section>
      </main>
      <FloatingAction />
      <Chatbot />
    </>
  )
}
