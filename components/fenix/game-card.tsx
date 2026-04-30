import Image from "next/image"
import { Play, Flame, Sparkles } from "lucide-react"
import type { Game } from "@/lib/games"
import { cn } from "@/lib/utils"

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="group flex flex-col gap-2">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border/50 transition-all hover:border-primary/40 hover:shadow-[0_0_24px_-6px] hover:shadow-primary/40">
        <Image
          src={
            game.image ??
            `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(game.query)}`
          }
          alt={game.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay with play button */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_8px_24px_-4px] shadow-primary/60 hover:scale-110 transition-transform"
            aria-label={`Играть в ${game.title}`}
          >
            <Play className="size-5 fill-current" />
          </button>
        </div>

        {/* Badge */}
        {game.badge && (
          <div
            className={cn(
              "absolute top-1.5 left-1.5 inline-flex items-center gap-1 h-6 px-2 rounded-md text-[11px] font-semibold backdrop-blur-sm",
              game.badge === "hot"
                ? "bg-orange-500/90 text-white"
                : "bg-emerald-500/90 text-white",
            )}
          >
            {game.badge === "hot" ? (
              <>
                <Flame className="size-3" /> Горячие
              </>
            ) : (
              <>
                <Sparkles className="size-3" /> Новое
              </>
            )}
          </div>
        )}
      </div>

      <div className="px-1">
        <h3 className="text-sm font-medium text-foreground truncate">{game.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{game.provider}</p>
      </div>
    </article>
  )
}
