"use client"

import { useState, useEffect } from "react"
import "./fenix-app.css"
import { FenixSidebar } from "@/components/fenix/sidebar"
import { FenixTopbar } from "@/components/fenix/topbar"
import { HeroBanner } from "@/components/fenix/hero-banner"
import { FenixFilters } from "@/components/fenix/filters"
import { GameGrid } from "@/components/fenix/game-grid"
import { SeoAbout } from "@/components/fenix/seo-about"
import { FenixFooter } from "@/components/fenix/footer"

export default function FenixApp() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className="fx-app">
      <div className="fx-layout">
        <FenixSidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="fx-main">
          <FenixTopbar onMenuClick={() => setMenuOpen(true)} />
          <div className="fx-content">
            <HeroBanner />
            <FenixFilters />
            <GameGrid />
          </div>
          <SeoAbout />
          <FenixFooter />
        </div>
      </div>
    </div>
  )
}
