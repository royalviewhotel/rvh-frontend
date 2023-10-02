import React, { useEffect, useState } from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom/dist";
// import { GiShower, GiSwan } from "react-icons/gi";
// import { PiMountainsFill } from "react-icons/pi";
import {
  FaCheck,
  // FaCity,
  // FaCocktail,
  FaHandPointRight,
  // FaSnowflake,
} from "react-icons/fa";
// import { AiTwotoneStar } from "react-icons/ai";
// import { MdOutlineScreenshotMonitor } from "react-icons/md";
import axios from "axios";
import BookForm from "../components/BookForm";
import { SpinnerDotted } from "spinners-react";

const OurRooms = () => {
  const [roomData, setRoomData] = useState([]);
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [adults, setAdults] = useState("1 Adult");
  const [childrens, setChildrens] = useState("0 Children");
  const [loading, setLoading] = useState(true);
  const [details1, setDetails1] = useState(false);
  const [details2, setDetails2] = useState(false);
  const [details3, setDetails3] = useState(false);
  const [details4, setDetails4] = useState(false);

  useEffect(() => {
    axios
      .get("https://rvh-backend-coral.vercel.app/api/room/")
      .then((result) => {
        setLoading(false);
        setRoomData(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [imageSrc, setImageSrc] = useState();
  const [isActiveIndex, setActiveIndex] = useState(0);

  const handleSelectedImage = (src, activeIndex) => {
    setImageSrc(src);
    setActiveIndex(activeIndex);
  };

  const [imageSrc2, setImageSrc2] = useState();
  const [isActiveIndex2, setActiveIndex2] = useState(0);

  const handleSelectedImage2 = (src, isActiveIndex2) => {
    setImageSrc2(src);
    setActiveIndex2(isActiveIndex2);
  };

  const [imageSrc3, setImageSrc3] = useState();
  const [isActiveIndex3, setActiveIndex3] = useState(0);

  const handleSelectedImage3 = (src, isActiveIndex3) => {
    setImageSrc3(src);
    setActiveIndex3(isActiveIndex3);
  };

  const [imageSrc4, setImageSrc4] = useState();
  const [isActiveIndex4, setActiveIndex4] = useState(0);

  const handleSelectedImage4 = (src, isActiveIndex4) => {
    setImageSrc4(src);
    setActiveIndex4(isActiveIndex4);
  };

  return (
    <section>
      {/* ScrollToTop */}
      <ScrollToTop />
      {/* Banner */}{" "}
      <div className="bg-room bg-cover bg-center h-[300px] lg:h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
      </div>
      <div className="container mx-auto">
        <hr />
        <h2 className="font-primary text-[36px] lg:text-[45px] mb-10 p-2">
          Our Rooms
        </h2>

        {loading ? (
          <div className=" h-[200px] w-full flex flex-row items-center justify-center">
            <SpinnerDotted color={"#2dadc9"} size={44} />
          </div>
        ) : (
          <div className="max-w-sm mx-auto lg:max-w-none lg:mx-0 pb-10">
            {/* Deluxe King Room */}
            <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="h3 text-4xl font-tertiary">
                    {roomData[0]?.roomName}
                  </h3>
                  <div className="overflow-hidden">
                    <img
                      className="transition-all duration-300 w-full h-[320px]"
                      src={!imageSrc ? roomData[0]?.images[0]?.url : imageSrc}
                      alt="rooms"
                    />
                  </div>
                  <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                    <div className="flex justify-between w-[100%]">
                      <div className="grid grid-cols-5 gap-[5px]">
                        {roomData[0]?.images?.map((item, index) => (
                          <img
                            key={index}
                            className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                              index === isActiveIndex
                                ? "border-4 border-[#2dadc9]"
                                : ""
                            }`}
                            src={item.url}
                            alt="rooms"
                            onClick={() => handleSelectedImage(item.url, index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {roomData[0]?.isAvailable ? (
                    <>
                      <button className="btn btn-primary cursor-default py-4 w-full bg-[#141b2d]">
                        PRICE: {roomData[0]?.roomPrice}.00 AED PER NIGHT
                      </button>

                      <BookForm
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                        adults={adults}
                        setAdults={setAdults}
                        childrens={childrens}
                        setChildrens={setChildrens}
                        roomPrice={roomData[0]?.roomPrice}
                        roomId={roomData[0]?._id}
                        roomName={roomData[0]?.roomName}
                      />
                    </>
                  ) : (
                    <button
                      className="btn btn-primary py-4 w-full cursor-not-allowed"
                      style={{ backgroundColor: "red" }}
                    >
                      ROOM NOT AVAILABLE
                    </button>
                  )}

                  {details1 && (
                    <div className="block lg:hidden text-center transition-all duration-300">
                      {/* <Link to={`/room/`}> */}
                      {/* Amenities */}
                      <div className="flex flex-row items-center px-6 pt-10">
                        <p className="text-lg font-tertiary font-semibold">
                          Room Overview:
                        </p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                        {roomData[0]?.roomDetails?.map((item, index) => (
                          <div className="flex flex-row items-center gap-x-2">
                            <FaHandPointRight size={24} />
                            <span
                              className={`font-tertiary ${
                                item.name === "Private Bathroom"
                                  ? "text-[14px]"
                                  : "text-[16px]"
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row items-center px-6 pt-4">
                        <p className="text-lg font-tertiary font-semibold">
                          Room Size:{" "}
                          <span className="font-normal ml-2">
                            {roomData[0]?.roomSize} m<sup>2</sup>
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-row items-center px-6">
                        <div className="font-tertiary text-justify text-[14px]">
                          The air-conditioned double room features a flat-screen
                          TV with cable channels, a mini-bar, a dining area, a
                          wardrobe as well as lake views. The unit has 1 bed.
                        </div>
                      </div>

                      <div className="flex flex-row items-center px-6 pt-4">
                        <p className="text-lg font-tertiary font-semibold">
                          In the bathroom:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                        {roomData[0]?.inBathroom?.map((item) => (
                          <div className="flex flex-row items-center gap-x-2">
                            <FaCheck size={16} className="font-thin" />
                            <span className="font-tertiary font-normal text-sm">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row items-center px-6 pt-4">
                        <p className="text-lg font-tertiary font-semibold">
                          View:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                        {roomData[0]?.view?.map((item) => (
                          <div className="flex flex-row items-center gap-x-2">
                            <FaCheck size={16} className="font-thin" />
                            <span className="font-tertiary font-normal text-sm">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-row items-center px-6 pt-4">
                        <p className="text-lg font-tertiary font-semibold">
                          Room Facilities:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                        {roomData[0]?.facilities?.map((item) => (
                          <div className="flex flex-row items-center gap-x-2">
                            <FaCheck size={16} className="font-thin" />
                            <span className="font-tertiary font-normal text-sm">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* </Link> */}
                    </div>
                  )}

                  <button
                    className={`block lg:hidden w-full btn btn-primary py-4 mt-2`}
                    onClick={() => setDetails1(!details1)}
                  >
                    {details1 ? "HIDE DETAILS" : "VIEW MORE DETAILS"}
                  </button>
                </div>

                <div className="hidden lg:block text-center transition-all duration-300">
                  {/* <Link to={`/room/`}> */}
                  {/* Amenities */}
                  <div className="flex flex-row items-center px-6 pt-10">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Overview:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                    {roomData[0]?.roomDetails?.map((item, index) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaHandPointRight size={24} />
                        <span
                          className={`font-tertiary ${
                            item.name === "Private Bathroom"
                              ? "text-[14px]"
                              : "text-[12px]"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        {roomData[0]?.roomSize} m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="font-tertiary text-justify text-[14px]">
                      The air-conditioned double room features a flat-screen TV
                      with cable channels, a mini-bar, a dining area, a wardrobe
                      as well as lake views. The unit has 1 bed.
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[0]?.inBathroom?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[0]?.view?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    {roomData[0]?.facilities?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>

            {/* Deluxe Suite */}
            <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <div className="flex flex-row">
                    <h3 className="h3 text-4xl font-tertiary">
                      {roomData[1]?.roomName}
                    </h3>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      className="transition-all duration-300 w-full h-[320px]"
                      src={!imageSrc2 ? roomData[1]?.images[0]?.url : imageSrc2}
                      alt="rooms"
                    />
                  </div>
                  <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                    <div className="flex justify-between w-[100%]">
                      <div className="grid grid-cols-5 gap-[5px]">
                        {roomData[1]?.images?.map((data, index) => (
                          <img
                            key={index}
                            className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                              index === isActiveIndex2
                                ? "border-4 border-[#2dadc9]"
                                : ""
                            }`}
                            src={data.url}
                            alt="rooms"
                            onClick={() =>
                              handleSelectedImage2(data.url, index)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {roomData[1]?.isAvailable ? (
                    <>
                      <button className="btn btn-primary cursor-default py-4 w-full bg-[#141b2d]">
                        PRICE: {roomData[1]?.roomPrice}.00 AED PER NIGHT
                      </button>

                      <BookForm
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                        adults={adults}
                        setAdults={setAdults}
                        childrens={childrens}
                        setChildrens={setChildrens}
                        roomPrice={roomData[1]?.roomPrice}
                        roomId={roomData[1]?._id}
                        roomName={roomData[1]?.roomName}
                      />
                    </>
                  ) : (
                    <button
                      className="btn btn-primary py-4 w-full cursor-not-allowed"
                      style={{ backgroundColor: "red" }}
                    >
                      ROOM NOT AVAILABLE
                    </button>
                  )}
                </div>

                {details2 && (
                  <div className="block lg:hidden text-center">
                    {/* <Link to={`/room/`}> */}
                    {/* Amenities */}
                    <div className="flex flex-row items-center px-6 pt-10">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Overview:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                      {roomData[1]?.roomDetails?.map((item, index) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaHandPointRight size={24} />
                          <span
                            className={`font-tertiary ${
                              item.name === "Private Bathroom"
                                ? "text-[12px]"
                                : "text-[12px]"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Size:{" "}
                        <span className="font-normal ml-2">
                          {roomData[1]?.roomSize} m<sup>2</sup>
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center px-6">
                      <div className="font-tertiary text-justify text-[14px]">
                        {roomData[1]?.description}
                      </div>
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        In the bathroom:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[1]?.inBathroom?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        View:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[1]?.view?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Facilities:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[1]?.facilities?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 mt-2 mb-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Smoking:{" "}
                        <span className="font-normal ml-2">No Smoking</span>
                      </p>
                    </div>
                    {/* </Link> */}
                  </div>
                )}

                <button
                  className={`block lg:hidden w-full btn btn-primary py-4 mt-2`}
                  onClick={() => setDetails2(!details2)}
                >
                  {details2 ? "HIDE DETAILS" : "VIEW MORE DETAILS"}
                </button>

                <div className="hidden lg:block text-center">
                  {/* <Link to={`/room/`}> */}
                  {/* Amenities */}
                  <div className="flex flex-row items-center px-6 pt-10">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Overview:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                    {roomData[3]?.roomDetails?.map((item, index) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaHandPointRight size={24} />
                        <span
                          className={`font-tertiary ${
                            item.name === "Private Bathroom"
                              ? "text-[14px]"
                              : "text-[12px]"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        {roomData[1]?.roomSize} m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="font-tertiary text-justify text-[14px]">
                      {roomData[1]?.description}
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[1]?.inBathroom?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[1]?.view?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[1]?.facilities?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 mt-2 mb-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Smoking:{" "}
                      <span className="font-normal ml-2">No Smoking</span>
                    </p>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>

            {/* Deluxe Twin Room */}
            <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="h3 text-4xl font-tertiary">
                    {roomData[2]?.roomName}
                  </h3>
                  <div className="overflow-hidden">
                    <img
                      className="transition-all duration-300 w-full h-[320px]"
                      src={!imageSrc3 ? roomData[2]?.images[0]?.url : imageSrc3}
                      alt="rooms"
                    />
                  </div>
                  <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                    <div className="flex justify-between w-[100%]">
                      <div className="grid grid-cols-5 gap-[5px]">
                        {roomData[2]?.images?.map((data, index) => (
                          <img
                            key={index}
                            className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                              index === isActiveIndex3
                                ? "border-4 border-[#2dadc9]"
                                : ""
                            }`}
                            src={data.url}
                            alt="rooms"
                            onClick={() =>
                              handleSelectedImage3(data.url, index)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {roomData[2]?.isAvailable ? (
                    <>
                      <button className="btn btn-primary cursor-default py-4 w-full bg-[#141b2d]">
                        PRICE: {roomData[2]?.roomPrice}.00 AED PER NIGHT
                      </button>

                      <BookForm
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                        adults={adults}
                        setAdults={setAdults}
                        childrens={childrens}
                        setChildrens={setChildrens}
                        roomPrice={roomData[2]?.roomPrice}
                        roomId={roomData[2]?._id}
                        roomName={roomData[2]?.roomName}
                      />
                    </>
                  ) : (
                    <button
                      className="btn btn-primary py-4 w-full cursor-not-allowed"
                      style={{ backgroundColor: "red" }}
                    >
                      ROOM NOT AVAILABLE
                    </button>
                  )}
                </div>
                <div className="hidden lg:block text-center">
                  {/* <Link to={`/room/`}> */}
                  <div className="flex flex-row items-center px-6 pt-10">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Overview:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                    {roomData[2]?.roomDetails?.map((item, index) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaHandPointRight size={24} />
                        <span
                          className={`font-tertiary ${
                            item.name === "Private Bathroom"
                              ? "text-[14px]"
                              : "text-[12px]"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        {roomData[2]?.roomSize} m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="font-tertiary text-justify text-[14px]">
                      {roomData[2]?.description}
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[2]?.inBathroom?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[2]?.view?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    {roomData[2]?.facilities?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* </Link> */}
                </div>

                {details3 && (
                  <div className="block lg:hidden text-center">
                    {/* <Link to={`/room/`}> */}
                    <div className="flex flex-row items-center px-6 pt-10">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Overview:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                      {roomData[2]?.roomDetails?.map((item, index) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaHandPointRight size={24} />
                          <span
                            className={`font-tertiary ${
                              item.name === "Private Bathroom"
                                ? "text-[14px]"
                                : "text-[12px]"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Size:{" "}
                        <span className="font-normal ml-2">
                          {roomData[2]?.roomSize} m<sup>2</sup>
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center px-6">
                      <div className="font-tertiary text-justify text-[14px]">
                        {roomData[2]?.description}
                      </div>
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        In the bathroom:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[2]?.inBathroom?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        View:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[2]?.view?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Facilities:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                      {roomData[2]?.facilities?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* </Link> */}
                  </div>
                )}

                <button
                  className={`block lg:hidden w-full btn btn-primary py-4 mt-2`}
                  onClick={() => setDetails3(!details3)}
                >
                  {details3 ? "HIDE DETAILS" : "VIEW MORE DETAILS"}
                </button>
              </div>
            </div>

            {/* Standard Double Room */}
            <div className="bg-white shadow-2xl h-auto group p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="h3 text-4xl font-tertiary">
                    Standard Double Room
                  </h3>
                  <div className="overflow-hidden">
                    <img
                      className="transition-all duration-300 w-full h-[320px]"
                      src={!imageSrc4 ? roomData[3]?.images[0]?.url : imageSrc4}
                      alt="rooms"
                    />
                  </div>
                  <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                    <div className="flex justify-between w-[100%]">
                      <div className="grid grid-cols-5 gap-[5px]">
                        {roomData[3]?.images?.map((data, index) => (
                          <img
                            key={index}
                            className={`w-[100px] h-[60px] cursor-pointer object-cover ${
                              index === isActiveIndex4
                                ? "border-4 border-[#2dadc9]"
                                : ""
                            }`}
                            src={data.url}
                            alt="rooms"
                            onClick={() =>
                              handleSelectedImage4(data.url, index)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {roomData[3]?.isAvailable ? (
                    <>
                      <button className="btn btn-primary cursor-default py-4 w-full bg-[#141b2d]">
                        PRICE: {roomData[3]?.roomPrice}.00 AED PER NIGHT
                      </button>

                      <BookForm
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        setCheckInDate={setCheckInDate}
                        setCheckOutDate={setCheckOutDate}
                        adults={adults}
                        setAdults={setAdults}
                        childrens={childrens}
                        setChildrens={setChildrens}
                        roomPrice={roomData[3]?.roomPrice}
                        roomId={roomData[3]?._id}
                        roomName={roomData[3]?.roomName}
                      />
                    </>
                  ) : (
                    <button
                      className="btn btn-primary py-4 w-full cursor-not-allowed"
                      style={{ backgroundColor: "red" }}
                    >
                      ROOM NOT AVAILABLE
                    </button>
                  )}
                </div>

                {details4 && (
                  <div className="block lg:hidden text-center">
                    {/* <Link to={`/room/`}> */}
                    {/* Amenities */}
                    <div className="flex flex-row items-center px-6 pt-10">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Overview:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                      {roomData[3]?.roomDetails?.map((item, index) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaHandPointRight size={24} />
                          <span
                            className={`font-tertiary ${
                              item.name === "Private Bathroom"
                                ? "text-[14px]"
                                : "text-[12px]"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Size:{" "}
                        <span className="font-normal ml-2">
                          {roomData[3]?.roomSize} m<sup>2</sup>
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center px-6">
                      <div className="font-tertiary text-justify text-[14px]">
                        {roomData[3]?.description}
                      </div>
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        In the bathroom:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[2]?.inBathroom?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        View:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                      {roomData[2]?.view?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-row items-center px-6 pt-4">
                      <p className="text-lg font-tertiary font-semibold">
                        Room Facilities:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                      {roomData[3]?.facilities?.map((item) => (
                        <div className="flex flex-row items-center gap-x-2">
                          <FaCheck size={16} className="font-thin" />
                          <span className="font-tertiary font-normal text-sm">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* </Link> */}
                  </div>
                )}

                <button
                  className={`block lg:hidden w-full btn btn-primary py-4 mt-2`}
                  onClick={() => setDetails4(!details4)}
                >
                  {details4 ? "HIDE DETAILS" : "VIEW MORE DETAILS"}
                </button>

                <div className="hidden lg:block text-center">
                  {/* <Link to={`/room/`}> */}
                  {/* Amenities */}
                  <div className="flex flex-row items-center px-6 pt-10">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Overview:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                    {roomData[3]?.roomDetails?.map((item, index) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaHandPointRight size={24} />
                        <span
                          className={`font-tertiary ${
                            item.name === "Private Bathroom"
                              ? "text-[14px]"
                              : "text-[12px]"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Size:{" "}
                      <span className="font-normal ml-2">
                        {roomData[3]?.roomSize} m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="font-tertiary text-justify text-[14px]">
                      {roomData[3]?.description}
                    </div>
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      In the bathroom:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[2]?.inBathroom?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomData[2]?.view?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    {roomData[3]?.facilities?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary font-normal text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurRooms;
