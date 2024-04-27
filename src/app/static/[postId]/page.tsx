import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../microcms";
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from "../../page.module.css"
import Link from "next/link";
import Image from "next/image";

type Props = {
	params: { postId: string };
};

export async function generateMetadata(props: Props): Promise<Metadata> {
	const id = props.params.postId;
	const article = await getDetail(id);
	return {
		title: `${article.title} - 子供と一緒に電車デビュー！楽しいスポット＆イベント特集`,
        description: "息子と一緒にお出かけした記録を公開しています。電車イベントだけではなく旅行にもたくさん行っているので、もし同じ計画を立てている方がいれば少しでも参考になれば嬉しいです。",
	};
}


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
                </div>
                <div className={styles.staticwrap}>{parse(post.body)}</div>
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
