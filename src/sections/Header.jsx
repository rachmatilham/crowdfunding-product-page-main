/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Header({ setModal }) {
  function handleCtaButton() {
    setModal(true);
    window.innerWidth > 768
      ? window.scrollTo({ top: 150, left: 0, behavior: "smooth" })
      : window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  }
  const [bookmark, setBookmark] = useState(false);
  function handleBookmark() {
    setBookmark(!bookmark);
  }

  return (
    <header className="mt-[195px] md:mt-60 mx-auto pb-[35px] md:pb-[45px] w-full max-w-[730px] text-center rounded-[10px] border border-solid border-[#7a7a7a/0.2] bg-white relative">
      <img
        src="./images/logo-mastercraft.svg"
        alt="Mastercraft Logo"
        className="mastercraft absolute -top-7 left-[calc(50%-28px)]"
      />
      <h1 className="p-[50px] md:pt-[55px] pb-0 text-black text-[1.3em] md:text-[1.77em] leading-[1.17] font-bold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="px-5 text-darkGray mt-[18px] leading-[1.4] text-sm md:text-[1em]">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="cta mt-[25px] md:mt-[35px] pl-[23px] md:pl-[65px] pr-[26px] md:pr-12 flex justify-between">
        <button
          className="w-[76%] max-w-[206px] h-14 rounded-[28px] text-[0.83em]"
          onClick={handleCtaButton}
        >
          Back this project
        </button>
        <div
          className={
            "bookmark hover:cursor-pointer md:w-[172px] md:rounded-[28px] md:bg-[#f5f5f5] md:flex " +
            (bookmark ? "md:w-auto md:bg-[#f5f9fa]" : "")
          }
          onClick={handleBookmark}
        >
          <img
            src={
              bookmark
                ? "./images/icon-bookmarked.svg"
                : "./images/icon-bookmark.svg"
            }
            alt="Bookmark Icon"
          />
          <p
            className={
              "hidden px-5 md:my-auto md:block font-bold " +
              (bookmark ? "text-darkCyan" : "text-darkGray")
            }
          >
            {bookmark ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
      </div>
    </header>
  );
}
