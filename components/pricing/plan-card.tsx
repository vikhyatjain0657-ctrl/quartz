import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PlanCard({
  name,
  price,
  features,
  highlighted,
}: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <Card className={highlighted ? "border-transparent bg-gradient-to-br from-teal-600 to-green-600 text-white" : ""}>
      <CardHeader>
        <CardTitle className={highlighted ? "text-white" : ""}>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${highlighted ? "text-white" : ""}`}>{price}</div>
        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check className={`h-4 w-4 ${highlighted ? "text-white" : "text-primary"}`} />
              <span className={highlighted ? "text-white/90" : "text-muted-foreground"}>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={highlighted ? "secondary" : "default"}
          className={highlighted ? "bg-white text-slate-900 hover:opacity-90" : "bg-primary text-primary-foreground"}
        >
          Choose {name}
        </Button>
      </CardFooter>
    </Card>
  )
}
