import React from "react";
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper Styles
import "swiper/css";
import "swiper/css/effect-fade";
// Import Required Modules
import { EffectFade, Autoplay } from "swiper";
// Images
import Img1 from "../assets/img/heroSlider/Slider/1.jpg";
import Img2 from "../assets/img/heroSlider/Slider/2.jpg";
import Img3 from "../assets/img/heroSlider/Slider/3.jpg";
import Img4 from "../assets/img/heroSlider/Slider/4.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Experience luxury and comfort in the heart of the city",
    bg: Img1,
    btnText: "SEE OUR ROOMS",
  },
  {
    title: "Experience luxury and comfort in the heart of the city",
    bg: Img2,
    btnText: "SEE OUR ROOMS",
  },
  {
    title: "Experience luxury and comfort in the heart of the city",
    bg: Img3,
    btnText: "SEE OUR ROOMS",
  },
  {
    title: "Experience luxury and comfort in the heart of the city",
    bg: Img4,
    btnText: "SEE OUR ROOMS",
  },
];

const HeroSlider = () => {
  const { t } = useTranslation(["common"]);

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[1080px]"
    >
      <p className="text-white absolute top-[20%] left-1/2 h-full w-full z-50">
        <div class="content hidden lg:block">
          <h2 className="font-tertiary font-bold tracking-[6px]">
            {t("royalviewhotel")}
          </h2>
          <h2 className="font-tertiary font-bold tracking-[6px]">
            {t("royalviewhotel")}
          </h2>
        </div>
      </p>
      {slides.map((slide, index) => {
        // Destructure Slide
        const { bg } = slide;
        return (
          <SwiperSlide
            className="h-full relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center cursor-pointer">
              <div className="pt-12 lg:pt-0 lg:text-2xl uppercase font-tertiary tracking-[6px] mb-5">
                {t("justenjoyandrelax")}
              </div>
              <h1 className="text-[22px] font-primary uppercase tracking-[2px] max-w-[1080px] lg:leading-[80px] lg:text-[48px] mb-6">
                <h2 class="gradient-heading">{t("tagline")}</h2>
              </h1>

              <Link
                to={"/our-rooms"}
                className={`bg-gray-500 hover:bg-gray-500 ${
                  localStorage.getItem("i18nextLng") === "ru" &&
                  "w-[35%] lg:text-2xl lg:w-[32%]"
                } ${
                  localStorage.getItem("i18nextLng") === "ar" &&
                  "w-[20%] lg:text-2xl lg:w-[20%]"
                } ${
                  localStorage.getItem("i18nextLng") === "en" &&
                  "w-[20%] lg:text-2xl lg:w-[16%]"
                } btn btn-lg px-0 arabic-text font-bold btn-primary mx-auto border-2 border-white`}
              >
                <h2 class="gradient-heading" style={{ letterSpacing: "-2px" }}>
                  {t("booknow")}
                </h2>
              </Link>
            </div>
            <div className="absolute top-0 h-full w-full">
              <img className="object-cover h-full w-full" src={bg} alt="bg" />
            </div>
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/60"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
