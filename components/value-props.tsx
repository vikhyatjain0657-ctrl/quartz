import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ShieldCheck, Wallet } from "lucide-react"

export function ValueProps() {
  const items = [
    { icon: Wallet, title: "For Owners", desc: "Monetize unused space and boost utilization." },
    { icon: ShieldCheck, title: "For Shippers", desc: "Access affordable, verified capacity on-demand." },
    { icon: Leaf, title: "For the Planet", desc: "Reduce carbon footprint by avoiding empty space." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" /> {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
