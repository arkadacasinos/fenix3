"use client"

import { Search } from "lucide-react"

export function FenixTopbar() {
  return (
    <header className="fx-topbar2" role="banner">
      <div className="fx-topbar-search">
        <Search className="size-[18px] text-[var(--fx-muted)]" />
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
