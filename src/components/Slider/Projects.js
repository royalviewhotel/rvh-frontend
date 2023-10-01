import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Container id="project">
      <h1 className="text-[#2dadc9] font-tertiary text-4xl lg:mb-6 lg:text-[68px] font-bold">
        {t("welcometo")} <span className="green ">{t("royalviewhotel")}</span>
      </h1>
      <p
        className={`font-tertiary text-lg lg:text-[20px] ${
          localStorage.getItem("i18nextLng") === "en"
            ? "text-justify"
            : "text-right"
        }`}
      >
        {t("aboutrvh")}
      </p>
      <SliderComp />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
    padding: 1rem 0;
  }

  p {
    margin: 0 auto;
    padding: 1rem 0;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
