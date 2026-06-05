"use client"

import { Star, Flame } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="fx-hero-banner" aria-label="Турнир недели">
      <div className="fx-hero-banner-bg" aria-hidden="true">
        <img
          src="/images/hero-flames.jpg"
          alt=""
          className="fx-hero-banner-img"
        />
        <div className="fx-hero-banner-shade" />
      </div>

      <div className="fx-hero-banner-content">
        <div className="fx-hero-banner-left">
          <span className="fx-hero-pill">
            <Flame className="size-3.5" strokeWidth={2.5} />
            Турнир недели
          </span>
          <h1 className="fx-hero-title">
            FENIX <span className="fx-hero-title-accent">RAGE</span>
          </h1>
          <p className="fx-hero-sub">Призовой фонд 1 000 000 ₽ · 200 мест</p>
          <div className="fx-hero-rating" aria-label="Рейтинг 4.9 из 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4"
                fill="var(--fx-orange)"
                stroke="var(--fx-orange)"
              />
            ))}
            <span className="fx-hero-rating-text">Уровень: VI</span>
          </div>
        </div>
        <div className="fx-hero-banner-right">
          <button type="button" className="fx-btn-signup fx-btn-large">
            Участвовать
          </button>
        </div>
      </div>
    </section>
  )
}
