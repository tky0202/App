"use client"

import React, { useEffect, useState, useRef } from "react";
import Header from './Header';
import Footer from './Footer';
import styles from '../src/app/page.module.css';
import { Loader } from '@googlemaps/js-api-loader';

export default function Page() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  
  useEffect(() => {
    const renderVideoPlayer = () => {
      const videoPlayerContainer = document.getElementById("video-player");
      if (videoPlayerContainer && videoUrl) {
        videoPlayerContainer.innerHTML = `
          <video width="320" height="180" controls autoplay>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      }
    };

    const loadMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly'
      });
      const google = await loader.load();
      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center: { lat: 35.8925913640772, lng: 139.63465727646832 },
        zoom: 13,
        mapId: 'MY_NEXTJS_MAPID'
      });

      const markers = [
        { position: { lat: 35.8925913640772, lng: 139.63465727646832 }, videoId: "M2Zm9JT4cUs" },
        { position: { lat: 35.874936, lng: 139.643003 }, videoId: "TU8q12FHpn0" },
        { position: { lat: 35.875662, lng: 139.642610 }, videoId: "Q1rShU0lM0g" },
        { position: { lat: 35.875786, lng: 139.642994 }, videoId: "Wcvp7M2o69E" },
        { position: { lat: 35.893895, lng: 139.632473 }, videoId: "g54AzBEeioM" },
        { position: { lat: 35.893696, lng: 139.632912 }, videoId: "E67brG2nSLs" },
        { position: { lat: 35.89403423021694, lng: 139.63013304918198 }, videoId: "nl9WikoK8hU" },
        { position: { lat: 35.88193960844639, lng: 139.62572800191248 }, videoId: "65SET8xj6Ro" },
        { position: { lat: 35.88182116907935, lng: 139.62575616543708 }, videoId: "T3S0gqxXjWY" },
        { position: { lat: 35.88189886095311, lng: 139.6257890226301 }, videoId: "rxR7ljbmBTs" },
        { position: { lat: 35.10278233725612, lng: 139.0765680403531 }, videoId: "0dfWjQBozm4" },
        { position: { lat: 35.679808982832625, lng: 139.76766440579755 }, videoId: "Vry3SCavQ6Q" },
        { position: { lat: 34.975561, lng: 139.092232 }, videoId: "lNjzPQCjIkk" },
      ];

      const addMarkerClickListener = (marker: google.maps.Marker, videoId: string) => {
        const infoWindow = new google.maps.InfoWindow();
        marker.addListener("click", () => {
          if (infoWindow) {
            infoWindow.setContent(`<iframe class='map_iframe' src='https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&mute=1&rel=0'></iframe>`);
            infoWindow.open(map, marker);
            renderVideoPlayer();
          }
        });
      };

      markers.forEach(({ position, videoId }) => {
        const marker = new google.maps.Marker({
          map,
          position
        });
        addMarkerClickListener(marker, videoId);
      });
    };

    loadMap();
  }, [videoUrl]);

  return (
    <>
      <Header />
      <div style={{ width: '100vw', height: '100vh' }} ref={mapRef} />
      <p className={`${styles.discription} ${styles.p1} ${styles.pb5}`}>管理人がiPhoneで動画撮影した電車をGoogle Mapにアップロードしています。品質は凄く悪く、本当は秘密のスポット的な動画を撮影したいんですが、あくまでもお出かけ途中に撮影しているので駅が多いです..。参考になるかわかりませんがご覧ください。</p>
      <Footer />
    </>
  );
}
