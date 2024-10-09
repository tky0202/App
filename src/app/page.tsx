"use client";

import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '@/app/page.module.css';
import dynamic from 'next/dynamic';

const EmblaCarousel = dynamic(() => import('../../components/EmblaCarousel'))
const New = dynamic(() => import('../../components/New'))
const Static = dynamic(() => import('../../components/Static'))
const Gamelist = dynamic(() => import('../../components/game/Gamelist'))



export default function Page() {
  return (
    <>
      <Header />
        <h2 className={styles.topH2}>子供が楽しめる電車スポットやイベントを紹介</h2>
        <Container maxWidth="lg" className={styles.container}>
          {/* <EmblaCarousel /> */}
          <New />
          <Static />
        </Container>
      <Footer />
    </>
  );
}
