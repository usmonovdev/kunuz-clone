import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import TopNews from "./TopNews";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

function All() {
  const [scroll, setScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav />
      <TopNews />
      <Footer />
      {scroll ? <div className="scroll" onClick={scrollToTop}><MdOutlineKeyboardArrowUp className="scroll-icon" /></div> : ""}
    </>
  );
}

export default All;
