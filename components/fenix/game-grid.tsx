"use client"

import { Flame, Play } from "lucide-react"
import { GAMES } from "@/lib/games-data"

export function GameGrid() {
  return (
    <section aria-label="Каталог игр">
      <div className="fx-game-grid">
        {GAMES.map((game) => (
          <article key={game.title} className="fx-game-card" tabIndex={0}>
            <div className="fx-game-thumb">
              <img
                src={
                  game.image ||
                  `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(game.query)}`
                }
                alt={game.title}
                width={300}
                height={300}
                loading="lazy"
                className="fx-game-img"
              />
              {game.badge === "hot" && (
                <span className="fx-badge fx-badge-hot">
                  <Flame className="size-3" strokeWidth={2.5} />
                  Горячие
                </span>
              )}
              {game.badge === "drops" && (
                <span className="fx-badge fx-badge-drops">DROPS &amp; WINS</span>
              )}
              <div className="fx-game-hover">
                <button type="button" className="fx-play-btn" aria-label={`Играть в ${game.title}`}>
                  <Play className="size-5" fill="currentColor" />
                </button>
              </div>
            </div>
            <div className="fx-game-meta">
              <h3 className="fx-game-title">{game.title}</h3>
              <p className="fx-game-provider">{game.provider}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="fx-load-more-wrap">
        <button type="button" className="fx-load-more">
          Смотреть больше
        </button>
      </div>
    </section>
  )
}
