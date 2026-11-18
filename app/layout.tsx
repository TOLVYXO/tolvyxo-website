import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  metadataBase: new URL("https://tolvyxo.eu"),
  title: {
    default: "TOLVYXO — Создание современных сайтов для бизнеса",
    template: "%s | TOLVYXO"
  },
  description: "Создаём современные сайты для бизнеса. Вы оцениваете готовый результат и платите только после одобрения. Без предоплаты.",
  openGraph: {
    title: "TOLVYXO — Сначала сайт. Потом оплата.",
    description: "Разработка сайта без предоплаты. Сначала готовый результат, затем оплата после вашего одобрения.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <IntroAnimation />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
