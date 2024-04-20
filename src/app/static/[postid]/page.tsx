import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../microcms";
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from "../../page.module.css"
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
     return {
      postId: post.id,
     };
    });
   
    return [...paths];
   }

   export default async function StaticDetailPage({
    params: { postId },
   }: {
    params: { postId: string };
   }) {
    const post = await getDetail(postId);
   
    const { contents } = await getList();
   
    
    // ページの生成された時間を取得
    const time = new Date().toLocaleString();
   
    const otherPosts = contents.filter((p) => p.id !== postId);
   
    if (!post) {
     notFound();
    }
   
    return (
       <>
           <Header /> 
               <div className={styles.container}>
                   <div className={styles.staticTitle}>
                       <h2 className={styles.titleH2}>{post.title}</h2>
                       <p className={styles.staticNewdate}>{time}</p>
                   </div>
                   <div className={`${styles.staticwrap} ${styles.mb5}`}>{parse(post.body)}</div>
                   <h3 className={styles.titleH3}>その他の記事一覧</h3>
                   <ul className={styles.staticListwrap}>
                       {otherPosts.map((post) => {
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