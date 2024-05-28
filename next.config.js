/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  // assetPrefix: "./",
  // images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.doctolib.de",
        port: "",
        pathname: "/external_button/**",
      },
    ],
  },
};

export default nextConfig;
