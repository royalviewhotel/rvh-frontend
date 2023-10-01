import React from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <section>
      <ScrollToTop />
      <div className="bg-gallery bg-cover  bg-no-repeat h-[300px] lg:h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
      </div>
      <div className="container mx-auto">
        <hr />
        <h2 className="font-primary text-[36px] lg:text-[45px] mb-10 p-2">
          Contact Us
        </h2>

        <div className="grid grid-cols-2 mb-10">
          <div className="flex flex-col">
            <h1 className="text-black font-tertiary font-normal text-lg pt-2 lg:pt-0 lg:mb-2 lg:text-[24px]">
              Get in touch with our friendly team
            </h1>

            <h1 className=" font-tertiary font-semibold text-lg pt-2 lg:pt-0 lg:text-[32px] text-[#48aecb]">
              Email
            </h1>
            <h1 className="text-black font-tertiary font-normal text-md pt-2 lg:pt-0 lg:mb-2 lg:text-[20px]">
              info@royalviewhotel.ae
            </h1>

            <h1 className=" font-tertiary font-semibold text-lg pt-2 lg:pt-0 lg:text-[32px] text-[#48aecb]">
              Phone
            </h1>
            <h1 className="text-black font-tertiary font-normal text-md pt-2 lg:pt-0 lg:mb-2 lg:text-[20px]">
              +971 7 2277 717
            </h1>

            <h1 className=" font-tertiary font-semibold text-lg pt-2 lg:pt-0 lg:text-[32px] text-[#48aecb]">
              Mobile
            </h1>
            <h1 className="text-black font-tertiary font-normal text-md pt-2 lg:pt-0 lg:mb-2 lg:text-[20px]">
              +971 54 777 1704
            </h1>

            <h1 className=" font-tertiary font-semibold text-lg pt-2 lg:pt-0 lg:text-[32px] text-[#48aecb]">
              Address
            </h1>
            <h1 className="text-black font-tertiary font-normal text-md pt-2 lg:pt-0 lg:text-[20px]">
              Ras Al Khaimah
            </h1>
            <h1 className="text-black font-tertiary font-normal text-md pt-2 lg:pt-0 lg:mb-2 lg:text-[20px]">
              Royal View Hotel
            </h1>
          </div>

          <div className="flex flex-col">
            <div class="mb-2 mt-2">
              <label
                for="firstname"
                class="block mb-2 text-lg font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md h-[45px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your First Name"
                required
              />
            </div>

            <div class="mb-2">
              <label
                for="lastname"
                class="block mb-2 text-lg font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md h-[45px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Last Name"
                required
              />
            </div>

            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md h-[45px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 "
              >
                Message
              </label>
              <textarea
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md h-[80px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Message"
                required
              />
            </div>

            <button className="bg-[#48aecb] border-2 border-[#a07d48] px-4 py-2 rounded-lg text-white hover:bg-[#a07d48]">
              Submit
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mb-10">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1027,h=480,fit=crop,trim=0;0;383.06569343065695;0/YyvXe0ZbvlcB1644/img_0643-Yle27VZ6Vai40NPb.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
