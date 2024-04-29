import type { Metadata } from "next";
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Block from '../../../../components/game/Block';

export const metadata: Metadata = {
  title: "ゲーム - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "子供と遊べるゲーム一覧です。",
};

export default function Page() {

  return (
    <>
        <Header />
        <Block />
        <Footer />
    </>
  );
}
