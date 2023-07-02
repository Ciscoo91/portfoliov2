"use client"

import About from "@/components/About"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />
      <Work />
      <Contact />
      <Footer/>
    </main>
  )
}
