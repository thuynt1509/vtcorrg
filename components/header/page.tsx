"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  accountGetBalance,
  getAccountInfo,
  getAccountLogin,
  getFullAccountInfo,
} from "@/services/client-side/account-info/account-info.api";

import JSCookie from "js-cookie";
import { useMyReducer } from "@/store/Provider";
import { logError, logInfo, renderImage } from "@/utils/log-helper";
import moment from "moment";
import { AccountFullInfoType } from "@/types/componentTypes";
import { StoreContext } from "@/store";
import SpinLoading from "../common/Loading/spin-loading";
import appSlice from "@/app/appSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch } from "@/redux/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
type TokenProps = {
  tokenName: string;
  tokenValue: string;
};
type HeaderProps = {
  token: TokenProps;
};
const Header = ({ token }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  let dropdownRef = useRef<any>();
  let menuRef = useRef<any>();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  // click outside dropdown language
  useEffect(() => {
    let handleClickOutside = (e: any) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      }
      setDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // // vị trí addClass header để ẩn
  useEffect(() => {
    var lastScrollTop = 0;
    const onScroll = () => {
      let check = false;
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        check = false;
      } else if (st < lastScrollTop) {
        check = true;
      } // else was horizontal scroll
      setTimeout(() => {
        lastScrollTop = st <= 0 ? 0 : st;
      }, 5);
      if (check) {
        const id = document.getElementById("body-tag");
        const headerTop = document.getElementById("body-tag");
        if (id) {
          setScroll(false);
        }
      } else if (window.scrollY > 200) {
        const id = document.getElementById("body-tag");
        if (id) {
          setScroll(true);
        }
      } else {
        const id = document.getElementById("body-tag");
        if (id) {
          setScroll(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // //end vị trí addClass header để ẩn
  const dispatch = useAppDispatch();
  const { updateModalState, loadingLoginAPI, setLogin, setLogout } =
    appSlice.actions;
  const { refresh, loadingLogin } = useAppSelector(
    (state: RootState) => state.app
  );
  const [hrefJS, setHrefJS] = useState(0);
  const [accountname, setAccountName] = useState<any>("");
  const [currentToken, setCurrentToken] = useState<any>("");
  const [crrBalance, setBalance] = useState<number>(0);
  logInfo("Header", {
    tokenName: token.tokenName,
    tokenValue: token.tokenValue,
  });
  const loginAction = () => {
    localStorage.clear();
    setHrefJS(1);
    // @ts-ignore
    return calPopLogin();
  };
  const logoutAction = () => {
    setAccountName("");
    setLogout();
    localStorage.clear();
    // @ts-ignore
    return Logout();
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      localStorage.setItem(token.tokenName, token.tokenValue);
      setCurrentToken(token.tokenValue);

      JSCookie.set("vtc-jwt", token.tokenValue, {
        expires: moment().add(23, "hour").toDate(),
      });
    }
  }, []);
  useEffect(() => {
    getAccountInfo()
      .then((res) => {
        if (res.data.code > 0) {
          setAccountName(res.data.data);
          logInfo("getAccountInfo", "", `AccountName: ${res.data.data}`);
          setLogin();
          loadingLoginAPI(false);
        }
      })
      .finally(() => {
        loadingLoginAPI(false);
      });
  }, [currentToken]);
  useEffect(() => {
    accountGetBalance().then((res) => {
      if (res && res.data.code > 0) {
        setBalance(res.data.data);
      }
    });
  }, [refresh]);

  useEffect(() => {
    setTimeout(() => {
      const targets = document.querySelectorAll(`[href="javascript:;"]`);
      for (let i = 0; i < targets.length; i++) {
        targets[i].removeAttribute("href");
      }
      setHrefJS(0);
    }, 300);
  }, [hrefJS]);

  // copy phần khai báo này

  return (
    <header
      className="w-full bg-[#191919] z-[999] absolute top-0 transition-all"
    >
      {/* Tạo header tại đây */}
      <div className="mx-auto px-[10px] h-[54px] flex items-center justify-between max-w-[1200px] lg:h-[95px] relative ">
        <div className="w-full flex items-center justify-between" ref={menuRef}>
          <h1 className="">
            <Link
              href="/"
              className="block w-[110px] lg:w-[220px]"
            >
              <Image
                src={renderImage("assets/images/logo-vtc.png")}
                alt="VTC ORG"
                width={220}
                height={95}
              />
            </Link>
          </h1>
          <div
            className="lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`block bg-contain bg-no-repeat w-[26px] h-[26px] cursor-pointer  ${
                open
                  ? "bg-icon-close-menu fixed right-[16px] z-[1000] top-[20px]"
                  : "bg-icon-menu"
              }`}
            ></span>
          </div>
          {/* dropdown-menu */}
          <div
            className={`fixed top-0 z-[999] right-[-100%] bg-[#252525] p-[60px_0_10px] w-[100%] h-[100vh] transition-all lg:relative lg:opacity-100 lg:visible lg:bg-transparent lg:p-0 lg:h-[72px] lg:flex lg:items-center ${
              open ? "!left-0 " : "left-[-100%] lg:left-0 lg:"
            } `}
          >
            <div className="max-h-[100%] overflow-y-auto lg:overflow-visible lg:flex lg:w-full lg:justify-between">
              <div className="lg:flex lg:items-center lg:gap-[10px]  2xl:gap-[20px] lg:flex-1">
                <Link
                  href="#"
                  className="block text-[#fff] hover:text-[#00AEEF] text-left py-[10px] px-[16px] border-solid border-b-[1px] border-[#535456]  text-[18px] lg:text-[24px] lg:border-b-0 2xl:mx-[10px] lg:bg-none"
                >
                  Game online
                </Link>

                <Link
                  href="#"
                  className="block text-[#fff] hover:text-[#00AEEF] text-left py-[10px] px-[16px] border-solid border-b-[1px] border-[#535456]  text-[18px] lg:text-[24px] lg:border-b-0 2xl:mx-[10px] lg:bg-none"
                >
                  Truyền hình & Truyền thông
                </Link>
                <Link
                  href="/danh-sach-game"
                  className="block text-[#fff] hover:text-[#00AEEF] text-left py-[10px] px-[16px] border-solid border-b-[1px] border-[#535456]  text-[18px] lg:text-[24px]  lg:border-b-0 2xl:mx-[10px] lg:bg-none"
                >
                  Viễn thông - CNTT - Chuyển đổi số
                </Link>
                <Link
                  href="/"
                  className="block text-[#fff] hover:text-[#00AEEF] text-left py-[10px] px-[16px] border-solid border-b-[1px] border-[#535456]  text-[18px] lg:text-[24px] lg:border-b-0 2xl:mx-[10px] lg:bg-none"
                >
                  Giáo dục - Đào tạo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      {/* {loadingLogin && <SpinLoading color="#59e6ff" width={25} height={25} />} */}
      {!loadingLogin && (accountname ? <>Đã đăng nhập</> : <></>)}
      <div
        id="header"
        style={{ zIndex: 999, height: "31px", display: "none" }}
      ></div>
      <div id="LogAndReg"></div>
    </header>
  );
};
export default Header;
