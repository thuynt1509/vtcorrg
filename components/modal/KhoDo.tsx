import { Mulish } from "next/font/google";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import ThongBao from "./ThongBao";
import TangItem from "./TangItem";
interface P {
  message?: string;
  className?: string;
}

// 1 popup demo
const KhoDo = (props: P) => {
  const KhoDo = [
    { value: "vinhvien", label: "Vĩnh viễn" },
    { value: "itemngay", label: "Item ngày" },
    { value: "giftcode", label: "Giftcode" },
    { value: "anpham", label: "Ấn phẩm" },
  ];
  const Lsgd = [
    { value: "1", label: "Tất cả" },
    { value: "2", label: "Quay 1 lần" },
    { value: "3", label: "Quay 10 lần" },
    { value: "4", label: "Quay 100 lần" },
    { value: "5", label: "Reset Spin" },
  ];
  const { message, className } = props;
  // khai báo các thành phần để điều khiển popup
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    // w-63-ctp h-97-ctp
    <div
      className={`bg-black bg-opacity-50 ${
        className ? className : "fixed"
      } inset-0 z-[9999] w-full h-full flex items-center justify-center overflow-auto`}
    >
      <div
        className={`relative bg-bg-modal-khodo-mb bg-100 p-[20px] w-full max-w-[1180px] h-[724px]`}
        // bấm vào popup ko tự tắt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Link
          href=""
          className="absolute right-[10px] w-[30px] h-[30px] top-[20px] z-10 lg:w-[43px] lg:h-[44px] lg:top-[20px] lg:right-[30px]"
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
        <div className=" pt-[10px]">
          <Tabs value="tab1">
            <TabsHeader className="flex flex-col lg:flex-row items-center justify-center lg:gap-[10px] py-[10px] tabKhodo font-iCeil mx-[10px] ">
              <Tab
                key="tab1"
                value="tab1"
                activeClassName="btnActive"
                className="w-[265px] h-[66px] p-[5px] bg-tab-modal bg-contain bg-no-repeat text-[#fff] text-[20px] relative z-20 "
              >
                <Select
                  className="normal-case"
                  placeholder="KHO ĐỒ"
                  options={KhoDo}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: 0,
                      boxShadow: "none",
                      backgroundColor: state ? "transparent" : "transparent",
                      color: state ? "#2662a5" : "#2662a5",
                      borderRadius: 20,
                      width: "240px",
                      height: "40px",
                    }),
                    indicatorSeparator: (baseStyles, state) => ({
                      ...baseStyles,
                      display: "none",
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "#fff",
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#fff",
                    }),
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#fff",
                    }),

                    singleValue: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state ? "transparent" : "transparent",
                      backgroundColor: state ? "transparent" : "transparent",
                      color: "#fff",
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? "transparent"
                        : "transparent",
                      backgroundColor: state.isFocused ? "#c51013" : "#2a0000",
                      border: 0,
                      color: "#fff",
                      boxShadow: "none",
                      fontSize: "16px",
                      zIndex: 9999,
                    }),
                  }}
                />
              </Tab>
              <Tab
                key="tab2"
                value="tab2"
                activeClassName="btnActive"
                className="w-[265px] h-[66px] p-[5px] bg-tab-modal bg-contain bg-no-repeat text-[#fff] text-[18px] relative z-10 "
              >
                <Select
                  className="normal-case"
                  placeholder="LỊCH SỬ GIAO DỊCH"
                  options={Lsgd}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: 0,
                      boxShadow: "none",
                      backgroundColor: state ? "transparent" : "transparent",
                      color: state ? "#2662a5" : "#2662a5",
                      borderRadius: 20,
                      width: "240px",
                      height: "40px",
                    }),
                    indicatorSeparator: (baseStyles, state) => ({
                      ...baseStyles,
                      display: "none",
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "#fff",
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#fff",
                    }),
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#fff",
                    }),

                    singleValue: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state ? "transparent" : "transparent",
                      backgroundColor: state ? "transparent" : "transparent",
                      color: "#fff",
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? "transparent"
                        : "transparent",
                      backgroundColor: state.isFocused ? "#c51013" : "#2a0000",
                      border: 0,
                      color: "#fff",
                      boxShadow: "none",
                      fontSize: "16px",
                    }),
                  }}
                />
              </Tab>
              <Tab
                key="tab3"
                value="tab3"
                activeClassName="btnActive"
                className="w-[265px] h-[66px] p-[5px] bg-tab-modal bg-contain bg-no-repeat text-[#fff] text-[18px] relative z-0 "
              >
                LỊCH SỬ XÓA ITEM
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel key="tab1" value="tab1" className="py-0  overflow-auto">
                <div className="w-[1050px] mx-auto lg:h-[522px]  mb-[20px]">
                  <table className="w-full h-full mx-auto text-center text-[14px] leading-tight ">
                    <thead>
                      <tr className=" text-[#fff] text-[14px] lg:text-[16px] h-[40px]">
                        <th className="px-[6px]">STT</th>
                        <th className="p-[6px]">Thời gian</th>
                        <th className="p-[6px]">Nội dung</th>
                        <th className="p-[6px]">Giải thưởng</th>
                        <th className="p-[6px]">Tài khoản GD</th>
                        <th className="p-[6px]">Tài khoản nhận</th>
                        <th className="p-[6px]">Định danh theo Item</th>
                        <th className="p-[6px]">Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#fff]">
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px] flex justify-center">
                          <button
                            className="bg-btn-nhan bg-contain bg-no-repeat w-[89px] h-[34px] text-[0px]"
                            onClick={() => {
                              // mở popup
                              dispatch(updateModalState(<ThongBao />));
                            }}
                          >
                            Nhận
                          </button>
                          <button
                            className="bg-btn-tang bg-contain bg-no-repeat w-[89px] h-[34px] text-[0px]"
                            onClick={() => {
                              // mở popup
                              dispatch(updateModalState(<TangItem />));
                            }}
                          >
                            Tặng
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">2</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px] flex justify-center">
                          <button
                            className="bg-btn-nhan bg-contain bg-no-repeat w-[89px] h-[34px] text-[0px]"
                            onClick={() => {
                              // mở popup
                              dispatch(updateModalState(<ThongBao />));
                            }}
                          >
                            Nhận
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">2</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">2</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">2</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">10</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Lắc cầu giáng sinh :abcxyz</td>
                        <td className="p-[6px]">Bộ hoàng gia 30 ngày</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">abcsads</td>
                        <td className="p-[6px]">Đại gia</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center gap-[10px] my-[10px]">
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px]"
                  ></Link>
                  <Link href="#" className="item-paging active">
                    1
                  </Link>
                  <Link href="#" className="item-paging">
                    2
                  </Link>
                  <Link href="#" className="item-paging">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px] transform rotate-180"
                  ></Link>
                </div>
              </TabPanel>
              <TabPanel key="tab2" value="tab2" className="py-0  overflow-auto">
                <div className="w-[1050px] mx-auto lg:h-[522px]  mb-[20px]">
                  <table className="w-full h-full mx-auto text-center text-[14px] leading-tight ">
                    <thead>
                      <tr className=" text-[#fff] text-[14px] lg:text-[16px] h-[40px]">
                        <th className="px-[6px]">STT</th>
                        <th className="p-[6px]">Thời gian</th>
                        <th className="p-[6px]">Giao dịch</th>
                        <th className="p-[6px]">Nội dung</th>
                        <th className="p-[6px]">Chi tiết</th>
                        <th className="p-[6px]">Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#fff]">
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">-10 Vcoin</td>
                        <td className="p-[6px]">
                          Quay 100 lần: Local Spin Hoàng Gia
                        </td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Nhận thành công</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center gap-[10px] my-[10px]">
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px]"
                  ></Link>
                  <Link href="#" className="item-paging active">
                    1
                  </Link>
                  <Link href="#" className="item-paging">
                    2
                  </Link>
                  <Link href="#" className="item-paging">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px] transform rotate-180"
                  ></Link>
                </div>
              </TabPanel>
              <TabPanel key="tab3" value="tab3" className="py-0  overflow-auto">
                <div className="w-[1050px] mx-auto lg:h-[522px]  mb-[20px]">
                  <table className="w-full h-full mx-auto text-center text-[14px] leading-tight ">
                    <thead>
                      <tr className=" text-[#fff] text-[14px] lg:text-[16px] h-[40px]">
                        <th className="px-[6px]">STT</th>
                        <th className="p-[6px]">Nội dung</th>
                        <th className="p-[6px]">Chi tiết</th>
                        <th className="p-[6px]">Item</th>
                        <th className="p-[6px]">Ngày quay được item</th>
                        <th className="p-[6px]">Ngày xóa item</th>
                        <th className="p-[6px]">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#fff]">
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#5f4040]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                      <tr className="bg-[#e54f53]">
                        <td className="p-[6px]">1</td>
                        <td className="p-[6px]">Mở Local Spin</td>
                        <td className="p-[6px]">Vòng quay Áo Hoàng Gia</td>
                        <td className="p-[6px]">Bộ Honafg gia 30 ngày</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">15/11/2022</td>
                        <td className="p-[6px]">Xóa thành công</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center gap-[10px] my-[10px]">
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px]"
                  ></Link>
                  <Link href="#" className="item-paging active">
                    1
                  </Link>
                  <Link href="#" className="item-paging">
                    2
                  </Link>
                  <Link href="#" className="item-paging">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="flex bg-arr-paging bg-center bg-no-repeat w-[25px] h-[25px] transform rotate-180"
                  ></Link>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
        {/* main modal */}
      </div>
    </div>
  );
};

export default KhoDo;
