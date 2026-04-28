import "./fenix-app.css"
import { FenixSidebar } from "@/components/fenix/sidebar"
import { FenixTopbar } from "@/components/fenix/topbar"
import { HeroBanner } from "@/components/fenix/hero-banner"
import { FenixFilters } from "@/components/fenix/filters"
import { GameGrid } from "@/components/fenix/game-grid"
import { SeoAbout } from "@/components/fenix/seo-about"
import { FenixFooter } from "@/components/fenix/footer"

export default function FenixApp() {
  return (
    <div className="fx-app">
      <div className="fx-layout">
        <FenixSidebar />
        <div className="fx-main">
          <FenixTopbar />
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
