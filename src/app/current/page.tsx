"use client";

import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";

export default function Current() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Current"}
        imageAlt={"Jobs Image"}
        pagePath={"Home / Current"}
        imageSource={profilePic}
      />
      <section>Current</section>
    </main>
  );
}
