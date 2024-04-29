"use client";

import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import { Home, Person, Article, AddLocationAlt, SportsEsports } from '@mui/icons-material';
import Link from 'next/link';
import styles from '@/app/page.module.css'
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
            <BottomNavigationAction
              LinkComponent={Link}
              href="/"
              icon={<Home />}
              disabled={pathname === '/'}
              label="HOME"
              className={`${styles.footerAction} ${pathname === '/' ? '' : styles.footerActionDisabled}`}
            />
            <BottomNavigationAction
              LinkComponent={Link}
              href="/map"
              icon={<AddLocationAlt />}
              disabled={pathname === '/map'}
              label="電車スポット"
              className={`${styles.footerAction} ${pathname === '/map' ? '' : styles.footerActionDisabled}`}
            />
            <BottomNavigationAction
              LinkComponent={Link}
              href="/static"
              icon={<Article />}
              disabled={pathname === '/static'}
              label="子育て日記"
              className={`${styles.footerAction} ${pathname === '/static' ? '' : styles.footerActionDisabled}`}
            />
           <BottomNavigationAction
              LinkComponent={Link}
              href="/game"
              icon={<SportsEsports />}
              disabled={pathname === '/gamen'}
              label="ゲーム"
              className={`${styles.footerAction} ${pathname === '/game' ? '' : styles.footerActionDisabled}`}
            />
          <p className={`${styles.footerCopy}`}>
            ©️ tky0202
          </p>
    </footer>
  );
};

export default Footer;
