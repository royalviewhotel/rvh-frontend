import React from "react";

// Scroll To Top Component
import ScrollToTop from "../components/ScrollToTop";

const GALLERY = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461089/ROYAL%20VIEW%20HOTEL/GALLERY/1_gl1guc.avif",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461090/ROYAL%20VIEW%20HOTEL/GALLERY/2_vrc4ns.avif",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461090/ROYAL%20VIEW%20HOTEL/GALLERY/3_endtj2.avif",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461091/ROYAL%20VIEW%20HOTEL/GALLERY/4_muxjug.avif",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461092/ROYAL%20VIEW%20HOTEL/GALLERY/5_wxwmos.avif",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461093/ROYAL%20VIEW%20HOTEL/GALLERY/6_hotcb8.avif",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461093/ROYAL%20VIEW%20HOTEL/GALLERY/7_jn6gmw.avif",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461094/ROYAL%20VIEW%20HOTEL/GALLERY/8_qym8ns.avif",
  },
  {
    id: "9",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461095/ROYAL%20VIEW%20HOTEL/GALLERY/9_h2yaxy.avif",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461096/ROYAL%20VIEW%20HOTEL/GALLERY/10_rngd1d.avif",
  },
  {
    id: "11",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461097/ROYAL%20VIEW%20HOTEL/GALLERY/11_w4kgh5.avif",
  },
  {
    id: "12",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461098/ROYAL%20VIEW%20HOTEL/GALLERY/12_zmh4xc.avif",
  },
  {
    id: "13",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461100/ROYAL%20VIEW%20HOTEL/GALLERY/13_cmpfci.avif",
  },
  {
    id: "14",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461101/ROYAL%20VIEW%20HOTEL/GALLERY/14_wq6phq.avif",
  },
  {
    id: "15",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461102/ROYAL%20VIEW%20HOTEL/GALLERY/15_fou63a.avif",
  },
  {
    id: "16",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461104/ROYAL%20VIEW%20HOTEL/GALLERY/16_nzpno9.avif",
  },
  {
    id: "17",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461105/ROYAL%20VIEW%20HOTEL/GALLERY/17_v19dm2.avif",
  },
  {
    id: "18",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461106/ROYAL%20VIEW%20HOTEL/GALLERY/18_qzirh6.avif",
  },
  {
    id: "19",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461108/ROYAL%20VIEW%20HOTEL/GALLERY/19_tebng4.avif",
  },
  {
    id: "20",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461109/ROYAL%20VIEW%20HOTEL/GALLERY/20_qeygej.avif",
  },
  {
    id: "21",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461110/ROYAL%20VIEW%20HOTEL/GALLERY/21_tdoqfe.avif",
  },
  {
    id: "22",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461112/ROYAL%20VIEW%20HOTEL/GALLERY/22_dh7pia.avif",
  },
  {
    id: "23",
    src: "https://res.cloudinary.com/dmbpo49ak/image/upload/v1694461089/ROYAL%20VIEW%20HOTEL/GALLERY/23_b0vecr.avif",
  },
];

const OurRooms = () => {
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
          GALLERY
        </h2>

        <section class="gallery">
          {GALLERY.map((data, index) => (
            <div className="image" key={index}>
              <img src={data.src} alt="gallery-img" />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default OurRooms;
