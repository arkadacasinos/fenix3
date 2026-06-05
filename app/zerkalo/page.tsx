import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import ZerkaloClient from "./client-page";

export const metadata: Metadata = {
  title: "Рабочее зеркало Fenix Casino | Официальный сайт Феникс Казино",
  description: "Ищете рабочее зеркало Феникс Казино на сегодня? Заходите на официальный сайт Fenix Casino, чтобы играть онлайн без блокировок. Быстрые выплаты и лучшие слоты!",
  keywords: [
    "fenix casino", "fenix casino зеркало", "fenix casino играть", 
    "fenix casino официальный", "fenix casino официальный сайт", 
    "fenix казино", "феникс казино", "феникс казино зеркало", 
    "феникс казино зеркало рабочее", "феникс казино играть", 
    "феникс казино онлайн", "феникс казино официальный", 
    "феникс казино официальный сайт"
  ],
  alternates: {
    canonical: `${siteConfig.url}/zerkalo`,
  },
  openGraph: {
    title: "Рабочее зеркало Fenix Casino | Играть онлайн",
    description: "Актуальный доступ к Феникс Казино. Переходи и играй!",
    url: `${siteConfig.url}/zerkalo`,
  },
};

export default function ZerkaloPage() {
  return <ZerkaloClient />;
}
