"use client";
import Link from "next/link";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import ScrollToTopButton from "./ScrollToTopButton";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Footer = () => {
  return (
    <footer
      className={`${beVietnam.className} bg-[#252525] pt-[43px] pb-[50px] px-5 text-[#fff]`}
    >
      <div className="container m-auto text-[16px]">
        <div className="grid grid-cols-1 xl:grid-cols-[auto_auto_auto] xl:gap-[50px] xl:pt-[30px]">
          <div className="grid grid-cols-1 mb-8">
            <Link href="#" className="w-[188px] mb-5">
              <Image
                width={188}
                height={52}
                src={"assets/images/logo-f-1.png"}
                alt="Logo VTC"
              />
            </Link>
            <p className="">TỔNG CÔNG TY TRUYỀN THÔNG ĐA PHƯƠNG TIỆN (VTC)</p>
            <p className="">
              CÔNG TY VTC CÔNG NGHỆ VÀ NỘI DUNG SỐ (VTC INTECOM)
            </p>
          </div>
          <div className="grid grid-cols-1 mb-8 xl:mt-2 ">
            <div className="grid grid-cols-1 mb-7">
              <span className="font-bold mb-2">
                CHỊU TRÁCH NHIỆM QUẢN LÍ NỘI DUNG:
              </span>
              <p className="">Ông Trần Phương Huy</p>
            </div>
            <div className="grid grid-cols-1">
              <span className="font-bold mb-2"> THÔNG TIN LIÊN HỆ</span>
              <Link
                href="mailto:partners@vtc.vn"
                className="flex items-center cursor-pointer mb-2 transition-all hover:text-[#00AEEF]"
                aria-label="Mail"
              >
                <Image
                  width={14}
                  height={11}
                  src={"assets/images/icon-mail.png"}
                  alt="facebook-f"
                  className="mr-2"
                />
                <span className="leading-none">partners@vtc.vn</span>
              </Link>
              <div className="grid grid-cols-2 gap-5">
                <Link
                  href="#"
                  className="flex items-center cursor-pointer transition-all hover:text-[#00AEEF]"
                  aria-label="Facebook"
                >
                  <Image
                    width={6}
                    height={12}
                    src={"assets/images/icon-f-2.png"}
                    alt="facebook-f"
                    className="mr-3 ml-1"
                  />
                  <span className="">fb.com/congvtcgame</span>
                </Link>
                <Link
                  href="https://hotro.vtcgame.vn/"
                  target="_blank"
                  className="flex items-center cursor-pointer transition-all hover:text-[#00AEEF]"
                  aria-label="Website VTC"
                >
                  <Image
                    width={14}
                    height={14}
                    src={"assets/images/icon-f-3.png"}
                    alt="web-f"
                    className="mr-2"
                  />
                  <span className="">hotro.vtcgame.vn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:mt-2">
            <div className="grid grid-cols-1 mb-7">
              <span className="font-bold mb-2"> TRỤ SỞ HÀ NỘI</span>
              <p>
                Tầng 14, Tòa nhà VTC 23 Lạc Trung, Quận Hai Bà Trưng, Hà Nội
              </p>
            </div>
            <div className="grid grid-cols-1">
              <span className="font-bold mb-1">
                VĂN PHÒNG ĐẠI DIỆN TP. HỒ CHÍ MINH
              </span>
              <p>259 Đồng Đen, Phường 10, Quận Tân Bình, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-[20px] mt-[30px]">
          <Link
            href="mailto:partners@vtc.vn"
            className="inline-block py-[7px] px-[20px] bg-[#525252] text-[#fff] uppercase self-center rounded-[30px] xl:px-[30px] xl:py-[16px] transition-all hover:bg-[#00AEEF]"
          >
            Chính sách bảo mật
          </Link>
          <Link
            href="#"
            className="inline-block py-[7px] px-[20px] bg-[#525252] text-[#fff] uppercase self-center rounded-[30px] xl:px-[30px] xl:py-[16px] transition-all hover:bg-[#00AEEF]"
          >
            Điều khoản sử dụng VTC Game
          </Link>
          <Link
            href="#"
            className="inline-block py-[7px] px-[20px] bg-[#525252] text-[#fff] uppercase self-center rounded-[30px] xl:px-[30px] xl:py-[16px] transition-all hover:bg-[#00AEEF]"
          >
            Bộ quy tắc trò chơi
          </Link>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
