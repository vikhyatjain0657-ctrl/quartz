"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type React from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BookingModal({ trigger, available }: { trigger: React.ReactNode; available: number }) {
  const [loading, setLoading] = useState(false)
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent aria-describedby="booking-desc">
        <DialogHeader>
          <DialogTitle>Booking Details</DialogTitle>
          <DialogDescription id="booking-desc">Capacity available and secure escrow payment (mock).</DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="text-sm">Available capacity</div>
          <Progress value={available} />
          <div className="text-xs text-muted-foreground">Escrow: funds captured and released on delivery.</div>
        </div>
        <DialogFooter>
          <Button disabled={loading} onClick={() => setLoading(true)} className="bg-primary text-primary-foreground">
            {loading ? "Confirming..." : "Confirm Booking"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
