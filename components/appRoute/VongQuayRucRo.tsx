"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { renderImage, logInfo, logError } from "@/utils/log-helper";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import KhoDo from "../modal/KhoDo";
import XacNhan from "../modal/XacNhan";

const VongQuayRucRo = () => {
  const [showPoptbao, setShowPoptbao] = useState(false);
  // copy phần khai báo này
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    <>
      <div className="font-UtmSwiss relative max-w-[1200px] mx-auto">
        <div className="tx_voquay_all bg-img-vquay bg-no-repeat bg-contain w-[83.2vw] h-[83.2vw] lg:w-[557px] lg:h-[557px]  mx-auto my-[4.667vw] lg:my-[35px] relative">
          <Image
            src={renderImage("assets/images/bg-nv.png")}
            alt="Light"
            width={24}
            height={624}
            className="hidden xl:block w-[421px] h-[664px] absolute left-[-375px]"
          />
          <Image
            src={renderImage("assets/images/img-den1.png")}
            alt="Light"
            width={24}
            height={624}
            className="dennhay_1 w-full"
          />
          <Image
            src={renderImage("assets/images/img-den2.png")}
            alt="Light"
            width={624}
            height={624}
            className="dennhay_2 w-full"
          />
          <Link
            href="#"
            className="btn_qua_vquts absolute z-[2] top-[21vw] w-[21vw] lg:w-[125px] lg:top-[156px] left-[50%] transform translate-x-[-50%] group"
          >
            <Image
              src={renderImage("assets/images/arr-muiten.png")}
              alt="Button Quay"
              width={308}
              height={308}
              id={"imgv-quayv"}
              className="w-full group-hover:transform  ease-in group-hover:scale-90 "
            />
          </Link>
          <Link
            href="#"
            className="btn_qua_vquts absolute z-[2] top-[21vw] w-[21vw] lg:w-[125px] lg:top-[156px] left-[50%] transform translate-x-[-50%] group"
            // onClick={() => spinAction()}
            id="spin-custom"
          >
            <Image
              src={renderImage("assets/images/btn-quay.png")}
              alt="Button Quay"
              width={308}
              height={308}
              id={"imgv-quayv"}
              className="w-full group-hover:transform  ease-in group-hover:scale-90 "
            />
          </Link>

          <div className="tndx_nd_vquayall">
            <div className="txt_diem_alyr txt_diemvq-11 active">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-10 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-9 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-8 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-7 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-6 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-5 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-4 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-3 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-2 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
            <div className="txt_diem_alyr txt_diemvq-1 ">
              <Image
                src={renderImage("assets/images/img-item.png")}
                alt="Button Quay"
                width={88}
                height={48}
                id={"imgv-quayv"}
                className="w-[65%] mx-auto "
              />
              <span>Tên súng</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[10px]">
          <Link
            href="#"
            className="bg-bg-button bg-contain bg-no-repeat flex items-center justify-center uppercase w-[36.133vw] h-[8.933vw] lg:w-[271px] lg:h-[67px] text-[2.4vw] lg:text-[18px] font-UtmSwiss"
          >
            Nạp bất kỳ nhận được
            <br />1 lượt quay miễn phí
          </Link>
          <Link
            href="#"
            className="bg-bg-button2 bg-contain bg-no-repeat flex items-center justify-center uppercase w-[36.133vw] h-[8.933vw] lg:w-[271px] lg:h-[67px] text-[2.4vw] lg:text-[18px] font-UtmSwiss
            before:block before:content-[''] before:bg-btn-delete before:bg-contain before:mr-[6px] before:w-[3.6vw] before:h-[4.4vw] lg:before:w-[27px] lg:before:h-[33px]"
          >
            Xóa danh sách đã chọn
          </Link>
        </div>
        <div className="xl:absolute xl:right-[90px] xl:top-0 xl:flex xl:flex-col-reverse">
          <div className="bg-bg-luotquay bg-contain bg-no-repeat w-[26.667vw] h-[14.133vw] lg:w-[200px] lg:h-[106px] mx-auto my-[16px] pt-[5.333vw] lg:pt-[40px]">
            <span className="flex items-center justify-center mx-auto w-[21.067vw] h-[6.533vw] lg:w-[158px] lg:h-[49px] text-[3.2vw] lg:text-[24px] text-[#760606]">
              10
            </span>
          </div>
          <div className="flex justify-center gap-[10px] xl:flex-col">
            <div className="bg-bg-lq2 bg-contain bg-no-repeat w-[26.667vw] h-[19.067vw] lg:w-[200px] lg:h-[143px] text-[#760606] text-center leading-none">
              <p className="text-[2.4vw] lg:text-[18px] mt-[1.333vw] lg:mt-[10px]">
                MUA TRỌN GÓI
              </p>
              <p className="text-[4vw] lg:text-[30px]">11 VŨ KHÍ</p>
              <div className="flex mt-[4vw] lg:mt-[30px] px-[1vw] lg:px-[6px]">
                <div className="flex-1 leading-tight">
                  <p className="text-[2.4vw] lg:text-[16px] text-[#fff]">
                    Giá ưu đãi
                  </p>
                  <p className="text-[2.4vw] lg:text-[16px] text-[#fff713]">
                    2750 Vcoin
                  </p>
                </div>
                <button
                  className="bg-bg-btn bg-contain bg-no-repeat animate-pusle flex items-center justify-center text-[2.4vw] lg:text-[18px] w-[12.8vw] h-[5.6vw] lg:w-[96px] lg:h-[42px] text-[#fff]"
                  onClick={() => {
                    dispatch(updateModalState(<XacNhan />));
                  }}
                >
                  MUA
                </button>
              </div>
            </div>
            <div className="bg-bg-lq2 bg-contain bg-no-repeat w-[26.667vw] h-[19.067vw] lg:w-[200px] lg:h-[143px] text-[#760606] text-center leading-none">
              <p className="text-[2.4vw] lg:text-[18px] mt-[1.333vw] lg:mt-[10px]">
                MUA
              </p>
              <p className="text-[4vw] lg:text-[30px]">1 LƯỢT QUAY</p>
              <div className="flex mt-[4vw] lg:mt-[30px] px-[1vw] lg:px-[6px]">
                <div className="flex-1 leading-tight">
                  <p className="text-[2.4vw] lg:text-[16px] text-[#fff]">
                    Giá 1 lượt
                  </p>
                  <p className="text-[2.4vw] lg:text-[16px] text-[#fff713]">
                    275 Vcoin
                  </p>
                </div>
                <button
                  className="bg-bg-btn bg-contain bg-no-repeat animate-pusle flex items-center justify-center text-[2.4vw] lg:text-[18px] w-[12.8vw] h-[5.6vw] lg:w-[96px] lg:h-[42px] text-[#fff]"
                  onClick={() => {
                    dispatch(updateModalState(<XacNhan />));
                  }}
                >
                  QUAY
                </button>
              </div>
            </div>
            <div className="bg-bg-vcoin bg-contain bg-no-repeat w-[26.667vw] h-[19.067vw] lg:w-[200px] lg:h-[143px] text-[#760606] text-center leading-none pt-[4.667vw] lg:pt-[35px]">
              <span className="flex items-center justify-center mx-auto w-[21.067vw] h-[6.533vw] lg:w-[158px] lg:h-[49px] text-[3.2vw] lg:text-[24px] text-[#760606]">
                999
              </span>
              <button
                className="bg-gradient-to-b from-[#620001] to-[#d90018] flex items-center justify-center w-[90%] h-[5vw] rounded-[2.5vw] text-[2.4vw] lg:text-[18px] lg:h-[42px] text-[#fff713] mx-auto mt-[1.333vw] lg:mt-[10px]"
                onClick={() => {
                  dispatch(updateModalState(<KhoDo />));
                }}
              >
                Lịch sử quay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VongQuayRucRo;
