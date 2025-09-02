"use client"

import { SiteHeader } from "@/components/site-header"
import { FiltersSidebar } from "@/components/marketplace/filters-sidebar"
import { ContainerCard, type Listing } from "@/components/marketplace/container-card"
import { BookingModal } from "@/components/marketplace/booking-modal"
import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Chatbot from "@/components/chatbot"

type CargoType = "General" | "Refrigerated" | "Hazardous" | "Fragile"

type RichListing = Listing & { type: CargoType }

const DATA: RichListing[] = [
  {
    id: "1",
    route: "Singapore → Rotterdam",
    date: "2025-10-10",
    capacity: 120,
    price: 180,
    owner: "Kai",
    verified: true,
    type: "General",
  },
  {
    id: "2",
    route: "Los Angeles → Shanghai",
    date: "2025-10-15",
    capacity: 80,
    price: 140,
    owner: "Lia",
    verified: false,
    type: "Refrigerated",
  },
  {
    id: "3",
    route: "Mumbai → Singapore",
    date: "2025-10-20",
    capacity: 150,
    price: 200,
    owner: "Sam",
    verified: true,
    type: "Hazardous",
  },
]

export default function MarketplacePage() {
  const params = useSearchParams()
  const initialMax = Number(params.get("maxPrice") || 500)
  const [maxPrice, setMaxPrice] = useState<number>(isNaN(initialMax) ? 500 : initialMax)
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>((params.get("verified") || "") === "true")
  const origin = params.get("origin") || ""
  const destination = params.get("destination") || ""
  const [types, setTypes] = useState<CargoType[]>([])

  const [sort, setSort] = useState<"price-asc" | "price-desc" | "capacity-desc">("price-asc")

  const filtered = useMemo(() => {
    return DATA.filter((d) => {
      const withinPrice = d.price <= maxPrice
      const verifiedOk = verifiedOnly ? d.verified : true
      const routeOk =
        (!origin || d.route.toLowerCase().includes(origin.toLowerCase())) &&
        (!destination || d.route.toLowerCase().includes(destination.toLowerCase()))
      const typeOk = types.length ? types.includes(d.type) : true
      return withinPrice && verifiedOk && routeOk && typeOk
    })
  }, [maxPrice, verifiedOnly, origin, destination, types])

  const sorted = useMemo(() => {
    const copy = [...filtered]
    if (sort === "price-asc") copy.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") copy.sort((a, b) => b.price - a.price)
    if (sort === "capacity-desc") copy.sort((a, b) => b.capacity - a.capacity)
    return copy
  }, [filtered, sort])

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          <FiltersSidebar
            priceInitial={maxPrice}
            onPrice={(v) => setMaxPrice(v)}
            verifiedOnly={verifiedOnly}
            onVerified={setVerifiedOnly}
            types={types}
            onTypes={setTypes}
          />
          <div className="space-y-4">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{sorted.length}</span> result
                {sorted.length === 1 ? "" : "s"}
                {origin ? ` from ${origin}` : ""} {destination ? ` to ${destination}` : ""}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort</span>
                <Select value={sort} onValueChange={(v) => setSort(v as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="capacity-desc">Capacity: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sorted.map((d) => (
                <ContainerCard
                  key={d.id}
                  data={d}
                  onBook={() => {}}
                  onMessage={() => alert("Messaging owner (mock)")}
                  actions={
                    <>
                      <BookingModal
                        available={Math.min(100, d.capacity)}
                        trigger={
                          <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                            Request Booking
                          </button>
                        }
                      />
                      <button
                        className="inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={() => alert("Messaging owner (mock)")}
                      >
                        Message Owner
                      </button>
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Chatbot />
    </>
  )
}
