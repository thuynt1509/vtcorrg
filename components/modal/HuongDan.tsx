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
const HuongDan = (props: P) => {
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
        className={`relative bg-bg-huongdan bg-100 p-[10px] w-[96%] min-h-[300px] h-[500px] max-w-[737px] md:h-[535px]`}
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
          <h4 className=" text-[20px] flex items-center justify-center gap-[6px] before:block before:content-[''] before:bg-icon-guid before:bg-contain before:bg-no-repeat before:w-[46px] before:h-[51px]">
            HƯỚNG DẪN
          </h4>
          <div className="text-[16px] py-[10px] w-full h-[390px] lg:h-[400px] scroll-overflow overflow-y-auto text-[#fff]">
            <p className="font-bold">1. Sự kiện mời bạn:</p>
            <p>
              - Chỉ những tài khoản tạo trước ngày 01/09/2023 và có login vào
              game mới được tham gia mời bạn.
            </p>
            <p>
              - Mời tài khoản mới: Mời những tài khoản tạo mới trong khoảng thời
              gian quy định theo số lượng để nhận quà. Những tài khoản được mời
              phải đăng nhập vào web và game ít nhất 5 phút mới được tính là mời
              thành công.
            </p>
            <p>
              - Mời tài khoản cũ: Mời những tài khoản không chơi game trong
              khoảng thời gian quy định theo số lượng để nhận quà. Những tài
              khoản được mời phải đăng nhập vào web mới được tính là mời thành
              công.
            </p>
            <p>
              - 1 tài khoản khi đã được mời thành công, người chơi khác sẽ không
              mời được tài khoản đó thêm lần nữa.
            </p>
            <p>
              - Những tài khoản đã được mời thành công, đăng nhập vào game và
              tham gia 1 ván nhảy hàng ngày (có phát sinh EXP, Thời gian chơi)
              theo số lượng quy định, tài khoản mời sẽ được nhận thưởng tương
              ứng.
            </p>
            <p className="font-bold">2. Sự kiện Người chơi hệ Au:</p>
            <p>- Sự kiện dành cho tất cả tài khoản.</p>
            <p>
              - Các tài khoản có đăng nhập game và website hàng ngày mới được
              tham gia sự kiện và nhận các mốc phần thưởng.
            </p>
            <p>
              - Sự kiện kéo dài 14 ngày tính từ ngày bắt đầu sự kiện, người chơi
              đăng nhập vào game ít nhất 1 lần, tham gia các nhiệm vụ trong game
              hàng ngày theo quy định để nhận được các phần thưởng tương ứng.
            </p>
            <p>
              - Với người chơi bình thường: Nhận được 9/14 giải thưởng khi hoàn
              thành đủ 14 nhiệm vụ ngày. Bạn có thể chơi game hoặc mua thẳng
              nhiệm vụ để hoàn thành. Giá 1 nhiệm vụ : 50 Vcoin.{" "}
              <span className="text-[#FF6D00]">
                Giải thưởng phải nhận trước 23:59 hàng ngày, nếu không hệ thống
                sẽ thu hồi.
              </span>
            </p>
            <p className="font-bold">- Với người chơi mua thẻ Titanium:</p>
            <p>* Giá thẻ Titanium : 150 Vcoin</p>
            <p>
              * Nhận được 14/14 giải thưởng khi hoàn thành đủ 14 nhiệm vụ ngày
              bao gồm cả FREE và VIP. Có thể mua nhiệm vụ để nhận thưởng.
            </p>
            <p>
              * Không giới hạn thời gian nhận thưởng cho đến khi kết thúc sự
              kiện theo thông báo.
            </p>
            <p>
              * Ưu đãi nhận được Hộp quà VIP, khi mở có cơ hội nhận được các vật
              phẩm VIP, có giá trị. Có thể mua thêm lần mở hộp quà VIP khi hoàn
              thành nhiệm vụ. Giá mỗi lần mua : 5 Vcoin, không giới hạn lần mua.
            </p>
            <p>
              * Có thể Tặng vật phẩm nhận được từ Hộp quà VIP cho người chơi
              khác nếu không muốn nhận vào game. Vật phẩm sẽ được trao vào kho
              đồ trên web của người được tặng.
            </p>
            <p className="font-bold">Lưu ý:</p>

            <p className="font-bold">3. Giải thưởng TOP:</p>
            <p>
              Dành cho 50 người chơi tiêu Vcoin nhiều nhất trong thời gian diễn
              ra sự kiện.
            </p>
          </div>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default HuongDan;
