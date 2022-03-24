import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import { NavLink, Flex, MenuButton, Close, Button } from "theme-ui";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="modal">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Close onClick={() => setIsOpen(false)} className="close-button" />
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </div>
    </div>
  );
};

function NavLinks() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(isOpen);
  return (
    <>
      <div className="nav-links">
        <div>
          <NavLink>
            <Image
              alt="Thrillwaukee Logo"
              src="/../public/logonew.png"
              height="100px"
              width="100px"
            ></Image>
          </NavLink>
        </div>
        <div>
          <MenuButton
            style={{ display: isOpen ? "none" : null }}
            onClick={() => toggle()}
            className="menu-button"
          />
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
      </div>
    </>
  );
}

// create a hero image component that will be used in the header of the page
function Header() {
  return (
    <div className="hero-image">
      <NavLinks />
      <div className="hero-text">
        <h1>Welcome to Thrillwaukee</h1>
        <h3>Milwaukees best party shuttle service</h3>
        <div className="button-container">
          <div>
            <button
              style={{
                borderRadius: "20px",
                color: "black",
              }}
              className="btns"
            >
              <NavLink href="#!">Book Now</NavLink>
            </button>
          </div>
          <div>
            <button style={{ borderRadius: "20px" }} className="btns-secondary">
              <NavLink href="#rentals">View Fleet</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
