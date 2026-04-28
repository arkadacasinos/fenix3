"use client"

import {
  ChevronLeft,
  Home,
  Gift,
  LayoutGrid,
  Trophy,
  Sparkles,
  Package,
  Crown,
  Monitor,
  Headphones,
  Send,
  Flame,
  X,
} from "lucide-react"
import { useState } from "react"

const NAV_ITEMS = [
  { id: "lobby", label: "Лобби", icon: Home },
  { id: "bonus", label: "Бонусы", icon: Gift },
  { id: "slots", label: "Слоты", icon: LayoutGrid },
  { id: "tournaments", label: "Турниры", icon: Trophy },
  { id: "fenix-gifts", label: "Дары феникса", icon: Sparkles },
  { id: "chests", label: "Сундуки", icon: Package },
  { id: "vip", label: "VIP Клуб", icon: Crown },
]

const SECONDARY_ITEMS = [
  { id: "desktop", label: "Десктоп приложение", icon: Monitor },
  { id: "support", label: "Поддержка", icon: Headphones },
  { id: "telegram", label: "Ускорить Telegram", icon: Send },
]

interface FenixSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function FenixSidebar({ isOpen = false, onClose }: FenixSidebarProps) {
  const [active, setActive] = useState("lobby")

  return (
    <>
      <div
        className={`fx-sidebar-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fx-sidebar ${isOpen ? "is-open" : ""}`}
        aria-label="Главная навигация"
      >
        <div className="fx-sidebar-head">
          <button
            className="fx-collapse-btn fx-collapse-btn--desktop"
            aria-label="Свернуть меню"
            type="button"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            className="fx-collapse-btn fx-collapse-btn--mobile"
            aria-label="Закрыть меню"
            type="button"
            onClick={onClose}
          >
            <X className="size-5" />
          </button>
          <a href="#" className="fx-logo" aria-label="Fenix Casino">
            <span className="fx-logo-mark">
              <Flame className="size-5" strokeWidth={2.5} />
            </span>
            <span className="fx-logo-text">Fenix</span>
          </a>
        </div>

        <nav className="fx-nav-primary">
          <ul>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(item.id)
                      onClose?.()
                    }}
                    className={`fx-nav-item ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && <span className="fx-nav-dot" aria-hidden="true" />}
                    <Icon className="size-[18px]" strokeWidth={2} />
                    <span>{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="fx-sidebar-divider" aria-hidden="true" />

        <nav className="fx-nav-secondary" aria-label="Дополнительные ссылки">
          <ul>
            {SECONDARY_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <a href="#" className="fx-nav-item">
                    <Icon className="size-[18px]" strokeWidth={2} />
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="fx-sidebar-foot">
          <button type="button" className="fx-lang-select">
            <span className="fx-lang-flag" aria-hidden="true">
              RU
            </span>
            <span>Русский</span>
          </button>
        </div>
      </aside>
    </>
  )
}
