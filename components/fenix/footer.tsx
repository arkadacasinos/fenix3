import { Send, Headphones, Apple, Play } from "lucide-react"

const infoLinks = [
  "Правила и Условия",
  "Политика конфиденциальности",
  "Ответственная игра",
  "Политика AML",
  "Криптовалюта FAQ",
  "Аффилиаты",
]

export function Footer() {
  return (
    <footer className="mt-12 pt-10 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-10">
        {/* About */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <FenixMark />
            <span className="text-lg font-bold">Fenix</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
            Fenix Casino — онлайн-казино с большим выбором лицензированных слотов и live-игр от ведущих провайдеров.
            Высокие лимиты на вывод, удобные способы пополнения, честный и высокий RTP создают комфортные условия
            для игры.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
            Игрокам доступны бездепозитные турниры, приветственные бонусы с сундуками Fenix, функция «Дары феникса»
            с возможностью увеличить сумму вывода до x225, кэшбэк до 30%, а также розыгрыши от стримеров.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
            Быстрая регистрация — начните играть на лучших условиях уже сейчас.
          </p>
        </div>

        {/* Info links */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Информация</h4>
          <ul className="space-y-3">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Контакты</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <Send className="size-4 text-primary shrink-0" /> Fenix Casino
              </a>
            </li>
            <li>
              <a
                href="mailto:help@support-fenix.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition break-all"
              >
                <Headphones className="size-4 text-primary shrink-0" /> help@support-fenix.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* App store buttons + age */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full border border-border flex items-center justify-center text-xs font-semibold">
            18+
          </div>
          <div className="size-10 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-emerald-400 text-xs font-bold">CG</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 h-12 px-4 rounded-lg bg-foreground text-background hover:opacity-90 transition"
            aria-label="Скачать в Google Play"
          >
            <Play className="size-6 fill-current" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase opacity-70">Get it on</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 h-12 px-4 rounded-lg bg-foreground text-background hover:opacity-90 transition"
            aria-label="Скачать в App Store"
          >
            <Apple className="size-6 fill-current" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase opacity-70">Download on the</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="py-6 border-t border-border">
        <p className="text-xs text-muted-foreground/80 leading-relaxed text-pretty">
          Copyright © 2026 fenix.casino принадлежит управляется компанией 3-102-937046 SOCIEDAD DE RESPONSABILIDAD
          LIMITADA (регистрационный номер 3-102-937046), зарегистрированной по адресу: Коста Рика, Провинция Сан-Хосе
          01, кантон Эскасу 02, район Сан-Рафаэль, Гуачипелин, 400 метров к северу от Construplaza, здание Latitud
          Norte, третий этаж, в офисах Quatro Legal. fenix.casino лицензируется и регулируется на основании лицензии,
          выданной Правительством автономного острова Анжуан (Союз Коморских Островов), No.ALSI-202509033-FI1, прошёл
          все требования регуляторного соответствия и имеет законное право предоставлять осуществлять игровые операции
          для любых азартных игр и ставок.
        </p>
      </div>
    </footer>
  )
}

function FenixMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6" aria-hidden="true">
      <path
        d="M16 2C12 6 10 10 11 14c-1.5-1-3-2-4-4-1 5 0 9 3 12-2 0-4-1-5-3 0 5 3 9 7 10-1 1-3 1-5 0 3 2 6 3 9 1 3 2 6 1 9-1-2 1-4 1-5 0 4-1 7-5 7-10-1 2-3 3-5 3 3-3 4-7 3-12-1 2-2 3-4 4 1-4-1-8-5-12z"
        fill="url(#fmark)"
      />
      <defs>
        <linearGradient id="fmark" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB547" />
          <stop offset="0.5" stopColor="#FF7A1A" />
          <stop offset="1" stopColor="#E03A00" />
        </linearGradient>
      </defs>
    </svg>
  )
}
