"use client"

import { useState } from "react"
import { Sidebar } from "@/components/fenix/sidebar"
import { Header } from "@/components/fenix/header"
import { FilterBar } from "@/components/fenix/filter-bar"
import { GameGrid } from "@/components/fenix/game-grid"
import { Footer } from "@/components/fenix/footer"
import { SeoBlock } from "@/components/fenix/seo-block"

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background flex w-full overflow-x-hidden">
      <Sidebar mobileOpen={mobileMenuOpen} onCloseMobile={() => setMobileMenuOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        <main className="flex-1 px-3 md:px-6 py-6 flex flex-col gap-6 min-w-0">
          <FilterBar />
          <GameGrid />
        </main>

        <SeoBlock />

        <div className="px-3 md:px-6">
          <Footer />
        </div>
      </div>
    </div>
  )
}
