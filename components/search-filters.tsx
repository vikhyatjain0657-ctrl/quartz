"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { useRouter } from "next/navigation"

const ports = ["Singapore", "Shanghai", "Rotterdam", "Los Angeles", "Mumbai"]
const sizes = ["20ft", "40ft", "40ft HC"]
const cargoTypes = ["General", "Refrigerated", "Hazardous", "Fragile"]

export function HomeSearchBar() {
  const router = useRouter()
  const [origin, setOrigin] = useState<string | undefined>()
  const [destination, setDestination] = useState<string | undefined>()
  const [size, setSize] = useState<string | undefined>()
  const [cargo, setCargo] = useState<string | undefined>()
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const [price, setPrice] = useState([150])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (origin) params.set("origin", origin)
    if (destination) params.set("destination", destination)
    if (size) params.set("size", size)
    if (cargo) params.set("type", cargo)
    if (start) params.set("start", start)
    if (end) params.set("end", end)
    params.set("maxPrice", String(price[0]))
    router.push(`/marketplace?${params.toString()}`)
  }

  return (
    <div className="mx-auto w-full max-w-5xl rounded-xl border bg-card p-4 shadow-sm md:p-6">
      <form className="grid gap-4 md:grid-cols-6" onSubmit={onSubmit}>
        <Select onValueChange={setOrigin}>
          <SelectTrigger className="md:col-span-2">
            <SelectValue placeholder="Origin Port" />
          </SelectTrigger>
          <SelectContent>
            {ports.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setDestination}>
          <SelectTrigger className="md:col-span-2">
            <SelectValue placeholder="Destination Port" />
          </SelectTrigger>
          <SelectContent>
            {ports.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSize}>
          <SelectTrigger>
            <SelectValue placeholder="Container Size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setCargo}>
          <SelectTrigger>
            <SelectValue placeholder="Cargo Type" />
          </SelectTrigger>
          <SelectContent>
            {cargoTypes.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input type="date" aria-label="Start date" value={start} onChange={(e) => setStart(e.target.value)} />
        <Input type="date" aria-label="End date" value={end} onChange={(e) => setEnd(e.target.value)} />
        <div className="col-span-full">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">Max Price per CBM: ${price[0]}</label>
          <Slider value={price} onValueChange={setPrice} min={10} max={500} step={10} />
        </div>
        <div className="col-span-full flex justify-end">
          <Button className="bg-primary text-primary-foreground hover:brightness-110">Search Now</Button>
        </div>
      </form>
    </div>
  )
}
