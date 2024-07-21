import React from "react";
// import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Carousel.css";

const Carousel = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const nextSlide = () => {
  //     setCurrentSlide((currentSlide) => {
  //       if (currentSlide === 3) {
  //         return 0;
  //       }
  //       return currentSlide + 1;
  //     });
  //   };
  //   const prevSlide = () => {
  //     setCurrentSlide((currentSlide) => {
  //       if (currentSlide === 0) {
  //         return 3;
  //       }
  //       return currentSlide - 1;
  //     });
  //   };
  return (
    <div className="carousel-box">
      <div className="carousel">
        <div className="carousel__item">
          <img src="https://picsum.photos/id/237/200/300" alt="carousel-img" />
        </div>
        <div className="carousel__item">
          <img src="https://picsum.photos/id/238/200/300" alt="carousel-img" />
        </div>
        <div className="carousel__item">
          <img src="https://picsum.photos/id/232/200/300" alt="carousel-img" />
        </div>
        <div className="carousel__item">
          <img src="https://picsum.photos/id/234/200/300" alt="carousel-img" />
        </div>
        <button className="btn btn-left">
          <FaChevronLeft />
        </button>
        <button className="btn btn-right">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
