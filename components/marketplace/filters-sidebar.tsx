"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function FiltersSidebar({
  onPrice,
  priceInitial = 150,
  verifiedOnly,
  onVerified,
  types = [],
  onTypes,
}: {
  onPrice: (v: number) => void
  priceInitial?: number
  verifiedOnly?: boolean
  onVerified?: (v: boolean) => void
  types?: string[]
  onTypes?: (v: string[]) => void
}) {
  const [price, setPrice] = useState([priceInitial])
  useEffect(() => {
    setPrice([priceInitial])
  }, [priceInitial])

  const allTypes = ["General", "Refrigerated", "Hazardous", "Fragile"]

  return (
    <aside className="sticky top-20 h-max rounded-lg border p-4">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold">Cargo Type</h4>
          <div className="mt-2 grid gap-2">
            {allTypes.map((t) => {
              const checked = types?.includes(t)
              return (
                <label key={t} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    id={t}
                    checked={!!checked}
                    onCheckedChange={(v) => {
                      const next = new Set(types)
                      if (v) next.add(t)
                      else next.delete(t)
                      onTypes?.(Array.from(next))
                    }}
                  />
                  <span>{t}</span>
                </label>
              )
            })}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Price per CBM</h4>
          <Label className="text-xs text-muted-foreground">Up to ${price[0]}</Label>
          <Slider
            value={price}
            onValueChange={(v) => {
              setPrice(v)
              onPrice?.(v[0])
            }}
            min={10}
            max={500}
            step={10}
            aria-label="Max price per CBM"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Verified Owners Only</span>
          <Switch checked={!!verifiedOnly} onCheckedChange={(v) => onVerified?.(v)} aria-label="Verified owners only" />
        </div>
      </div>
    </aside>
  )
}
