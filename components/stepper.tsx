import { CheckCircle2, ListChecks, Shield, Truck } from "lucide-react"

const steps = [
  { title: "List Space", desc: "Publish available capacity.", icon: ListChecks },
  { title: "Smart Matching", desc: "We match routes and cargo.", icon: CheckCircle2 },
  { title: "Secure Payment", desc: "Escrow ensures trust.", icon: Shield },
  { title: "Track & Deliver", desc: "On-time delivery tracking.", icon: Truck },
]

export function Stepper() {
  return (
    <section id="how" className="bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <li key={title} className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium">Step {i + 1}</span>
              </div>
              <h4 className="mt-2 text-base font-semibold">{title}</h4>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
