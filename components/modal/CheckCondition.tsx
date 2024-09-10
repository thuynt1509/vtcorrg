import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
interface P {
  message?: string;
  className?: string;
}

// 1 popup demo
const CheckCondition = (props: P) => {
  const { message, className } = props;
  // khai báo các thành phần để điều khiển popup
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    // w-63-ctp h-97-ctp
    <div
      className={`bg-black bg-opacity-50 ${
        className ? className : "fixed"
      } inset-0 z-[9999] w-full h-full flex items-center justify-center`}
    >
      <div
        className={`relative bg-modal-tbao bg-100 p-[10px] w-[96%] min-h-[100px] max-w-[572px] md:h-[272px]`}
        // bấm vào popup ko tự tắt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Link
          href=""
          className="absolute right-[15px] w-[30px] h-[30px] top-[15px] z-10 lg:w-[43px] lg:h-[44px] lg:top-[20px] lg:right-[20px]"
        >
          <Image
            src={"assets/images/icon-close.png"}
            style={{ cursor: "pointer" }}
            alt="Close"
            width={43}
            height={44}
            //action khi tắt popup
            onClick={() => {
              dispatch(updateModalState(null));
            }}
          />
        </Link>
        {/* main modal */}
        <div className="relative h-full text-[#fff] text-[16px] lg:text-[15px] px-[20px] py-[20px] md:px-[35px] md:py-[35px]">
          <h4 className=" text-[14px] font-bold flex items-center justify-center gap-[6px] before:block before:content-[''] before:bg-icon-bell before:bg-contain before:bg-no-repeat before:w-[10vw] before:h-[9vw] md:before:w-[60px] md:before:h-[50px]">
            KIỂM TRA ĐIỀU KIỆN THAM GIA SỰ KIỆN
          </h4>
          <div className="flex items-center">
            <div className="flex-1 h-[34px] bg-[#fff] rounded-[10px] overflow-hidden md:h-[50px]">
              <input
                type="text"
                placeholder="Tên tài khoản..."
                className=" w-full h-full px-[10px]"
              />
            </div>

            <button className="block bg-btn-check bg-contain bg-no-repeat w-[116px] h-[40px] md:w-[195px] md:h-[67px]"></button>
          </div>
          <p className="italic text-[#ff0000] text-[14px] text-center my-[6px]">
            Không đủ điều kiện. Tài khoản tiêu 600 Vcoin tháng 1/2024
          </p>
          <p className="italic text-[#36ff95] text-[14px] text-center">
            Đủ điều kiện tham gia, định danh: VIP
          </p>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default CheckCondition;
