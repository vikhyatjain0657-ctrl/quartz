"use client"

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const earnings = [
  { month: "Apr", value: 1200 },
  { month: "May", value: 1800 },
  { month: "Jun", value: 2400 },
  { month: "Jul", value: 2100 },
  { month: "Aug", value: 2800 },
]

const utilization = [
  { route: "SG→RTM", pct: 72 },
  { route: "LA→SHA", pct: 58 },
  { route: "BOM→SG", pct: 81 },
]

export function EarningsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Earnings Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earnings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0d9488" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function UtilizationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Space Utilization %</CardTitle>
      </CardHeader>
      <CardContent className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={utilization}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="route" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pct" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
