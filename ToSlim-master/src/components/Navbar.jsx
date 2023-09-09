import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import translation  from "../utils/translation.json" 
import { useTranslation } from '../utils/TranslationContext';
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  // const [language, setLanguage] = useState('en'); // to delete
  const { language, toggleLanguage, translations } = useTranslation();
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar ">
      <img src={logo} alt="hoobank" className=" mx-8" />

      <ul className="list-none sm:flex hidden justify-end items-center m-2 mx-10  flex-1 NavBarbg py-5 pr-10	">
        <li><button onClick={toggleLanguage}>{translations.buttonText[language]}</button></li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[18px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{translations.title[language]}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}     
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
