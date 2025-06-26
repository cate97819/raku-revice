import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/section/Header";

const notoSansJP = Noto_Sans_JP({subsets: ["latin"], weight: ["100", "300", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "EVENT NOVA｜さがそう、イベントの場。",
  description: "",
  icons: [{ rel: 'icon', url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
