import Link from "next/link";
import Image from "next/image";
const DetailGame = () => {
  return (
    <div className="relative mx-auto max-w-[1920px]">
      <div className="h-[750px] xl:h-[850px]">
        <Image
          width={1920}
          height={850}
          src={"assets/images/banner-detail.jpg"}
          alt="Banner VTC"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DetailGame;
