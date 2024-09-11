import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import { Parallax, Scrollbar, Mousewheel, FreeMode } from "swiper/modules";
export default function Gallery2() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        speed={600}
        parallax={true}
        scrollbar={true}
        draggable={true}
        dragSize={0}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel, Parallax, FreeMode]}
        freeMode={true}
        className="mySwiper w-full h-[850px]"
      >
        <SwiperSlide>
          <div className="bg-yellow-50 w-full h-full">
            {" "}
            <Image
              width={1420}
              height={820}
              src={"/assets/images/img-banner.jpg"}
              alt="Banner VTC"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black w-full h-full">
            {" "}
            <Image
              width={1420}
              height={820}
              src={"/assets/images/img-banner2.jpg"}
              alt="Banner VTC"
              className="w-full h-full object-cover"
            />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-50 w-full h-full">
            {" "}
            <Image
              width={1420}
              height={820}
              src={"/assets/images/img-banner3.jpg"}
              alt="Banner VTC"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
