import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import slide1 from "../../assets/img/heroSlider/home-slider/1.avif";
import slide2 from "../../assets/img/heroSlider/home-slider/2.avif";
import slide3 from "../../assets/img/heroSlider/home-slider/3.avif";
import slide4 from "../../assets/img/heroSlider/home-slider/4.avif";
import slide5 from "../../assets/img/heroSlider/home-slider/5.avif";
import slide6 from "../../assets/img/heroSlider/home-slider/6.avif";
import slide7 from "../../assets/img/heroSlider/home-slider/7.avif";
import slide8 from "../../assets/img/heroSlider/home-slider/8.avif";
import slide9 from "../../assets/img/heroSlider/home-slider/9.avif";
import slide10 from "../../assets/img/heroSlider/home-slider/10.avif";
import slide11 from "../../assets/img/heroSlider/home-slider/11.avif";
import slide12 from "../../assets/img/heroSlider/home-slider/12.avif";
import slide13 from "../../assets/img/heroSlider/home-slider/13.avif";
import slide14 from "../../assets/img/heroSlider/home-slider/14.avif";
import slide15 from "../../assets/img/heroSlider/home-slider/15.avif";
import slide16 from "../../assets/img/heroSlider/home-slider/16.avif";

let data = [
  {
    img: slide1,
  },
  {
    img: slide2,
  },
  {
    img: slide3,
  },
  {
    img: slide4,
  },
  {
    img: slide5,
  },
  {
    img: slide6,
  },
  {
    img: slide7,
  },
  {
    img: slide8,
  },
  {
    img: slide9,
  },
  {
    img: slide10,
  },
  {
    img: slide11,
  },
  {
    img: slide12,
  },
  {
    img: slide13,
  },
  {
    img: slide14,
  },
  {
    img: slide15,
  },
  {
    img: slide16,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
