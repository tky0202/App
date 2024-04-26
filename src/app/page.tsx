"use client";

import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import News from '../../components/New';
import styles from '@/app/page.module.css';

import EmblaCarousel from '../../components/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';


const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className={styles.container}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <News />
      </Container>
      <Footer />
    </>
  );
}
