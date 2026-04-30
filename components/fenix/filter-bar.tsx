"use client"

import { useState } from "react"
import { Search, ChevronDown, Star, Sparkles, Gift, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = ["Лобби", "Hot RTP", "Отыгрыш бонусов", "Слоты", "Belatra", "Лайв", "Быстрые"]

const sorts = [
  { id: "best", label: "Лучшие", icon: Star, color: "text-blue-400" },
  { id: "new", label: "Новое", icon: Sparkles, color: "text-emerald-400" },
  { id: "bonus", label: "Бонусы", icon: Gift, color: "text-pink-400" },
  { id: "hot", label: "Горячие", icon: Flame, color: "text-orange-400" },
]

export function FilterBar() {
  const [activeTab, setActiveTab] = useState("Лобби")
  const [activeSort, setActiveSort] = useState("hot")

  return (
    <div className="flex flex-col gap-4">
      {/* Search row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 min-w-0 relative h-11 flex items-center bg-card border border-border rounded-lg px-3 gap-2">
          <Search className="size-4 text-muted-foreground shrink-0" aria-hidden />
          <input
            type="search"
            placeholder="Поиск"
            className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            aria-label="Поиск"
          />
        </div>
        <button className="h-11 sm:w-56 shrink-0 px-3 flex items-center justify-between bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground transition">
          <span>Провайдер</span>
          <ChevronDown className="size-4" />
        </button>
      </div>

      {/* Tabs row + sorts: scroll horizontally on small screens to avoid layout overflow */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-2 lg:justify-between">
        <div className="-mx-3 md:-mx-6 lg:mx-0 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 px-3 md:px-6 lg:px-0 w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "h-9 px-4 rounded-full text-sm font-medium transition-colors border whitespace-nowrap",
                    isActive
                      ? "bg-primary/15 text-primary border-primary/30"
                      : "bg-card text-muted-foreground border-border hover:text-foreground",
                  )}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        <div className="-mx-3 md:-mx-6 lg:mx-0 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 px-3 md:px-6 lg:px-0 w-max">
            {sorts.map((s) => {
              const Icon = s.icon
              const isActive = activeSort === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSort(s.id)}
                  className={cn(
                    "h-9 px-3 rounded-full inline-flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className={cn("size-4", s.color)} />
                  <span>{s.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
