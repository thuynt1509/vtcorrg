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
const ThongBao = (props: P) => {
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
          className="absolute right-[10px] w-[30px] h-[30px] top-[10px] z-10 lg:w-[43px] lg:h-[44px] lg:top-[20px] lg:right-[20px]"
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
        <div className="relative h-full text-[#fff] text-[16px] lg:text-[15px] px-[20px] py-[5vw] md:px-[25px] md:pt-[15px] md:py-[20px]">
          <h4 className=" text-[20px] font-bold flex items-center justify-center gap-[6px] before:block before:content-[''] before:bg-icon-bell before:bg-contain before:bg-no-repeat before:w-[10vw] before:h-[9vw] md:before:w-[60px] md:before:h-[50px]">
            THÔNG BÁO
          </h4>
          <div className=" flex flex-col h-[100px] items-center justify-center">
            <p className="text-center">
              Quay 100 lần Vòng quay Áo hoàng gia thành công.
            </p>
            <p className="text-center">
              Vui lòng kiểm tra kết quả trong Kho Đồ
            </p>
          </div>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default ThongBao;
