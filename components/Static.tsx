"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { getList } from "../microcms";
import styles from "../src/app/page.module.css";

const StaticPage: React.FC = () => {
    const [contents, setContents] = useState<any[]>([]);
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const { contents } = await getList();
            setContents(contents);

            // ページの生成された時間を取得
            const formattedTime = new Date().toLocaleDateString('ja-JP');
            setTime(formattedTime);
        };

        fetchData();
    }, []);

    if (!contents || contents.length === 0) {
        return <h3 className={styles.titleH3}>記事がありません。</h3>;
    }

    return (
        <>
            <h3 className={styles.titleH3}>記事一覧</h3>
            <ul className={styles.staticListwrap}>
                {contents.map((post) => (
                    <li key={post.id} className={styles.staticList}>
                        <Link href={`/static/${post.id}`}>
                            <Image src={post.img.url} alt={post.title} width={192} height={256} className={styles.staticListimg} />
                            <h4 className={`${styles.staticListtitle} ${styles.titleH4}`}>{post.title.length > 17 ? `${post.title.slice(0, 17)}...` : post.title}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default StaticPage;
