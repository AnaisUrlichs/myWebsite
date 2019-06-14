import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";
import "./Food.css";

const Food = () => {
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
    <div className="foodGallery">
      <Swiper {...params}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <div id="food">
          <img src={require("./image/food/foodOne.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodTwo.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodThree.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodFour.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodFive.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodSix.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodSeven.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodEight.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodNine.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodTen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodEleven.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodTwelve.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodThirteen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodFourteen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodFifteen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodSixteen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodSeventeen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodEighteen.png")} />
        </div>
        <div id="food" className="foodRotate">
          <img src={require("./image/food/foodNineteen.png")} />
        </div>
        <div id="food">
          <img src={require("./image/food/foodTwenty.png")} />
        </div>
      </Swiper>
    </div>
  );
};

export default Food;
