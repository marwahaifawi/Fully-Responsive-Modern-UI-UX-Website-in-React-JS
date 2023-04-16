import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatGpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3Navbar">
      <div className="gpt3NavbarLinks">
        <div className="gpt3NavbarLinksLogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3NavbarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="gpt3NavbarSign">
        <p> Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3NavbarMenu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3NavbarMenuContainer scale-up">
            <div className="gpt3NavbarMenuContainerLinks">
              <Menu />
              <div className="gpt3NavbarMenuContainerLinksSign">
                <p> Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
