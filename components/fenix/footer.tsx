import { Send, Headphones, Flame } from "lucide-react"

export function FenixFooter() {
  return (
    <footer className="fx-footer" role="contentinfo">
      <div className="fx-footer-top">
        <div className="fx-footer-col fx-footer-brand">
          <div className="fx-footer-logo">
            <span className="fx-logo-mark">
              <Flame className="size-5" strokeWidth={2.5} />
            </span>
            <span className="fx-logo-text">Fenix</span>
          </div>
          <p className="fx-footer-text">
            Fenix Casino — онлайн-казино с большим выбором лицензированных слотов и live-игр от ведущих провайдеров.
            Высокие лимиты на вывод, удобные способы пополнения, честный и высокий RTP создают комфортные условия
            для игры.
          </p>
          <p className="fx-footer-text">
            Игрокам доступны бездепозитные турниры, приветственные бонусы с сундуками Fenix, функция «Дары феникса»
            с возможностью увеличить сумму вывода до x225, кешбэк до 30%, а также розыгрыши от стримеров.
          </p>
          <p className="fx-footer-text">
            Быстрая регистрация — начните играть на лучших условиях уже сейчас.
          </p>
        </div>

        <div className="fx-footer-col">
          <h3 className="fx-footer-heading">Информация</h3>
          <ul className="fx-footer-list">
            <li>
              <a href="#">Правила и Условия</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Ответственная игра</a>
            </li>
            <li>
              <a href="#">Политика AML</a>
            </li>
            <li>
              <a href="#">Криптовалюта FAQ</a>
            </li>
            <li>
              <a href="#">Аффилиаты</a>
            </li>
          </ul>
        </div>

        <div className="fx-footer-col">
          <h3 className="fx-footer-heading">Контакты</h3>
          <ul className="fx-footer-list">
            <li>
              <a href="#" className="fx-footer-contact">
                <Send className="size-4" />
                Fenix Casino
              </a>
            </li>
            <li>
              <a href="mailto:help@support-fenix.com" className="fx-footer-contact">
                <Headphones className="size-4" />
                help@support-fenix.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="fx-footer-bottom">
        <div className="fx-footer-badges">
          <span className="fx-age-badge" aria-label="Только 18+">
            18+
          </span>
          <span className="fx-license-badge" aria-label="Лицензия">
            <span className="fx-license-icon" aria-hidden="true">
              ✓
            </span>
          </span>
        </div>

        <div className="fx-footer-stores">
          <a href="#" className="fx-store-btn" aria-label="Скачать в Google Play">
            <span className="fx-store-prefix">GET IT ON</span>
            <span className="fx-store-name">Google Play</span>
          </a>
          <a href="#" className="fx-store-btn" aria-label="Скачать в App Store">
            <span className="fx-store-prefix">Download on the</span>
            <span className="fx-store-name">App Store</span>
          </a>
        </div>
      </div>

      <p className="fx-copy">
        Copyright © 2026 fenix.casino принадлежит управляется компанией 3-102-937046 SOCIEDAD DE RESPONSABILIDAD
        LIMITADA (регистрационный номер 3-102-937046), зарегистрированной по адресу: Коста Рика, Провинция Сан-Хосе
        01, кантон Эскасу 02, район Сан-Рафаэль, Гуачипелин, 400 метров к северу от Construplaza, здание Latitud
        Norte, третий этаж, в офисах Quatro Legal. fenix.casino лицензирует и регулируется на основании лицензии,
        выданной Правительством автономного острова Анжуан (Союз Коморских Островов), No.ALSI-202509033-FI1, прошёл
        все требования регуляторного соответствия и имеет законное право предоставлять осуществлять игровые операции
        для любых азартных игр и ставок.
      </p>
    </footer>
  )
}
