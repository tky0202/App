import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '@/app/page.module.css';

export const metadata:Metadata = {
    title: '404'
}

export default function Page() {
  return (
    <>
      <Header />
        <Container maxWidth="lg" className={styles.container}>
          ページが見つかりません。
        </Container>
      <Footer />
    </>
  );
}
