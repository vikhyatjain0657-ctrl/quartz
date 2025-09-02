"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ShieldCheck } from "lucide-react"
import type React from "react"

export interface Listing {
  id: string
  route: string
  date: string
  capacity: number
  price: number
  owner: string
  verified: boolean
}

export function ContainerCard({
  data,
  onBook,
  onMessage,
  actions,
}: { data: Listing; onBook: () => void; onMessage: () => void; actions?: React.ReactNode }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{data.route}</span>
          <Badge variant="secondary" className="gap-1">
            {data.verified && <ShieldCheck className="h-3 w-3 text-accent" aria-hidden="true" />}
            {data.verified ? "Verified" : "Unverified"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 text-sm text-muted-foreground">
        <div>
          <span className="font-medium text-foreground">Departure:</span> {data.date}
        </div>
        <div>
          <span className="font-medium text-foreground">Capacity:</span> {data.capacity} CBM
        </div>
        <div>
          <span className="font-medium text-foreground">Price:</span> ${data.price}/CBM
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback>{data.owner.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-foreground">{data.owner}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex gap-2">
        {actions ? (
          actions
        ) : (
          <>
            <Button className="bg-primary text-primary-foreground" onClick={onBook}>
              Request Booking
            </Button>
            <Button variant="outline" onClick={onMessage}>
              Message Owner
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
