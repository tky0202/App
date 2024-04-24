import type { Metadata } from "next";
import styles from '../page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import GameBlock from '../../../components/GameBlock';

export const metadata: Metadata = {
  title: "管理者について - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "管理者の紹介ページです。埼玉県さいたま市在住の42歳で平凡なサラリーマンです。プログラミングが好きで遊びでサイトを作っています。",
};

export default function Page() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.titleH2}>ゲーム</h2>
        <GameBlock />
      </div>
      <Footer />
    </>
  );
}
