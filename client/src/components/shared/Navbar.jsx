import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeNavbarBg = () => {
    if (window.scrollY >= 90) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const activeClass = ({ isActive }) =>
    `py-3 px-4 hover:text-red-400 hover:border-l hover:border-l-[12px] transition duration-500 ${
      isActive ? "text-red-400" : ""
    }`;

  return (
    <div className="h-24 ">
      <motion.div
        initial={{
          marginBottom: 500,
          y: 0,
          paddingTop: 1,
          paddingBottom: 1,
        }}
        animate={{
          y: navbarBg ? 20 : 0,
          position: "fixed",
          paddingRight: navbarBg ? 27 : 15,
          paddingLeft: navbarBg ? 27 : 15,
          paddingTop: navbarBg ? 15 : 27,
          paddingBottom: navbarBg ? 15 : 27,
        }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className={`${
          navbarBg
            ? "backdrop-filter backdrop-blur-xl rounded-full"
            : "bg-white"
        }  flex z-10 justify-between sticky text-2xl w-full tz-10 font-bold `}
      >
        <div>Logo</div>
        <div>
          <NavLink initial={{}} to="/" className={activeClass}>
            HOME
          </NavLink>
        </div>
        <div className="flex gap-2 items-center">
          <CiLight className="text-3xl" />
          <IoSearch />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
