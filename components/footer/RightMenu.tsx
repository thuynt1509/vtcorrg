"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const RightMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`bg-bg-download bg-contain bg-no-repeat w-[221px] h-[488px] fixed transition-all  top-[50%] mt-[-244px] pl-[10px] z-10 hidden xl:flex flex-col justify-center items-center
      ${open ? "right-[-210px]" : "right-0"}`}
    >
      <span
        className={`block w-[39px] h-[46px]  absolute left-[-30px] top-[200px] ${
          open ? "bg-icon-open" : "bg-icon-close"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      ></span>
      <div className="w-[160px] h-[160px] overflow-hidden mb-[30px]">
        <Image
          width={150}
          height={150}
          src={"assets/images/icon-app.png"}
          alt="icon app"
        />
      </div>
      <Link
        href="#"
        className="block mx-auto bg-dl-ios bg-contain bg-no-repeat hover:bg-dl-ios-act w-[184px] h-[57px] mb-[6px]"
      ></Link>
      <Link
        href="#"
        className="block mx-auto bg-dl-ggplay bg-contain bg-no-repeat hover:bg-dl-ggplay-act w-[184px] h-[57px] mb-[6px]"
      ></Link>
      <Link
        href="#"
        className="block mx-auto bg-dl-apk bg-contain bg-no-repeat hover:bg-dl-apk-act w-[184px] h-[57px] mb-[30px]"
      ></Link>
      <Link
        href="#"
        className="block bg-img-giftcode bg-contain bg-no-repeat w-[261px] h-[215px] absolute left-[-20px] bottom-[-130px] hover:brightness-125"
      ></Link>
    </div>
  );
};

export default RightMenu;
