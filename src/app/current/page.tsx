"use client";

import { useContext } from "react";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Current() {
  const { locale } = useContext(LocaleContext);
  return (
    <main>
      <BodyHeader
        pageTitle={locale.current_page_title}
        imageAlt={"Jobs Image"}
        pagePath={"Home / " + locale.current_page_title}
        imageSource={profilePic}
      />
      <section>{locale.current_page_title}</section>
    </main>
  );
}
