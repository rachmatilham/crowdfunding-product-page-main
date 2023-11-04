import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="pt-[30px] md:pt-11 flex justify-between items-center relative">
      <img src="./images/logo.svg" alt="Crowdfunding Logo" />
      <div
        className={
          "nav-icon w-4 h-4 bg-[url(./images/icon-hamburger.svg)] bg-no-repeat bg-contain hover:cursor-pointer md:hidden " +
          (nav ? "bg-[url(./images/icon-close-menu.svg)]" : "")
        }
        onClick={handleNav}
      ></div>
      <div
        className={
          "nav-link absolute md:relative top-[88px] md:top-0 w-full md:w-auto md:min-w-[225px] rounded-[5px] overflow-hidden md:overflow-visible bg-white md:bg-transparent md:border-0 z-30 md:z-0 shadow-[0_0_500px_black] md:shadow-none md:inline-block " +
          (nav ? "" : "hidden")
        }
      >
        <ul className="block md:flex md:justify-between md:items-center">
          <li className="list-none hover:cursor-pointer p-[22px] md:p-0">
            <a
              href="#"
              className="font-commissioner no-underline leading-4 text-[1.2em] md:text-[0.83em] text-black md:text-white font-medium inline-block w-full h-full"
            >
              About
            </a>
          </li>
          <li className="list-none hover:cursor-pointer p-[22px] border-t border-solid border-t-[#d9d9d9] md:border-0 md:p-0">
            <a
              href="#"
              className="font-commissioner no-underline text-[1.2em] md:text-[0.83em] text-black md:text-white font-medium inline-block w-full h-full"
            >
              Discover
            </a>
          </li>
          <li className="list-none hover:cursor-pointer p-[22px] border-t border-solid border-t-[#d9d9d9] md:border-0 md:p-0">
            <a
              href="#"
              className="font-commissioner no-underline text-[1.2em] md:text-[0.83em] text-black md:text-white font-medium inline-block w-full h-full"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
