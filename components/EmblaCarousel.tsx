import React from 'react'
import { YouTubeEmbed } from "@next/third-parties/google";


const EmblaCarousel = () => {

  // ランダムなYouTube動画のIDを生成
  const generateRandomVideoIds = (count: number) => {
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

  return (
    <div className="embla">
        <div className="embla__container">
          {generateRandomVideoIds(window.innerWidth >= 600 ? 3 : 1).map((videoId, index) => (
          <YouTubeEmbed
          key={index}
          videoid={videoId}
          style={window.innerWidth >= 600 ? "width:363px;height:250px;margin:0 1rem;" : "width:100vw;height:210px;margin:0rem;margin-top: -3%;"}
          params="controls=0&autoplay=1&mute=1&rel=0"
        />
          ))}
        </div>
    </div>
  )
}

export default EmblaCarousel
