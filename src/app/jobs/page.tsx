"use client";

import { useContext } from "react";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Jobs() {
  const { locale } = useContext(LocaleContext);
  return (
    <main>
      <BodyHeader
        pageTitle={locale.job_page_title}
        imageAlt={"Jobs Image"}
        pagePath={"Home / " + locale.job_page_title}
        imageSource={img}
      />
      <section>Jobs</section>
    </main>
  );
}
