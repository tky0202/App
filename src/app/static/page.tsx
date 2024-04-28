import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from '../../../components/Header';
import Static from '../../../components/Static';
import Footer from '../../../components/Footer';
import { getList } from "../../../microcms";
import styles from "../page.module.css"

export const metadata: Metadata = {
    title: "子育て日記 - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
    description: "息子と一緒にお出かけした記録を公開しています。電車イベントだけではなく旅行にもたくさん行っているので、もし同じ計画を立てている方がいれば少しでも参考になれば嬉しいです。",
  };

export default async function StaticPage() {
 const { contents } = await getList();
 
 // ページの生成された時間を取得
 const time = new Date().toLocaleDateString('ja-JP');

 if (!contents || contents.length === 0) {
  return <h2 className={styles.titleH2}>記事がありません。</h2>;
 }
 

 return (
    <>
        <Header />
            <div className={styles.container}>
                <div className={styles.staticTitle}>
                    <h2 className={styles.titleH2}>子育て日記</h2>
                    <p className={styles.staticNewdate}>最終更新日：{time}</p>
                </div>
                <p className={styles.discription}>息子と一緒にお出かけした記録を公開しています。電車イベントだけではなく旅行にもたくさん行っているので、もし同じ計画を立てている方がいれば少しでも参考になれば嬉しいです。</p>
                <Static />
            </div>
        <Footer />
    </>
 );
}