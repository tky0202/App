import type { Metadata } from "next";
import styles from '../page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "ゲーム - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "子供と遊べるゲーム一覧です。",
};

export default function Page() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.titleH2}>ゲーム</h2>
        <ul>
          <li><Link href="./game/block">ブロック崩し</Link></li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
