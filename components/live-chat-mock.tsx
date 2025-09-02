"use client"
import { useState } from "react"
import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LiveChatMock() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 left-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-card shadow-md"
        aria-label="Open live chat"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
      {open && (
        <div className="fixed bottom-24 left-6 z-40 w-72 rounded-lg border bg-card p-3 shadow-xl">
          <div className="mb-2 text-sm font-semibold">Support</div>
          <div className="mb-2 h-32 overflow-y-auto rounded bg-muted p-2 text-xs text-muted-foreground">
            Agent: Hi! How can we help?
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Type a message..." />
            <Button size="icon" className="bg-primary text-primary-foreground">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
