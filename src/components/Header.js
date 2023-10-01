import React, { useState, useEffect } from "react";

import LogoDark from "../assets/img/logo-orig.png";
import Logo from "../assets/img/logo.png";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

import "./flags.css";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  const { i18n, t } = useTranslation(["common"]);
  const [select, setSelect] = useState("US");
  const [showMenu, setShowMenu] = useState(false);

  const onSelect = (code) => {
    setSelect(code);

    if (code === "US") {
      i18n.changeLanguage("en");
      setShowMenu(false);
    }
    if (code === "AE") {
      i18n.changeLanguage("ar");
      setShowMenu(false);
    }
    if (code === "RU") {
      i18n.changeLanguage("ru");
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <>
      {/* DESKTOP MENU */}
      <header
        className={`${
          header
            ? "hidden lg:block bg-[#eceff3] py-1 shadow-lg"
            : "hidden lg:block bg-transparent py-2"
        } fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* Logo */}
          <Link onClick={() => setShowMenu(false)} to="/">
            {header ? (
              <>
                <div>
                  <img
                    src={LogoDark}
                    className="w-[220px] hidden lg:block"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src={Logo}
                    className="w-[120px] block lg:hidden"
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <img
                    src={LogoDark}
                    className="w-[220px] hidden lg:block"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src={Logo}
                    className="w-[120px] block lg:hidden"
                    alt=""
                  />
                </div>
              </>
            )}
          </Link>
          {/* Nav */}
          <nav
            className={`${
              header ? "text-primary" : "text-white"
            } flex gap-x-4 mb-4 lg:mb-0 arabic-text text-[14px] font-regular items-center uppercase lg:gap-x-6`}
          >
            {localStorage.getItem("i18nextLng") === "en" ? (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    // RU: "RUSSIAN",
                  }}
                />
              </>
            ) : localStorage.getItem("i18nextLng") === "ru" ? (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    // RU: "RUSSIAN",
                  }}
                />
              </>
            ) : (
              <>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    // RU: "RUSSIAN",
                  }}
                />
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
      {/* END OF DESKTOP MENU */}

      {/* MOBILE MENU */}
      <header
        className={`block lg:hidden bg-[#eceff3] py-1 shadow-lg fixed z-50 w-full transition-all duration-500`}
      >
        <div className="container mx-auto flex flex-row justify-between items-center gap-y-2">
          <div>
            <img src={LogoDark} className="w-[160px]" alt="" />
          </div>
          <div>
            {showMenu ? (
              <LiaTimesSolid
                size={32}
                color="black"
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <BiMenu
                size={36}
                color="black"
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
          </div>
        </div>

        {showMenu && (
          <nav
            className={`transition-all duration-500 flex flex-col items-center text-primary gap-x-4 lg:mb-0 font-tertiary text-[15px] font-regular uppercase border-t border-gray-500`}
          >
            {localStorage.getItem("i18nextLng") === "en" ? (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    RU: "RUSSIAN",
                  }}
                />
              </>
            ) : localStorage.getItem("i18nextLng") === "ru" ? (
              <>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    RU: "RUSSIAN",
                  }}
                />
              </>
            ) : (
              <>
                <ReactFlagsSelect
                  selected={
                    localStorage.getItem("i18nextLng") === "en"
                      ? "US"
                      : localStorage.getItem("i18nextLng") === "ru"
                      ? "RU"
                      : "AE"
                  }
                  onSelect={onSelect}
                  countries={["US", "AE", "RU"]}
                  customLabels={{
                    US: "ENGLISH",
                    AE: "ARABIC",
                    RU: "RUSSIAN",
                  }}
                />
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/contact"
                  className="hover:text-accent transition py-1"
                >
                  {t("contact")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/about"
                  className="hover:text-accent transition py-1"
                >
                  {t("about")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/booking"
                  className="hover:text-accent transition py-1"
                >
                  {t("bookings")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/gallery"
                  className="hover:text-accent transition py-1"
                >
                  {t("gallery")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/our-rooms"
                  className="hover:text-accent transition py-1"
                >
                  {t("rooms")}
                </Link>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="/"
                  className="hover:text-accent transition py-1"
                >
                  {t("home")}
                </Link>
              </>
            )}
          </nav>
        )}
      </header>
      {/* END MOBILE MENU */}
    </>
  );
};

export default Header;
