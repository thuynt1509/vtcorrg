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
const XacNhan = (props: P) => {
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
          className="absolute right-[20px] w-[30px] h-[30px] top-[10px] z-10 lg:w-[43px] lg:h-[44px] lg:top-[20px] lg:right-[20px]"
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
        <div className="relative h-full text-[#fff] text-[16px] lg:text-[15px] px-[20px] py-[30px] md:px-[35px] md:py-[35px]">
          <p className=" text-[16px] text-center my-[10px] font-bold">
            BẠN MUỐN QUAY 10 LẦN <br /> VỚI GIÁ 90 VCOIN?
          </p>
          <div className="flex gap-[10px] justify-center">
            <button className="block bg-btn-xacnhan bg-contain bg-no-repeat w-[116px] h-[40px] md:w-[195px] md:h-[67px]"></button>
            <button className="block bg-btn-huy bg-contain bg-no-repeat w-[116px] h-[40px] md:w-[195px] md:h-[67px]"></button>
          </div>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default XacNhan;
