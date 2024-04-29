import type { Metadata } from "next";
import Block from '../../../../components/game/Block';

export const metadata: Metadata = {
  title: "ゲーム - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "子供と遊べるゲーム一覧です。",
};

export default function Page() {

  return (
    <>
        <Block />
    </>
  );
}
