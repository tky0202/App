import React, {} from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css';

const ArticleList = () => {

    return (
        <>
            <div className={styles.articleList}>
                <h2 className={styles.titleH2}>更新情報</h2>
                <ul>
                    <li className={styles.articleListWrap}>
                        <p className={styles.articleListWrapP}><span className={styles.articleListWrapdata}>4月26日</span></p>
                        <p className={styles.articleListWrapP}><Link href='/static'>子育て日記を更新しました。</Link></p>
                    </li>
                    <li className={styles.articleListWrap}>
                        <p className={styles.articleListWrapP}><span className={styles.articleListWrapdata}>4月20日</span></p>
                        <p className={styles.articleListWrapP}><Link href='/static'>子育て日記を公開しました。</Link></p>
                    </li>
                    <li className={styles.articleListWrap}>
                        <p className={styles.articleListWrapP}><span className={styles.articleListWrapdata}>4月16日</span></p>
                        <p className={styles.articleListWrapP}><Link href='./map'>電車スポットを公開しました。</Link></p>
                    </li>
                    <li className={styles.articleListWrap}>
                        <p className={styles.articleListWrapP}><span className={styles.articleListWrapdata}>4月13日</span></p>
                        <p className={styles.articleListWrapP}><Link href='/'>ホームページを公開しました。</Link></p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ArticleList;
