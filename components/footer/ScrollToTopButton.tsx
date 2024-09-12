"use client";
import { renderImage } from "@/utils/log-helper";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Xác định khi nào nút "Scroll to Top" nên hiển thị dựa trên vị trí cuộn
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Xử lý sự kiện khi nút được nhấn để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-button shadow-[0px_4px_16px_0px_#0000001A] fixed bg-[#D4EEFF] w-[60px] h-[60px] flex items-center justify-center rounded-[40px] lg:w-[80px] lg:h-[80px] bottom-[50px] right-[20px] cursor-pointer z-50
        "
          onClick={scrollToTop}
        >
          <Image
            src={renderImage("assets/images/buttonTop.png")}
            width={33}
            height={31}
            alt="VTC - Button To Top"
            className="w-[20px] lg:w-[33px]"
          />
        </button>
      )}
    </>
  );
}
