/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  // assetPrefix: "./",
  // images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    domains: ['eu-central-1-shared-euc1-02.graphassets.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.doctolib.de",
        port: "",
        pathname: "/external_button/**",
      },
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
        port: "",
        pathname: "/clx7o0og00v3j07w57n6dcbo8/clx7vwuteuf6s07usxxvc4m4e",
      },
    ],
  },
};

export default nextConfig;
