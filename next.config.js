/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  output: "export",
  experimental:
    process.env.NEXT_PUBLIC_MODE == "web"
      ? {
          serverActions: true,
        }
      : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        hostname: "localhost",
      },
    ],
    loaderFile: "utils/next-image-config.ts",
  },
};

module.exports = nextConfig;
