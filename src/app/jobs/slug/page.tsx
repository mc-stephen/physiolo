"use client";

import BodyHeader from "@/components/body-header/body-header";
import img from "/public/image/page-header.jpg";

export default function SingleJobView() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Jobs"}
        imageAlt={"Jobs Image"}
        pagePath={"Home / Jobs"}
        imageSource={img}
      />
      <section>
        Jobs
      </section>
    </main>
  );
}
