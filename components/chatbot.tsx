"use client"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = { role: "user" | "assistant"; content: string }

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I can help you find containers or explain pricing. Ask me anything." },
  ])
  const [input, setInput] = useState("")
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

  async function send() {
    if (!input.trim()) return
    const prompt = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: prompt }])

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, { role: "user", content: prompt }] }),
    })
    const data = await res.json()
    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        {open ? (
          <Card className="w-80 h-96 flex flex-col border bg-white dark:bg-gray-900">
            <div className="px-3 py-2 border-b flex items-center justify-between">
              <span className="text-sm font-semibold">Assistant</span>
              <Button size="sm" variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
            <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div
                    className={`inline-block rounded-lg px-3 py-2 text-sm ${m.role === "user" ? "bg-gray-900 text-white" : "bg-gray-100 dark:bg-gray-800"}`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") send()
                }}
              />
              <Button onClick={send}>Send</Button>
            </div>
          </Card>
        ) : (
          <Button onClick={() => setOpen(true)}>Chat</Button>
        )}
      </div>
    </>
  )
}
