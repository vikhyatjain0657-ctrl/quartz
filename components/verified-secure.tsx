import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Blocks, Satellite } from "lucide-react"

export function VerifiedSecure() {
  const feats = [
    { icon: ShieldCheck, title: "Verified & Secure", desc: "KYC, escrow payments, and audits." },
    { icon: Blocks, title: "Blockchain Records", desc: "Tamper-proof booking logs." },
    { icon: Satellite, title: "IoT Tracking", desc: "Realtime status updates." },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {feats.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="transition hover:shadow-md">
            <CardContent className="flex items-start gap-3 p-5">
              <div className="rounded-md bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
