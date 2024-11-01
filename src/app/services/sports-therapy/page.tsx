"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";
import bodyImg from "/public/image/services/sports_therapy.jpg";

export default function SportTherapy() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "sportTherapy.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local]);
  return (
    <main className={Style.sportTherapy}>
      <BodyHeader
        pageTitle={"SPORTS THERAPY"}
        imageAlt={"SPORTS THERAPY"}
        pagePath={"Home / Services / SPORTS THERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={bodyImg} className={Style.imgSide} alt="SPORTS THERAPY" />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
