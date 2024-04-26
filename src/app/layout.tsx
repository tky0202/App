import type { Metadata } from "next";
import { GoogleAdScript } from "../../components/googleads-script";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "埼玉県を中心に、子供が楽しめる電車スポットやイベントを紹介するサイトです。親子で電車を見て乗って、楽しい思い出を作りましょう！",
  appleWebApp: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="theme-light">
      <body>
        {children}
        <GoogleTagManager gtmId="G-WME5BXPEKS" />
        <GoogleAnalytics gaId="G-WME5BXPEKS" />
        <GoogleAdScript />
      </body>
    </html>
  );
}
