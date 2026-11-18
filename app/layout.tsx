import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tolvyxo.eu"),
  title: {
    default: "TOLVYXO — Digital Experiences That Move Business Forward",
    template: "%s | TOLVYXO"
  },
  description: "TOLVYXO is a digital agency creating high-performing websites, thoughtful digital experiences and growth systems for ambitious businesses.",
  openGraph: {
    title: "TOLVYXO — Design. Develop. Scale.",
    description: "Digital experiences that move business forward.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
