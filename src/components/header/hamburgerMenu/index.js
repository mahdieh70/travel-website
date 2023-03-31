import React from "react";

const HamburgerMenu = ({ isOpen }) => {
  return (
    <>
      <div
        className="w-8 h-0.5 rounded-[10px] bg-white origin-[1px] burger1"
        style={{ transition: "all 0.3s" }}
      ></div>
      <div
        className="w-10 h-0.5 rounded-[10px] bg-white origin-[1px] burger2"
        style={{ transition: "all 0.3s" }}
      ></div>
      <div
        className="w-8 h-0.5 rounded-[10px] bg-white origin-[1px] burger3"
        style={{ transition: "all 0.3s" }}
      ></div>
      <style>
        {`
        .burger1{
            transform:${isOpen ? "rotate(45deg)" : "rotate(0)"}
        }

        .burger2{
            transform:${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity:${isOpen ? 0 : 1}
        }
        .burger3{
            transform:${isOpen ? "rotate(-45deg)" : "rotate(0)"}
        }
        `}
      </style>
    </>
  );
};

export default HamburgerMenu;
