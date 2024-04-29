import React, {} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const Gamelist = () => {

    return (
        <>
            <h3 className={styles.titleH3}>ゲーム一覧</h3>
            <ul className={styles.staticListwrap}>
                <li className={styles.staticList}>
                    <Link href="./game/block">
                        <p><Image src="/blockgame.webp" alt="管理者" width={300} height={300} className={styles.GameImageList} /></p>
                        <h4 className={`${styles.staticListtitle} ${styles.titleH4}`}>ブロック崩し</h4>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Gamelist;