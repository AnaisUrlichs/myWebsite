import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";
import "./Conf.css";

const Conf = () => {
  const params = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      color: "black"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      color: "black"
    }
  };

  return (
    <div className="confGallery">
      <Swiper {...params}>
        <div id="conf">
          <img src={require("./image/conf/confOne.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confTwo.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confThree.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confFour.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confFive.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confSix.png")} />
        </div>
        <div id="conf">
          <img src={require("./image/conf/confSeven.png")} />
        </div>
      </Swiper>
    </div>
  );
};

export default Conf;
