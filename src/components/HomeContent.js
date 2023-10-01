import React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

const HomeContent = () => {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <div className="bg-[#abb1b347]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 my-4 lg:my-0">
            <div>
              <img
                className="rounded-[50px] w-full object-cove"
                src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457184/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/img_0502-A85271PrPBtZ58g9_u2mbu0.avif"
                alt="images"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3
                className={`h3 font-tertiary font-semibold ${
                  localStorage.getItem("i18nextLng") === "en"
                    ? ""
                    : localStorage.getItem("i18nextLng") === "ru"
                    ? ""
                    : "text-right"
                }`}
              >
                {t("contentTitle1")}
              </h3>
              <h1
                className={`text-xl font-tertiary lg:mt-10   ${
                  localStorage.getItem("i18nextLng") === "en"
                    ? "text-justify"
                    : localStorage.getItem("i18nextLng") === "ru"
                    ? ""
                    : "text-right"
                }`}
              >
                {t("contentDesc1")}
              </h1>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2  my-4 lg:my-0">
          <div className="flex flex-col justify-center">
            <h3
              className={`h3 font-tertiary font-semibold ${
                localStorage.getItem("i18nextLng") === "en"
                  ? ""
                  : localStorage.getItem("i18nextLng") === "ru"
                  ? ""
                  : "text-right"
              }`}
            >
              {t("contentTitle2")}
            </h3>
            <h1
              className={`text-xl font-tertiary lg:mt-10   ${
                localStorage.getItem("i18nextLng") === "en"
                  ? "text-justify"
                  : localStorage.getItem("i18nextLng") === "ru"
                  ? ""
                  : "text-right"
              }`}
            >
              {t("contentDesc2")}
            </h1>
          </div>
          <div>
            <img
              className="rounded-[50px] w-full object-cover"
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457185/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/ew2a0768-ALpBjrv0NysM98VM_rzrvkg.avif"
              alt="images"
            />
          </div>
        </div>
      </Container>

      <div className="bg-[#abb1b347]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2  my-4 lg:my-0">
            <div>
              <img
                className="rounded-[50px] w-full object-cove"
                src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457184/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/img_0521-3-AGBM0W5GV8u1Gbbv_lmvhur.avif"
                alt="images"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3
                className={`h3 font-tertiary font-semibold ${
                  localStorage.getItem("i18nextLng") === "en"
                    ? ""
                    : localStorage.getItem("i18nextLng") === "ru"
                    ? ""
                    : "text-right"
                }`}
              >
                {t("contentTitle3")}
              </h3>
              <h1
                className={`text-xl font-tertiary lg:mt-10   ${
                  localStorage.getItem("i18nextLng") === "en"
                    ? "text-justify"
                    : localStorage.getItem("i18nextLng") === "ru"
                    ? ""
                    : "text-right"
                }`}
              >
                {t("contentDesc3")}
              </h1>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2  my-4 lg:my-0">
          <div className="flex flex-col justify-center">
            <h3
              className={`h3 font-tertiary font-semibold ${
                localStorage.getItem("i18nextLng") === "en"
                  ? ""
                  : localStorage.getItem("i18nextLng") === "ru"
                  ? ""
                  : "text-right"
              }`}
            >
              {t("contentTitle4")}
            </h3>
            <h1
              className={`text-xl font-tertiary lg:mt-10   ${
                localStorage.getItem("i18nextLng") === "en"
                  ? "text-justify"
                  : localStorage.getItem("i18nextLng") === "ru"
                  ? ""
                  : "text-right"
              }`}
            >
              {t("contentDesc4")}
            </h1>
          </div>
          <div>
            <img
              className="rounded-[50px] w-full object-cover"
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457185/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/img_0658-3-Yle279OM5wh9zKRv_xmr7yz.avif"
              alt="images"
            />
          </div>
        </div>
      </Container>

      {/* <div className="bg-[#abb1b347]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2  my-4 lg:my-0">
            <div>
              <img
                className="rounded-[50px] object-cover"
                src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457186/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/img_0358-mp83PBJK8KFD64Pz_fiihiv.avif"
                alt="images"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="h3 font-tertiary font-semibold uppercase">
                Royal Beauty Salon
              </h3>
              <h1 className="text-xl font-tertiary lg:mt-10 text-justify">
                The Royal View Hotel offers a small salon where guests can
                indulge in various hairstyling services. Located within the
                hotel premises, this salon provides a convenient and relaxing
                experience for those in need of a fresh new look. From trendy
                cuts to elegant updos, the skilled hairstylists here cater to
                the individual preferences and desires of each customer. The
                small salon ensures a more intimate and personalized atmosphere,
                allowing guests to truly unwind and enjoy the pampering session.
                Whether it's a special occasion or simply a desire for a stylish
                update, this salon in the Royal View Hotel guarantees a
                top-notch hairstyling experience.
              </h1>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2  my-4 lg:my-0">
          <div className="flex flex-col justify-center">
            <h3 className="h3 font-tertiary font-semibold uppercase">
              Shen's Massage Center
            </h3>
            <h1 className="text-xl font-tertiary lg:mt-10 text-justify">
              Shen's Massage at Royal View Hotel offers a serene and tranquil
              environment for relaxation and rejuvenation. With highly trained
              therapists and a wide range of therapeutic treatments, guests can
              indulge in the ultimate pampering experience. From traditional
              Chinese massages to aromatherapy and hot stone treatments, patrons
              can choose from an array of services that cater to their specific
              needs. The skilled masseurs at Shen's Massage apply expert
              techniques to release tension, improve circulation, and promote
              overall well-being. Whether seeking relief from muscle stiffness
              or simply looking to unwind after a long day, Shen's Massage
              provides a sanctuary of tranquility where guests can escape the
              hustle and bustle of city life.
            </h1>
          </div>
          <div>
            <img
              className="rounded-[50px] w-full object-cover"
              src="https://res.cloudinary.com/dmbpo49ak/image/upload/v1694457184/ROYAL%20VIEW%20HOTEL/HOME%20CONTENT/img_0381-mnlne0vlneibo0xV_vyamzr.avif"
              alt="images"
            />
          </div>
        </div>
      </Container> */}
    </>
  );
};

export default HomeContent;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
    padding: 1rem 0;
  }
`;
