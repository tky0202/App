"use client";

import React from 'react';
import { BottomNavigationAction } from '@mui/material';
import { Home, Person, Article, AddLocationAlt } from '@mui/icons-material';
import Link from 'next/link';
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
              label="電車情報"
              className={`${styles.footerAction} ${pathname === '/static' ? '' : styles.footerActionDisabled}`}
            />
           <BottomNavigationAction
              LinkComponent={Link}
              href="/introduction"
              icon={<Person />}
              disabled={pathname === '/introduction'}
              label="管理者"
              className={`${styles.footerAction} ${pathname === '/introduction' ? '' : styles.footerActionDisabled}`}
            />
          <p className={`${styles.footerCopy}`}>
            ©️ tky0202
          </p>
    </footer>
  );
};

export default Footer;
