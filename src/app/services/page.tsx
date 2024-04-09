"use client";

import BodyHeader from "@/components/body-header/body-header";
import img from "/public/image/page-header.jpg";

export default function Services() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Services"}
        imageAlt={"Services Image"}
        pagePath={"Home / Services"}
        imageSource={img}
      />
      <section>Services</section>
    </main>
  );
}
