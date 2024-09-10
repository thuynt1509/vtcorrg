"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { renderImage, logInfo, logError } from "@/utils/log-helper";
import { Inter } from "next/font/google";
import Select from "react-select";
const inter = Inter({ subsets: ["latin"] });
const DanhSachVuKhi = () => {
  const PhamChat = [
    { value: "pc1", label: "S" },
    { value: "pc2", label: "S+" },
    { value: "pc3", label: "SS+" },
    { value: "pc4", label: "S-" },
  ];
  return (
    <>
      <div className="font-UtmSwiss relative max-w-[1200px] mx-auto my-[30px] px-[16px] xl:px-0">
        <p className="text-[#fff] text-[3.2vw] lg:text-[24px] text-center lg:text-left">
          Chọn Vũ Khí trong danh sách dưới đây
          <br className="lg:hidden" /> để đưa vào vòng quay may mắn
        </p>
        <div className="bg-[#0000006b] rounded-[4px] my-[16px] p-[10px] lg:p-[20px]">
          <div className="lg:flex lg:mb-[20px]">
            <span className="block mx-auto bg-text-dsvukhi bg-contain bg-no-repeat w-[83.2vw] h-[6.267vw] lg:w-[624px] lg:h-[47px] lg:mx-0 lg:mr-[100px]"></span>
            <div className="flex gap-[10px] my-[10px] text-[10px] lg:text-[14px] lg:flex-1">
              <div className="flex-1 relative">
                <input
                  type="text"
                  className="px-[16px] w-full bg-[#ececec] rounded-md h-[38px] focus:outline-none"
                  placeholder="Nhập tên súng"
                />
                <button className="bg-icon-search bg-no-repeat bg-contain w-[21px] h-[22px] absolute right-[10px] top-[8px]"></button>
              </div>
              <Select
                className={`${inter.className}`}
                placeholder="Chọn phẩm chất"
                options={PhamChat}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: 0,
                    boxShadow: "none",
                    backgroundColor: state ? "#d9d9d9" : "#d9d9d9",
                    color: state ? "#2662a5" : "#2662a5",
                    borderRadius: 10,
                    width: "170px",
                    height: "38px",
                  }),
                  indicatorSeparator: (baseStyles, state) => ({
                    ...baseStyles,
                    display: "none",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: "#5e5e5d",
                  }),
                  indicatorsContainer: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#2662a5",
                  }),
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#5e5e5d",
                  }),

                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state ? "transparent" : "transparent",
                    backgroundColor: state ? "transparent" : "transparent",
                    color: "#2662a5",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "transparent"
                      : "transparent",
                    backgroundColor: state.isFocused ? "#6c76da" : "#899fcd",
                    border: 0,
                    color: "#fff",
                    boxShadow: "none",
                  }),
                }}
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-[10px] lg:gap-[16px] max-w-[400px] mx-auto lg:max-w-[100%] lg:grid-cols-4">
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-frame-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s-.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-frame-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s+.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-frame-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-ss.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-ss-.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-ss+.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
            <li className="bg-bg-item bg-100 bg-no-repeat h-[80px] flex flex-col items-center justify-center relative lg:h-[145px]">
              <Image
                src={renderImage("assets/images/icon-s.png")}
                alt="icon pc"
                width={160}
                height={140}
                id={"imgv-quayv"}
                className="w-[20%] absolute top-[10%] left-[2%]"
              />
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={193}
                height={72}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto"
              />
              <span className="text-[14px] leading-none ">Tên vũ khí</span>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-[10px] my-[20px]">
            <a
              className="flex bg-arr-paging bg-contain w-[20px] h-[20px] "
              href="#"
            ></a>
            <a className="item-paging active" href="#">
              1
            </a>

            <span className="item-paging">...</span>
            <a className="item-paging" href="#">
              2
            </a>
            <a className="item-paging" href="#">
              3
            </a>
            <span className="item-paging">...</span>
            <a className="item-paging" href="#">
              10
            </a>
            <a
              className="flex bg-arr-paging bg-contain w-[20px] h-[20px] transform rotate-180"
              href="#"
            ></a>
          </div>
        </div>
        <div className="flex justify-center gap-[10px]">
          <a
            className="bg-btn-xn bg-contain bg-no-repeat flex items-center justify-center uppercase w-[28.4vw] h-[7.067vw] lg:w-[213px] lg:h-[53px]"
            href="#"
          ></a>
          <a
            className="bg-btn-chon bg-contain bg-no-repeat flex items-center justify-center uppercase w-[28.4vw] h-[7.067vw] lg:w-[213px] lg:h-[53px]"
            href="#"
          ></a>
        </div>
      </div>
    </>
  );
};
export default DanhSachVuKhi;
