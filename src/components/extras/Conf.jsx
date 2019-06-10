import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";
import "./Conf.css";

const Conf = () => {
  const params = {
    modules: [Pagination, Navigation],
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
    <div className="confGallery">
      <Swiper {...params}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <div>
          <img id="conf" src={require("./image/conf/confOne.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confTwo.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confThree.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confFour.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confFive.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confSix.png")} />
        </div>
        <div>
          <img id="conf" src={require("./image/conf/confSeven.png")} />
        </div>
      </Swiper>
    </div>
  );
};

export default Conf;
