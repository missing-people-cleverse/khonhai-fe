import { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100px;
  left: 90%;
  bottom: 40px;
  height: 30px;
  font-size: 4rem;
  z-index: 1000;
  cursor: pointer;
  opacity: 0.8;
  color: #3e3d3e;
  margin-bottom: 40px;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <IoIosArrowDropupCircle
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
