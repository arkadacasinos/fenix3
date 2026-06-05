export type GameBadge = "hot" | "new" | null

export interface Game {
  title: string
  provider: string
  badge?: GameBadge
  query: string
  image?: string
}

export const games: Game[] = [
  { title: "The Dog House", provider: "Pragmatic Play", badge: "hot", query: "slot game cover the dog house cartoon dogs orange" },
  { title: "Le Fisherman", provider: "Hacksaw", badge: "hot", query: "slot game cover cartoon raccoon fisherman", image: "/images/games/le-fisherman.webp" },
  { title: "Minotaur", provider: "Endorphina", query: "slot game cover minotaur greek myth red", image: "/images/games/minotaur.webp" },
  { title: "Highway To Hell", provider: "NolimitCity", query: "slot game cover biker on motorcycle fire highway", image: "/images/games/highway-to-hell.webp" },
  { title: "Ice Bass", provider: "Belatra", query: "slot game cover ice fishing fisherman blue", image: "/images/games/ice-bass.webp" },
  { title: "Gates of Olympus", provider: "Pragmatic Play", query: "slot game cover zeus greek god lightning purple" },
  { title: "Lady Wolf Moon Megaways", provider: "Bgaming", badge: "hot", query: "slot game cover lady wolf moon blue night", image: "/images/games/lady-wolf-moon.webp" },

  { title: "Wild West Gold", provider: "Pragmatic Play", query: "slot game cover wild west cowboy gold", image: "/images/games/wild-west-gold.webp" },
  { title: "MummyLand Treasures", provider: "Belatra", badge: "hot", query: "slot game cover mummy egypt purple treasure", image: "/images/games/mummyland.webp" },
  { title: "Flight Mode", provider: "NolimitCity", query: "slot game cover airplane flight mode blue sky", image: "/images/games/flight-mode.webp" },
  { title: "Sugar Rush Super Scatter", provider: "Pragmatic Play", badge: "hot", query: "slot game cover candy sugar rush pink lollipop" },
  { title: "Nazar Wishes", provider: "Endorphina", query: "slot game cover witch fortune teller magic", image: "/images/games/nazar-wishes.webp" },
  { title: "Cyber Gypsies", provider: "Belatra", query: "slot game cover cyber gypsy money cash", image: "/images/games/cyber-gypsies.webp" },
  { title: "Kiss My Chainsaw", provider: "NolimitCity", query: "slot game cover kmc neon characters", image: "/images/games/kmc.webp" },

  { title: "Sweet Bonanza", provider: "Pragmatic Play", badge: "hot", query: "slot game cover sweet bonanza candy fruit pink", image: "/images/games/sweet-bonanza.webp" },
  { title: "Chaos Crew 2", provider: "Hacksaw", badge: "hot", query: "slot game cover chaos crew dark cartoon" },
  { title: "Seamen", provider: "NolimitCity", query: "slot game cover sailors sea men cartoon" },
  { title: "Princess Suki", provider: "Belatra", query: "slot game cover japanese princess pink" },
  { title: "Dork Unit", provider: "Hacksaw", query: "slot game cover dork unit blue cartoon" },
  { title: "Fortune of Giza", provider: "Pragmatic Play", query: "slot game cover egypt pharaoh gold pyramid" },
  { title: "Ze Zeus", provider: "Hacksaw", query: "slot game cover zeus blue lightning bolt" },

  { title: "Voodoo Coins", provider: "Belatra", query: "slot game cover voodoo skull green coins" },
  { title: "Starlight Princess", provider: "Pragmatic Play", query: "slot game cover starlight princess anime blue" },
  { title: "Le King", provider: "Hacksaw", query: "slot game cover le king lion cartoon" },
  { title: "Crown Coins", provider: "Endorphina", query: "slot game cover crown gold coins red" },
  { title: "Home Of The Brave", provider: "NolimitCity", query: "slot game cover home of the brave america" },
  { title: "2026 Hit Slot", provider: "Endorphina", query: "slot game cover 2026 hit gold neon" },
  { title: "Long Neck Fortune", provider: "Belatra", query: "slot game cover long neck bird fortune" },

  { title: "Eternal Duel", provider: "Hacksaw", query: "slot game cover eternal duel mountain blue" },
  { title: "Aztec Clusters", provider: "Bgaming", query: "slot game cover aztec gold clusters" },
  { title: "The Crypt 2", provider: "NolimitCity", query: "slot game cover crypt horror dark" },
  { title: "CULT.", provider: "Pragmatic Play", badge: "hot", query: "slot game cover cult sunglasses people summer" },
  { title: "Dr. Jekyll & Mr. Hyde 2", provider: "Betsoft", query: "slot game cover dr jekyll mr hyde dark" },
  { title: "Moneyfest", provider: "Popiplay", query: "slot game cover money pig coins gold" },
  { title: "Mental", provider: "NolimitCity", query: "slot game cover mental dark prison horror" },

  { title: "SCRATCH THE BANK", provider: "Mascot", query: "slot game cover scratch bank cats raccoon" },
  { title: "Riot: Urban Wilds", provider: "Mascot", query: "slot game cover riot urban wilds soldier" },
  { title: "Charm Of The Dragon", provider: "Hacksaw", query: "slot game cover dragon charm green cartoon" },
  { title: "Crazy Ex-Girlfriend", provider: "NolimitCity", query: "slot game cover crazy girlfriend pink" },
  { title: "3 Royal Dracos", provider: "Endorphina", query: "slot game cover three royal dragons red" },
  { title: "DRAGON'S BONANZA", provider: "Belatra", query: "slot game cover dragon bonanza red fire" },
  { title: "Gemhalla", provider: "Bgaming", badge: "hot", query: "slot game cover gemhalla viking gems" },

  { title: "Raptor 2", provider: "Yggdrasil", query: "slot game cover raptor dinosaur green" },
  { title: "Sugar Rush", provider: "Pragmatic Play", query: "slot game cover sugar rush candy egg" },
  { title: "Coins Of Leprechaun", provider: "Betsoft", query: "slot game cover leprechaun gold coins green" },
  { title: "Zeus the Invincible", provider: "Mascot", query: "slot game cover zeus invincible gold lightning" },
  { title: "TacoHell", provider: "Popiplay", query: "slot game cover taco hell chef cartoon red" },
  { title: "The Epic Win x125", provider: "Mascot", query: "slot game cover epic win seven red watermelon" },
  { title: "Danludan's Fortune Bass", provider: "Belatra", badge: "new", query: "slot game cover fisherman fortune bass" },

  { title: "Richy Hog", provider: "Belatra", query: "slot game cover rich pig cigar money" },
  { title: "Bonanza Billion", provider: "Bgaming", query: "slot game cover bonanza billion fruit candy" },
  { title: "Kenneth Must Die", provider: "NolimitCity", query: "slot game cover kenneth must die office" },
  { title: "Jackpot Pagoda", provider: "Belatra", query: "slot game cover jackpot pagoda asian gold" },
  { title: "Zeus vs Hades - Gods of War", provider: "Pragmatic Play", query: "slot game cover zeus vs hades gods war" },
  { title: "Deal With Death", provider: "Hacksaw", query: "slot game cover deal with death skull dark" },
  { title: "Dogmasons Mega Woof", provider: "Popiplay", query: "slot game cover dogmasons mega woof cats dogs" },
]
