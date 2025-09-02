import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DashboardAccordions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="tx">
          <AccordionTrigger>Recent Transactions</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Booking #4821 — $640 — Released</li>
              <li>Booking #4820 — $380 — In escrow</li>
              <li>Booking #4819 — $520 — Refunded</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="updates">
          <AccordionTrigger>Status Updates</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>SG→RTM — Departed</li>
              <li>LA→SHA — Customs clearance pending</li>
              <li>BOM→SG — Delivered</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
