import Link from "next/link";
import Image from "next/image";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getList } from "../../../microcms";
import styles from "../page.module.css"

export default async function StaticPage() {
 const { contents } = await getList();

 // ページの生成された時間を取得
 const time = new Date().toLocaleDateString();

 if (!contents || contents.length === 0) {
  return <h2 className={styles.titleH2}>記事がありません。</h2>;
 }

 return (
    <>
        <Header />
            <div className={styles.container}>
                <div className={styles.staticTitle}>
                    <h2 className={styles.titleH2}>電車情報</h2>
                    <p className={styles.staticNewdate}>最終更新日：{time}</p>
                </div>
                <h3 className={styles.titleH3}>記事一覧</h3>
                <ul className={styles.staticListwrap}>
                    {contents.map((post) => {
                    return (
                    <li key={post.id} className={styles.staticList}>
                        <Link href={`/static/${post.id}`}>
                            <Image src={post.img.url} alt={post.title} width={192} height={256} className={styles.staticListimg} />
                            <h4 className={`${styles.staticListtitle} ${styles.titleH4}`}>{post.title}</h4>
                        </Link>
                    </li>
                    );
                    })}
                </ul>
            </div>
        <Footer />
    </>
 );
}