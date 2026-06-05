"use client"

import {
  ChevronLeft,
  Gift,
  LayoutGrid,
  Trophy,
  Sparkles,
  Package,
  Crown,
  Monitor,
  Headphones,
  Send,
  Home,
  ChevronDown,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "lobby", label: "Лобби", icon: Home },
  { id: "bonuses", label: "Бонусы", icon: Gift },
  { id: "slots", label: "Слоты", icon: LayoutGrid },
  { id: "tournaments", label: "Турниры", icon: Trophy },
  { id: "gifts", label: "Дары феникса", icon: Sparkles },
  { id: "chests", label: "Сундуки", icon: Package },
  { id: "vip", label: "VIP Клуб", icon: Crown },
]

const secondaryItems = [
  { id: "desktop", label: "Десктоп приложение", icon: Monitor },
  { id: "support", label: "Поддержка", icon: Headphones },
  { id: "telegram", label: "Ускорить Telegram", icon: Send },
]

interface SidebarProps {
  mobileOpen?: boolean
  onCloseMobile?: () => void
}

export function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const [active, setActive] = useState("lobby")

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const content = (
    <>
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 sm:px-5 h-16 border-b border-sidebar-border shrink-0">
        <button
          aria-label="Назад"
          onClick={onCloseMobile}
          className="size-8 rounded-md flex items-center justify-center text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition lg:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="relative size-8 flex items-center justify-center shrink-0">
            <FenixLogo />
          </div>
          <span className="text-xl font-bold tracking-tight truncate">Fenix</span>
        </div>
        {/* Close on mobile */}
        <button
          aria-label="Закрыть меню"
          onClick={onCloseMobile}
          className="lg:hidden size-9 rounded-md flex items-center justify-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Primary nav */}
      <nav className="flex flex-col gap-1 p-3 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id)
                onCloseMobile?.()
              }}
              className={cn(
                "group flex items-center gap-3 px-3 h-11 rounded-lg text-sm font-medium transition-colors relative text-left",
                isActive
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/60",
              )}
            >
              {isActive && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-primary" />
              )}
              <Icon
                className={cn("size-[18px] shrink-0", isActive ? "text-primary" : "text-sidebar-foreground/60")}
              />
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Secondary nav */}
      <nav className="flex flex-col gap-1 p-3 mt-auto">
        {secondaryItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className="flex items-center gap-3 px-3 h-11 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors text-left"
            >
              <Icon className="size-[18px] text-sidebar-foreground/60 shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}

        {/* Language */}
        <button className="mt-4 flex items-center justify-between px-3 h-11 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/60 transition-colors border border-sidebar-border">
          <span className="flex items-center gap-2">
            <span className="size-5 rounded-full bg-gradient-to-br from-blue-600 via-white to-red-600" />
            Русский
          </span>
          <ChevronDown className="size-4" />
        </button>
      </nav>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 shrink-0 flex-col bg-sidebar border-r border-sidebar-border min-h-screen sticky top-0 max-h-screen">
        {content}
      </aside>

      {/* Mobile drawer + backdrop */}
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <button
          type="button"
          aria-label="Закрыть меню"
          onClick={onCloseMobile}
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[80vw] max-w-xs flex flex-col bg-sidebar border-r border-sidebar-border shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {content}
        </aside>
      </div>
    </>
  )
}

function FenixLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      aria-hidden="true"
    >
      <path
        d="M16 2C12 6 10 10 11 14c-1.5-1-3-2-4-4-1 5 0 9 3 12-2 0-4-1-5-3 0 5 3 9 7 10-1 1-3 1-5 0 3 2 6 3 9 1 3 2 6 1 9-1-2 1-4 1-5 0 4-1 7-5 7-10-1 2-3 3-5 3 3-3 4-7 3-12-1 2-2 3-4 4 1-4-1-8-5-12z"
        fill="url(#fenix-gradient)"
      />
      <defs>
        <linearGradient id="fenix-gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB547" />
          <stop offset="0.5" stopColor="#FF7A1A" />
          <stop offset="1" stopColor="#E03A00" />
        </linearGradient>
      </defs>
    </svg>
  )
}
