"use client"

import { SiteHeader } from "@/components/site-header"
import { PlanCard } from "@/components/pricing/plan-card"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)
  const mul = annual ? 10 : 1
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="text-sm">Monthly</span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className="text-sm">Annual (save 2 months)</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <PlanCard
            name="Basic"
            price={`$${(29 * mul).toFixed(0)}/mo`}
            features={["List up to 5 containers", "Standard support", "Basic analytics"]}
          />
          <PlanCard
            highlighted
            name="Pro"
            price={`$${(79 * mul).toFixed(0)}/mo`}
            features={["Unlimited listings", "Priority support", "Advanced analytics", "KYC verification"]}
          />
          <PlanCard
            name="Enterprise"
            price="Contact us"
            features={["Custom SLAs", "Dedicated manager", "SAML SSO", "Custom integrations"]}
          />
        </div>
      </main>
    </>
  )
}
