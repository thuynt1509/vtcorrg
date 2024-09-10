import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
interface P {
  message?: string;
  className?: string;
}

// 1 popup demo
const Video = (props: P) => {
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
        className={`relative bg-bg-modal-y bg-[#fff] bg-contain bg-repeat-y p-[3px] lg:p-[6px] w-[96%] max-w-[800px] h-[300px] lg:h-[500px] 
        before:block before:content-[''] before:bg-top-modal before:bg-contain before:w-[102%] before:h-[10vw] before:bg-no-repeat before:absolute before:top-[-1vw] before:left-[-1%]  lg:before:w-[101%]  lg:before:h-[87px] lg:before:left-[-0.5%] lg:before:top-[-1%]
        after:block after:content-[''] after:bg-top-modal after:bg-contain after:transform after:rotate-180 after:w-[102%] after:h-[10vw] after:bg-no-repeat after:absolute after:bottom-[-1vw] after:left-[-1%] lg:after:w-[101%]  lg:after:h-[87px] lg:after:left-[-0.5%] lg:after:bottom-[-1%]`}
        // bấm vào popup ko tự tắt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Link
          href=""
          className="absolute right-[10px] w-[18px] h-[18px] top-[10px] z-10"
        >
          <Image
            src={"assets/images/icon-close.png"}
            style={{ cursor: "pointer" }}
            alt="Close"
            width={18}
            height={18}
            //action khi tắt popup
            onClick={() => {
              dispatch(updateModalState(null));
            }}
          />
        </Link>
        {/* main modal */}
        <div className="relative h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NKEOqD1fR88?si=Q_5tZ2ICz5x1Q0Cp"
            title="YouTube video player"
          ></iframe>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default Video;
