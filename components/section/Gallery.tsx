import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Quản lý chỉ số ảnh hiện tại
  const [allowScroll, setAllowScroll] = useState(true); // Cho phép cuộn xuống phần dưới khi hết ảnh
  const [scrollDistance, setScrollDistance] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const arrImg = [
    "/assets/images/img-banner.jpg",
    "/assets/images/img-banner2.jpg",
    "/assets/images/img-banner3.jpg",
  ];
  const maxIndex = arrImg.length - 1;
  // Sử dụng useCallback để giữ tham chiếu hàm không đổi
  // const handleScroll = useCallback(
  //   (event: WheelEvent) => {
  //     const maxIndex = 2; // Số lượng ảnh trong gallery, 0-indexed
  //     if (!allowScroll) {
  //       if (event.deltaY > 0 && currentIndex < maxIndex) {
  //         // Cuộn xuống
  //         setCurrentIndex((prevIndex) => prevIndex + 1);
  //       } else if (event.deltaY < 0 && currentIndex > 0) {
  //         // Cuộn lên
  //         setCurrentIndex((prevIndex) => prevIndex - 1);
  //       }

  //       event.preventDefault(); // Ngăn cuộn trang khi chưa hết ảnh
  //     }

  //     // Khi đến ảnh cuối cùng, cho phép cuộn xuống phần khác của trang

  //     if (currentIndex === maxIndex) {
  //       setAllowScroll(true);
  //     } else if (currentIndex === 0) {
  //       setAllowScroll(false); // Ngăn cuộn lên khi ở ảnh đầu tiên
  //     } else {
  //       setAllowScroll(false);
  //     }
  //   },
  //   [currentIndex, allowScroll]
  // );
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (scrollDistance < maxIndex * 1000) {
        event.preventDefault();
      }
      if (window.scrollY === 0 && allowScroll) {
        if (event.deltaY > 0) {
          // Cuộn xuống
          if (scrollDistance < maxIndex * 1000) {
            for (var i = 1; i <= 100; i++) {
              setScrollDistance((prevDistance) => prevDistance + 2);
            }
            setAllowScroll(false);
            setTimeout(() => {
              setAllowScroll(true);
            }, 100);
            event.preventDefault();
          }
        } else if (event.deltaY < 0) {
          // Cuộn lên
          setScrollDistance((prevDistance) =>
            prevDistance - 200 > 0 ? prevDistance - 200 : 0
          );
          setAllowScroll(false);
          setTimeout(() => {
            setAllowScroll(true);
          }, 100);
          event.preventDefault();
        }
      }
    },
    [scrollDistance, allowScroll]
  );
  // Thêm sự kiện cuộn chuột
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll, { passive: false });
    };
  }, [handleScroll]);
  console.log(scrollDistance);
  return (
    <div className="gallery" ref={galleryRef}>
      {/* {scrollDistance % 1000 === 0 && (
        <div
          className={`gallery-item z-[2] active`}
          data-speed="1"
          style={{
            filter: `blur(${Math.floor((scrollDistance % 1000) / 100)}px)`,
            transform: `scale(${1 - (scrollDistance % 1000) / 1000 / 5})`,
          }}
        >
          <Image
            width={1420}
            height={820}
            src={arrImg[Math.floor((scrollDistance + 200) / 1000)]}
            alt="Banner VTC"
            className="w-full h-full object-cover"
          />
        </div>
      )} */}
      {arrImg.map((e, i) => {
        if (i <= scrollDistance / 1000) {
          return (
            <div
              className={`gallery-item z-[1] active`}
              data-speed="1"
              style={{
                filter: `blur(${Math.floor((scrollDistance % 1000) / 100)}px)`,
                transform: `scale(${1 - (scrollDistance % 1000) / 1000 / 5})`,
              }}
            >
              <Image
                width={1420}
                height={820}
                src={arrImg[Math.floor(scrollDistance / 1000)]}
                alt="Banner VTC"
                className="w-full h-full object-cover"
              />
            </div>
          );
        }
        if (i === Math.ceil(scrollDistance / 1000)) {
          return (
            <div
              className={`gallery-item z-[3] active`}
              data-speed="2"
              style={{
                top: `${(1000 - (scrollDistance % 1000)) / 10}%`,
              }}
            >
              <Image
                width={1420}
                height={820}
                src={arrImg[Math.ceil(scrollDistance / 1000)]}
                alt="Banner VTC 2"
                className="w-full h-full object-cover"
              />
            </div>
          );
        }
        return <></>;
      })}
      {/* <div
        className={`gallery-item active`}
        data-speed="1"
        style={{
          filter: `blur(${Math.floor((scrollDistance % 1000) / 100)}px)`,
          transform: `scale(${1 - (scrollDistance % 1000) / 1000 / 5})`,
        }}
      >
        <Image
          width={1420}
          height={820}
          src={arrImg[Math.floor(scrollDistance / 1000)]}
          alt="Banner VTC"
          className="w-full h-full object-cover"
        />
      </div>
      {disapear ? (
        <></>
      ) : (
        <div
          className={`gallery-item z-[1] active`}
          data-speed="2"
          style={{
            top: `${(1000 - (scrollDistance % 1000)) / 10}%`,
          }}
        >
          <Image
            width={1420}
            height={820}
            src={arrImg[Math.ceil(scrollDistance / 1000)]}
            alt="Banner VTC 2"
            className="w-full h-full object-cover"
          />
        </div>
      )} */}
      {/* <div
        className={`gallery-item ${currentIndex === 2 ? "active" : ""}`}
        data-speed="2"
      >
        <Image
          width={1420}
          height={820}
          src={"/assets/images/img-banner3.jpg"}
          alt="Banner VTC 3"
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
};

export default Gallery;
