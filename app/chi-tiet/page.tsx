import Link from "next/link";
import Image from "next/image";
import BannerList from "@/components/section/BannerList";
import FeatureMobileDetail from "../../components/Feature/FeatureMobileDetail";
import FeaturePCDetail from "../../components/Feature/FeaturePCDetail";
import MediaDetail from "../../components/Feature/MediaDetail";
const DetailGame = () => {
  return (
    <div className="relative mx-auto max-w-[2560px]">
      <div className=" relative">
        <BannerList />
      </div>
      <div className="bg-[#fff] rounded-[20px_20px_0_0] mt-[-100px] xl:rounded-[80px_80px_0_0] relative">
        <div className="mx-auto max-w-[1200px] relative px-[16px] xl:px-0 py-[40px] xl:py-[80px]">
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] border-b-4 border-[#000] pb-[50px]">
            <div className="lg:flex-1">
              <h1 className="text-[#242424] text-[48px] uppercase xl:text-[72px]">
                TRUY KÍCH PC
              </h1>
              <p className="text-[30px] text-[#606060] lg:flex-1">
                VTC Game là tự hào một trong những đơn vị hàng đầu trong lĩnh
                vực phát triển và phát hành các tựa game trực tuyến tại Việt
                Nam. Với mong muốn mang đến trải nghiệm tuyệt vời nhất cho người
                chơi, VTC Game giới thiệu danh sách các tựa game mang đậm tính
                giải trí và đảm bảo chất lượng cao. Hãy tận hưởng và khám phá
                thế giới game đa sắc mà chúng tôi mang đến!
              </p>
              <div className="flex items-center justify-center gap-[35px] my-[15px] lg:justify-start">
                <Link
                  href="#"
                  className="bg-[#00AEEF] text-[#fff] text-[24px] w-[148px] h-[48px] rounded-[0_0_30px_0] flex justify-center items-center gap-[10px] after:block after:content-[''] after:bg-icon-download after:bg-contain after:bg-no-repeat after:w-[17px] after:h-[17px]"
                >
                  TẢI GAME
                </Link>
                <div className="bg-bg-qrcode bg-contain bg-no-repeat w-[120px] h-[131px] px-[20px] py-[25px]">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://cdnmedia.vtcgame.vn/gogotq/gogotq-home/assets/images/GoGoTamQuocBlack.png"
                    }
                    alt="QRCode"
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#EEEEEE] rounded-[20px] p-[16px] w-[330px] mx-auto lg:mx-0">
              <div className="p-[30px] border-b-[1px] border-[#D9D9D9] uppercase text-[24px]">
                <p className="text-[#242424] mb-3">Thể loại</p>
                <p className="text-[#9E9E9E]">Game Mobile</p>
              </div>
              <div className="p-[30px] border-b-[1px] border-[#D9D9D9] uppercase text-[24px]">
                <p className="text-[#242424] mb-3">Website</p>
                <p className="text-[#9E9E9E]">www.vtcgame.vn</p>
              </div>
              <div className="p-[30px] text-[24px] uppercase">
                <p className="text-[#242424] mb-3">Social Media</p>
                <div className="flex gap-[24px] mt-[28px]">
                  <Link
                    href="#"
                    className="block bg-icon-fb bg-contain bg-no-repeat w-[45px] h-[45px]"
                  ></Link>
                  <Link
                    href="#"
                    className="block bg-icon-youtube bg-contain bg-no-repeat w-[45px] h-[45px]"
                  ></Link>
                  <Link
                    href="#"
                    className="block bg-icon-tiktok bg-contain bg-no-repeat w-[45px] h-[45px]"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Những đặc điểm chính */}
          <div className="py-[45px] border-b-4 border-[#000]">
            <h2 className="uppercase text-[#606060] text-[60px] lg:text-[100px] leading-tight">
              Những đặc
              <br className="lg:hidden" />
              Điểm chính
            </h2>
            <FeatureMobileDetail />
            <FeaturePCDetail />
          </div>
          {/* Thư viện */}
          <div className="py-[45px]">
            <h2 className="uppercase text-[#606060] text-[60px] lg:text-[100px] leading-tight">
              Thư viện
            </h2>
            <MediaDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGame;
