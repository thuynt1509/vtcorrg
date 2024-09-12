"use client";
import Link from "next/link";
import Image from "next/image";
import ScrollToTopButton from "./ScrollToTopButton";

const FooterMain = () => {
  return (
    <footer
      className={` bg-[#fff] px-5 text-[#4A4A4A] py-[20px] lg:ml-[300px] xl:px-0`}
    >
      <div className="w-full text-[18px] pb-[40px] xl:px-[125px]">
        <div className="grid grid-cols-1 xl:grid-cols-[auto_auto_auto] gap-[40px] pt-[40px] xl:gap-[50px] xl:pt-[30px] border-t-[1px] border-solid border-[#D9D9D9]">
          <div className="">
            <Link href="#" className="block w-[150px] mb-[24px]">
              <Image
                width={150}
                height={73}
                src={"assets/images/logo-f-1.png"}
                alt="Logo VTC"
              />
            </Link>
            <p className="font-bold mb-[10px] text-[#000]">
              Tổng công ty truyền thông đa phương tiện (VTC)
            </p>
            <p className="">Địa chỉ:</p>
            <p>Tòa nhà 67B Hàm Long, P.Hàng Bài, Q.Hoàn Kiếm, Hà nội.</p>
          </div>
          <div className="">
            <span className="block font-bold mb-[24px] text-[#000]">
              THÔNG TIN LIÊN HỆ
            </span>
            <Link
              href="#"
              className="flex items-center gap-[16px] mb-[24px] hover:text-[#0EA0FF] group"
            >
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#0EA0FF]">
                <Image
                  width={24}
                  height={24}
                  src={"assets/images/icon-call.png"}
                  alt="Logo VTC"
                  className="transition-all group-hover:rotate-45"
                />
              </span>
              <p className="flex flex-col">
                <span>Hotline</span>
                <span>024.4450115</span>
              </p>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-[16px] mb-[24px] hover:text-[#0EA0FF] group"
            >
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#0EA0FF]">
                <Image
                  width={24}
                  height={24}
                  src={"assets/images/icon-chat.png"}
                  alt="Logo VTC"
                  className="transition-all group-hover:rotate-45"
                />
              </span>
              <p className="flex flex-col">
                <span>Email</span>
                <span>vtcfamily@vtc.vn</span>
              </p>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-[16px] mb-[24px] hover:text-[#0EA0FF] group"
            >
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#0EA0FF]">
                <Image
                  width={24}
                  height={24}
                  src={"assets/images/icon-global.png"}
                  alt="Logo VTC"
                  className="transition-all group-hover:rotate-45"
                />
              </span>
              <p>Website: vtc.org.vn</p>
            </Link>
          </div>
          <div className="">
            <span className="block font-bold mb-[24px] text-[#000]">
              ĐƠN VỊ THÀNH VIÊN
            </span>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Intecom
            </Link>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Digital
            </Link>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Digicom
            </Link>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Netviet
            </Link>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Online
            </Link>
            <Link href="#" className="block mb-[4px] hover:text-[#0EA0FF]">
              VTC Mobile
            </Link>
            <Link href="#" className="block hover:text-[#0EA0FF]">
              VTC Comtech
            </Link>
          </div>
        </div>
      </div>
      <div className="text-[16px] lg:text-[18px] text-center xl:mx-[125px] border-t-[1px] border-solid border-[#D9D9D9] py-[26px]">
        Copyright 2024.All rights reserved by VTC
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default FooterMain;
