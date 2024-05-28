/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  // assetPrefix: "./",
  // images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  i18n: {
    locales: ["en", "de"], // English and German
    defaultLocale: "en", // Default language
  },
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
