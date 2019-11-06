import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import ReactPlayer from "react-player";
import "./SpeakingVideos.css";

const SpeakingVideos = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30
  };

  return (
    <div className="Swiper">
      <Swiper {...params} className="swiper-color">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <div>
          <ReactPlayer
            url="https://youtu.be/nVdzPBflPeo?t=275"
            className="VideoOne"
          />
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-8QYXO7drm8&feature=youtu.be&t=4118"
            className="VideoOne"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default SpeakingVideos;
