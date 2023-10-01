import React from "react";
// Logo

const SubFooter = () => {
  return (
    <footer className="bg-primary py-4 border-b border-white/50">
      <div className="container mx-auto text-white flex flex-col justify-center items-center text-center">
        <h3 className="text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] font-tertiary font-bold  pt-4">
          Experience luxury and comfort at Royal View Hotel
        </h3>
        <h3 className="text-[30px] lg:text-[40px] font-tertiary font-thin py-4 lg:py-10">
          Get Directions To Our Hotel
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-4">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=384,fit=crop,trim=6.2745098039215685;0;69.01960784313727;0/YyvXe0ZbvlcB1644/img_0647-YBglDKB8N5tQQyZ5.jpg"
            alt="rvh"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1694445732870!6m8!1m7!1sWKCnv7_9_0NJ8PLEfM04UQ!2m2!1d25.78172575648842!2d55.96704798456139!3f96.18115797657521!4f15.683076439516356!5f0.7820865974627469"
            className="w-full h-[350px] mt-2 lg:mt-0 lg:w-[555px]"
            allowfullscreen=""
            loading="lazy"
            title="aw"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;
