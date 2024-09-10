import Image, { StaticImageData } from "next/image";
import {
  RenderSlideProps,
  isImageFitCover,
  useLightboxProps,
  useLightboxState,
  isImageSlide,
  Slide,
} from "yet-another-react-lightbox";

function isNextJsImage(slide: any): slide is StaticImageData {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

export default function NextJsImage({ slide, offset, rect }: any) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();
  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  //   if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;

  return (
    <div
      style={{ position: "relative", width, height }}
      className="max-w-[800px] lg:w-[800px] flex items-center justify-center"
    >
      {slide.type === "image" && (
        <Image
          fill
          alt=""
          src={slide}
          loading="eager"
          draggable={false}
          placeholder={slide.blurDataURL ? "blur" : undefined}
          style={{
            objectFit: cover ? "cover" : "contain",
            cursor: click ? "pointer" : undefined,
          }}
          sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
          onClick={
            offset === 0 ? () => click?.({ index: currentIndex }) : undefined
          }
        />
      )}
      {slide.type === "video" && (
        <div className="w-full max-w-[800px] h-full flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src={slide.src}
            title="YouTube video player"
            className="max-w-[800px] max-h-[500px]"
          ></iframe>
        </div>
      )}
    </div>
  );
}
