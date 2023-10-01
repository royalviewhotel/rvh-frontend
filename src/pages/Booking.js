import React, { useEffect, useState } from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";

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
import { TbBrandBooking } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillCloseSquare } from "react-icons/ai";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: 450,
    maxHeight: 550,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99,
  },
};

const Booking = () => {
  const [bookingRef, setBookingRef] = useState("");
  const [bookingDetails, setBookingDetails] = useState([]);
  const [showData, setShowData] = useState(false);
  const [roomDetails, setRoomDetails] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookingId, setBookingId] = useState("false");

  const openModal = (id) => {
    setIsOpen(true);
    setBookingId(id);
  };

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setShowData(false);
  }, [bookingRef]);

  const handleCheckBooking = () => {
    if (bookingRef === "") {
      toast.error("Please Enter Your Booking Reference.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      axios
        .post("https://rvh-backend.vercel.app/api/room/booking-details", {
          bookingRef: bookingRef,
        })
        .then((result) => {
          setBookingDetails(result.data);
          axios
            .get(
              `https://rvh-backend.vercel.app/api/room/room-details/${result?.data?.roomId}`
            )
            .then((res) => {
              setRoomDetails(res.data);
              setShowData(true);
            });
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  };

  const [imageSrc, setImageSrc] = useState();
  const [isActiveIndex, setActiveIndex] = useState(0);

  const handleSelectedImage = (src, activeIndex) => {
    setImageSrc(src);
    setActiveIndex(activeIndex);
  };

  const handleCancelBooking = () => {
    axios
      .post(`https://rvh-backend.vercel.app/api/room/cancel-booking`, {
        id: bookingId,
      })
      .then((res) => {
        toast.success("Your Booking has been Cancelled", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        closeModal();
      });
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
          Check Booking
        </h2>

        <div class="relative mb-6 flex flex-col lg:flex-row items-center">
          <div className=" bg-gray-50 w-full lg:w-1/4 border p-2 border-gray-600 flex flex-row items-center">
            <TbBrandBooking /> <span>Booking Reference:</span>
          </div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Enter your booking reference here..."
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
          />
          <button
            className={`w-full btn btn-primary pt-[11px] pb-[11px] cursor-pointer`}
            onClick={() => handleCheckBooking()}
          >
            Submit
          </button>
        </div>

        {/* BOOKING DETAILS */}
        {showData && (
          <div className="max-w-sm mx-auto lg:max-w-none lg:mx-0 pb-10">
            {/* Deluxe King Room */}
            <div className="bg-white shadow-2xl h-auto group p-4 mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <h3 className="h3 text-4xl font-tertiary">
                    {roomDetails?.roomName}
                  </h3>
                  <div className="overflow-hidden">
                    <img
                      className="transition-all duration-300 w-full h-[320px]"
                      src={!imageSrc ? roomDetails?.images[0]?.url : imageSrc}
                      alt="rooms"
                    />
                  </div>
                  <div className="bg-white shadow-lg lg:max-w-lg mx-auto h-auto p-2 -translate-y-[15%] flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
                    <div className="flex justify-between w-[100%]">
                      <div className="grid grid-cols-5 gap-[5px]">
                        {roomDetails?.images?.map((item, index) => (
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

                  {/* BOOKING DETAILS */}
                  <h3 className="h3 text-3xl font-tertiary">Booking Details</h3>
                  <table>
                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Booking Status:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p
                          className={`text-lg font-tertiary font-bold ${
                            bookingDetails?.bookingStatus === "Cancelled"
                              ? "text-red-400"
                              : ""
                          }`}
                        >
                          {bookingDetails?.bookingStatus}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          CheckIn Date:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.checkInDate}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          CheckOut Date:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.checkOutDate}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Length of Stay:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.lengthOfStay}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Adult/s:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.adults}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Children/s:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.childrens}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Full name:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.customerDetails[0]?.fullname}
                        </p>
                      </td>
                    </tr>

                    <tr className="pr-4">
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Address:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.customerDetails[0]?.address}
                        </p>
                      </td>
                    </tr>

                    <tr className="pr-4">
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-semibold">
                          Contact #:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-normal">
                          {bookingDetails?.customerDetails[0]?.contactNumber}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pr-4">
                        {" "}
                        <p className="text-lg font-tertiary font-bold">
                          Total Amount to Pay:
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p className="text-lg font-tertiary font-bold">
                          {bookingDetails?.totalPrice}.00 AED ONLY
                        </p>
                      </td>
                    </tr>
                  </table>

                  <p className="text-[17px] leading-6 font-tertiary font-normal text-red-500 pb-2">
                    Note: You can only cancel your booking if the date is not
                    the same as your checkout date.
                  </p>

                  <button
                    className={`w-full btn btn-primary py-4 ${
                      bookingDetails?.checkOutDate ===
                      new Date().toLocaleDateString("en-GB")
                        ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:text-white"
                        : bookingDetails?.bookingStatus === "Cancelled"
                        ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:text-white"
                        : false
                    }`}
                    disabled={
                      bookingDetails?.checkOutDate ===
                      new Date().toLocaleDateString("en-GB")
                        ? true
                        : bookingDetails?.bookingStatus === "Cancelled"
                        ? true
                        : false
                    }
                    onClick={() => openModal(bookingDetails?._id)}
                  >
                    Cancel Booking
                  </button>
                  {/* END OF BOOKING DETAILS */}
                </div>
                <div className="text-center">
                  {/* <Link to={`/room/`}> */}
                  {/* Amenities */}
                  <div className="flex flex-row items-center px-6 pt-10">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Overview:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-2 px-6 py-2">
                    {roomDetails?.roomDetails?.map((item, index) => (
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
                        {roomDetails?.roomSize} m<sup>2</sup>
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center px-6">
                    <div className="text-lg font-tertiary text-justify">
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
                    {roomDetails?.inBathroom?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">View:</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2">
                    {roomDetails?.view?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row items-center px-6 pt-4">
                    <p className="text-lg font-tertiary font-semibold">
                      Room Facilities:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-2 px-6 py-2 mb-4">
                    {roomDetails?.facilities?.map((item) => (
                      <div className="flex flex-row items-center gap-x-2">
                        <FaCheck size={16} className="font-thin" />
                        <span className="font-tertiary">{item.name}</span>
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid gray",
            paddingBottom: "10px",
          }}
        >
          <div className="text-gray-500 font-extrabold text-xl uppercase">
            Confirmation Message
          </div>
          <button onClick={closeModal}>
            <AiFillCloseSquare color={"red"} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "15px",
            borderBottom: "2px solid gray",
          }}
        >
          <p className="text-lg font-tertiary font-semibold">
            Are you sure you want to cancel your booking?
          </p>
        </div>

        <div className="flex flex-row items-center gap-10 mt-4">
          <button
            className={`btn btn-primary bg-red-500/50 hover:bg-red-500 py-2`}
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button
            className={`btn btn-primary py-2`}
            onClick={() => handleCancelBooking()}
          >
            Confirm
          </button>
        </div>
      </Modal>
      <ToastContainer />
    </section>
  );
};

export default Booking;
