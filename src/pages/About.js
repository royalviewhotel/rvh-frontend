import React from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";
import SliderComp from "../components/Slider/Slider";

const About = () => {
  return (
    <section>
      <ScrollToTop />
      <div className="bg-gallery bg-cover  bg-no-repeat h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
      </div>
      <div className="container mx-auto">
        <hr />
        <h2 className="font-primary text-[36px] lg:text-[45px] mb-10 p-2">
          About Us
        </h2>

        <h1 className="text-black font-tertiary leading-[80px] text-4xl text-center lg:mb-6 lg:text-[80px] font-bold">
          Royal View Hotel: Exemplifying Premier Hospitality
        </h1>

        <SliderComp />

        <p className="text-lg font-tertiary text-justify pb-4">
          Royal View Hotel is a premier hotel located in the heart of the city.
          We offer luxurious accommodations, exceptional dining experiences, and
          a wide range of amenities to ensure a memorable stay for our guests.
          With our convenient online booking system, you can easily reserve your
          room and enjoy a hassle-free check-in process. Experience the best of
          hospitality at Royal View Hotel.
        </p>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-black font-tertiary leading-[80px] text-4xl text-center lg:mb-6 lg:text-[80px] font-bold">
            Our Principles
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4">
            <div className="bg-white shadow-2xl p-4">
              <h1 className="text-black font-tertiary font-normal leading-[32px] text-4xl text-center lg:mb-6 lg:text-[32px]">
                Exceptional Service
              </h1>

              <p>
                We strive to provide exceptional service to our guests, ensuring
                their needs are met with utmost care and attention.
              </p>
            </div>

            <div className="bg-white shadow-2xl p-4">
              <h1 className="text-black font-tertiary font-normal leading-[32px] text-4xl text-center lg:mb-6 lg:text-[32px]">
                Unparalleled Hospitality
              </h1>

              <p>
                Our team of dedicated staff is committed to delivering
                unparalleled hospitality, making your stay at Royal View Hotel
                truly memorable.
              </p>
            </div>

            <div className="bg-white shadow-2xl p-4">
              <h1 className="text-black font-tertiary font-normal leading-[32px] text-4xl text-center lg:mb-6 lg:text-[32px]">
                Relaxation and Tranquility
              </h1>

              <p>
                Indulge in a serene and tranquil environment, where you can
                unwind and rejuvenate your mind, body, and soul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
