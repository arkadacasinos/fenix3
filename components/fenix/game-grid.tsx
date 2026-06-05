import { games } from "@/lib/games"
import { GameCard } from "./game-card"

export function GameGrid() {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-4">
        {games.map((game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-4">
        <button className="h-11 px-6 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition">
          Смотреть больше
        </button>
      </div>
    </section>
  )
}
