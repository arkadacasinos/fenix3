"use client"

import { useState } from "react"
import { Search, ChevronDown, Crosshair, Sparkles, Gift, Flame } from "lucide-react"

const TABS = [
  { id: "lobby", label: "Лобби" },
  { id: "rtp", label: "Hot RTP" },
  { id: "wager", label: "Отыгрыш бонусов" },
  { id: "slots", label: "Слоты" },
  { id: "belatra", label: "Belatra" },
  { id: "live", label: "Лайв" },
  { id: "fast", label: "Быстрые" },
]

const SORTS = [
  { id: "best", label: "Лучшие", icon: Crosshair },
  { id: "new", label: "Новое", icon: Sparkles },
  { id: "bonus", label: "Бонусы", icon: Gift },
  { id: "hot", label: "Горячие", icon: Flame },
]

export function FenixFilters() {
  const [activeTab, setActiveTab] = useState("lobby")
  const [activeSort, setActiveSort] = useState("best")

  return (
    <div className="fx-filters">
      <div className="fx-filters-row fx-filters-search">
        <div className="fx-search-box">
          <input
            type="text"
            placeholder="Поиск"
            className="fx-search-box-input"
            aria-label="Поиск"
          />
          <Search className="size-[18px] text-[var(--fx-muted)]" />
        </div>
        <button type="button" className="fx-provider-select">
          <span>Провайдер</span>
          <ChevronDown className="size-4 text-[var(--fx-muted)]" />
        </button>
      </div>

      <div className="fx-filters-row">
        <div className="fx-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`fx-tab ${activeTab === tab.id ? "is-active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="fx-sorts">
          {SORTS.map((sort) => {
            const Icon = sort.icon
            const isActive = activeSort === sort.id
            return (
              <button
                key={sort.id}
                type="button"
                onClick={() => setActiveSort(sort.id)}
                className={`fx-sort ${isActive ? "is-active" : ""}`}
              >
                <Icon className="size-3.5" strokeWidth={2.5} />
                <span>{sort.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
