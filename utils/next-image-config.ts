const cloudinaryImageLoader = ({ src }: any) => {
  let res = "";
  if (
    !process.env.NEXT_PUBLIC_BASE_MEDIA ||
    process.env.NEXT_PUBLIC_BASE_MEDIA == undefined
  ) {
    res = `${src}`;
  } else if (src.includes("vtcgame.vn") || src.includes("vtc.vn")) {
    res = `${src}`;
  } else {
    res = `${process.env.NEXT_PUBLIC_BASE_MEDIA}${src}`;
  }

  return res;
};

export default cloudinaryImageLoader;
