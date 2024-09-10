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
const DinhDanh = (props: P) => {
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
        className={`relative bg-bg-modal-nv bg-100 bg-repeat-y p-[10px] w-[96%] min-h-[300px] max-h-[80vh] max-w-[606px] md:h-[572px]`}
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
        <div className="relative h-full text-[#fff] text-[14px] lg:text-[15px] px-[20px] py-[4vw] lg:px-[25px] lg:pt-[15px] lg:py-[20px]">
          <h4 className=" text-[20px] flex items-center justify-center gap-[6px] before:block before:content-[''] before:bg-icon-user before:bg-contain before:bg-no-repeat before:w-[42px] before:h-[48px]">
            ĐỊNH DANH
          </h4>
          <p className="text-center">
            Vui lòng chọn loại định danh mà bạn muốn sử dụng trong ngày:
          </p>
          <div className="flex justify-center gap-[10px]">
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <span className="w-[29.733vw] h-[27.2vw] lg:w-[223px] lg:h-[204px]">
                <Image
                  src={"assets/images/icon-vip.png"}
                  alt="VIP"
                  width={223}
                  height={204}
                />
              </span>
              <button className="block bg-btn-chon bg-contain bg-no-repeat w-[26vw] h-[9.467vw] lg:w-[195px] lg:h-[71px]"></button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <span className="w-[29.733vw] h-[27.2vw] lg:w-[223px] lg:h-[204px]">
                <Image
                  src={"assets/images/icon-daigia.png"}
                  alt="ĐẠI GIA"
                  width={223}
                  height={204}
                />
              </span>
              <button className="block bg-btn-chon bg-contain bg-no-repeat w-[26vw] h-[9.467vw] lg:w-[195px] lg:h-[71px]"></button>
            </div>
          </div>
          <strong className="text-[#f24343]">Lưu ý:</strong>
          <p>
            - Bắt buộc phải chọn khi login web lần đầu trong ngày. Sau khi chọn,
            Vcoin tiêu dùng sẽ được tính ddeierm VIP theo định danh đã chọn.
          </p>
          <p>
            - Sau 23:49 hàng ngày sẽ reset, có thể lựa chọn lại định danh vào
            ngày hôm sau
          </p>
          <p>
            - Nếu không lựa chọn, khi tiêu dùng Vcoin sẽ không được tính điểm
            VIP
          </p>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default DinhDanh;
