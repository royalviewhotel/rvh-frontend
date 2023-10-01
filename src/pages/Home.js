import React from "react";
// Components
import HeroSlider from "../components/HeroSlider";
import Projects from "../components/Slider/Projects";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { SpinnerDotted } from "spinners-react";
// import { useTranslation } from "react-i18next";
import HomeContent from "../components/HomeContent";

const Home = () => {
  const { loading } = useContext(RoomContext);
  // const { t } = useTranslation(["home"]);

  return (
    <>
      {loading && (
        <div className="h-screen w-screen fixed left-0 top-0 bg-black/90 z-50 flex justify-center items-center">
          <SpinnerDotted color="#2dadc9" />
        </div>
      )}
      <HeroSlider />
      <Projects />
      <HomeContent />
      {/* <div className="bg-[#eceff3]">
        <div className="container mx-auto max-w-[1280px]">
          <hr />
          <h2 className="font-primary text-[36px] lg:text-[45px] mb-4 p-2">
            {t("booknow")}
          </h2>
        </div>
        <div className="container mx-auto relative">
          <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-5">
            <BookForm />
          </div>
          {show && <Rooms />}
        </div>
      </div> */}
    </>
  );
};

export default Home;
