"use client";

import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import appSlice from "./appSlice";
import Template from "@/components/common/Template/Template";
import LayoutFacebook from "@/components/common/Facebook/LayoutFacebook";
import LoadingBar from "react-top-loading-bar";

import { searchArticleSWR } from "@/services/swr/service-api/service-api";
import { logInfo } from "@/utils/log-helper";
import { useEffect, useState } from "react";
import {
  sendGTMEvent,
  YouTubeEmbed,
  GoogleMapsEmbed,
} from "@next/third-parties/google";

import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "@/components/section/Gallery";
import Gallery2 from "@/components/section/Gallery2";
import ProductList from "@/components/section/ProductList";
export default function Home() {
  const modal = useAppSelector((state: RootState) => state.app.modal);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const { finishLoad } = appSlice.actions;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const pageSize = 10;

  const { responseData: articleData, isLoading: articleDataLoading } =
    searchArticleSWR(searchKey, 1, page, pageSize);
  useEffect(() => {
    if (articleData) {
      setTotalPage(Math.floor(articleData.total / pageSize));
    }
  }, [articleData]);
  const handleSearch = (e: any) => {
    sendGTMEvent({ event: "buttonClicked", value: e.target.value });
    setTimeout(() => {
      setSearchKey(e.target.value);
    }, 500);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <main className="text-black lg:ml-[300px]">
      {modal ? modal : <></>}
      <LoadingBar
        color="#ff23f7"
        height={6}
        progress={loading}
        onLoaderFinished={() => finishLoad()}
      />
      <Gallery />
      <ProductList />
    </main>
  );
}
