import moment from "moment";

export const logInfo = (name: string, input?: any, output?: any) => {
  if (
    typeof window !== "undefined" &&
    window.location.hostname.includes("localhost")
  ) {
    console.log(
      `${moment().format(
        "DD/MM/YYYY HH:mm"
      )} - [${name}] - Client || INFO || Input: ${JSON.stringify(
        input
      )} || Output: ${JSON.stringify(output)} \n`
    );
  } else {
    if (process.env.LOG_SERVER == "1") {
      console.log(
        `${moment().format(
          "DD/MM/YYYY HH:mm"
        )} - [${name}] - Server || INFO || Input: ${JSON.stringify(
          input
        )} || Output: ${JSON.stringify(output)} \n`
      );
    }
  }
};
export const logError = (name: string, input?: any, output?: any) => {
  if (
    typeof window !== "undefined" &&
    window.location.hostname.includes("localhost")
  ) {
    console.log(
      `${moment().format(
        "DD/MM/YYYY HH:mm"
      )} - [${name}] - Client || ERROR || Input: ${JSON.stringify(
        input
      )}|| Output: ${JSON.stringify(output)} \n`
    );
  } else {
    if (process.env.LOG_SERVER == "1") {
      console.log(
        `${moment().format(
          "DD/MM/YYYY HH:mm"
        )} - [${name}] - Server || INFO || Input: ${JSON.stringify(
          input
        )} || Output: ${JSON.stringify(output)} \n`
      );
    }
  }
};
export const renderUrlImage = (url: string) => {
  let res = `url(${process.env.NEXT_PUBLIC_BASE_MEDIA}${url})`;
  if (
    !process.env.NEXT_PUBLIC_BASE_MEDIA ||
    process.env.NEXT_PUBLIC_BASE_MEDIA == undefined
  ) {
    res = `url(${url})`;
  }
  return res;
};

export const renderImage = (url: string) => {
  let res = `${process.env.NEXT_PUBLIC_BASE_MEDIA}${url}`;
  if (
    !process.env.NEXT_PUBLIC_BASE_MEDIA ||
    process.env.NEXT_PUBLIC_BASE_MEDIA == undefined
  ) {
    res = `${url}`;
  }
  return res;
};
