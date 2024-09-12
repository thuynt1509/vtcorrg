import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="py-[38px] px-[16px] lg:max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[20px] xl:gap-[30px] md:grid-cols-3 xl:grid-cols-4">
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product2.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product3.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product4.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product5.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product6.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product7.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="w-full flex flex-col gap-[16px] relative group overflow-hidden"
      >
        <span className="block w-full lg:h-[323px] overflow-hidden">
          <Image
            src={"assets/images/img-product8.png"}
            width={343}
            height={411}
            alt="Product"
            className="w-full transition-all lg:h-full lg:object-cover group-hover:scale-105"
          />
        </span>
        <div className="relative transition-all text-[#3C3C3C] font-semibold  pr-[48px] lg:absolute lg:bg-[#00000075] lg:w-full lg:h-full lg:p-[24px] lg:flex-col lg:justify-end lg:text-[#fff] lg:flex lg:opacity-0 lg:group-hover:opacity-100">
          <span className="block bg-arr-circle w-[48px] h-[48px] absolute right-0 top-0 lg:hidden"></span>
          <p className="transition duration-500 ease-in-out lg:translate-y-[200px] lg:group-hover:translate-y-[0px]">
            <span className="block uppercase text-[24px]">Sinh nhật Au 18</span>
            <span className="block text-[18px]">Big offline / Hà Nội</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
