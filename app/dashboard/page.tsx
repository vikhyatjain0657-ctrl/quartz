import { SiteHeader } from "@/components/site-header"
// import { SiteFooter } from "@/components/site-footer"
import { MetricCard } from "@/components/dashboard/metric-card"
import { EarningsChart, UtilizationChart } from "@/components/dashboard/charts"
import { DashboardAccordions } from "@/components/dashboard/accordion-lists"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="My Containers" value="12" />
          <MetricCard title="My Bookings" value="8" />
          <MetricCard title="Earnings (30d)" value="$2,800" />
          <MetricCard title="Carbon Savings" value="1.2t CO₂" hint="+12% MoM" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <EarningsChart />
          <UtilizationChart />
        </div>
        <div className="mt-6">
          <DashboardAccordions />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Messages</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Coming soon…</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">All caught up!</CardContent>
          </Card>
        </div>
      </main>
      {/* <SiteFooter /> */}
    </>
  )
}
