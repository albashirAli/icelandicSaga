import type React from "react"
import type { Metadata } from "next"
import { Cinzel } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

export const metadata: Metadata = {
  title: "Why is Your Axe Bloody?",
  description: "Exploring the key themes of medieval Icelandic sagas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} font-serif bg-stone-900 text-stone-200 min-h-screen`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-stone-700 py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-stone-400 text-sm">
            <p>© {new Date().getFullYear()} Why is Your Axe Bloody? | A Study of Medieval Icelandic Sagas</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

