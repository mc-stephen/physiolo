import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Policy from "@/components/cookie/cookie";
import FloatingBanner from "@/components/floating-banner/floating-banner";

export const metadata: Metadata = {
  title: "Physiolo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body>
        <Header />
        {children}
        <FloatingBanner />
        <Policy />
        <Footer />
        <Script
          type="text/javascript"
          id="zsiqchat"
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho = $zoho || {};
              $zoho.salesiq = $zoho.salesiq || {
                widgetcode: "siq40378a20cfbe5fd1bf21fc322ec77fe7843105ab41e66c7459763a7dc92bc236",
                values: {},
                ready: function () {}
              };
              var d = document;
              var s = d.createElement("script");
              s.type = "text/javascript";
              s.id = "zsiqscript";
              s.defer = true;
              s.src = "https://salesiq.zohopublic.com/widget";
              var t = d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s, t);
            `,
          }}
        />
      </body>
    </html>
  );
}
