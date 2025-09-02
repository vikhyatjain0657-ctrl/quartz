import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const last = messages?.[messages.length - 1]?.content?.toLowerCase() || ""

  let reply =
    "I can help with marketplace filters, pricing tiers, and bookings. Try asking: 'Find 20ft in Los Angeles under $30'."

  if (last.includes("price") || last.includes("pricing")) {
    reply = "We offer flexible daily pricing. You can also view monthly savings on the Pricing page with the toggle."
  } else if (last.includes("book") || last.includes("booking")) {
    reply = "Open any container card and click 'Request booking' to submit your details in a secure dialog."
  } else if (last.match(/20ft|40ft|45ft/)) {
    reply = "Use the size filter in the sidebar, then sort by price. You can also enable 'Verified owners only'."
  } else if (last.includes("help")) {
    reply = "Sure—what do you need help with: searching containers, pricing, or booking?"
  }

  return NextResponse.json({ reply })
}
