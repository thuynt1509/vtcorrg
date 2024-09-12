"use client";
import Link from "next/link";
import Image from "next/image";
import ScrollToTopButton from "./ScrollToTopButton";
import { usePathname } from "next/navigation";
import FooterMain from "./FooterMain";
import FooterDetail from "./FooterDetail";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <FooterMain />}
      {pathname === "/chi-tiet" && <FooterDetail />}
    </>
  );
};

export default Footer;
