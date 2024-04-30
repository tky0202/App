import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import { YouTubeEmbed } from "@next/third-parties/google";

const EmblaCarousel = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0); // 初期値を設定

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // クライアントサイドでのみリサイズイベントをリスニングする
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const videoCount = windowWidth >= 600 ? 3 : 1;

  const generateRandomVideoIds = (count: number): string[] => {
    const videoIds = [
      "M2Zm9JT4cUs",
      "nl9WikoK8hU",
      "Q1rShU0lM0g",
      "65SET8xj6Ro",
      "T3S0gqxXjWY",
      "lNjzPQCjIkk",
      "Vry3SCavQ6Q",
      "0dfWjQBozm4",
      "TU8q12FHpn0",
      "rxR7ljbmBTs",
      "g54AzBEeioM",
      "E67brG2nSLs"
    ];
    const shuffledIds = videoIds.sort(() => Math.random() - 0.5);
    return shuffledIds.slice(0, count);
  };

  const getVideoStyle = (): string => {
    if (windowWidth >= 600) {
      return "width: 340px; height: 250px; margin: 0 1rem;";
    } else {
      return "width: 320px; height: 210px;";
    }
  };

  return (
    <div className={styles.embla}>
      <div className={styles.emblaContainer}>
        {generateRandomVideoIds(videoCount).map((videoId, index) => (
          <YouTubeEmbed
            key={index}
            videoid={videoId}
            style={getVideoStyle()}
            params="controls=0&autoplay=1&mute=1&rel=0"
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
