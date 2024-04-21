import type { Metadata } from "next";
import styles from '../page.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "管理者について - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集",
  description: "管理者の紹介ページです。埼玉県さいたま市在住の42歳で平凡なサラリーマンです。プログラミングが好きで遊びでサイトを作っています。",
};

export default function Page() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.titleH2}>管理者</h2>
        <h3 className={styles.titleH3}>自己紹介</h3>
        <Image src="/introduction.webp" alt="管理者" width={300} height={300} />
        <p className="supplement"><a href="https://prtimes.jp/main/html/rd/p/000000907.000049291.html" target="_blank">コクーンシティのイベント</a>で遠藤選手(リヴァプールFC)と撮影</p>
        <p className={styles.container_paragraph}>埼玉県さいたま市在住の42歳です。<br />
        お酒を楽しむのが大好きです。また、息子と一緒にお出かけしたり、家族で旅行に行くことも大好きです。<br />
        家族との時間を大切にしている普通のサラリーマンです。<br />
        息子には電車よりもサッカー好きになって欲しいんですが....<br />
        まあ、私も電車でゆっくりお酒を飲みながら乗るのは好きなので息子と一緒に楽しんでます。</p>
        <p className={styles.container_paragraph}>そんな私ですが仕事はアルバイトからWEBデザイナーとしてのキャリアをスタートしました。<br />
        制作会社での経験を積んだ後、WEBディレクターとしてキャリアチェンジし、大手企業のプロジェクトに携わりました。<br />
        その後は事業会社で10年以上toC向けのサービスに従事しています。<br />
        直近は有名なゲーム会社で働いていますが、システムに興味があり、自己学習も兼ねてこのサイトを作成しています。<br />
        プログラミングは私の趣味で、ゲーム感覚で楽しんでいます。<br />
        以下に、このサイトの開発環境について詳しく記述しています。</p>
        <h3 className={styles.titleH3}>開発環境</h3>
        <Image src="/system.webp" alt="開発環境" width={300} height={300} />
        <h4 className={styles.titleH4}>JavaScriptフレームワーク</h4>
        <p className={styles.container_paragraph}>React<br />Next.js 14.1.4</p>
        <h4 className={styles.titleH4}>開発プラットフォーム</h4>
        <p className={styles.container_paragraph}>Netlify</p>
        <h4 className={styles.titleH4}>AI画像生成ツール</h4>
        <p className={styles.container_paragraph}>Image Creator from Designer<br />(旧Bing Image Creator)<br /></p>
        <h4 className={styles.titleH4}>UIフレームワーク</h4>
        <p className={styles.container_paragraph}>MUI<br />Tailwind CSS</p>
        <h4 className={styles.titleH4}>CMS</h4>
        <p className={styles.container_paragraph}>microCMS</p>
        <h4 className={styles.titleH4}>その他</h4>
        <p className={`${styles.container_paragraph} ${styles.mb0}`}><a href="https://github.com/tky0202/blog" target="_blank" rel="noopener noreferrer">GitHub</a><br />Storybook(準備中)</p>
      </div>
      <Footer />
    </>
  );
}
