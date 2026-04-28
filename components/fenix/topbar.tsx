"use client"

import { Search, Menu, Flame } from "lucide-react"

interface FenixTopbarProps {
  onMenuClick?: () => void
}

export function FenixTopbar({ onMenuClick }: FenixTopbarProps) {
  return (
    <header className="fx-topbar2" role="banner">
      <button
        type="button"
        className="fx-burger"
        aria-label="Открыть меню"
        onClick={onMenuClick}
      >
        <Menu className="size-5" />
      </button>

      <a href="#" className="fx-logo fx-logo--mobile" aria-label="Fenix Casino">
        <span className="fx-logo-mark">
          <Flame className="size-4" strokeWidth={2.5} />
        </span>
        <span className="fx-logo-text">Fenix</span>
      </a>

      <div className="fx-topbar-search">
        <Search className="size-[18px] text-[var(--fx-muted)] flex-shrink-0" />
        <input
          type="text"
          className="fx-search-input"
          placeholder="Поиск игры"
          aria-label="Поиск игры"
        />
        <kbd className="fx-kbd">
          <span>Ctrl</span>
          <span className="fx-kbd-plus">+</span>
          <span>K</span>
        </kbd>
      </div>

      <div className="fx-topbar-actions">
        <button type="button" className="fx-btn-login">
          Вход
        </button>
        <button type="button" className="fx-btn-signup">
          Регистрация
        </button>
      </div>
    </header>
  )
}
