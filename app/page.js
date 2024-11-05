"use client";
import Lamp from "./lamp";
import FloatingDockDemo from "./tabs";
import { FaWhatsapp } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";
import { MarqueeDemo } from "./reviews";
import LayoutGridDemo from "./peach";

const Page = () => {
  return (
    <div className=" bg-stone-950 border border-stone-950 flex flex-col justify-between">
      <div className="h-full -mt-48 flex flex-col items-center justify-center">
        <Lamp />
        {/* <button className="inline-flex z-20 text-xl rounded-lg -mt-72 h-12 animate-shimmer items-center justify-center border border-stone-800 bg-[linear-gradient(110deg,#000103,45%,#ad9262,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-50">
          Запись
        </button> */}
      </div>
      <FloatingDockDemo />
      <MarqueeDemo />
      <LayoutGridDemo />
      <div className="flex flex-col z-20 items-center justify-center text-stone-400 mb-4 space-y-4">
        <div className="flex space-x-4 items-center">
          <div className="flex items-center mb-2">
            <a
              href="https://wa.me/79691387072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 text-2xl -mb-2" />
            </a>
          </div>
          <div className="flex items-center">
            <a href="mailto:peachbeautymos@gmail.com">
              <AiOutlineMail className="mr-2 text-2xl" />
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/peach.mos?igsh=MXE3MHN3a2l6cWN5dA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgInstagram className="mr-2 text-2xl " />
            </a>
          </div>
        </div>
        <div className="flex items-center mb-2 space-x-4">
          <span>Ермолаевский переулок, 10/7 - Москва</span>
          <span>+794958884488</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
