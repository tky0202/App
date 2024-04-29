import type { Metadata } from "next";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Gamelist from '../../../components/game/Gamelist'
import styles from '../page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "ゲーム - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "子供と遊べるゲーム一覧です。",
};

export default function Page() {

  return (
    <>
      <Header />
        <div className={styles.container}>
          <h2 className={styles.titleH2}>子供が遊べるゲーム</h2>
          <p className={`${styles.discription} ${styles.p1} ${styles.pb5}`}>合間に多くのテックブログとChatCPTに助けられながらNext.jsでゲームを作り始めました。バグも多いと思いますが暖かい目で遊んでください。</p>
          <Gamelist />
        </div>
      <Footer />
    </>
  );
}
