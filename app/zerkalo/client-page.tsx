"use client"
import { useState } from "react"
import { Sidebar } from "@/components/fenix/sidebar"
import { Header } from "@/components/fenix/header"
import { FilterBar } from "@/components/fenix/filter-bar"
import { GameGrid } from "@/components/fenix/game-grid"
import { Footer } from "@/components/fenix/footer"
export default function ZerkaloClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background flex w-full overflow-x-hidden">
      <Sidebar mobileOpen={mobileMenuOpen} onCloseMobile={() => setMobileMenuOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="flex-1 px-3 md:px-6 py-6 flex flex-col gap-6 min-w-0">
          <FilterBar />
          <GameGrid />
        </main>
        <section className="px-3 md:px-6 py-8 text-muted-foreground">
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fenix Casino официальный сайт и рабочее зеркало
            </h1>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Приветствуем вас на платформе <strong>fenix casino</strong> — современном клубе для настоящих ценителей азарта. Если у вас возникли трудности с доступом на основной ресурс, на этой странице вы всегда найдете актуальное <strong>fenix casino зеркало</strong>. Оно полностью дублирует <strong>fenix casino официальный сайт</strong>, сохраняя ваши балансы, бонусы и историю ставок.
              </p>
              
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">
                Как безопасно в Феникс Казино играть онлайн?
              </h2>
              <p>
                Многие пользователи ищут надежный <strong>феникс казино официальный сайт</strong>, чтобы быть уверенными в выплатах. Используя наше <strong>феникс казино зеркало рабочее</strong>, вы получаете защищенное соединение и круглосуточный доступ к тысячам лицензионных слотов. Вам не нужно регистрироваться заново: <strong>fenix казино</strong> поддерживает единую базу данных. Просто авторизуйтесь и продолжайте в <strong>феникс казино играть</strong> с любого устройства.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-6 mb-2">
                Преимущества игры на официальном зеркале
              </h2>
              <p>
                Выбирая <strong>fenix casino официальный</strong> ресурс, игроки получают гарантию честных результатов. Наш <strong>феникс казино официальный</strong> портал предлагает мгновенные депозиты и быстрый вывод средств. Если провайдер заблокировал прямой адрес, именно <strong>феникс казино зеркало</strong> станет вашим пропуском в мир больших выигрышей. 
              </p>
              <p>
                Чтобы прямо сейчас в <strong>fenix casino играть</strong> на реальные деньги, пройдите быструю авторизацию. <strong>Феникс казино онлайн</strong> — это ваш надежный партнер, где безопасность и комфорт клиентов всегда стоят на первом месте. Открывайте <strong>феникс казино</strong> и забирайте свои приветственные бонусы!
              </p>
            </div>
          </div>
        </section>
        <div className="px-3 md:px-6">
          <Footer />
        </div>
      </div>
    </div>
  )
}
