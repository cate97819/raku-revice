import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/section/Header";
import { GoogleTagManager } from "@next/third-parties/google";

const notoSansJP = Noto_Sans_JP({subsets: ["latin"], weight: ["100", "300", "500", "700", "900"]});

export const metadata: Metadata = {
  title: "ビジネスイベントの担当者向けに最適な会場を簡単に検索。｜イベントの場を探すなら「イベントノバ EVENT NOVA」",
  description: "イベントの場を探すなら「イベントノバ EVENT NOVA」！ビジネスイベントの担当者向けに最適な会場を簡単に検索。役立つ資料やホワイトペーパーもダウンロード可能。プロのアドバイスも受けられ、イベント成功への第一歩をサポートします。",
  icons: [{ rel: 'icon', url: "/nova_favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="G-7627DW9HT2"/>
      <body
        className={`${notoSansJP.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
