"use client"

import { Search, Menu, Star, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onOpenMobileMenu?: () => void
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  const [slide, setSlide] = useState(0)
  const slides = [0, 1, 2, 3]

  return (
    <header className="relative">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="h-14 md:h-16 px-3 md:px-6 flex items-center gap-2 md:gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Открыть меню"
            className="lg:hidden size-10 shrink-0 rounded-lg flex items-center justify-center text-foreground hover:bg-card transition"
          >
            <Menu className="size-5" />
          </button>

          {/* Search (desktop / tablet) */}
          <div className="hidden sm:flex flex-1 max-w-xl">
            <div className="relative h-10 w-full flex items-center bg-card border border-border rounded-lg px-3 gap-2">
              <Search className="size-4 text-muted-foreground" aria-hidden />
              <input
                type="search"
                placeholder="Поиск игры"
                className="flex-1 min-w-0 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                aria-label="Поиск игры"
              />
              <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono">Ctrl</kbd>
                <span>+</span>
                <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono">K</kbd>
              </div>
            </div>
          </div>

          {/* Mobile search icon */}
          <button
            type="button"
            aria-label="Поиск"
            className="sm:hidden size-10 ml-auto shrink-0 rounded-lg flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-foreground transition"
          >
            <Search className="size-4" />
          </button>

          {/* Auth */}
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button className="h-10 px-3 md:px-5 rounded-lg text-sm font-medium text-foreground hover:bg-card transition">
              Вход
            </button>
            <button className="h-10 px-3 md:px-5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition shadow-[0_4px_20px_-4px] shadow-primary/50 whitespace-nowrap">
              Регистрация
            </button>
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="px-3 md:px-6 pt-4">
        <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 isolate">
          {/* Background image */}
          <Image
            src="/images/hero-banner.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover -z-10"
            aria-hidden
          />
          {/* Vignette / gradients */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
          {/* Glow behind prize */}
          <div className="hidden md:block absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 size-72 lg:size-96 rounded-full bg-primary/30 blur-3xl -z-10" aria-hidden />

          {/* Content grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-4 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem] lg:min-h-[24rem]">
            {/* Text column */}
            <div className="flex flex-col justify-between gap-4 md:gap-6 h-full min-w-0">
              <div className="space-y-2 md:space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-primary/15 border border-primary/30 text-[11px] font-semibold text-primary uppercase tracking-wide">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  Эксклюзивный бонус
                </span>
                <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]">
                  Добро пожаловать в <span className="text-primary">Fenix Casino</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-md text-pretty">
                  Получи приветственный бонус до{" "}
                  <span className="text-foreground font-semibold">225%</span> и бесплатные сундуки феникса на первый
                  депозит.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <button className="h-10 sm:h-11 px-5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition shadow-[0_4px_20px_-4px] shadow-primary/50 inline-flex items-center gap-1.5">
                    Забрать бонус
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="h-10 sm:h-11 px-5 rounded-lg text-sm font-medium bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card transition">
                    Подробнее
                  </button>
                </div>
              </div>

              {/* Bottom row: rating + carousel dots */}
              <div className="flex items-end justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="text-muted-foreground">Уровень</span>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-3.5",
                          i <= 4 ? "fill-primary text-primary" : "text-muted-foreground/40",
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {slides.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSlide(i)}
                      aria-label={`Слайд ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        slide === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Prize column */}
            <div className="hidden md:flex relative items-center justify-center w-56 lg:w-72 xl:w-80 aspect-square shrink-0">
              <Image
                src="/images/hero-prize.webp"
                alt="Призы Fenix Casino: автомобиль, ноутбук, телефон, сундук с золотом"
                fill
                priority
                sizes="(max-width: 1024px) 14rem, 20rem"
                className="object-contain drop-shadow-[0_20px_40px_rgba(255,107,0,0.35)] animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
