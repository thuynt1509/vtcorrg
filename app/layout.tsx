import Header from "@/components/header/Header";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/redux/provider";
// import { requireAuth } from "@/services/server-side/authen";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "VTC ORG",
  description: "VTC ORG",
};

export default async function asyncRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let token = {
    tokenValue: "",
    tokenName: "",
  };
  // token = await requireAuth();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.className}`} id="body-tag">
        <Providers>
          <div className="w-full overflow-hidden  ">
            <Header token={token} />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
      {/* <Script id="js-jquery" async src={"/js/jquery-1.9.1.min.js"} />
      <Script
        id="header-login"
        async
        src="https://header.vtcgame.vn/headerJS/headjs.js?vs=13062023"
      />
      <Script
        id="body-login"
        async
        src="https://header.vtcgame.vn/headerJS/BodyCall.js?vs=20161227"
      /> */}

      {/* Sử dụng Google Analyst */}
      <Script id="google-analyst" async type="text/javascript">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-87CBSV8BCZ');
          `}
      </Script>
      {/* Sử dụng google tag manager */}
      <GoogleTagManager gtmId="GTM-XYZ" />
    </html>
  );
}
